import styled from "styled-components";

export const SearchFormContainer = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 14.8rem 20.57rem 0;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-size: 1.125rem;
        color: ${(props) => props.theme["base-subtitle"]};
      }

      p {
        font-size: 0.75rem;
        color: ${(props) => props.theme["base-span"]};
      }
    }

    input {
      all: unset;
      background: ${(props) => props.theme["base-input"]};
      padding: 0.75rem 1rem;
      border-radius: 6px;
      border: 1px solid ${(props) => props.theme["base-border"]};
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
