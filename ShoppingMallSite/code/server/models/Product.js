const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = mongoose.Schema({
    write: {
        type: Schema.Types.ObjectId,
        ref : 'User'
    },
    title : {
        type : String,
        maxLength : 50
    },
    description : {
        type : String
    },
    price : {
        type : String,
        default : 0
    },
    images : {
        type : Array,
        default : []
    },
    solid : {
        type : Number,
        maxLength : 100,
        default : 0
    },
    continents : {
        type: Number,
        default : 1
    },
    views : {
        type : Number,
        default : 0
    }
}, { timestamps: true})

productSchema.index({
    title:'text',
    description : 'text'
}, {
    weights: { 
        title : 5,
        description : 1
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }