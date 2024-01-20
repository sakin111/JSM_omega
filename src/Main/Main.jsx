import { Outlet } from "react-router-dom";
import Header from "../Component/Home/Header/Header";
import Footer from "../Component/Home/Footer/Footer";


const Main = () => {

    return (
   <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
   </div>
    );
};

export default Main;