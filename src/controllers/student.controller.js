import { Student } from "../models/student.model.js";

const addStudent = async (req, res) => {
    try {
        const {name, email, age, course, city} = req.body;

        if(!name || !email || !age || !course || !city){
            return res.status(400).json({message:"All fields are required"})
        }

        const student = await Student.create(req.body);
        
        return res.status(200).json(
            {
                message: "student created successfully",
                student
            }
        )

    } catch (error) {
        console.log("Add student error", error.message);
        return res.status(400).json({message: "add student error"})
        
    }
}

export { addStudent }