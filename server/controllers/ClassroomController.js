const Classroom = require("../models/Classroom.js");
// Get all Classrooms
const getClassrooms = (request, response) => {
  Classroom.find()
    .then((classrooms) => {
      response.status(200).json(classrooms);
    })
    .catch((error) => {
      response.status(409).json({ message: error.message });
    });
};

// Save data of the Classroom in database
const addClassroom = (request, response) => {
  // retreive the info of Classroom from frontend
  const classroom = request.body;
  console.log("inside");

  const newClassroom = new Classroom(classroom);

  newClassroom
    .save()
    .then((classroom) => {
      if (classroom) {
        response.status(201).json(classroom);
      } else {
        response.status(409).json({ message: " cannot add Classroom " });
      }
    })
    .catch((error) => {
      response.status(409).json({ message: error.message });
    });
};

// Get a Classroom by id
const getClassroomById = (request, response) => {
  Classroom.findById(request.params.id)
    .then((classroom) => {
      if (classroom) {
        response.status(200).json(classroom);
      } else {
        response.status(204).json({ message: " cannot find Classroom " });
      }
    })
    .catch((error) => {
      response.status(409).json({ message: error.message });
    });
};

// Save data of edited Classroom in the database
const editClassroom = (request, response) => {
  Classroom.findById(request.params.id).then((classroom) => {
    if (classroom) {
      classroom = request.body;

      const editClassroom = new Classroom(classroom);

      Classroom.updateOne({ _id: request.params.id }, editClassroom)
        .then((editedClassroom) => {
          response.status(201).json(editedClassroom);
        })
        .catch((error) => {
          response.status(409).json({ message: error.message });
        });
    } else {
      response.status(404).json({ message: " cannot find Classroom " });
    }
  });
};

// deleting data of Classroom from the database
const deleteClassroom = (request, response) => {
  Classroom.deleteOne({ _id: request.params.id })
    .then((classroom) => {
      response.status(201).json("Classroom deleted Successfully");
    })
    .catch((error) => {
      response.status(409).json({ message: error.message });
    });
};
module.exports = {
  getClassrooms,
  addClassroom,
  getClassroomById,
  editClassroom,
  deleteClassroom,
};
