import axios from 'axios'

axios.defaults.headers.common['app_id'] = process.env.OXFORD_APP_ID;
axios.defaults.headers.common['app_key'] = process.env.OXFORD_APP_KEY;

export const axiosConfig = axios;