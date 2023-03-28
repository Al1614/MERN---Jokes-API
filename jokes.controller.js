const Joke = require("./models/jokes.model");

const getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => console.log(err))
};

const getById = (req, res) => {
    const { params } = req;
    Joke.findOne({_id: params._id})
        .then((oneJoke)=> res.json(oneJoke))
        .catch((err) => console.log(err))
};

const createNewJoke = (req, res) => {
    const {body} = req;
    Joke.create(body)
        .then((newJoke)=> res.json(newJoke))
        .catch((err) => console.log(err))
};

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body,{
        new: true,
        runValidators: true,})
        .then((updateJoke)=> res.json(updateJoke))
        .catch((err) => console.log(err))
};

const deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then((deleted)=> res.json(deleted))
        .catch((err) => console.log(err))
};

module.exports = {
    getAllJokes,
    getById, 
    createNewJoke,
    updateJoke,
    deleteJoke
};