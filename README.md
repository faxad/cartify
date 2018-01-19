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

### Usage & Configuration (Update In Progress - Stay Tuned!)

#### Step 1: Configure SSO & Token Based Authentication Provider
- 

  ```typescript

  ```

#### Step 2: Configure Database Provider
- 

  ```javascript
  ```

#### How to run Cartify?
- Install required node packages
  ```
  npm install
  ```
  
- Bring up the server (API)
  ```
  node ./srv/server.js
  ```
  
- Bring up the angular application
  ```
  npm start
  ```
  
- Navigate to the following URL http://localhost:4200

#### Demo
- Execute the above commands to start Cartify
- Sign up for an account or browse in view only mode

If you don't wish to register with the providers as mentioned in Step 1 & 2, it's ok, you can still test run the application without the permissions to perform any administrator related tasks
