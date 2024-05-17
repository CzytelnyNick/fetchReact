import React, { useState, useEffect } from 'react'
function Albums() {
    const [data, setData] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/albums'
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data)
            })
    })


    return (
        <table class="table continer">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">userId</th>
                    <th scope="col">title</th>

                </tr>
            </thead>
            <tbody >
                {data.map(item => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>


                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Albums