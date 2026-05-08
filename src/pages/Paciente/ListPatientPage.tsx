import { useNavigate } from "react-router-dom";
import { FiEdit, FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { usePatients } from "../../hooks/usePatient"; 
import Input from "../../components/Input/input";
import styles from "../../styles/listPatient.module.css";
import type { Patient } from "../../types/patient";

const MOCK_PATIENTS: Patient[] = [
  { id: "1", name: "Sabrina Silva", tasksCompleted: "33/36", averageScore: 39, photoUrl: "https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg" },
  { id: "2", name: "Carlos Oliveira", tasksCompleted: "28/36", averageScore: 31, photoUrl: "https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg" },
  { id: "3", name: "Mariana Santos", tasksCompleted: "30/36", averageScore: 34, photoUrl: "https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg" },
  { id: "4", name: "Mariana Santos", tasksCompleted: "30/36", averageScore: 34, photoUrl: "https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg" },
  { id: "5", name: "Mariana Santos", tasksCompleted: "30/36", averageScore: 34, photoUrl: "https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg" },
];

export default function ListPatient() {
  const navigate = useNavigate();
  
  const { 
    searchTerm, handleSearch, 
    currentPage, setCurrentPage, 
    totalPages, currentItems 
  } = usePatients(MOCK_PATIENTS, 5); 

  return (
    <div className={styles.container}>
      <header className={styles.topHeader}>
        <h1>Pacientes</h1>
        <button className={styles.addBtn} onClick={() => navigate("/pacientes/create")}>
          Adicionar paciente
        </button>
      </header>

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div className={styles.titleArea}>
            <h2>Todos pacientes</h2>
            <p>Todos membros ativos</p>
          </div>
          
          <div className={styles.filterArea}>
            <div className={styles.searchWrapper}>
              <Input 
                icon={<FiSearch />} 
                placeholder="Procurar..." 
                value={searchTerm} 
                onChange={(e) => handleSearch(e.target.value)} 
                name="search" 
              />
            </div>
            <select className={styles.selectFilter}>
              <option>Filtrar por: Progresso</option>
            </select>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome do paciente</th>
              <th>Tarefas completas</th>
              <th>Média de acertos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((patient) => (
              <tr key={patient.id}>
                <td className={styles.patientCell}>
                  <img src={patient.photoUrl} alt={patient.name} />
                  <span>{patient.name}</span>
                </td>
                <td>{patient.tasksCompleted}</td>
                <td>
                  <div className={styles.progressContainer}>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: `${patient.averageScore}%` }} />
                    </div>
                    <span>{patient.averageScore}%</span>
                  </div>
                </td>
                <td className={styles.actions}>
                  <button className={styles.resultBtn} onClick={() => navigate(`/pacientes/details/${patient.id}`)}>Resultados</button>
                  <button className={styles.editBtn} onClick={() => navigate(`/pacientes/create/${patient.id}`)}><FiEdit /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginação compacta */}
        <footer className={styles.pagination}>
          <button onClick={() => setCurrentPage(c => Math.max(c - 1, 1))} disabled={currentPage === 1}>
            <FiChevronLeft />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => (
            <button 
              key={i + 1} 
              className={currentPage === i + 1 ? styles.activePage : styles.pageNumber}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button onClick={() => setCurrentPage(c => Math.min(c + 1, totalPages))} disabled={currentPage === totalPages || totalPages === 0}>
            <FiChevronRight />
          </button>
        </footer>
      </div>
    </div>
  );
}
