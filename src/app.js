import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

//MROGAN MUESTRA LA PETICION QUE HA LLEGADO A CONSOLA
app.use(morgan("dev"));
//CONVIERTE LOS REQUEST BODY EN FORMATO JSON
app.use(express.json());
//CONVIERTE LAS COOKIES
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;
