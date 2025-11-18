import express from 'express'
import cors from 'cors'
import noteRoutes from "./routes/note.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api", noteRoutes);

app.listen(port, () => {
    console.log('Server is running port:' + port)
})
