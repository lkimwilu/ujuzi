import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/users");
          console.log("reposned", response)
          setUsers(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };
  
      fetchUsers();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default UserTable