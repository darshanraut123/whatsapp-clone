import axios from "axios";

const instance = axios.create({
    baseURL: 'https://whatsapp-clone-backend-darshan.herokuapp.com/'
});


export default instance;