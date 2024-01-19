import {useEffect, useState} from "react";

const productsAPI = import.meta.env.VITE_APP_PRODUCTS_API_URL;
const usersAPI = import.meta.env.VITE_APP_USER_API_URL;
export const GetUser = async (id) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch(`${usersAPI}/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            }).catch(e=> {
            console.error('Error fetching data:', e);
        })
    }, [])

    return user;
}

export const GetAllUsers = async () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch(usersAPI)
            .then(response => response.json())
            .then(data => {
                console.log('users', data);
                setUsers(data);
            }) .catch(e => {
            console.error('Error fetching data:', e);
        })
    }, [])

    return users;
}