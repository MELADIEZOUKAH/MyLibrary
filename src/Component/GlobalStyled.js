import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.4s linear;
  }
  #head, .headercollage{
    background-image: url(${({theme})=> theme.bg_img})
  }
  .header_name,.button{
    color:${({theme})=> theme.color_name};
    text-shadow:${({theme})=> theme.shadow}
  }
  .button{
    border-color:${({theme})=> theme.color_name}
  }
  .info{
    color:${({theme})=> theme.color_name};
    text-shadow:${({theme})=> theme.shadow}
  }
  .div_outside{
    background: ${({ theme }) => theme.bg_book};

  }
  
  `
