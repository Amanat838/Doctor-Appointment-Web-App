import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    // img: {type: String, required:true},
    title: {type: String, required:true},
    degree: {type: String, required:true},
    experience: {type: String, required:true},
    about: {type: String, required:true},
    // status: {type: Boolean, required:true},
    fees: {type: Number, required:true},
    // date: {type: Number, required:true},
    slots_booked: {type: Object, default:{}},
},{minimize:false})  //minimize:false is used so that we can use empty object as default value in a property of schema


const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)
export default doctorModel