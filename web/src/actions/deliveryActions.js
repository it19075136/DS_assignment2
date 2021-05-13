import axios from 'axios';

export function addDelivery(values) {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/delivery/add", values)
      .then((res) => {
        dispatch({
          type: "ADD_DELIVERY",
          payload: values,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteDelivery(values) {
    console.log('values action: ', values);
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/api/delivery/${values}`)
      .then((res) => {
        dispatch({
          type: "DELETE_DELIVERY",
        });
        console.log(res);
        window. location. reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
}