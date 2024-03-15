



const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 container mx-auto mt-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0}  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-32">
                        <li>
                            <a href="#">Home</a>
                            <a href="#">Recipes</a>
                            <a href="#">About</a>
                            <a href="#">Search</a>
                        </li>
                        </ul>
                    </div>
                    <h3 className="raleway text-[#131318] text-4xl font-bold lg:ml-3">Rec<span
                                className="text-[#1DD100]">i</span>pe    Calor<span
                                className="text-[#1DD100]">i</span>es</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li>
                            <ul className="navbar-center text-lg text-[#131318] space-x-8 ml-8 hidden mg  lg:flex">
                                <a className="hover:text-[#1DD100] duration-300" href="#">Home</a>
                                <a className="hover:text-[#1DD100] duration-300" href="#">Recipes</a>
                                <a className="hover:text-[#1DD100] duration-300" href="#">About</a>
                                <a className="hover:text-[#1DD100] duration-300" href="#">Search</a>
                            </ul>

                        </li>
                       
                    </ul>
                </div>
                <div className="navbar-end">
                    <img src="" alt="" />
                   <input className="p-2 rounded-full bg-gray-100" type="search" name="" id="" placeholder="     Search"/>
                </div>
                <div className="bg-green-500 w-14 h-10 rounded-full">
                    <img src="../images/account.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Navbar;