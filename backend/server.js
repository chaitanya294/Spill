const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use('/login', require("./routes/login.js"));
app.use('/signup', require("./routes/signup.js"));
app.use('/setBlog', require("./routes/setBlog.js"));
app.use('/Blogs', require("./routes/Blogs.js"));
app.use('/likes', require("./routes/likes.js"));
app.use('/deleteBlog', require("./routes/deleteBlog.js"));
app.use('/createBlog', require("./routes/createBlog.js"));
app.use('/getUserBlog', require("./routes/getUserBlog.js"));
app.use('/updateBlog', require("./routes/updateBlog.js"));
app.use('/getBlogs', require("./routes/getBlogs.js"));

app.listen(3000, () => {
    console.log("Server running on port 3000");
})
