import Navbar from "./Navbar";
import Footer from './Footer';
import Content from "./Content";

const Layout = ({ children }) => {
    return (  
        <>
            <Navbar/>

            <Content>
                { children }
            </Content>

            <Footer/>
        </>
    );
}
 
export default Layout;