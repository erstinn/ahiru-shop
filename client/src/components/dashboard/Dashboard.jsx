import React, {useState, useRef, useEffect, useContext} from 'react';
import {StyledDashboard} from "./Dashboard.styled.js";
import {StyledArrow, StyledCatalog, StyledCatalogItem} from "./Catalog.styled.js";
import { Link } from "react-router-dom";
import { flushSync } from 'react-dom';
import {GetAllProducts} from "../../hooks/shop.jsx";

//flushSync apparently uncommon (https://react.dev/reference/react-dom/flushSync)
//but apparently needed to update ref
const Dashboard = () => {
    const products = GetAllProducts();
    // console.log(products, 'nksand')
    const [othersArray, setOthersArray] = useState(products.filter(item => item.type === 'others'));
    const [ducksArray, setDucksArray] = useState(products.filter(item => item.type === 'duck'));
    const [miscArray, setMiscArray] = useState(products.filter(item => item.type === 'misc'));

    useEffect(() => {
        setOthersArray(products.filter(item => item.type === 'others'));
        setDucksArray(products.filter(item => item.type === 'duck'));
        setMiscArray(products.filter(item => item.type === 'misc'));
    }, [products]);


    //Scroll:
    const [duckSlide, setDuckSlide] = useState(1);
    const [otherSlide, setOtherSlide] = useState(1);
    const [miscSlide, setMiscSlide] = useState(1);
    const ducksRef = useRef(null);
    const othersRef = useRef(null);
    const miscRef = useRef(null);


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

    const handleMiscScroll = (direction, reset) => {
        flushSync(() => {
            if (direction === 'right' && miscSlide <= othersArray.length - 1) {
                setMiscSlide(miscSlide + 1);
                if (reset) {
                    setMiscSlide(1);
                } else {
                    setMiscSlide(miscSlide + 1);
                }
            }
            else if (direction === 'left' && miscSlide >= 0) {
                if (reset) {
                    setMiscSlide(othersArray.length - 1);
                } else {
                    setMiscSlide(otherSlide - 1);
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
                                <h3>{item.name.en}</h3>
                                <p>{item.desc.en}</p>
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
                            <h3>{item.name.en}</h3>
                            <p>{item.desc.en}</p>
                            </Link>
                        </StyledCatalogItem>
                    ))}
                    <StyledArrow className='right' onClick={
                        () => othersArray.length-1 === otherSlide ? handleOthersScroll('right', true) : handleOthersScroll('right', false)
                    }> {">"} </StyledArrow>
                </StyledCatalog>

                <h2>Miscellaneous</h2>
                <StyledCatalog>
                    <StyledArrow className='left' onClick={
                        () => duckSlide === 1 ? handleMiscScroll('left', true)
                            : handleMiscScroll('left', false)
                    }> {"<"} </StyledArrow>

                    {miscArray.map((item, index) => (
                        <StyledCatalogItem key={index}>
                            <Link to={`/misc/${item._id}`}>
                                <img src={item.img} alt='/' ref={miscSlide === index ? miscRef : null}/>
                                <h3>{item.name.en}</h3>
                                <p>{item.desc.en}</p>
                            </Link>
                        </StyledCatalogItem>
                    ))}
                    <StyledArrow className='right' onClick={
                        () => miscArray.length-1 === miscSlide ? handleMiscScroll('right', true)
                            : handleMiscScroll('right', false)
                    }> {">"} </StyledArrow>
                </StyledCatalog>
            </StyledDashboard>
        </>
    );
};

export default Dashboard;
