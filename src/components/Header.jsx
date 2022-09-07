import searchAPI from 'api/searchAPI';
import { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

const Header = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isShow, setIsShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!searchKeyword) setIsShow(false);
  }, [searchKeyword]);

  const { data: searchResult } = useQuery(
    ['search-movie', searchKeyword],
    () => searchAPI.searchAndGetMovies({ params: { query: searchKeyword } }),
    {
      enabled: !!searchKeyword,
    },
  );

  const handleKeyword = (e) => {
    setIsShow(true);
    setSearchKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShow(false);
    setSearchKeyword('');
    navigate(`/search?q=${searchKeyword} `);
  };

  return (
    <Container>
      <Navigation>
        <LogoWrapper>
          <Link to="/">
            <Logo>
              <span>TMDB</span>
            </Logo>
          </Link>
        </LogoWrapper>

        <Menu>
          <Link to="/now-playing">
            <MenuButton>Now Playing</MenuButton>
          </Link>

          <Link to="/upcoming">
            <MenuButton>Upcoming</MenuButton>
          </Link>

          <Link to="/top-rated">
            <MenuButton>Top-rated</MenuButton>
          </Link>
        </Menu>

        <SearchMenu>
          <SearchContainer onSubmit={handleSubmit}>
            <SearchWrapper>
              <BiSearch color="white" />
              <SearchInput
                placeholder="검색어를 입력해주세요."
                onChange={handleKeyword}
              />
            </SearchWrapper>
          </SearchContainer>

          <SearchResultWrapper isShow={isShow}>
            <SearchResult isShow>
              {searchResult?.map((item) => (
                <Link key={item.id} to={`/movie/${item.id}`}>
                  <SearchResultItem>{item.title}</SearchResultItem>
                </Link>
              ))}
            </SearchResult>
          </SearchResultWrapper>
        </SearchMenu>
      </Navigation>
    </Container>
  );
};

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 1rem;
  background-color: ${colors.black};
  border-bottom: 1px solid ${colors.main};
  text-align: center;
  z-index: 5;
  transition: background-color 200ms ease 0s;
  margin-bottom: 60px;
`;

const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.span`
  margin: 0 2em;
`;

const Logo = styled.h1`
  ${fonts.H1};
  padding: 0 0.4em;

  span {
    color: ${colors.main};
  }
`;

const Menu = styled.span`
  ${fonts.H2};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 70px;

  a {
    border-radius: 4px;
    padding: 0 1em;

    &:hover {
      background-color: ${colors.sub_gray};
    }
  }
`;

const MenuButton = styled.button`
  font-size: 15px;
  color: ${colors.white};
  cursor: pointer;
`;

const SearchMenu = styled.span`
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  transition: all 0.5s ease 0s;
`;

const SearchContainer = styled.form`
  position: relative;
  width: 100%;
`;

const SearchResultWrapper = styled.div`
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  width: 100%;
  max-height: 480px;
  position: absolute;
  top: 70px;
  left: 0;
  padding: 0.6em;
  background: ${colors.white};
  box-shadow: 0 2px 5px 0 ${colors.black};
  border-radius: 5px;
  overflow-y: scroll;
  z-index: 100;
`;

const SearchResult = styled.ul``;

const SearchResultItem = styled.li`
  width: 100%;
  height: 24px;
  padding: 1em 0;
  color: ${colors.sub_gray};
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background-color: ${colors.main_gray};
    color: ${colors.white};
  }
`;

const SearchWrapper = styled.label`
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  position: relative;
  svg {
    position: absolute;
    left: 8px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.3em 2em;
  background: ${colors.sub_gray};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.main_gray};
  caret-color: ${colors.main};
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 23px;
`;

export default Header;
