import { RiOmega } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer>
        <RiOmega style={{ width: "60px", height: "60px", marginTop:"20px" }} />
        <div className="links-column">
          <h1>Контакты</h1>
          <div>+7(812)123-45-67</div>
          <div>+7(911)123-45-67</div>
          <div>Новоостровский проспект, дом 36 лит. С</div>
        </div>
        <div className="links-column">
          <h1>Режим работы</h1>
          <div>С 10:00 до 21:00(Пн-Пт)</div>
          <div>С 11:00 до 20:00(Сб-Вс)</div>
        </div>
        <div>
          <h1>Мы в Instagram</h1>
          <FaInstagram style={{ width: "40px", height: "40px" }} />
        </div>
      </footer>
        <div className="copyright">Copyright @ 2017-2022</div>
    </div>
  );
};

export default Footer;
