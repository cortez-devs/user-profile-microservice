import express from 'express';
import profilesRouter from './routes/profiles.mjs';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use("/profiles", profilesRouter);

app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "user-profile-microservice" });
});

app.listen(PORT, () => {
    console.log(`User Profile Microservice is running on http://localhost:${PORT}`);
});