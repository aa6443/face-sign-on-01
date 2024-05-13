import { NavBar } from "./components/NavBar";
import { useLocation, Outlet } from "react-router-dom";

const AppLayout = () => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);


  return (
    <>
      {
        (pathname !== "/register" && pathname !== "/login")
        && <NavBar />
      }
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default AppLayout;