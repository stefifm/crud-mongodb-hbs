import express from "express";
import indexRoutes from './routes/index.routes';
import {engine} from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';
import Handlebars from 'handlebars'
import {allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access'


const app = express();


//Config
app.set("views", path.join(__dirname, "views"));

app.engine(".hbs", engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
}));
app.set("view engine", ".hbs");


//MIddlewares

app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}))

//Routes
app.use(indexRoutes);

//Static files
app.use(express.static(path.join(__dirname, "public")))

export default app;