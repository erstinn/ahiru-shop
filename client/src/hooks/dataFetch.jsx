import { useState, useEffect } from 'react';

const animalsAPI = import.meta.env.VITE_APP_ANIMAL_API_URL;
const usersAPI = import.meta.env.VITE_APP_USER_API_URL;

export const GetAllAnimals = () => {
    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        fetch(animalsAPI)
            .then(response => response.json())
            .then(data => {
                console.log('all animals',data);
                setAnimals(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return animals;
}

export const GetAnimal = (id) => {
    const [animal, setAnimal] = useState({});
    useEffect(() => {
        fetch(`${animalsAPI}/${id}`)
            .then(response => response.json())
            .then(data => {
                setAnimal(data);
            }).catch(e => {
            console.error('Error fetching animal', e)
        })
    }, [id]);
    return animal
}

export const GetAllUsers = () => {
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

