import { Outlet } from "react-router-dom";
import Footer from "../Shear/Footer/Footer";
import NavBar from "../Shear/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className=" min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
