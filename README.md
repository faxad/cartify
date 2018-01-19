# Cartify

[![Build Status](https://travis-ci.org/faxad/cartify.svg?branch=master)](https://travis-ci.org/faxad/cartify)
[![Coverage Status](https://coveralls.io/repos/github/faxad/cartify/badge.svg?branch=master)](https://coveralls.io/github/faxad/cartify?branch=master)
[![codebeat badge](https://codebeat.co/badges/71b4b333-dc3e-4057-8bb2-004a53e5041c)](https://codebeat.co/projects/github-com-faxad-cartify-master)
[![dependencies Status](https://david-dm.org/faxad/cartify/status.svg)](https://david-dm.org/faxad/cartify)

### Introduction
**Cartify** provides the core functionality of an online Shopping Cart. The application can serve as a shell for building e-commerce web applications. Visitors can browse the list of available products, further dig deep into the detail of each individual product, search for a product, check availability, price etc. Non-authenticated users can register for an account which enables them to purchase items, manage their shopping cart and submit reviews. Users with administrator rights can manage and maintain inventory of shop items. Developers should find code organized enough to rapidly customize almost every aspect of the application as they see fit.

### Technology Stack
- Angular 5
- Typescript
- Reactive Style
- Express JS as a Backend
- MongoDB Atlas as DBaaS Provider (MongoDB Cloud Services)
- Error Logging & Reporting using Sentry
- DB Performance Monitoring
- Material Design
- Flexbox Layout

### Usage & Configuration

#### Step 0: Clone both Frontend & Backend
  ```
  git clone --recursive https://github.com/faxad/cartify.git
  ```

#### Step 1: Configure Database Provider (Optional)
- You can either setup your own Mongo DB instance or use an existing cloud database providers 
- Mongo DBaaS Providers: mLab, MongoDB Atlas..

#### Step 2: Configure Backend - API (Optional)
- Create a `.env` file in the root directory
- Set the required environment variables as per the instructions mentioned [here](https://github.com/faxad/xpress)

#### Step 3: Configure Frontend - Angular
- Configure the following variables in ./src/environments/environment.ts
  ```
  apiUrl: 'http://<BACKEND_IP>:<PORT>/',
  sentryDns: 'https://<SENTRY_DSN>' OR use exsiting
  ```
- Alterntively, you can skip Step 1 - 2 if you want to use an existing Backend setup for demonstration purpose
- Backend: https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/

#### How to run Cartify?
- Install required node packages
  ```
  npm install
  npm run postinstall
  ```
  
- Bring up the backend server (API)
  ```
  npm run backend
  ```
  
- Bring up the angular application
  ```
  npm start
  ```
  
- Navigate to the following URL http://localhost:4200

#### Demo
- Execute the above commands to start Cartify
- Sign in using the following credentials:
  - administrator: admin@me.com / anything
  - user: user@me.com / anything
