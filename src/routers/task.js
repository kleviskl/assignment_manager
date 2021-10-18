const express = require('express')
const Task = require('../models/task') //task model
const router1 = new express.Router()


router1.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
try {
    await task.save()
    res.status(201).send(task)
} catch (e) {
    res.status(400).send(e)
}
    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router1.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(201).send(task)
    } catch (e) {
        res.status(500).send()
    }
    
    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router1.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }

    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router1.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        res.status(400).send()
    }

    try {
        const task = await Task.findById(req.params.id)
         
        updates.forEach((update) => task[update] = req.body[update]);
        await task.save()

        if(!task){
            return res.status(404).send({error: 'Invalid updates'})
        }

        return res.send(task)
    } catch (e) {
        res.status(400).send()
    }
})

router1.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task){
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router1