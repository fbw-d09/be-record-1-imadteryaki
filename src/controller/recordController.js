const Record = require("../models/Record");

// Get all records
exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.status(200).json(records);
    console.log('All records have been retrieved');
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get record by ID
exports.getRecordById = async (req, res) => {
  const recordId = req.params.id;
  try {
    const record = await Record.findById(recordId);
    if (!record) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(record);
    console.log('Record has been retrieved by ID');
  } catch (error) {
    console.error('Error fetching Record by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new Record
exports.createRecord = async (req, res) => {
  try {
    const newRecord = new Record(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
    console.log('New record has been created');
  } catch (error) {
    console.error('Error creating record:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update record by ID
exports.updateRecord = async (req, res) => {
  const recordId = req.params.id;
  const updatedRecordData = req.body;
  try {
    const updatedRecord = await User.findByIdAndUpdate(recordId, updatedRecordData, { new: true });
    if (!updatedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(updatedRecord);
    console.log('Record has been updated');
  } catch (error) {
    console.error('Error updating record:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete record by ID
exports.deleteRecord = async (req, res) => {
  const recordId = req.params.id;
  try {
    const deletedRecord = await User.findByIdAndRemove(recordId);
    if (!deletedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(204).send('Record has been deleted');
    console.log('Record has been deleted');
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
