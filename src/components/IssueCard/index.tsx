import { IssueCardContainer } from "./styles";

interface IssueCardProps {
  issues: {
    id: number;
    title: string;
    body: string;
    formattedDate: string;
  }[];
}

export function IssueCard({ issues }: IssueCardProps) {
  return (
    <IssueCardContainer>
      <div className="container">
        {issues.map((issue) => (
          <div className="card" key={issue.id}>
            <div className="header">
              <h2>{issue.title}</h2>
              <h3>{issue.formattedDate}</h3>
            </div>
            <p>{issue.body.slice(0, 150)}...</p>
          </div>
        ))}
      </div>
    </IssueCardContainer>
  );
}
