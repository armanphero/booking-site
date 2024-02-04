import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/img/logo.jpg'
import { AuthContext } from '../authProvider/AuthProvider';

const TopNav = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
        .then(() => {
        })
        .catch(error => {
            console.log(error.code);
        })
    }
    return (
        <nav className='container mx-auto flex gap-5 lg:gap-10'>
            <Link to='/'><img src={logo} alt="" className='w-[60px] lg:w-[100px] rounded-full' /></Link>
            <div className='flex items-center gap-10 text-white font-semibold text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/book'>Book</Link>
            </div>
            <div className='ml-auto flex items-center text-white font-semibold text-xl'>
                {
                    !user && 
                    <span>User</span> 
                }
                {
                    user && 
                    <div>
                        <span>{user.displayName}</span>
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-3" onClick={handleSignOut}>Sign out</button>
                    </div>
                }
            </div>
        </nav>
    );
};

export default TopNav;