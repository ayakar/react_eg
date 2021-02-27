import * as actionTypes from './actionTypes';
import {config} from '../../constants';
//import axios from 'axios';
// import fetch from 'node-fetch';


export const getNumOfItem = () => {
    const numOfItemInCart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length: 0;
    return {
        type: actionTypes.GET_NUM_OF_ITEM,
        numOfItem: numOfItemInCart
    }
}
export const updateNumOfItem = (num) => {
    return {
        type: actionTypes.UPDATE_NUM_OF_ITEM,
        num: num,
    }
}


export const setProducts = () => {
    const products=JSON.parse(localStorage.getItem('cart'));

    return function(dispatch) {
        dispatch({
            type: actionTypes.SET_PRODUCTS,
            products:products
        });
        return dispatch({
            type: actionTypes.SET_SUMMARY,
        })
    };

}
export const clearProducts = () => {
   localStorage.removeItem('cart');
   return {
       type:actionTypes.CLEAR_PRODUCTS,
   }

    // return function(dispatch) {
    //     dispatch({
    //         type: actionTypes.SET_PRODUCTS,
    //         products:products
    //     });
    //     return dispatch({
    //         type: actionTypes.SET_SUMMARY,
    //     })
    // };

}

export const submitSearchValue = (searchVal) => {
    var details = {
        'search': searchVal
    };
    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return dispatch=>{
        fetch(`${config.url.GET_SEARCH}`,{
            body: formBody,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            method: 'POST'
        }).then(res=>res.json())
            //.then(res=>console.log(res))
             .then(res=>dispatch(setSubmitSearchValue(res)))
            .catch(err=>console.log("error code:"+err))
    }


}

const setSubmitSearchValue=(res)=>{
    return {
        type: actionTypes.SUBMIT_SEARCH_VALUE,
        products:res.products,
        search:res.search
    }
}


