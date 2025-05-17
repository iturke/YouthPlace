import React from 'react';
import styles from './Header.module.css';
import Button from './../Button/Button';
import logo from './../../assets/logo.svg';
import { useNavigate } from "react-router-dom"; 

function Header() {
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate("/login");
    window.scroll({
      top: 0,
    });
  };

  const handleSearchClick = () => {
    navigate("/search");
    window.scroll({
      top: 0,
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logoImage} src={logo} alt="YouthPlace logo"/>
        <div className={styles.logoText}>YouthPlace</div>
      </div>
      <div className={styles.butList}>
        <Button onClick={handleSearchClick} text="Пошук"/>
        <nav>
          <ul className={styles.navList}>
            <li><a className={styles.navLink} href="#">About</a></li>
          </ul>
        </nav>
        <Button onClick={handleLogInClick} text="Вхід"/>
      </div>
    </header>
  );
}

export default Header;
