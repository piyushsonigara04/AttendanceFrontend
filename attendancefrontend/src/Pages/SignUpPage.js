
const SignUpPage = ()=>{
    return (
        <div className="signup-card flex flex-col justify-evenly w-1/3 min-h-96 items-center border border-black p-4 text-white bg-orange-900 shadow-lg rounded-xl">
            <h1 className="text-3xl">SignUp</h1>
            <input type="text" placeholder="Name" className="w-4/5 border border-black p-1 rounded-md"/>
            <input type="text" placeholder="PRN" className="w-4/5 border border-black p-1 rounded-md"/>
            <input type="text" placeholder="Username" className="w-4/5 border border-black p-1 rounded-md"/>
            <input type="text" placeholder="Password" className="w-4/5 border border-black p-1 rounded-md"/>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 w-3/4">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
                SignUp
            </span>
            </button>            
        </div>
    );
}

export default SignUpPage;