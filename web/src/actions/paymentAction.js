import axios from 'axios';

export function addPayment(values) {
    return (dispatch) =>{
        axios.post("http://localhost:5000/api/payment/add", values)
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