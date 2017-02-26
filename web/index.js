var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
var lambda = new AWS.Lambda();

exports.handler = (event, context, callback) => {
    var params = {
    FunctionName: 'CatBotLong', // the lambda function we are going to invoke
    InvocationType: 'Event',
    LogType: 'Tail'
  };

  lambda.invoke(params, function(err, data) {
    if (err) {
      context.fail(err);
    } else {
      context.succeed('Lambda_B said '+ data.Payload);
    }
  })
  context.callbackWaitsForEmptyEventLoop = true;
  callback(null, {statusCode: 200, body: "", headers: {}});
};