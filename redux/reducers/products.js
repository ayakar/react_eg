import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: {
        numOfItem: 0,
        products: [],
        subtotal: 0,
        hst: 0,
        total: 0
    },
    search: "",
    products: null
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_NUM_OF_ITEM:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    numOfItem: action.numOfItem
                }
            }
        case actionTypes.UPDATE_NUM_OF_ITEM:
            const newNumOfItem = state.cart.numOfItem + action.num;

            return {
                ...state,
                cart: {
                    ...state.cart,
                    numOfItem: newNumOfItem
                }
            }
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: action.products
                }
            }
            case actionTypes.CLEAR_PRODUCTS:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: [],
                }
            }
        case actionTypes.SET_SUMMARY:
            let subTotal = 0;
            state.cart.products && state.cart.products.map(product => {
                subTotal += parseFloat(product.productPrice) * parseInt(product.productQuantity).toFixed(2)
            })
            const fixedSubTotal = subTotal.toFixed(2)
            const hst = parseFloat((subTotal * 0.13).toFixed(2));
            const total = hst + subTotal;

            return {
                ...state,
                cart: {
                    ...state.cart,
                    subtotal: fixedSubTotal,
                    hst: hst,
                    total: total
                }
            }

        case actionTypes.SUBMIT_SEARCH_VALUE:
            return {
                ...state,
                search: action.search,
                products: action.products
            }


        default:
            return state;
    }
}

export default products