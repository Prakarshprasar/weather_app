import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    background-color: #f0f0f0;
  }

  input, button {
    padding: 5px 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 70px;
    min-height: 30px;
    outline:none;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: #0056b3;
  }

  .weather-container {
    margin-top: 20px;
  }

  .forecast-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }

  .skeleton-container {
    min-width: 270px;
  }

  .main-text {
    font-size:14px;
    font-weight: 600;
  }

  .ans-text {
    font-size:14px;
    font-weight: 400;
  }

  .forecast-item {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    min-width: 170px;
    background-color: rgba(59, 130, 246, 0.15);
    text-align: left
  }

  .loadingState {
    animation: blink-bg 1.0s infinite alternate;
  }

  @keyframes blink-bg {
    0% {
      background-color: #007bff;
    }
    100% {
      background-color:rgb(116, 165, 221); 
    }
    
  }
    @keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}

.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: shimmer 1.8s infinite linear;
  display: inline-block;
}

`;

export default GlobalStyle;
