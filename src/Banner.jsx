import styled ,{css} from "styled-components";
import {Wrapper,Container,Text,Title,Desc,Buttons,DefaultButton,Image} from "./styled"
//background

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
            <DefaultButton isContain>
              ContainedButton
            </DefaultButton>
            <DefaultButton isBorder>
              BorderButton
            </DefaultButton>
          </Buttons>
        </Text>
        <Image src="https://drive.google.com/uc?export=view&id=1zY6sSfDXapavJ2goiO7q6L3mtr7GalFM" alt="Logo" />
      </Container>
    </Wrapper>
  )
}

export default Banner;