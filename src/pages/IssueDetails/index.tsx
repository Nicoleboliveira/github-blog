import { IssueDetailsContainer } from "./styles";

export function IssueDetails() {
  return (
    <IssueDetailsContainer>
      <div className="container">
        <div className="card">
          <div className="buttons">
            <button>
              <i className="fa-solid fa-chevron-left icon-back"></i>
              VOLTAR
            </button>

            <button>
              VER NO GITHUB
              <i className="fa-solid fa-arrow-up-right-from-square icon-see"></i>
            </button>
          </div>
          <h2>JavaScript data types and data structures</h2>
          <div>
            <span>
              <i className="fa-brands fa-github icon-git"></i>
              cameronwll
            </span>

            <span>
              <i className="fa-solid fa-calendar-day icon-calendar"></i>
              Há 1 dia
            </span>

            <span>
              <i className="fa-solid fa-comment icon-comment"></i>5 comentários
            </span>
          </div>
        </div>
      </div>
    </IssueDetailsContainer>
  );
}
