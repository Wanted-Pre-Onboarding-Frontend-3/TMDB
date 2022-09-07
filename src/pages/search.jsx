import searchAPI from 'api/searchAPI';
import { Heading1, Section, Text } from 'components/Search/common';
import React, { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';
import { useInView } from 'utils/useInView';

import CardItem from './Upcoming/components/CardItem';

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
      suspense: true,
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
                return <CardItem key={result.id} movie={result}></CardItem>;
              })}
            </React.Fragment>
          );
        })}
        <div ref={ref}></div>
      </ResultWrapper>
    </SectionWrapper>
  );
}

const SectionWrapper = styled(Section)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px;
  margin: 12px;
  border-radius: 8px;
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  & h1 {
    color: white;
  }
`;

const ResultWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  ${fonts.Body1}
  color: ${colors.gray6};
`;
