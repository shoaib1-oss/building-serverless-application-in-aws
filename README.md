# Serverless Application on AWS

Welcome to the repository for my serverless application project built using AWS services. This project demonstrates the use of AWS S3, DynamoDB, Lambda, and API Gateway to create a fully functional serverless application.

## Table of Contents
- [Introduction](#introduction)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
This project showcases the process of building a serverless application on AWS. The application serves web content from S3, interacts with a DynamoDB table, utilizes Lambda functions for backend logic, and exposes APIs via API Gateway.

## Architecture
The architecture of the application includes:
- **S3 Bucket:** For static website hosting.
- **DynamoDB:** For storing and retrieving data.
- **Lambda:** For serverless compute functions.
- **API Gateway:** For creating RESTful APIs.

## Prerequisites
Before you begin, ensure you have the following:
- An AWS account
- AWS CLI installed and configured
- Basic knowledge of AWS services
- Node.js installed

## Setup Instructions
1. **Create an S3 Bucket:**
   - Bucket Name: `ss-project`
   - Uncheck "Block all public access"
   - Upload `app.js`, `index.html`, and `style.css`
   - Enable static website hosting with `index.html`

2. **Set Bucket Policy:**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::my-linkedin-project/*"
       }
     ]
   }
reate DynamoDB Table:

Table Name: recipes

Partition Key: id

Add items from Recipes.json

Create Lambda Function:

Function Name: get-recipes

Runtime: Node.js16

Deploy code from lambda-code.js

Attach AmazonDynamoDBFullAccess policy

Create API Gateway:

API Name: my-api

Resource Name: recipes

Method Type: GET

Enable CORS for GET

Deploy API:

Create a new stage named prod

Deploy API

Update and Upload app.js:

Update app.js with the deployed API URL

Upload the updated app.js to S3

Usage
Test the Application:

Access the static website hosting URL from S3

Ensure all components (S3, DynamoDB, Lambda, API Gateway) are functioning correctly

Interacting with the Application:

The application allows you to fetch data from DynamoDB using the API

Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License.

Contact
If you have any questions or feedback, feel free to reach out:

LinkedIn
