var express = require('express');
var router = express.Router();

var multer = require('multer'),	//for handling multipart/form-data
upload = multer({dest: 'uploads/'}),
fs = require('fs'),
S3FS = require('s3fs'),	//abstraction over Amazon S3's SDK
s3fsImpl = new S3FS('pixelphotos', {
       accessKeyId: 'AKIAJLI6FMKSEFRDVCSQ',
       secretAccessKey: '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'
   	});


router.get('/', function(req, res) {
	res.sendFile('index.html');
});

// POST a new Path 
router.post('/api/image', upload.single('photo'), function(req, res, next) {
	//var file = photo.files.file;
	console.log(req.file);

/* Output:
{ 
	fieldname: 'file',
	originalname: 'ice-boxes.jpg',
	name: '2658a8f666e33ab1ec39dc8b7b20970b.jpg',
	encoding: '7bit',
	mimetype: 'image/jpeg',
	path: 'public/uploads/2658a8f666e33ab1ec39dc8b7b20970b.jpg',
	extension: 'jpg',
	size: 88076,
	truncated: false,
	buffer: null 
 }


	//Create a file stream
   var stream = fs.createReadStream(file.path);	

   //writeFile calls putObject behind the scenes
   s3fsImpl.writeFile(file.name, stream).then(function () {	
        fs.unlink(file.path, function (err) {
            if (err) {
                console.error(err);
            }
        });
        res.status(200).end();
    });
*/
});


module.exports = router;