const asyncHandler = require('express-async-handler')

const Todo = require('../models/todoModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const todos = await Todo.find()
    res.status(200).json(todos)
    // res.json({ message: 'Get goals' })
})

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    // console.log(req.body)
    if(!req.body.text) {
        res.status(400)
        throw new Error('Pls add text pls')

    }

    const goal = await Todo.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Todo.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Todo.findByIdAndUpdate(req.params.id, req.body,
        {new: true}) // creates if it doesn't exist

    res.status(200).json(updatedGoal)
})

// @desc Get goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Todo.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
};