var github = require('octonode')
var client = github.client('4884e7adb3043523dec296c74fbc3aaa58895ac6');
var ghme = client.me();
var ghuser = client.user('Jung-Woo-sik');



ghuser.repos(function(err,status,body,headers){
	value =0;
	while(value<status.length){
		console.log(status[value]["name"])
		value++;
	}
})



//console.log(ghuser.repos());
//github.repo(function(err,response,body){
//console.log(response)
//})
/*client.get('/user', {}, function (err, status, body, headers) {
  console.log(body); //json object
});*/


