import axios  from 'axios';
import { AxiosTypeProps } from '../DataTypes/GlobalInterface';

export async function axiosHttpRequest({endpoint, method, headers, body}: AxiosTypeProps) {
    try {
        const url = `${import.meta.env.VITE_API_URL}${endpoint}`
        const responseData = await axios({
            method: method,
            url: url,
            headers: headers,
            data: body
        });
        return responseData;
    } catch (error) {
        throw error;
    }
}