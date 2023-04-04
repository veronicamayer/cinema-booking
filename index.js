const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 7878;

app.use(cors());
app.use(bodyParser.json());

let seats = [
    { id: 1, row: "A", number: 1, category: "LOGE", isBooked: false },
    { id: 2, row: "A", number: 2, category: "LOGE", isBooked: false },
    { id: 3, row: "A", number: 3, category: "LOGE", isBooked: false },
    { id: 4, row: "A", number: 4, category: "LOGE", isBooked: false },
    { id: 5, row: "A", number: 5, category: "LOGE", isBooked: false },
    { id: 6, row: "A", number: 6, category: "LOGE", isBooked: false },
    { id: 7, row: "A", number: 7, category: "LOGE", isBooked: false },
    { id: 8, row: "A", number: 8, category: "LOGE", isBooked: false },
    { id: 9, row: "B", number: 1, category: "LOGE", isBooked: false },
    { id: 10, row: "B", number: 2, category: "LOGE", isBooked: false },
    { id: 11, row: "B", number: 3, category: "LOGE", isBooked: false },
    { id: 12, row: "B", number: 4, category: "LOGE", isBooked: false },
    { id: 13, row: "B", number: 5, category: "LOGE", isBooked: false },
    { id: 14, row: "B", number: 6, category: "LOGE", isBooked: false },
    { id: 15, row: "B", number: 7, category: "LOGE", isBooked: false },
    { id: 16, row: "B", number: 8, category: "LOGE", isBooked: false },
    { id: 17, row: "C", number: 1, category: "PARKETT", isBooked: false },
    { id: 18, row: "C", number: 2, category: "PARKETT", isBooked: false },
    { id: 19, row: "C", number: 3, category: "PARKETT", isBooked: false },
    { id: 20, row: "C", number: 4, category: "PARKETT", isBooked: false },
    { id: 21, row: "C", number: 5, category: "PARKETT", isBooked: false },
    { id: 22, row: "C", number: 6, category: "PARKETT", isBooked: false },
    { id: 23, row: "C", number: 7, category: "PARKETT", isBooked: false },
    { id: 24, row: "C", number: 8, category: "PARKETT", isBooked: false },
    { id: 25, row: "D", number: 1, category: "PARKETT", isBooked: false },
    { id: 26, row: "D", number: 2, category: "PARKETT", isBooked: false },
    { id: 27, row: "D", number: 3, category: "PARKETT", isBooked: false },
    { id: 28, row: "D", number: 4, category: "PARKETT", isBooked: false },
    { id: 29, row: "D", number: 5, category: "PARKETT", isBooked: false },
    { id: 30, row: "D", number: 6, category: "PARKETT", isBooked: false },
    { id: 31, row: "D", number: 7, category: "PARKETT", isBooked: false },
    { id: 32, row: "D", number: 8, category: "PARKETT", isBooked: false },
];

app.get("/seats", (req, res) => {
    res.json(seats);
});

app.put("/seats/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const seat = seats.find((seat) => seat.id === id);
    seat.isBooked = true;
    res.json(seat);
});

app.delete("/reset", (req, res) => {
    seats.forEach((seat) => {
        seat.isBooked = false;
    });
    res.json(seats);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
