import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    company: {
        type: String,
    },
    created_date: {
        default: Date.now,
        type: Date,
    },
    email: {
        type: String,
    },
    firstName: {
        required: "Enter a first name",
        type: String,
    },
    lastName: {
        required: "Enter a last name",
        type: String,
    },
    phone: {
        type: Number,
    },
});

export const Contact = mongoose.model("Contact", ContactSchema);
