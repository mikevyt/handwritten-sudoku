const axios = require('axios').default;

const baseURL = 'http://127.0.0.1:5000';

const api = {
    getBoard: async () => {
        const response = await axios.get(`${baseURL}/board/new`);
        return response.data;
    },
    getNumber: async (image) => {
        const response = await axios.post(`${baseURL}/interpret`, {
            image: image,
        });
        return response.data;
    },
};

export default api;
