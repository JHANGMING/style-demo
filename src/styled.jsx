import styled ,{css} from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 72px 0;
  background-color: #D7DEF9;

  @media (max-width: 1023px) {
    padding: 48px 0;
  }
`;

export const Container = styled.div`
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

export const Text = styled.div`  
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1023px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  margin: 0 0 28px;
  line-height: 1.3;
  font-size: 48px;

  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export const Desc = styled.p`
  margin-bottom: 36px;
  line-height: 1.45;
  font-size: 24px;
  font-weight: normal;

  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 480px;
  gap: 12px;

  @media (max-width: 1023px) {
    align-items: center;
    flex-direction: column;
    width: 240px;
  }
`;

export const ButtonStyle=css`
  width: 100%;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 18px;
  cursor: pointer;
`;

const containStyle=css`
    background-color: #586AF2;
    border: none;
    color: #FFFFFF;
    `
const boderStyle= css`
    background-color: transparent;
    border: 2px solid #1F2E4E;
    `  

export const DefaultButton=styled.button`
  ${ButtonStyle}
  ${({theme})=>{
    if(theme==="isContain")return containStyle
    if(theme==="isBorder")return boderStyle
  }}
 

/* 
  ${({isContain})=>isContain && css`
    background-color: #586AF2;
    border: none;
    color: #FFFFFF;
  `}
  ${({isBorder})=>(isBorder && css`
    background-color: transparent;
    border: 2px solid #1F2E4E;
  `)} */

`;

// export const ContainedButton = styled.button`
//   ${ButtonStyle}
//   background-color: #586AF2;
//   border: none;
//   color: #FFFFFF;
// `;

// export const BorderButton = styled.button`
//   ${ButtonStyle}
//   background-color: transparent;
//   border: 2px solid #1F2E4E;
// `;

export const Image = styled.img`
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
