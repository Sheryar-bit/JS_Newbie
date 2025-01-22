const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Importing bcrypt

// Define person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['Chef', 'Waiter', 'Manager'],
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

personSchema.pre('save', async function(next) {
    const person = this;

    // Hash the password only if it has been modified (or it's new)
    if (!person.isModified('password')) // No need for hashing as the user password is already saved
        return next();
    try {
        // Hash password generation
        const salt = await bcrypt.genSalt(10); // genSalt is used to generate salt

        // Hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);

        // Overriding the plain text password with hashed password
        person.password = hashedPassword;
        next();
    } catch (err) {
        return next(err);
    }
});

personSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        // Using bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw err;
    }
};

// Create Person model
const person = mongoose.model('person', personSchema);
module.exports = person;