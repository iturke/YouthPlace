import React from 'react';
import styles from './Header.module.css';
import Button from '../Button';
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

  const handleAboutClick = () => {
    navigate("/about");
    window.scroll({
      top: 0,
    });
  }

  return (
    <div className={styles.styledheader}>
      <div className={styles.logoContainer}>
        <img className={styles.logoImage} src={logo} alt="YouthPlace logo"/>
        <div className={styles.logoText}>YouthPlace</div>
      </div>
      <div className={styles.butList}>
        <Button onClick={handleAboutClick} text="Про нас"/>
        <Button onClick={handleSearchClick} text="Пошук"/>
        <Button onClick={handleLogInClick} text="Вхід"/>
      </div>
    </div>
  );
}

export default Header;
