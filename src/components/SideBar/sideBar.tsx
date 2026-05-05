import { FiHome, FiUsers, FiUserCheck } from "react-icons/fi";
import SidebarItem from "./sideBarItem";
import styles from "../../styles/sideBar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Menu</h2>

      <nav className={styles.nav}>
        <SidebarItem icon={<FiHome />} label="Dashboard" active />
        <SidebarItem icon={<FiUsers />} label="Pacientes" />
        <SidebarItem icon={<FiUserCheck />} label="Terapeutas" />
      </nav>

      <button className={styles.logout}>
        Sair
      </button>
    </aside>
  );
}