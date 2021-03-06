import React from 'react';
import styled from 'styled-components';

function Loader() {
  return (
    <Wrapper>
      <div className="loader"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 25rem auto;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
  }
  .loader {
    border: 10px solid lightgrey;
    border-top: 10px solid black;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 768px) {
    margin: 10rem auto;

    img {
      width: 70px;
      height: 70px;
    }
  }
`;

export default Loader;
