import { Outlet } from "react-router-dom";
import Footer from "../UI/Footers";
import Header from "../UI/Headers";

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}
export default Layout;