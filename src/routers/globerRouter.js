import express from "express";

const globalRouter = express.Router();

const handlehome = (req, res) =>res.send("Home");

globalRouter.get("/", handleHome);


export default globalRouter;