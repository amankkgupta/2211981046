import React, { useEffect, useState } from 'react'
import axios from 'axios';

const TopUsers = () => {
    const [users, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const BaseUrl = import.meta.env.VITE_BACKEND_URL;
                const response = await axios.get(`${BaseUrl}/api/analytics/users`);
                setData(response.data.users);
                console.log(response.data.users);
            } catch (err) {
                console.log(err)
            }
        };
        
        fetchData();
    }, []);

    
  return (
    <div>
        <h1>Top Users</h1>
        
    </div>
  )
}

export default TopUsers