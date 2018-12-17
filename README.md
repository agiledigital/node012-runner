# Node 0.12 Runner
This is an alpine based image with libraries and tools installed for running **NodeJS 0.12** web apps.
Primarily designed for the hosting of static content, but also supports config loading from Hocon configuration via ngConstant for Angular 1.
Expects build artifacts mounted at /home/runner/artifacts.

This runner also provides ability to fetch prebuilt artifacts from an AWS S3 bucket location. The S3 URI should be 
provided to the runner image as argument and also you need to provide ENVs for AWS credentials (that is configured to fetch artifacts from specified S3 bucket) to the runner. 

e.g. ```docker run -e AWS_ACCESS_KEY_ID={you_access_key_id} -e AWS_SECRET_ACCESS_KEY={your_secret} node012-runner s3://artifacts/component/release_number```

