import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegistrationForm = (props) => {
  const [email, setEmail] = useState("");
  // const [name,setName] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first: "",
    last: "",
    email: "",
  });

  let name, value;
  const handleInputs = (e) => {
    //console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.email);

    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white rounded-lg shadow-md p-6 w-80">
        <h2 className="text-green-600 text-3xl mb-4">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="first"
            className="block mb-1 text-gray-700 font-semibold"
          >
            First Name:
          </label>
          <input
            type="text"
            id="first"
            name="first"
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md"
            value={user.first}
            onChange={handleInputs}
            placeholder="First Name"
            required
          />

          <label
            htmlFor="last"
            className="block mb-1 text-gray-700 font-semibold"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="last"
            name="last"
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md"
            value={user.last}
            onChange={handleInputs}
            placeholder="Last Name"
            required
          />

          <label
            htmlFor="email"
            className="block mb-1 text-gray-700 font-semibold"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md"
            value={user.email}
            onChange={handleInputs}
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md font-semibold"
          >
            Submit
          </button>
          <button onClick={() => props.onFormSwitch("submit")}></button>
        </form>
        <button onClick={() => props.onFormSwitch("login")}>
          Already have account?Login here
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
