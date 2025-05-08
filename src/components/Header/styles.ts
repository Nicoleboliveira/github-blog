import styled from "styled-components";

export const HeaderContainer = styled.header`
  .background {
    position: relative;
    width: 100%;
    height: auto;
  }
  .background img {
    width: 100%;
    display: block;
  }

  .Logo {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;
