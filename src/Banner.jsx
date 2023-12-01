
import {Wrapper,Container,Text,Title,Desc,Buttons,DefaultButton,Image} from "./styled"
import dataset from "./data"

const Banner=({page})=>{
  const data=dataset[page]
  if(!data) return null;
  const {title,desc}=data
  return(
    <Wrapper>
      <Container>
        <Text>
          <Title>
            {title}
          </Title>
          <Desc>
            {desc}
          </Desc>
          <Buttons>
            {data.buttons.map((button)=>(
              <DefaultButton theme={button.theme} key={button.text}>
                {button.text}
              </DefaultButton>
            ))}
            {/* <DefaultButton theme="isContain">
              ContainedButton
            </DefaultButton>
            <DefaultButton theme="isBorder">
              BorderButton
            </DefaultButton> */}
          </Buttons>
        </Text>
        <Image src="https://drive.google.com/uc?export=view&id=1zY6sSfDXapavJ2goiO7q6L3mtr7GalFM" alt="Logo" />
      </Container>
    </Wrapper>
  )
}

export default Banner;