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
          <div className="information">
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

        <div className="content">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </div>
      </div>
    </IssueDetailsContainer>
  );
}
