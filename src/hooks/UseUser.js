import {useEffect, useState} from "react";

export function useUser() {
    const [users, setUsers] = useState([])

    const endpoint = "http://localhost:5000/"
    async function getUsers() {
        const res = await fetch(endpoint)
        setUsers(await res.json())
    }

    useEffect(() => {
        getUsers()
    }, []);

    async function create (user) {
        await fetch(endpoint, {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(user)
        })
        setUsers([...users, user])
    }
    return {users, create}
}

