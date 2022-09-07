import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import styled from 'styled-components';
import { colors } from 'styles/colors';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <TermAndPolicyItem>
            TMBD 서비스 이용약관 | 개인정보 처리 방침 | 고객센터 | 회사정보
          </TermAndPolicyItem>
        </Top>

        <Bottom>
          <LeftSection>
            <TermAndPolicyItem>
              주식회사 TMBD | 대표 이혜성 | 서울특별시 원티드구 프리온보딩로 3
            </TermAndPolicyItem>
            <TermAndPolicyItem>
              사업자등록번호 111-22-33333 | 통신판매업 신고번호 제
              2022-서울서초-1111호
            </TermAndPolicyItem>
            <TermAndPolicyItem>
              Copyright 2022 by TMBD, Inc, All rights reserved.
            </TermAndPolicyItem>
          </LeftSection>

          <RightSection>
            <BsFacebook color="white" size="36" />
            <RiInstagramFill color="white" size="36" />
          </RightSection>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.section`
  padding: 2em 1em;
  width: 100%;
  max-width: 1280px;
`;

const Top = styled.div`
  margin-bottom: 1em;
`;

const TermAndPolicyItem = styled.li`
  color: ${colors.main_gray};
  font-size: 13px;
  font-weight: bold;
  line-height: 22px;
  vertical-align: top;
  cursor: pointer;
`;

const Bottom = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    color: ${colors.sub_gray};
  }

  svg {
    &:first-child {
      margin-right: 1em;
    }
  }
`;

const RightSection = styled.section``;
const LeftSection = styled.section``;

export default Footer;
