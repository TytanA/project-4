const Post = require("../models/post");

const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); 
const { v4: uuidv4 } = require("uuid");
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

module.exports = {
  create,
  index,
  post,
  deletePost
};

async function deletePost(req, res){
    try {
        const post = await Post.findOneAndDelete({_id: req.params.id, username: req.params.username})
        res.json({})
    }catch(err){
        console.log(err)
        res.status(400).json({error: err})
    }
}

async function post(req, res){
    try{
    console.log('post function in controller popping off')
    const post = await Post.findById(req.params.id)
    if(!post) return res.status(404).json({error: 'Post not found'})
    res.status(200).json({ data: post })
    } catch(err){
        console.log(err, 'post controller error')
        res.status(400).json({ error: 'Something went wrong'})
    }

}
function create(req, res) {
    const key = `disasterdish/posts/${uuidv4()}-${req.file.originalname}`
    const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer}

    s3.upload(params, async function (err, data) {

        if (err) return res.status(400).json({ err });
        try {
            const post = await Post.create({
                title: req.body.title,
                ingredients: req.body.ingredients,
                directions: req.body.directions,
                user: req.user,
                photoUrl: data.Location
            })
            res.status(201).json({ data: post })
        }catch(err){

        }
    })
}

async function index(req, res) {
    try{
        const posts = await Post.find({}).populate('user').exec()
        res.status(200).json({ data: posts })
    }catch(err){
        res.status(400).json({ err })
    }
}