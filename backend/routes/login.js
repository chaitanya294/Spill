const express = require("express");
const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const prisma = new PrismaClient()
const router = express.Router();

router.post("/", async (req, res) => {
    const {username, password} = req.body;
    const response = await prisma.user.findUnique({
        where: {
          username: username,
        },
    });
    if(response){
        const correct = await bcrypt.compare(password, response.password);
        const token = await jwt.sign({"_id" : response.id}, process.env.SECRET_KEY);
        if(correct){
            res.json({
                "token" : token
            });
        }
        else{
            res.json({
                "msg" : "Invalid password"
            })
        }
    }
    else{
        res.json({
            "msg" : "username does not exist"
        })
    }
});

module.exports = router;