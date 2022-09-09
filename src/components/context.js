import React, { useState, useContext } from "react";
import { useEffect } from "react";
const usersUrl = 'https://assessment.api.vweb.app/users';
const productsUrl = 'https://assessment.api.vweb.app/products';
const ordersUrl = 'https://assessment.api.vweb.app/orders';

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    
    const [users, setUsers] = useState();
    const [products, setProducts] = useState();
    const [orders, setOrders] = useState();
    const [currentState, setCurrentState] = useState(false)
    const getData = async (url) => {
        try {
            const res = await fetch(url);
            const fetchedData = await res.json();
            return fetchedData;
        }
        catch(error){
            console.log(error);
        }
    }

    const setData = async ()=>{
        const users = await getData(usersUrl);
        const orders = await getData(ordersUrl);
        const products = await getData(productsUrl);
        setUsers(users);
        setOrders(orders);
        setProducts(products);
    }
    useEffect(()=>{
        setData();
    }, [currentState])

    const getSingleUser = (user_id)=>{
        // setCurrentState(true);
        // get the user
        const {name:userName} = users.find(user=> user.user_id == user_id);
        // get his/her orders
        const userOrders = orders.filter(order=> order.user_id == user_id);


        // get the products for each order using the product id;
        let orderedProducts = userOrders.map(order=>{
            const {product_id} = order;
            return products.find(product => product.product_id == product_id);
        });

        // get the amount ordered and order date for each of the product
        orderedProducts = orderedProducts.map(product=>{
            // get them using the product_id
            const {quantity:quantityOrdered, order_date} = userOrders.find(order=> order.product_id == product.product_id);
            return {...product, quantityOrdered, order_date};
        });
        const userDetails = {userName, orderedProducts};
        // setCurrentState(false);
        return userDetails;
    }
    const deliverProduct = (product_id)=>{
        // add a delivered key to the product;
        setProducts((prev)=>{
            return prev.map(previousProduct=>{
                if(previousProduct.product_id == product_id){
                    previousProduct.delivered = true;
                    return previousProduct;
                }
                return previousProduct;
            });
        })
    }
    return <AppContext.Provider value={{users, getSingleUser, deliverProduct}}>
        {children}
    </AppContext.Provider>
};


const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {useGlobalContext, AppProvider};