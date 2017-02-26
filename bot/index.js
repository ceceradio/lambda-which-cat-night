var WebClient = require('@slack/client').WebClient;

exports.handler = (event, context, callback) => {
    // TODO implement
    var start = 17223;
    var day = Math.floor(Date.now() / 1000 / 86400);
    var cats = ['corky', 'mochi', 'babycat'];
    var token = process.env.SLACK_API_TOKEN || ''; //see section above on sensitive data 
    var message = 'It is ' + cats[(day - start) % 3] + '\'s night.';
    var web = new WebClient(token);
    web.chat.postMessage('house', message, {as_user: true}, function(err, res) {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Message sent: ', res);
        }
        callback(null, {success: true});
    });
};