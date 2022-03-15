const express   = require('express')
const router = express.Router();
const ClassroomController  = require('../controllers/ClassroomController.js')

router.get('/', ClassroomController.getClassrooms);
router.post('/add', ClassroomController.addClassroom);
router.get('/:id', ClassroomController.getClassroomById);
router.put('/:id', ClassroomController.editClassroom);
router.delete('/:id', ClassroomController.deleteClassroom);

module.exports = router  