import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

function User() {
    const [data, setData] = useState([])
    let { id } = useParams();

    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data)
                console.log()
            })

    }, [])
    
    if (Object.keys(data).length != 0) {
        return (
            <div>{
                <div>
                    <p scope="row">Id Usera w bazie: {data.id}</p>
                    <p>Imie i nazwisko: {data.name}</p>
                    <p>Username: {data.username}</p>
                    <p>Email: {data.email}</p>
                    {/* <p>Ulica: {data.address.street}</p> */}
                </div>


            }</div>
        )
    }
    else {
        return(<div className="">Nie ma takiego użytkownika</div>)
    }


}

export default User