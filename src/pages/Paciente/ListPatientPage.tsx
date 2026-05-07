import { useNavigate } from "react-router-dom";

export default function ListPatient() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Pacientes</h1>

      <button onClick={() => navigate("/pacientes/create")}>
        Criar Paciente
      </button>
    </>
  );
}