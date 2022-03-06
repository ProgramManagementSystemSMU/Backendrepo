let express = require('express');
let router = express.Router();

const EmployeeController  = require('../controllers/EmployeeController')
const upload              = require('../middleware/upload')
const authenticate        = require('../middleware/authenticate')

router.get('/', EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/store', upload.array('avatar[]'), EmployeeController.store)
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)
