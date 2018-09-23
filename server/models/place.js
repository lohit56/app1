const mongoose= require('mongoose');
const Schema = mongoose.Schema;




const placeSchema = new Schema({
    name: { type: String, required: true, max: [128, 'Too long, max is 128 characters']},
    street: { type: String, required: true,  },
    location :{ type: String, required: true, min: [4, 'Too short, min is 4 characters']},
    category: { type: String, required: true, lowercase: true },
    image: { type: String },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
});
module.exports = mongoose.model('Place',placeSchema);


