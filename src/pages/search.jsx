import searchAPI from 'api/searchAPI';
import { Flex, Heading1, Image, Section, Text } from 'components/Search/common';
import React, { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useInView } from 'utils/useInView';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { ref, inView } = useInView();

  const { data, fetchNextPage } = useInfiniteQuery(
    ['search'],
    async ({ pageParam = 1 }) =>
      await searchAPI.searchAndGetMovies({
        params: { query, page: pageParam },
      }),
    {
      enabled: !!query,
      getNextPageParam: (lastPage) => lastPage.page + 1,
    },
  );

  const handleImageError = (e) => {
    e.target.src = require('assets/images/default_poster.png');
  };

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <SectionWrapper>
      <Heading1 mb={24} fontSize={24} textAlign="left">
        Displaying {data?.pages?.[0]?.total_results} Result for
        <Text fontSize={26} font-weight={700}>
          "{query}"
        </Text>
      </Heading1>
      <ResultWrapper>
        {data?.pages?.map((page) => {
          return (
            <React.Fragment key={page.nextId}>
              {page?.results?.map((result) => {
                return (
                  <ResultRow gap={16} key={result.id}>
                    <PosterImageWrapper
                      src={`${process.env.REACT_APP_IMAGE_URL}/w400${result.poster_path}`}
                      onError={handleImageError}
                    ></PosterImageWrapper>
                    <TitleWrapper>
                      {result.title} (
                      {new Date(result.release_date).getFullYear()})
                    </TitleWrapper>
                    <Text>{result.vote_average}</Text>
                  </ResultRow>
                );
              })}
            </React.Fragment>
          );
        })}
        <div ref={ref}></div>
      </ResultWrapper>
    </SectionWrapper>
  );
}

const PosterImageWrapper = styled(Image)`
  width: 48px;
  object-fit: cover;
  border-radius: 8px;
  aspect-ratio: 9 / 16;
`;

const SectionWrapper = styled(Section)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid grey;
  margin: 12px;
  border-radius: 8px;
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleWrapper = styled(Text)`
  flex: 1;
  font-size: 20;
  font-weight: bold;
`;

const ResultWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const ResultRow = styled(Flex)`
  width: 100%;
  align-items: center;
  padding: 8px 24px;
`;
