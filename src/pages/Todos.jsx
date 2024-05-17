import React, { useState, useEffect } from 'react'
function Todos() {
    const [data, setData] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/todos'
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data); 
                console.log(data)
                console.log()
            })
    }, [])


    return (
        <table class="table continer">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">userId</th>
                    <th scope="col">name</th>
                    <th scope="col">completed</th>

                </tr>
            </thead>
            <tbody >
                {data.map(item => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td>{String(item.completed)}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Todos