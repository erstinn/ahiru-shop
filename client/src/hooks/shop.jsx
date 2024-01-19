import { useState, useEffect } from 'react';

const productsAPI = import.meta.env.VITE_APP_PRODUCTS_API_URL;
const usersAPI = import.meta.env.VITE_APP_USER_API_URL;

export const GetAllProducts = async () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(productsAPI)
            .then(response => response.json())
            .then(data => {
                console.log('all animals',data);
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return products;
}

export const GetProduct = (id) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        let ignore = false; //for latencies: https://react.dev/learn/synchronizing-with-effects#fetching-data
        fetch(`${productsAPI}/${id}`)
            .then(response => response.json())
            .then(data => {
                if (!ignore)
                    setProduct(data);
            }).catch(e => {
            console.error('Error fetching animal', e)
        })

        return () => {
            ignore = true;
        };
    }, [id]);
    return product
}




