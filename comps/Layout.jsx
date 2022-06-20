import Navbar from "./Navbar";
import Footer from './Footer';
import Content from "./Content";
import Loader from "./Loader";
import Router from "next/router";
import { useState } from "react";

const Layout = ({ children }) => {

    const [loading, setLoading] = useState(false);

    Router.events.on('routeChangeStart', () => {
        console.log(`Loading:`);
        setLoading(true);
    });
    
    Router.events.on('routeChangeComplete', () => {
        console.log(`Loaded:`);
        setLoading(false);
    });

    return (  
        <>
            {loading && <Loader />}
            
            <Navbar/>

            <Content>
                { children }
            </Content>

            <Footer/>
        </>
    );
}
 
export default Layout;