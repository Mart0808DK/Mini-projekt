import {useEffect, useState} from "react";

export function useUser() {
    const [users, setUsers] = useState([])
    async function getUsers() {
        const res = await fetch("../../data/user.json")
        setUsers(await res.json())
    }

    useEffect(() => {
        getUsers()
    }, []);

    async function create (user) {
        await fetch("../../data/user.json", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(user)
        })
        setUsers([...users, user])
    }
    return {users, create}
}

