"use strict";

// production

const handlerProduct = () => {
    const rootproduct = document.querySelector(".title_h4_order");
    let countProduct = 0  ;
    axios.get("https://asm2es6-default-rtdb.firebaseio.com/products.json")
    .then((res)=> {
       return res.data
      
    })
    .then(res => {
        // console.log(res.length);
        countProduct =  res.length
        rootproduct.insertAdjacentHTML('afterbegin',countProduct)
    })
    .catch(function (error) {
        if (error.response) {
          
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
           
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
   
   
};
handlerProduct();

// user 
const handlerUser = () => {
    const rootproduct = document.querySelector(".title_h4_users");
    let countProduct = 0  ;
    axios.get("https://asm2es6-default-rtdb.firebaseio.com/users.json")
    .then((res)=> {
       return res.data
      
    })
    .then(res => {
        // console.log(res.length);
        countProduct =  res.length
        rootproduct.insertAdjacentHTML('afterbegin',countProduct)
    })
    .catch(function (error) {
        if (error.response) {
          
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
           
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
   
   
};
handlerUser();

// order 
const handlerOrder = () => {
    const rootproduct = document.querySelector(".title_h4_orders");
    let countProduct = 0  ;
    axios.get("https://asm2es6-default-rtdb.firebaseio.com/orders.json")
    .then((res)=> {
       return res.data
      
    })
    .then(res => {
        // console.log(res.length);
        countProduct =  res.length
        rootproduct.insertAdjacentHTML('afterbegin',countProduct)
    })
    .catch(function (error) {
        if (error.response) {
          
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
           
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
   
   
};
handlerOrder();
