request({
    method: "GET",
    url: 'http://169.254.169.254/latest/meta-data/local-ipv4'
} ,function(err, data){
    if(err){
        cb(err, null);
    }else{
        var public_ip = data.body;
        document.getElementById("myip").innerHTML=public_ip;
        cb(null, public_ip);
    }
});


