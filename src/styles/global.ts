import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  
  :root{
    --background: #F0F0F5;
    --dark:#000;
    --white:#FFF;
    --title:#3D3D4D;
    
    --smal:12px;
    --regular:14px;
    --medium:16px;
    --big:18px;
    
  }

    *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    
    body{
      background:var(--background);
      -webkit-font-smoothing: antialiased;
    }
    
    body, input , button {
      font: var(--medium) sans-serif;
    }
    
    #root {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
    }
`
