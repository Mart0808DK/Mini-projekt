import React, {useEffect, useState} from 'react';
import {useUser} from "../hooks/UseUser.js";


function UserRow ({user}) {
    return (
       <tr className="text-center">
           <td>{user.id}</td>
           <td>{user.name}</td>
           <td>{user.age}</td>
       </tr>
    )
}

function UserDataPage({users}) {
    return (
        <div className="flex justify-center items-center h-screen ">
        <table className="border-separate w-80 bg-slate-800">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
            </tr>

            </thead>
            <tbody>
            {users.map(user => <UserRow key={user.id} user={user}/>)}
            </tbody>
        </table>
        </div>
    );
}

export default UserDataPage;