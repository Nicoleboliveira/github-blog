import { useEffect, useState } from "react";
import { githubAPI } from "../services/github";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface Issue {
  id: number;
  number: number;
  title: string;
  created_at: string;
  body: string;
}

export function useGitHub() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const username = "Nicoleboliveira";
  const repo = "github-blog";

  // Buscar issues com ou sem termo
  async function fetchIssues(query = "") {
    const q = query
      ? `${query} repo:${username}/${repo}`
      : `repo:${username}/${repo}`;

    const response = await githubAPI.get("/search/issues", {
      params: { q },
    });

    setIssues(response.data.items);
  }

  // Atualiza termo de busca (controla input)
  function handleSearchChange(value: string) {
    setSearchTerm(value);
  }

  // Chama fetchIssues quando o termo muda, com debounce
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchIssues(searchTerm);
    }, 300); // 300ms de atraso para evitar chamadas repetidas

    return () => clearTimeout(delay);
  }, [searchTerm]);

  // Busca inicial
  useEffect(() => {
    fetchIssues();
  }, []);

  // Adiciona datas formatadas
  const issuesWithFormattedDates = issues.map((issue) => ({
    ...issue,
    formattedDate: formatDistanceToNow(new Date(issue.created_at), {
      addSuffix: true,
      locale: ptBR,
    }),
  }));

  return {
    issues: issuesWithFormattedDates,
    searchTerm,
    onSearchChange: handleSearchChange,
  };
}
