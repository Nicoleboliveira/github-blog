import { IssueCard } from "../../components/IssueCard";
import { ProfileCard } from "../../components/ProfileCard";
import { SearchForm } from "../../components/SearchForm";
import { HomeContainer } from "./styles";
import { useGitHub } from "../../hook/useGitHub";

export function Home() {
  const { issues, onSearchChange, searchTerm } = useGitHub();
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchForm
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        issuesCount={issues.length}
      />
      <IssueCard issues={issues} />
    </HomeContainer>
  );
}
