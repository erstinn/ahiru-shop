import React, {useEffect, useState} from 'react';
import {StyledCatalogItem} from "../styles/Catalog.styled.js";
import {Link, useParams} from "react-router-dom";

const Animal = () => {
    const [animal, setCurrentAnimal] = useState([]);
    const params = useParams();

    //todo implement cache
    useEffect(() => {
        fetch(`http://localhost:5175/api/animals/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setCurrentAnimal(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [params.id]);




    return (
        <div>
            {animal.map((item, index) => (
                <StyledCatalogItem key={index}>
                    <img src={item.img} alt='/'/>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                </StyledCatalogItem>
            ))}
        </div>
    );
};

export default Animal;