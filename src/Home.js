import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-slate-800 text-white p-5 md:flex md:items-center md:justify-between ">
        <nav className="md:flex md:items-center md:justify-end w-full">
          <ul className=" md:flex md:items-center md:static bg-slate-800 md:w-auto">
            <li className="mx-4">
              <Link
                to="/home"
                className="text-xl hover:text-blue-400 duration-500 "
              >
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/about"
                className="text-xl hover:text-blue-400 duration-500 "
              >
                About Us
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/integration"
                className="text-xl hover:text-blue-400 duration-500 "
              >
                Integration
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/form"
                className="text-xl hover:text-blue-400 duration-500 "
              >
                Form{" "}
              </Link>
            </li>
            <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-600 rounded">
              Logout
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Home;
