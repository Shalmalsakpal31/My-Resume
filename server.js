const express = require('express')
const app = express()
const path = require('path')
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get("/", (req, res) => {
    res.render("index")
})




app.post("/", async (req, res) => {
    const {email,subject,message} = await req.body
    // console.log(data);
    const Auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "co1805630110@gmail.com",
            pass: "gensvtkcrhrbbkic"
        }
    });

    const receiver = {
        to: "maheshsakpal22@gmail.com",
        subject: `${subject}`,
        text: `Sent from: ${email}, /n Message: ${message}`
    };
    Auth.sendMail(receiver, (error, emailRes) => {
        if (error) {
            console.log(error);
        } console.log("Success");
        return res.redirect("/")
    })

})

app.listen(PORT, () => { console.log(`Connection succesfull at port: ${PORT}`); })