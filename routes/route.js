/*
var express = require('express');
var router = express.Router();

//var s3 = require('s3');

var client = s3.createClient({
  maxAsyncS3: 20,     // this is the default 
  s3RetryCount: 3,    // this is the default 
  s3RetryDelay: 1000, // this is the default 
  multipartUploadThreshold: 20971520, // this is the default (20 MB) 
  multipartUploadSize: 15728640, // this is the default (15 MB) 
  s3Options: {
    accessKeyId: 'AKIAIHZGV5YCCHZ6MDMQ',
    secretAccessKey: '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',
    // any other options are passed to new AWS.S3() 
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property 
  },
})

var fs = require('fs');
var S3FS = require('s3fs');	//abstraction over Amazon S3's SDK
var s3fsImpl = new S3FS('pixelphotos', {
       accessKeyId: 'AKIAIHZGV5YCCHZ6MDMQ',
       secretAccessKey: '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'
   	});


router.get('/', function(req, res) {
	res.sendFile('index.html');
});

// POST a new Path 
router.post('/api/image', upload.single('photo'), function(req, res, next) {
    console.log(req.file);
});

Output:
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
module.exports = router;
*/
