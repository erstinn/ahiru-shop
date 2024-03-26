import {useEffect, useState} from "react";

// hooks/fetch i just combine
const productsAPI = import.meta.env.VITE_APP_PRODUCTS_API_URL;
const usersAPI = import.meta.env.VITE_APP_USER_API_URL;
export const GetUser = async(id) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch(`${usersAPI}/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            }).catch(e=> {
            console.error('Error fetching data:', e);
        })
    }, [id])

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

export const UpdateLanguage = async () => {

}

export const Login = async ({creds}) => {
    return fetch(`${usersAPI}/login`, {
        method: 'POST',
        header:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    }).then(data => data.json());
}