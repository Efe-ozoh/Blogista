import axios from "axios";

const instance = axios.create({
    baseURL: 'https://blogista-b03e9-default-rtdb.firebaseio.com/'
});


export default instance;