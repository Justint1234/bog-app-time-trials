const creature = require('../models/Creature')

const creatureController = {
    index: (req, res) => {
        creature.find({})
        .then((creatures) => {
            res.send(creatures)
        })
    },
    show: (req, res) => {
        Creature.findById(req.params.creatureId).populate('creature')
        .then((creature) => {
            res.send(creature)
        })
    },
    update: (req, res) => {
        Creature.findByIdAndUpdate(req.params.creatureId, req.body)
        .then((updatedCreature) => {
            updatedCreature.save()
            res.send(updatedCreature)
        })
    },
    delete: (req, res) => {
        Creature.findByIdAndDelete(req.params.creatureId)
        .then(() => {
            res.send(200)
        })
    },
    create: (req, res) => {
        Creature.create(req.body)
        .then((creature) => {
            res.send(creature)
        })
    }
}
module.exports = creatureController