import * as tuitsDao from '../../controllers/tuits/tuits-dao.js'

// import posts from "./tuits.js";
// let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.userName = "@admin";
    // newTuit.time = "default review";
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}




const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}



const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.json(status);
}




const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = String(req.params.tid);
    // console.log(tuitdIdToDelete)
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    res.json(status);
}




export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

