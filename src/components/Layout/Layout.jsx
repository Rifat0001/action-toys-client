import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;