const { Joker } = require("../models/joker.model");

module.exports.findAllJoker = (req, res) => {
    Joker.find()
    .then(allDaJoker => res.json({jokers: allDaJoker}))
    .catch(err => res.json({message:"Something went wrong", error:err }));
};

module.exports.findJokerRandom = (req, res) => {
    Joker.find().limit(-1).skip((Joker.count()*Math.random())-1)
    .then(randomJoker => res.json({jokers: randomJoker}))
    .catch(err => res.json({message:"Something went wrong", error:err }));
};

module.exports.findOneSingleJoker = (req, res) => {
    Joker.findOne({_id: req.params.id})
        .then(OneSingleJoker => res.json({jokers: OneSingleJoker}))
        .catch(err => res.json({message:"Something went wrong", error:err }));
};

module.exports.createNewJoker = (req, res) => {
    Joker.create(req.body)
        .then(newlyCreatedJoker => res.json({jokers: newlyCreatedJoker}))
        .catch(err => res.json({message:"Something went wrong", error:err }));
};

module.exports.updateExistingJoker = (req, res) => {
    Joker.findOneAndUpdate({_id: req.params.id},req.body,{new: true})
        .then(updatedJoker => res.json({jokers: updatedJoker}))
        .catch(err => res.json({message:"Something went wrong", error:err }));
};

module.exports.deleteAnExistingJoker = (req, res) => {
    Joker.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message:"Something went wrong", error:err }));
};
