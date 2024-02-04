import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard';

const Home = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRooms(data))
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Home;