#!/usr/bin/env bash

aws s3 rm s3://frankii-website/ --recursive
aws s3 cp dist s3://frankii-website/ --recursive
