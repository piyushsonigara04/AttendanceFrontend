import { Link } from "react-router-dom";

const Homepage = ()=>{
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl text-white font-bold">Welcome To Our Attendance Web App</h1>
            <Link to='/login' className="flex justify-center items-center w-64 h-11 bg-red-400 rounded-lg cursor-pointer hover:text-black hover:bg-red-200">Login</Link>
            <Link to='/signup' className="flex justify-center items-center w-64 h-11 bg-red-400 rounded-lg cursor-pointer hover:text-black hover:bg-red-200">SignUp</Link>
        </div>
    );
}

export default Homepage;