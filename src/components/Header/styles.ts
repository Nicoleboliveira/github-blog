import styled from "styled-components";

export const HeaderContainer = styled.header`
  .background {
    position: relative;
    width: 100%;
    height: auto;
  }
  .photo {
    width: 100%;
    height: 18.5rem;
    object-fit: cover;
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
