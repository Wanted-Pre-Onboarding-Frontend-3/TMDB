# 원티드 프리온보딩 2주차 과제

<br><br>

# 소개

원티드 프리온보딩 프론트엔드 기업협업과제

- 과제 목표 : 영화 트레일러 사이트 만들기

- 수행 기간 : 2022/09/06 ~ 2022/09/08

<br><br>

# 3팀 소개 및 역할

| 이름 | 역할 |

| ------ | ------------------------------------------------------------------- |

| 김리후 | 팀원 / home page, Gnb |

| 김지현 | 팀원 / upcoming page |

| 이경준 | 팀원 / 검색 페이지 |

| 이혜성 | **팀장** / 공통 (Loading, ScrollUp, API Response 데이터 캐쉬), S3 + github actions 정적 사이트 CD |

| 문선화 | 팀원 / 영화 상세 페이지 |

| 홍성준 | 팀원 / now playing page |

| 서수민 | 팀원 / top-rated page |

<br><br>

# 배포 링크 (혹은 각 페이지별 데모영상)

- 링크

<br><br>

# 목차 (목차 링크로 이동 가능하도록)

- 목차별 링크

- 목차별 링크

- 목차별 링크

<br><br>

# 기술 스택

- React

- JavaScript

- styled-components

- React-Query

<br><br>

# 실행방법

```bash

# with yarn

# install

$ yarn install



# run

$ yarn start



# set environment variables

1. [링크](https://www.themoviedb.org/)의 사이트에 회원가입 후 api key를 발급 받습니다.

2. package.json과 같은 디렉토리에 .env.local 파일을 생성합니다.

3. .env.local 파일 안에 아래와 같이 작성합니다.



REACT_APP_API_BASE_URL = 'https://api.themoviedb.org/3'

REACT_APP_IMAGE_URL = 'https://image.tmdb.org/t/p/original'

REACT_APP_API_KEY = '발급 받은 api_key'

```

<br><br>

# 프로젝트 구조

<details>

<summary>프로젝트 구조</summary>

<div  markdown="1">

프로젝트 구조

https://github.com/Wanted-Pre-Onboarding-Frontend-3/TMDB/issues/2

</div>

</details>

<br>

| 구분 | 설명 |

| ----------- | --------------------------------------------- |

| /api | api 호출 함수를 모아둔 폴더 |

| /page | 페이지 단위의 컴포넌트 관리 |

| /components | 여러 페이지에서 동시에 사용되는 컴포넌트 관리 |

| /router | 라우팅 처리를 담당 |

| /utils | 전역 상태, 전역 함수를 관리 |

| /styles | 전역 스타일을 관리 |

<br><br>

# 와이어프레임

- [🎨 Figma](https://www.figma.com/file/dBZW32pB7BZJbsbDm7ZyLZ/Wanted-FE-3%ED%8C%80-team-library?node-id=0:1)

# 라우팅 (기능별)

- / : 메인화면

- /now-playing : 현재 상영중인 영화 소개

- /upcoming : 개봉 예정 영화 소개

- /top-rated : 인기 영화 순위 소개

- /movie/:movie_id : 영화 상세 페이지

- /search/:searchKeyword : 검색 페이지

<br><br>

# 과제 요건 및 구현 방법

## 과제 요건

- 공통

  - Loading 상태 표기

  - Infinite scroll

  - 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동

  - API Response 데이터 캐쉬 (라이브러리 사용)

  - 캐싱에 대한 간단한 개념을 글로 작성해서 README에 포함 or 링크형태로 연결해주세요

- movies / 리스트 페이지

  - 한번에 가져올 데이터 최대 20

  - 제목, 포스터, 별점 표시

  - 포스터 없는 경우, 대체 이미지 사용

- movie / 상세 페이지

  - 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이

  - 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기

  - 그 외의 데이터 추가 활용 여부는 자유

- search

  - 제목, 포스터, 별점

  - 포스터 없는 경우, 대체 이미지 사용

## 0. 공통기능

- 구현한 점

- 개선해야 할 점

<br>

## 1. 메인페이지 (/)

- 구현한 점

- 개선해야 할 점

<br>

## 2. 상세페이지 (/movie/:movie_id)

- 구현한 점

- 개선해야 할 점

<br>

## 3. 리스트페이지-현재 상영작 (/now-playing)

- 구현한 점

- 개선해야 할 점

<br>

## 4. 리스트페이지-상영 예정작 (/upcoming)

- 구현한 점

- 개선해야 할 점

<br>

## 5. 리스트페이지-영화 순위 (/top-rated)

- 구현한 점

- 개선해야 할 점

<br>

## 6. 검색페이지 (/search/:searchKeyword)

- 구현한 점

- 개선해야 할 점

<br><br>

# 컨벤션 링크

[참고](https://instinctive-moustache-aba.notion.site/WPO-FE-6-1-Coding-Convention-6a0123a0196343ea88c8434a3c157812#d00f53fad5c545a4b1e2aba7f6c62f31)
