#!/usr/bin/env bash

npm run build
aws s3 rm s3://frankii-website/ --recursive
aws s3 cp dist s3://frankii-website/ --recursive