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
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
                <label htmlFor="name-input">name</label>
                <input className="text-slate-950" id="name-input" type="text" placeholder="name" name="name"/>
                <label htmlFor="age-input">age</label>
                <input className="text-slate-950" id="age-input" type="number" placeholder="age" name="age"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateNewUser;