const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
var Place = require('./place');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://api-user:abcd1234@cluster0.c4lkg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();
// function(req, res) {} equiavalent (req,res)=> /ES6 command 
router.get('/', (req,res)=>{
	res.json({message:"hooray! welcome to my API!"});
})

router.post('/sum', (req,res)=>{
	var num1 = req.body.num1;
	var num2 = req.body.num2;
	var sum = num1+num2
	res.json({message:"The sum is "+sum});

router.post('/place', (req,res)=>{
	var place = new Place();
	place.name = req.body.name;
	place.description = req.body.description;
	place.country = req.body.country;
	place.categories = req.body.categories;
	place.imageUrl = req.body.imageUrl;
	place.save(err=>{
		if(err){
			res.send(err);
		} else {
			res.send({message:"New place has been added!"})
		}
	})

})

// I will prefix all my api with /api
app.use('/api', router);

app.listen(port);

console.log("Magic happens at page "+port);
