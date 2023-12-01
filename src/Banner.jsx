import styled ,{css}from "styled-components";

//background
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 72px 0;
  background-color: #D7DEF9;

  @media (max-width: 1023px) {
    padding: 48px 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1080px;
  gap: 60px;

  @media (max-width: 1279px) {
    width: 944px;
    gap: 24px;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    width: 688px;
  }

  @media (max-width: 767px) {
    width: 288px;
  }
`;

const Text = styled.div`  
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1023px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  margin: 0 0 28px;
  line-height: 1.3;
  font-size: 48px;

  @media (max-width: 1023px) {
    text-align: center;
  }
`;

const Desc = styled.p`
  margin-bottom: 36px;
  line-height: 1.45;
  font-size: 24px;
  font-weight: normal;

  @media (max-width: 1023px) {
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 480px;
  gap: 12px;

  @media (max-width: 1023px) {
    align-items: center;
    flex-direction: column;
    width: 240px;
  }
`;

const ButtonStyle=css`
  width: 100%;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 18px;
  cursor: pointer;
`;

const ContainedButton = styled.button`
  ${ButtonStyle}
  background-color: #586AF2;
  border: none;
  color: #FFFFFF;
`;

const BorderButton = styled.button`
  ${ButtonStyle}
  background-color: transparent;
  border: 2px solid #1F2E4E;
`;

const Image = styled.img`
  display: block;
  width: 480px;
  height: auto;

  @media (max-width: 1279px) {
    width: 440px;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const Banner=()=>{
  return(
    <Wrapper>
      <Container>
        <Text>
          <Title>
            Title Title
          </Title>
          <Desc>
            Desc Desc Desc Desc Desc Desc
            Desc Desc Desc Desc Desc Desc
          </Desc>
          <Buttons>
            <ContainedButton>
              ContainedButton
            </ContainedButton>
            <BorderButton>
              BorderButton
            </BorderButton>
          </Buttons>
        </Text>
        <Image src="https://drive.google.com/uc?export=view&id=1zY6sSfDXapavJ2goiO7q6L3mtr7GalFM" alt="Logo" />
      </Container>
    </Wrapper>
  )
}

export default Banner;