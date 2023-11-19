import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {
    StyledAnimal,
    StyledAnimalDetails,
    StyledPurchaseButton,
    StyledCounterButton,
    StyledCounter
} from "./AnimalDetails.styled.js";

const Animal = () => {
    //connection variables
    const animalsAPI = import.meta.env.VITE_APP_ANIMAL_API_URL;


    const [animal, setCurrentAnimal] = useState([]);
    const [items, setItems] = useState(0);
    const params = useParams();

    //todo implement cache

    useEffect(() => {
        fetch(`${animalsAPI}/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setCurrentAnimal(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [params.id]);

    const increment = () => {
        items < animal.stock ? setItems(items + 1) : '';
    }
    const decrement = () => {
        items !== 0 ? setItems(items - 1) : '';
    }


    return (
        <div>
            <StyledAnimal>
                <div>
                <h2>{animal.name}</h2>
                <img src={animal.img} alt='/'/>
                </div>
                <StyledAnimalDetails>
                    <p><b>Description:</b></p>
                    <p>{animal.desc}</p>
                    <p><b>Type:</b></p>
                    <p>{animal.type}</p>
                    <p><b>Stocks:</b></p>
                    <p>{animal.stock}</p>


                    <StyledCounter>
                        <StyledCounterButton isMaxMin={items === 0} onClick={decrement}>
                            -
                        </StyledCounterButton>
                        <div>{items}</div>
                        <StyledCounterButton isMaxMin={items === animal.stock} onClick={increment}>+</StyledCounterButton>
                    </StyledCounter>
                    <div>
                        <StyledPurchaseButton sold={animal.stock === 0}>
                            {animal.stock === 0 ? 'Sold Out'
                                : "Add To Cart"}
                        </StyledPurchaseButton>
                    </div>

                </StyledAnimalDetails>
            </StyledAnimal>
        </div>
    );
};

export default Animal;