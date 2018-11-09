const express = require('express')
const router = express.Router()
const creatureController = require('../controllers/creatureController')

router.get('/api/creature', creatureController.index)
router.get('/api/creature/:creatureId', creatureController.show)
router.get('/api/creature/', creatureController.create)
router.get('/api/creature:creatureId', creatureController.update)
router.get('/api/creature/:creatureId', creatureController.delete)

module.exports = router
