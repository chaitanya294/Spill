const express = require("express");
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const prisma = new PrismaClient()
const router = express.Router();

router.post("/", async (req, res) => {
    const {username, firstname, surname, email_address, workplace, new_password} = req.body;
    let hashed = await bcrypt.hash(new_password, 4);
    try{
        const response = await prisma.user.create({
            data : {
                email : email_address,
                username : username,
                firstname : firstname,
                surname : surname,
                workplace : workplace,
                password : hashed
            },
        });
        res.json({
            "msg" : "ok"
        })
    }
    catch {
        res.json({
            "msg" : "Something went wrong"
        })
    }
});

module.exports = router;