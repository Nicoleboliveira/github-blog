import styled from "styled-components";
export const IssueDetailsContainer = styled.div`
  .container {
    display: grid;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 9rem;
  }

  .card {
    background: ${(props) => props.theme["base-background"]};
    display: grid;
    padding: 2rem;
    border-radius: 10px;
    min-width: 54rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      all: unset;
      color: ${(props) => props.theme["blue"]};
      font-size: 0.75rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }

  h2 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }

  .information {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 0.75rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
    }
  }

  .content {
    display: flex;
    padding: 2.5rem 2rem;
  }
`;
