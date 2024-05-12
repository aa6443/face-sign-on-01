import { NavBar } from "./components/NavBar";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default AppLayout;
