import { SearchFormContainer } from "./styles";

interface SearchFormProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  issuesCount: number;
}

export function SearchForm({
  searchTerm,
  onSearchChange,
  issuesCount,
}: SearchFormProps) {
  return (
    <SearchFormContainer>
      <div className="container">
        <div className="title">
          <h3>Publicações</h3>
          <p>{issuesCount} publicações</p>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </SearchFormContainer>
  );
}
