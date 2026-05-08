import { useState, useMemo } from "react";
import type { Patient } from "../types/patient";

export function usePatients(initialPatients: Patient[], itemsPerPage: number = 5) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Evita cálculos desnecessários a cada render
  const filteredPatients = useMemo(() => {
    return initialPatients.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, initialPatients]);

  // Paginação
  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
  
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPatients.slice(start, start + itemsPerPage);
  }, [filteredPatients, currentPage, itemsPerPage]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Volta para a página 1 ao pesquisar
  };

  return {
    searchTerm,
    handleSearch,
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
  };
}
