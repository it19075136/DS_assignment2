import * as actionType from '../constants/productConstants';
let initstate = {
    loading: true,
    products: [],
    product: {},
    error: null
}
export default function (state = initstate, action) {
    switch(action.type){
        //get all products
        case actionType.GET_PRODUCTS_REQUEST:
            return{
                ...state,
                loading: true,
                products: []
            }
        case actionType.GET_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading: false,
                products: action.payload
            }
        case actionType.GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        //get product details
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return{
                ...state,
                loading: false,
                product: action.payload
            }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case actionType.GET_PRODUCT_DETAILS_RESET:
            return{
                ...state,
                product: {}
            }
        default:
            return state;
    }
};

