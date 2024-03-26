import {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {
    StyledAnimal,
    StyledAnimalDetails,
    StyledPurchaseButton,
    StyledCounterButton,
    StyledCounter
} from "./AnimalDetails.styled.js";
import {GetProduct} from "../../hooks/shop.jsx";
import {LocaleContext} from "../../hooks/LocaleContext.js";

const Animal = () => {
    const {prefLanguage, setPrefLanguage, lang} = useContext(LocaleContext);
    const locale = lang[prefLanguage];

    //connection variables
    const [items, setItems] = useState(0);
    const params = useParams();

    const retrievedAnimal = GetProduct(params.id)
    const [animal, setCurrentAnimal] = useState(retrievedAnimal);
    //todo implement cache


    useEffect(() => {
        setCurrentAnimal(retrievedAnimal)
    }, [params.id, animal, retrievedAnimal]);

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
                <h2>{animal.name.prefLanguage}</h2>
                <img src={animal.img} alt='/'/>
                </div>
                <StyledAnimalDetails>
                    <p><b>{locale.animalDescription}:</b></p>
                    <p>{animal.desc.prefLanguage}</p>
                    <p><b>{locale.animalType}:</b></p>
                    <p>{animal.type}</p>
                    <p><b>{locale.animalStocks}:</b></p>
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
                            {animal.stock === 0 ? `${locale.soldOut}`
                                : `${locale.addToCart}`}
                        </StyledPurchaseButton>
                    </div>

                </StyledAnimalDetails>
            </StyledAnimal>
        </div>
    );
};

export default Animal;