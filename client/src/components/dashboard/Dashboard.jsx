import React, {useState, useRef, useEffect} from 'react';
import {StyledDashboard} from "./Dashboard.styled.js";
import {StyledArrow, StyledCatalog, StyledCatalogItem} from "./Catalog.styled.js";
// import {others, ducks} from "../extra/images.js";
import { Link } from "react-router-dom";
import { flushSync } from 'react-dom';
import animal from "../animals/Animal.jsx";
import {GetAllAnimals} from "../../hooks/dataFetch.jsx";

//flushSync apparently uncommon (https://react.dev/reference/react-dom/flushSync)
//but apparently needed to update ref
const Dashboard = () => {
    const animals = GetAllAnimals();
    const [othersArray, setOthersArray] = useState(animals.filter(item => item.type !== 'duck'));
    const [ducksArray, setDucksArray] = useState(animals.filter(item => item.type === 'duck'));

    useEffect(() => {
        setOthersArray(animals.filter(item => item.type !== 'duck'));
        setDucksArray(animals.filter(item => item.type === 'duck'));
    }, [animals]);


    const [duckSlide, setDuckSlide] = useState(1);
    const [otherSlide, setOtherSlide] = useState(1);
    const ducksRef = useRef(null);
    const othersRef = useRef(null);


    //made separate func for each scroll since will have too many args for useState stuff
    const handleDucksScroll = (direction, reset) => {
        flushSync(() => {
            if (direction === 'right' && duckSlide <= ducksArray.length - 1) {
                if (reset) {
                    setDuckSlide(1);
                } else {
                    setDuckSlide(duckSlide + 1);
                }
            }
            else if (direction === 'left' && duckSlide >= 0) {
                if (reset) {
                    setDuckSlide(ducksArray.length - 1);
                } else {
                    setDuckSlide(duckSlide - 1);
                }
                console.log('duckslide',duckSlide);
            }
        });
        ducksRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    const handleOthersScroll = (direction, reset) => {
        flushSync(() => {
            if (direction === 'right' && otherSlide <= othersArray.length - 1) {
                setOtherSlide(otherSlide + 1);
                if (reset) {
                    setOtherSlide(1);
                } else {
                    setOtherSlide(otherSlide + 1);
                }
            }
            else if (direction === 'left' && otherSlide >= 0) {
                if (reset) {
                    setOtherSlide(othersArray.length - 1);
                } else {
                    setOtherSlide(otherSlide - 1);
                }
            }
        });
        othersRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <>
            <StyledDashboard>
                <h1>🐣 Ahiru Farm Catalogue 🐣</h1>
                <h2>Ducks</h2>
                <StyledCatalog>
                    <StyledArrow className='left' onClick={
                        () => duckSlide === 1 ? handleDucksScroll('left', true) : handleDucksScroll('left', false)
                    }> {"<"} </StyledArrow>

                        {ducksArray.map((item, index) => (
                            <StyledCatalogItem key={index}>
                                <Link to={`/animals/${item._id}`}>
                                <img src={item.img} alt='/' ref={duckSlide === index ? ducksRef : null}/>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                                </Link>
                            </StyledCatalogItem>
                        ))}
                        <StyledArrow className='right' onClick={
                            () => ducksArray.length-1 === duckSlide ? handleDucksScroll('right', true) : handleDucksScroll('right', false)
                        }> {">"} </StyledArrow>
                </StyledCatalog>

                <h2>Other Animals</h2>
                <StyledCatalog>
                    <StyledArrow className='left' onClick={
                        () => otherSlide === 1 ? handleOthersScroll('left', true) : handleOthersScroll('left', false)
                    }> {"<"} </StyledArrow>

                    {othersArray.map((item, index) => (
                        <StyledCatalogItem key={index}>
                            <Link to={`/animals/${item._id}`}>
                            <img src={item.img} alt='/' ref={otherSlide === index ? othersRef : null}/>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            </Link>
                        </StyledCatalogItem>
                    ))}
                    <StyledArrow className='right' onClick={
                        () => othersArray.length-1 === otherSlide ? handleOthersScroll('right', true) : handleOthersScroll('right', false)
                    }> {">"} </StyledArrow>
                </StyledCatalog>

                <h2>Miscellaneous</h2>
                <StyledCatalog>
                    {ducksArray.map((item) => (
                    <StyledCatalogItem key={item.id}>
                        <img src={item.img} alt='/'/>   
                        <h3>{item.name}</h3>
                        <p>{item.desc}</p>
                    </StyledCatalogItem>
                    ))}
                </StyledCatalog>
            </StyledDashboard>
        </>
    );
};

export default Dashboard;
