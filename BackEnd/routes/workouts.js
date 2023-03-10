const express = require('express');
const {
    createWorkout,
    getSingleWorkout,
    getWorkouts, 
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController')

const router = express.Router();

//GET all workouts 
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getSingleWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a single workout
router.delete('/:id', deleteWorkout)
//UPDATE a single workout
router.patch('/:id', updateWorkout)
module.exports = router;