const Home = () => {
  return (
    <>
      <div className="bg-slate-800 text-white p-5 md:flex md:items-center md:justify-between ">
      <nav className="md:flex md:items-center md:justify-end w-full">
        <ul className=" md:flex md:items-center md:static bg-slate-800 md:w-auto">
          <li className="mx-4">
            <a href="#" className="text-xl hover:text-blue-400 duration-500 ">Home</a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-xl hover:text-blue-400 duration-500 ">About Us</a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-xl hover:text-blue-400 duration-500 ">Integration</a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-xl hover:text-blue-400 duration-500 ">Form </a>
          </li>
          <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-600 rounded">Logout</button>
        </ul>
        
      </nav>
      </div>
    </>
  );
};
export default Home;
