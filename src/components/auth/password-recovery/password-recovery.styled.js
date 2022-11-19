import styled from "styled-components";

export const Container = styled.div`
  background-color: #091540;
  width: 100vw;
  height: 100vh;
  padding: 24px;

  @media (min-width: 481px) {
    background-color: white;
    padding: 210px;
  }

  @media (min-width: 769px) {
    background-color: #091540;
    padding: 0 204px;
    padding-top: 160px;
  }
`;

export const BodyWrapper = styled.main`
  background-color: white;
  width: 100%;
  min-width: 250px;

  margin: 0 auto;

  @media (min-width: 481px) {
  }
`;

export const HeaderWrapper = styled.header`
  color: white;
  background-color: #091540;
  padding-bottom: 32px;

  h1 {
    font-size: 20px;
    color: white;
    text-align: center;
  }

  @media (min-width: 481px) {
    font-size: 40px;
    padding-bottom: 64px;
  }
`;

export const MainWrapper = styled.div`
  background-color: white;
  padding-left: 34px;
  padding-right: 34px;
  text-align: center;

  h4 {
    color: #121212;
    padding-top: 56px;
  }

  p {
    color: #121212;
    padding-top: 16px;
    margin-bottom: 3.2rem;
  }

  @media (min-width: 481px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 769px) {
    padding-left: 330px;
    padding-right: 330px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  text-align: start;

  input {
    margin-bottom: 24px;
    margin-bottom: 4.8rem;
  }

  @media (min-width: 481px) {
  }
`;

export const AnchorWrapper = styled.a`
  background-color: #091540;
  padding: 8.5px 85px;
  border-radius: 6px;
  margin-bottom: 96px;
  color: white;
  text-align: center;

  // div {
  //   width: 100%;
  // }

  @media (min-width: 481px) {
  }
`;

export const BottomWrapper = styled.small`
  color: #121212;
  display: flex;
  justify-content: center;
  margin-bottom: 13px;
  font-size: 1.4rem;
  text-align: center;
  @media (min-width: 481px) {
  }
`;