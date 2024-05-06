import { Link, NavLink, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { RiOmega } from "react-icons/ri";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  const changeHeader = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <header className={scroll ? "header header-scroll" : "header"}>
      <div
        className={
          scroll
            ? "header__container header__container-scroll"
            : "header__container"
        }
      >
        <Link className="header__instagram-item" to={"/"}>
          <FaInstagram className="header__instagram-item" />
        </Link>
        <div className="header__links">
          <NavLink
            to={"/"}
            className={
              pathname === "/" ? "header__active-link" : "header__links-nav"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to={"/masters"}
            className={
              pathname === "/masters"
                ? "header__active-link"
                : "header__links-nav"
            }
          >
            Мастера
          </NavLink>
          <NavLink
            to={"/cosmetics"}
            className={
              pathname === "/cosmetics"
                ? "header__active-link"
                : "header__links-nav"
            }
          >
            Косметика
          </NavLink>
        </div>
        <RiOmega className="header__logo" />
        <div className="header__links">
          <NavLink
            to={"/sales"}
            className={
              pathname === "/sales"
                ? "header__active-link"
                : "header__links-nav"
            }
          >
            Акции
          </NavLink>
          <NavLink
            to={"/"}
            className={
              pathname === "/reviews"
                ? "header__active-link"
                : "header__links-nav"
            }
          >
            Отзывы
          </NavLink>
          <NavLink
            to={"/contacts"}
            className={
              pathname === "/contacts"
                ? "header__active-link"
                : "header__links-nav"
            }
          >
            Контакты
          </NavLink>
        </div>
        <div className="header__menu">
          <hr className="header__menu-1" />
          <hr />
          <hr className="header__menu-1" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
