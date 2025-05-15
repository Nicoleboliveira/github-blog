import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { githubAPI } from "../../services/github";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";
import { IssueDetailsContainer } from "./styles";

interface Issue {
  title: string;
  user: { login: string };
  created_at: string;
  comments: number;
  html_url: string;
  body: string;
}

export function IssueDetails() {
  const { id } = useParams<{ id: string }>();
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    async function fetchIssue() {
      const response = await githubAPI.get(
        `/repos/Nicoleboliveira/github-blog/issues/${id}`
      );
      setIssue(response.data);
    }

    fetchIssue();
  }, [id]);

  if (!issue) return <p>Carregando...</p>;

  const formattedDate = formatDistanceToNow(new Date(issue.created_at), {
    addSuffix: true,
    locale: ptBR,
  });
  return (
    <IssueDetailsContainer>
      <div className="container">
        <div className="card">
          <div className="buttons">
            <button onClick={() => history.back()}>
              <i className="fa-solid fa-chevron-left icon-back"></i>
              VOLTAR
            </button>

            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
              VER NO GITHUB
              <i className="fa-solid fa-arrow-up-right-from-square icon-see"></i>
            </a>
          </div>
          <h2>{issue.title}</h2>
          <div className="information">
            <span>
              <i className="fa-brands fa-github icon-git"></i>
              {issue.user.login}
            </span>

            <span>
              <i className="fa-solid fa-calendar-day icon-calendar"></i>
              {formattedDate}
            </span>

            <span>
              <i className="fa-solid fa-comment icon-comment"></i>
              {issue.comments} comentários
            </span>
          </div>
        </div>

        <div className="content">
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </div>
      </div>
    </IssueDetailsContainer>
  );
}
