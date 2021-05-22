import axios from 'axios';

export function addPayment(values) {
    return (dispatch) =>{
        axios.post("http://192.168.8.183:8280/payment", values)
        .then((res) => {
            dispatch({
                type : 'ADD_PAYMENT',
                payload : values,
            });
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}