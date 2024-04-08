import axios from '../config/axios-config';
import { API_URL } from '../commonService/enum';



export const getAllContests = async (platformName) => {
    try {
        const res = await axios.get(API_URL + `/contests/${platformName}`);
        return res.data;
    } catch (error) { }
}

