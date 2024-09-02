import { Link } from "react-router-dom";

const LoginPage = ()=>{
    return (
        <div className="login-card flex flex-col justify-evenly w-1/3 h-1/2 items-center border border-black p-4 text-white bg-orange-900 shadow-lg rounded-xl">
            <h1 className="text-3xl">Login</h1>
            <input type="text" placeholder="Username" className="w-4/5 border border-black p-1 rounded-md"/>
            <input type="text" placeholder="Password" className="w-4/5 border border-black p-1 rounded-md"/>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 w-3/4">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
                Login
            </span>
            </button>            
            <p>Don't have account? <Link to='/signup' className="cursor-pointer text-emerald-300">SignUp</Link></p>
        </div>
    );
}

export default LoginPage;