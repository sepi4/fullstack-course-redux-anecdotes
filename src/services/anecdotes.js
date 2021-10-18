import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);
const asObject = (content) => {
    return {
        content,
        id: getId(),
        votes: 0,
    };
};

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const createNew = async (content) => {
    const object = asObject(content);
    const response = await axios.post(baseUrl, object);
    return response.data;
};

const vote = async (id) => {
    try {
        const res = await axios.get(`${baseUrl}/${id}`);
        const object = {
            ...res.data,
            votes: res.data.votes + 1,
        };
        const response = await axios.put(`${baseUrl}/${id}`, object);
        return response.data;
    } catch (error) {
        console.log('error in vote:', error);
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, vote };
