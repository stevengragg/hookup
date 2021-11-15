import mongoose from 'mongoose';


const cardsDBSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model('cards', cardsDBSchema);