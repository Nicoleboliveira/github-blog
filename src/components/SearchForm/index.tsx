import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div className="container">
        <div className="title">
          <h3>Publicações</h3>
          <p>6 publicações</p>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </div>
    </SearchFormContainer>
  );
}
