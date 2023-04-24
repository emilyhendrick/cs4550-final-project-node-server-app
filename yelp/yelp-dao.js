import axios from 'axios';

const YELP_API = 'https://api.yelp.com/v3';
const API_KEY = 'JpAUQ7biM97o1Nm7JD6_25yxLL7oOpgX2aU3XbuvouGD-UVjNrUrEYyRM32Mq8u_PLy33ySu3lfblo349V0fgR4JviNIqeT-ral0iNFvjLDmHAzisbCDGBbck0JEZHYx';

const searchRestaurants = async (location, term) => {
    const response = await axios.get(`${YELP_API}/businesses/search`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
        params: {
            location,
            term,
        },
    });
    return response.data.businesses;
};

const getRestaurantDetails = async (id) => {
    const response = await axios.get(`${YELP_API}/businesses/${id}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    });
    return response.data;
};

export { searchRestaurants, getRestaurantDetails };