import { FiHome, FiUsers, FiUserCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import SidebarItem from "./sideBarItem";
import styles from "../../styles/sideBar.module.css";

export default function Sidebar() {
    const navigate = useNavigate();
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Menu</h2>

      <nav className={styles.nav}>
        <SidebarItem icon={<FiHome />} label="Dashboard" onClick={() => navigate("/dashboard")}/>
        <SidebarItem icon={<FiUsers />} label="Pacientes" onClick={() => navigate("/pacientes")}/>
        <SidebarItem icon={<FiUserCheck />} label="Terapeutas" onClick={() => navigate("/terapeutas")}/>
      </nav>
      <button className={styles.logout} onClick={() => navigate("/")}>
        Sair
      </button>
    </aside>
  );
}