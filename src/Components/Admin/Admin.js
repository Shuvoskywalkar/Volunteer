import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const Admin = () => {
    const [admin, setAdmin] = useState([])
    const [del, setDel] = useState(false)

    useEffect(() => {
        fetch('https://evening-ravine-07787.herokuapp.com/fetchToAdmin')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [del])
    const cancelEvent = (id) => {
        fetch(`https://evening-ravine-07787.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setDel(!del)
            })
    }
    return (
        <div>
         <img src={'https://i.imgur.com/SuVq6gP.png'} width="400" height="100px" alt="" href="/home" />
           
            <h1>Volunteer Register list</h1>
        
            <br />

            <div>

                {
                    admin.map(event => <li key={event._id}>
                        {event.name} - {event.Email} - {event.date} - {event.library} - <button className="mt-3 btn-danger" onClick={() => cancelEvent(event._id)}>Delete</button>
                    </li>)
                }
            </div>
        </div>
    );
};

export default Admin;