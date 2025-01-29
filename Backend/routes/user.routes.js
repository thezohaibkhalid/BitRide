const express = require('express');
const { model } = require('mongoose');
const router =express.Router();
const {body} = require("express-validator")
import userController from "../controllers/user.controller"
router.post('/register', 
    body("email").isEmail().withMessage("Email is not valid"),
    body("fullname.firstName").isLength({min:3}).withMessage("First name must be of at least 3 characters"),
    body("password").isLength({min:6}).withMessage(
        "The password must be of at least 6 words long"
    ),
    userController.registerUser
)

model.export = router;