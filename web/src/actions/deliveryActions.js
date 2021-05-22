import axios from 'axios';

export function addDelivery(values) {
  return (dispatch) => {
    axios
      .post("http://192.168.8.183:8280/delivery/add", values)
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
      .delete(`http://192.168.8.183:8280/delivery/${values}`)
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

export function editDeliveryCache(values) {
  return (dispatch) => {
    dispatch({
      type : "EDIT_DELIVERY_CACHE",
      payload : values
    })
  }
}

export function updateDelivery (value) {
  console.log('value: ', value);
  return (dispatch) => {
    axios.post(`http://192.168.8.183:8280/delivery/update/${value._id}`,value)
    .then((res) => {
      dispatch({
        type:'UPDATE_DELIVERY',
        payload : value
      });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

