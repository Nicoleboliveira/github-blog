import styled from "styled-components";

export const IssueCardContainer = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 3rem 20.57rem 9rem;
  }

  .card {
    display: grid;
    gap: 1.25rem;
    background: ${(props) => props.theme["base-post"]};
    padding: 2rem;
    border-radius: 10px;
    text-decoration: none;
    color: inherit;

    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      h2 {
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-title"]};
        flex: 1;
      }
      h3 {
        font-size: 0.7rem;
        color: ${(props) => props.theme["base-span"]};
        white-space: nowrap;
      }
    }
  }
`;
