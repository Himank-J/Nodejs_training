const express = require('express')
const mongoose = require('mongoose')

const user = require('../models/userModel.js')

const router = express.Router();

export const getUsers = async (req, res) => { 
    try {
        const users = await user.find();
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => { 
    const { id } = req.params;

    try {
        const person = await user.findById(id);
        
        res.status(200).json(person);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const u = req.body;

    const newuser = new u({ ...u, name: req.name, email: req.email, password: req.password, mobile: req.mobile, country: req.country, area: req.area, pincode: req.pincode, address: req.address})

    try {
        await newuser.save();

        res.status(201).json(newuser );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, mobile, country, area, pincode, address } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updateduser = { name, email, password, mobile, country, area, pincode, address, _id: id };

    await user.findByIdAndUpdate(id, updateduser, { new: true });

    res.json(updateduser);
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    await user.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}

export default router;