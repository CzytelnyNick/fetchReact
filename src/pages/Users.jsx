import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Users() {
    const [data, setData] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data)
            })
    }, [])


    return (
        <table class="table continer">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">username</th>
                    <th scope="col">email</th>
                    <th scope="col">street</th>

                </tr>
            </thead>
            <tbody >
                {data.map(item => (
                    <tr key={item.id}>
                        
                            <th scope="row"><Link to={`/users/${item.id}`} id={item.id}>{item.id}</Link></th>
                            <td><Link to={`/users/${item.id}`}>{item.name}</Link></td>
                            <td><Link to={`/users/${item.id}`}>{item.username}</Link></td>
                            <td><Link to={`/users/${item.id}`}>{item.email}</Link></td>
                            <td><Link to={`/users/${item.id}`}>{item.address.street}</Link></td>
                        

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Users