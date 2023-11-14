import React, {useEffect, useState} from 'react';
import {useUser} from "../hooks/UseUser.js";

function CreateNewUser({create}) {
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.name.value)

        const user = {name: e.target.name.value, age: e.target.age.value}
        await create(user)
        e.target.reset();
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80 bg-slate-800 p-4 rounded">
                <h2 className="text-2xl text-center">Add user</h2>
                <label htmlFor="name-input">name</label>
                <input className="text-slate-950" id="name-input" type="text" placeholder="name" name="name"/>
                <label htmlFor="age-input">age</label>
                <input className="text-slate-950" id="age-input" type="number" placeholder="age" name="age"/>
                <div className="flex justify-center items-center mt-2">
                    <button type="submit" className="bg-slate-950 w-20 p-2 rounded hover:bg-slate-900 transition-colors">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CreateNewUser;