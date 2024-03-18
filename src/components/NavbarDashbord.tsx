import { Link, useNavigate} from 'react-router-dom';
import  { useState } from 'react';
import logo from "../assets/logo.png";


function NavbarDashbord() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    console.log('udah login ga lu: ', isLogin ? 'logout' : 'login');
  };

  const handleLogout = () => {
    
    setIsLogin(false);
    navigate('/login');
  };

  return (
    <div className="flex justify-between items-center w-full h-6 bg-black text-white p-10" >
      <div className="flex items-center m-10">
        <img src={logo} alt="Logo" className="w-12 h-12 mr-4" />
        <h1 className="mr-4"><Link to="/">Dashboard Pemilu</Link></h1>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="mr-2">
            <Link to="/ListPartai">Partai</Link>
          </li>
          <li className="mr-2">I</li>
          <li className="mr-2"><Link to="/ListPaslon">Paslon</Link></li>
        </ul>
        {isLogin && (
          <button className="ml-4 bg-white text-black w-8 h-8 rounded-full font-bold" onClick={handleLogout} >
            Logout
          </button>
        )}
        {!isLogin && (
          <button className="ml-4 bg-white text-black w-8 h-8 rounded-full font-bold" onClick={toggleLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default NavbarDashbord;
