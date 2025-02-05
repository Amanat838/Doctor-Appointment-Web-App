import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'

//API for adding doctor

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, title, degree, experience, about, fees } = req.body
        const imageFile = req.file
        if (!name || !password || !title || !degree || !experience || !about || !fees) {
            res.json({
                success: false,
                message: "Missing details"
            })
        }

        //Validating email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter valid email" })
        }
        //Validating password
        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password" })
        }

        //Encrypting password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //Upload image to cloudinary and generate a URL from there to use it in database 

        // const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        // const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            // image: imageUrl,
            password: hashedPassword,
            title,
            degree,
            experience,
            about,
            fees
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        res.json({ success: true, message: "Data saved in database" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//Api for admin login
const loginAdmin = (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid Credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//Api to get doctor information from database

const allDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({ success: true, doctors })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addDoctor, loginAdmin, allDoctors }