import { useState } from 'react';

const Login = (props) => {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');

  const [user,setUser] = useState({
    email: "",password: ""
  });
  let name,value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user.email);
  }

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
    <div class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
      <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">Login for facelook</h1>
        <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>

          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm" 
            value={user.email}
            onChange={handleInputs}
            placeholder="name@company.com" required="" />
          </div>

          <div>
            <label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="••••••••" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm" required="" />
          </div>

          <button type="submit" class="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
          <button onClick={()=> props.onFormSwitch('registration')} className="block w-full text-center text-sm font-medium text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200">Don't have account? Signup here</button>
        </form>
      </div>
    </div>
  </div>
</section>
  );
}

export default Login;
