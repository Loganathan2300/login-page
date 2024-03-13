import { BASE_URL } from "../../constant/Index"
import { Login } from "../constants/Index"
import axios from "axios"
export const LoginAction = (payload)=> async (dispatch)=>{
    dispatch({
        type:Login.LOADING,
        payload:{loading:true},
    });
    try {
        const { data } = await axios.post(`${BASE_URL}/api/v1/login`, payload);
        await dispatch({
            type: Login.SUCCESS,
            payload: { loading: false, data: data },
        });
    } catch (err) {
        await dispatch({
            type: Login.ERROR,
            payload: { loading: false, data: {} },
        });
    }
}