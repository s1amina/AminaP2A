const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000;
const app = express();

// устанавливаем настройки для файлов layout
app.engine("hbs", expressHbs.engine(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)


async function start() {
    try {
        await mongoose.connect('mongodb+srv://aminamusabekova07:V4oNaeX0lM1iqTJX@cluster0.vhekthl.mongodb.net/todo', {
            useNewUrlParser: true
        })
        app.listen((PORT), () => {
            console.log('start server....')
        })
    } catch (e) {
        return console.log(e)
    }
}

start()