import mongoose from "mongoose";

const scissorsSchema = new mongoose.Schema({
    urlCode: { type: String },
    longUrl: {type: String, reuired: true },
    shortUrl: { type: String, unique: true },
    visits: { type: Number, default: 0 },
    visitsFB: { type: Number, default: 0 },
    visitsYT: { type: Number, default: 0 },
    visitsIG: { type: Number, default: 0 },
    visitsTW: { type: Number, default: 0 },
    date: { type: String, default: Date.now }
});


export default mongoose.model('Scissors', scissorsSchema);