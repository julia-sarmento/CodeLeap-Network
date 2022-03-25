import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --white: #FFFFFF;
    --gray-500: #DDDDDD; 
    --gray-600: #CCCCCC; 
    --gray-700: #999999;
    --gray-800: #777777;
    --black: #000000;
  }
 
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
   
  body {
    background: var(--gray-500);
    color: var(--black);
  }

  body, input, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .react-modal-overlay {
    background: rgba(119, 119, 119, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    background: var(--white);
    width: 100%;
    max-width: 40rem;
  }
`;