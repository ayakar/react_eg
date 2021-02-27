import {combineReducers} from "redux";
import products from "./products";
const reducers={
    products:products
}

export default combineReducers(reducers);