const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api/jokes', JokerController.findAllJoker);
    app.get('/api/jokes/:id', JokerController.findOneSingleJoker);
    app.get('/api/jokesrandom', JokerController.findJokerRandom);
    app.post('/api/jokes/new',  JokerController.createNewJoker);
    app.post('/api/jokes/update/:id',  JokerController.updateExistingJoker);
    app.post('/api/jokes/delete/:id',  JokerController.deleteAnExistingJoker);
};