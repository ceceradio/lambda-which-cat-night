The AWS SDK is configured to look for credentials in the following order:

an IAM Role (if running on EC2)
an AWS CLI profile (from ~/.aws/credentials)
environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN)
a JSON file on disk
Hardcoded credentials passed into grunt-aws
The preferred method of authenticating during local development is by providing credentials in ~/.aws/credentials, it should look something like this:

[default]
aws_access_key_id = <YOUR_ACCESS_KEY_ID>
aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>