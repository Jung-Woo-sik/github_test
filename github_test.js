var https = require('https'); // http를 https로 고쳤습니다.
var request = https.request({
    hostname: 'api.github.com',
    path: '/user',
    method: 'GET',
    auth: 'Jung-Woo-sik:gksrmf1!', // ****에는 여러분들의 비밀번호를 넣습니다.
    headers: {
        'User-Agent' : 'Node Tester/0.0.1',
        'Content-Type' : 'application/json'
    }
}, function(response) {
    var body = "";
    response.on('data', function(contents) {
        body += contents;
    });
    response.on('end', function() {
        console.log(response.statusCode);
        console.log(JSON.parse(body.toString())); // JSON 파싱을 추가했습니다.
    });
});
request.on('error', function(e) {
    console.log("Error!", e.message);
});
request.end();

