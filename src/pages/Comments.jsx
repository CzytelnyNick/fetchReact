import React, { useState, useEffect } from 'react'
function Comments() {
    const [data, setData] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/comments'
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                
            })
    }, [])


    return (
        <table class="table continer">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">postId</th>
                    <th scope="col">name</th>

                </tr>
            </thead>
            <tbody >
                {data.map(item => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.postId}</td>
                        <td>{item.name}</td>


                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Comments