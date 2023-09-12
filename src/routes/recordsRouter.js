const express = require('express');
const router = express.Router();
const recordController = require('../controller/recordController');

router.route('/')
.get(recordController.getRecords)
.post(recordController.createRecord
    )
router.route('/:id')
.get(recordController.getRecordById)
.put(recordController.updateRecord)
.delete(recordController.deleteRecord);

module.exports = router;
