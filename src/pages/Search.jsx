import axios from 'axios';
import { Flex, Heading1, Image, Section, Text } from 'components/Search/Common';
import React, { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const http = {
  get: async (url_, params_) => {
    const url = generateUrl(url_, params_);
    return axios.get(url).catch((reason) => {
      console.warn(reason, url, params_);
    });
  },
};

const API_KEY = 'e62c2a4b5119e6c093e36405d98e67e4';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w400';

const generateUrl = (url_, params_) => {
  const url = new URL(url_);
  const param = new URLSearchParams(params_);

  return `${url}?${param}`;
};

const api = {
  search: async (query, pageParam) => {
    return await http.get(`${BASE_URL}/search/movie`, {
      query,
      language: 'ko-KR',
      page: pageParam,
      api_key: API_KEY,
    });
  },
  image: (path) => {
    return `${IMAGE_URL}${path}`;
  },
};

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { ref, inView } = useInView();

  const { data, fetchNextPage } = useInfiniteQuery(
    ['search'],
    async ({ pageParam = 1 }) => {
      const res = await api.search(query, pageParam);
      return res.data;
    },
    {
      enabled: !!query,
      getNextPageParam: (lastPage) => lastPage.page + 1,
    },
  );

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
                      src={api.image(result.poster_path)}
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

const useInView = () => {
  const [inView, setInView] = useState();
  const ref = useRef();

  useEffect(() => {
    if (ref.current == null) return;
    const intersectino_observer_callback = ([entry], observer) => {
      setInView(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(intersectino_observer_callback, {
      threshold: [0, 1],
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, inView };
};

const PosterImageWrapper = styled(Image)`
  width: 48px;
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
`;
