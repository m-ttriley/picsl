$(function() {
        $('#title-text').fadeIn(3000);
        $('#start').fadeIn(3000);
        $('#start').click(function(){
           $('#background').fadeOut(1000);
           $(this).fadeOut(1000);
           $('#upload-form').fadeIn(1500);
       });

        $('#upload').click(function() {
           $('#upload-form').fadeOut(1000);
           $('#app').fadeIn(1000);
       });

        $('#image-input').change(function() {
            var files = this.files;
            var file = files[0];
            if(file == null){
                alert('No file selected');
            }
            else {
                get_signed_request(file);
            }
        });

        function get_signed_request(file){
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "/sign_s3?file_name="+file.name+"&file_type="+file.type);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        var response = JSON.parse(xhr.responseText);
                        upload_file(file, response.signed_request, response.url);
                    }

                    else {
                        alert("Could not get signed URL.");
                    }
                }
            };
            xhr.send();
        }
        function upload_file(file, signed_request, url){
            var xhr = new XMLHttpRequest();
            xhr.open("PUT", signed_request);
            xhr.setRequestHeader('x-amz-acl', 'public-read');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log('uploaded');
                }
            };
            xhr.onerror = function() {
                alert("Could not upload file.");
            };
            xhr.send(file);
        }
    });