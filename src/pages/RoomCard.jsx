import React, { useContext } from 'react';
import { FaBed } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { AuthContext } from '../authProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RoomCard = ({ room }) => {
    const { user } = useContext(AuthContext);
    const { title, img, description, capacity, beds, price, _id } = room;
    const navigate = useNavigate();
    const handleBook = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        else {
            toast.success('Room Booked');
        }


    }
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='flex gap-5 items-center my-5 ml-5'>
                <span className='font-bold bg-red-500 p-5 rounded-full h-[50px] w-[50px] flex items-center justify-center text-xl'>{title[0]}</span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </div>
            <img className="" src={img} alt="" />
            <div className="p-5">

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <div className='flex justify-between'>
                    <div className='flex gap-10'>
                        <span className='flex items-center gap-1'><FaBed /> {beds}</span>
                        <span className='flex items-center gap-1'><IoPeople /> {capacity}</span>
                        <span className='flex items-center gap-1'>$: {price}</span>
                    </div>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleBook}>
                        Book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;