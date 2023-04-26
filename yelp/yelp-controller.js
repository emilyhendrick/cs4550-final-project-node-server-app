import * as yelpDao from './yelp-dao.js';

const searchRestaurants = async (req, res) => {
    const { location, term } = req.query;
    try {
        const result = await yelpDao.searchRestaurants(location, term);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

const getRestaurantDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await yelpDao.getRestaurantDetails(id);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

export default (app) => {
    app.get('/api/restaurant/search', searchRestaurants);
    app.get('/api/restaurant/:id', getRestaurantDetails);
};