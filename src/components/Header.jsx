import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

const Header = () => {

  // TODO: 메뉴 링크 경로 확인, 검색기능 구현

  const [searchKeyword, setSearchKeyword] = useState('');
  const pathName = window.location.pathname;

  const handleKeyword = (e) => {
    setSearchKeyword(e.target.value);
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
          <Link to="/now_playing">
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
          <SearchContainer>
            <SearchLabel>
              <BiSearch color="white" />
              <SearchInput
                placeholder="검색어를 입력해주세요."
                onChange={handleKeyword}
              />
            </SearchLabel>
          </SearchContainer>

          <SearchResultWrapper>
            <SearchResultList>{/* 검색결과 */}</SearchResultList>
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
  width: 100%;
  max-height: 480px;
  position: absolute;
  top: 70px;
  left: 0;
  background: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  z-index: 100;
`;

const SearchResultList = styled.ul``;

const SearchResultListItem = styled.li`
  width: 100%;
  height: 24px;
  padding: 4px 6px;
  color: ${colors.sub_gray};
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    background-color: ${colors.white};
  }
`;

const SearchLabel = styled.label`
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
