import { Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import Greeting from "../Greeting/Greeting";

const Layout = (): JSX.Element => {
  const { pathname } = useLocation();
  const { isOpen } = useAppSelector((state) => state.ui);

  return (
    <>
      <Header />
      {!["/login", "/register"].includes(pathname) && <Greeting />}
      <main aria-label="Find your new family member">
        {isOpen && <Modal />}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
