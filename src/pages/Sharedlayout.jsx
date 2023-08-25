import { Outlet } from 'react-router-dom';
import StyledNavbar from '../components/StyledNavbar';

const Sharedlayout = () => {
    return (
        <>
            <StyledNavbar />
            <Outlet />
        </>
    );
};

export default Sharedlayout;