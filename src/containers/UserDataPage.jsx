import React from 'react';


function UserRow ({user}) {
    return (
       <tr className="text-center h-4 border border-slate-100">
           <td className="p-4">{user.id.substring(0, 6)}</td>
           <td>{user.name}</td>
           <td>{user.age}</td>
       </tr>
    )
}

function UserDataPage({users}) {
    return (
        <div className="flex justify-center items-center h-screen">
        <table className="w-80 bg-slate-800 rounded p-4">
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