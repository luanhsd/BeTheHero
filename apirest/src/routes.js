const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()


routes.post('/sessions', SessionController.store)

//ONGS'S Routes
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

//Profilers's Routes
routes.get('/profile', ProfileController.index)


//Incidents's Routes
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.store)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes