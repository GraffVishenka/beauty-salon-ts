import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <section className="root-layaout">
        <Outlet />
      </section>
      <Footer/>
    </div>
  );
};

export default RootLayout;
