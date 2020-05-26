# Quick and easy deploy to aws s3

## Install awscli

``` shell
pip install awscli --upgrade
```

## Set the authentication details as environment variables:
``` shell
export AWS_ACCESS_KEY_ID='<key_id>'
export AWS_SECRET_ACCESS_KEY='<secret_key>'
export AWS_DEFAULT_REGION='<region>'
export AWS_BUCKET='<bucket_name>'
```

## Create the bucket
``` shell
aws s3 mb s3://${AWS_BUCKET}
aws s3 website s3://${AWS_BUCKET} \
  --index-document index.html

```

## Build and upload the files

``` shell
npm run build:staging
aws s3 sync \
  --acl public-read \
  --sse \
  --delete \
  dist/expert-consultation-client \
  s3://${AWS_BUCKET}
```

## Check the deployment
The client should be available at http://${AWS_BUCKET}.s3-website.${AWS_DEFAULT_REGION}.amazonaws.com/
