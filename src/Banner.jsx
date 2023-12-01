
import {Wrapper,Container,Text,Title,Desc,Buttons,DefaultButton,Image} from "./styled"
import dataset,{image} from "./data"

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
        <Image src={image.src} alt={image.alt} />
      </Container>
    </Wrapper>
  )
}

export default Banner;