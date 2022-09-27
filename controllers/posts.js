const Post = require("../models/post");

const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); 
const { v4: uuidv4 } = require("uuid");
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

module.exports = {
  create,
  index,
};

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
                photoUrl: data.location
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