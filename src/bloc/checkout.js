import {
    checkoutPending,
    checkoutSuccess,
    checkoutError,
} from "../store/action";

import axios from "axios";

function checkout(data, user) {
    return (dispatch) => {
        var token = user.token;

        dispatch(checkoutPending());
        axios
            .post(`http://localhost:4000/order/addOrder`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res.data)
            .then((products) => {
                dispatch(checkoutSuccess(products));
                return products;
            })
            .catch((error) => {
                dispatch(checkoutError(error));
            });
    };
}

export default checkout;
