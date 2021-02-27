export const ip='https://ayakarogoza.com';

const prod={
    url:{}
}
const dev={
    url:{
        GET_DEPARTMENTS:`${ip}/works/eg/services/get_departments.php`,
        GET_PRODUCTS_BY_DEPARTMENT:`${ip}/works/eg/services/products_by_department.php`,

       // GET_PRODUCTS_IN_CART:`${ip}/works/eg/services/get_products.php`,   //when cart button is clicked
        SAVE_CART:`${ip}/works/eg/services/save_cart.php`,  //when check out button is clicked on check out page ...returns Order ID
        GET_SEARCH:`${ip}/works/eg/services/products_by_search.php`,  //search
    }
};

//export const config=process.env.NODE_ENV === 'development'? dev:prod;

export const config=dev;
