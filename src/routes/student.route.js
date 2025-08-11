import express from 'express';
import { addStudent, getAllStudents, getStudentByEmail, deleteStudent, updateStudent } from '../controllers/student.controller.js';

const router = express.Router();

router.post('/', addStudent);
router.get('/all', getAllStudents);
router.post('/search', getStudentByEmail);
router.delete('/delete/:id', deleteStudent);
router.patch('/update/:id', updateStudent);

export default router;