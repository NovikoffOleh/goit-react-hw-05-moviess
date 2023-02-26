import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';
const MainNavigation = () => {
  const setActive = ({ isActive }) =>
    isActive ? styles.activeLink : styles.link;
  return (
    <div>
<h1 style={{ textAlign: 'center', color: '#000000', margin: '60px 0' }}>Кіно
        <span style={{ textAlign: 'center', color: '#f70202ea', margin: '60px 0' }}>Пошук</span></h1>
    
    
    <nav className={styles.headerNavigation}>
      
      <div className={styles.btn}>
        <NavLink to="/" className={setActive}>
          <span>До дому</span>
        </NavLink>
      </div>
      <div className={styles.btn}>
        <NavLink to="/movies" className={setActive}>
          <span>Ще фільми</span>
        </NavLink>
      </div>
    </nav>
    </div>
  );
};
export default MainNavigation;
