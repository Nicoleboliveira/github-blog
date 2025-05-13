import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  .card {
    background: ${(props) => props.theme["base-profile"]};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem 2rem 2.5rem;
    width: auto;
    height: auto;
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    margin-top: 8.75rem;
    gap: 2rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    max-width: 148px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  .container {
    display: grid;
    gap: 0.5rem;

    .container-1 {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme["base-title"]};
      }

      a {
        all: unset;
      }

      button {
        all: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.75rem;
        color: ${(props) => props.theme["blue"]};
        padding: 3.5px;
        cursor: pointer;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s ease-in-out;
      }
      button:hover {
        border-bottom: 1px solid ${(props) => props.theme["blue"]};
      }
    }

    .container-3 {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      margin-top: 1rem;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        all: unset;
        color: ${(props) => props.theme["base-subtitle"]};

        i {
          color: ${(props) => props.theme["base-label"]};
          margin-right: 10px;
        }
      }
    }
  }
`;
