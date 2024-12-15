import React , {useEffect , useState , useContext} from 'react';
import Logo from "../../assets/Images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { fetchApi } from '@/Constant';
import { UserContext } from '@/Contexts/UserContext';
const Navbar = () => {

     const { user, setUser } = useContext(UserContext);
     const navigate = useNavigate();
 



  return (
    <nav className="bg-black text-white py-4 px-10 flex justify-between items-center rounded-[20px] mx-2 my-1">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 mr-3 brightness-[1000]" />
        <span className="text-2xl font-bold">Vista</span>
      </div>
      <div className="flex space-x-8 text-[13px]">
        <Link to="/" className="hover:text-gray-200 transition duration-300 p-2">Home</Link>
        {
         user?.role === 'Employer' ?(
            <Link to="/admin/dashboard" className="hover:text-gray-200 transition duration-300 p-2">Dashboard</Link>
          ) : (
            <Link to="/user/dashboard" className="hover:text-gray-200 transition duration-300 p-2">Dashboard</Link>
          )
        }

            {user ? (
              <div className="flex items-center space-x-4">
                <span>Hi {user.userName} !</span>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-lg"
                  onClick={() => {
                    localStorage.removeItem('token');
                    setUser(null);
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="hover:text-gray-200 transition duration-300 border-2 py-2 px-4 rounded-[8px]">Login</Link>
            )}
      </div>
    </nav>
  );
}

export default Navbar;