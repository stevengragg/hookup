import mongoose from 'mongoose';


const cardsDBSchema = mongoose.Schema({
    name: String,
    picture: String
})

export default mongoose.model('cards', cardsDBSchema);