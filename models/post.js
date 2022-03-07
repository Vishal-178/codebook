const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // include the array of the ids of all comments in this post schema itself
    comment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Commnet'
    }]
},{
    timestamps:true
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;