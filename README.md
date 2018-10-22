# Cartify

[![Build Status](https://travis-ci.org/faxad/cartify.svg?branch=master)](https://travis-ci.org/faxad/cartify)
[![Coverage Status](https://coveralls.io/repos/github/faxad/cartify/badge.svg?branch=master)](https://coveralls.io/github/faxad/cartify?branch=master)
[![codebeat badge](https://codebeat.co/badges/71b4b333-dc3e-4057-8bb2-004a53e5041c)](https://codebeat.co/projects/github-com-faxad-cartify-master)
[![dependencies Status](https://david-dm.org/faxad/cartify/status.svg)](https://david-dm.org/faxad/cartify)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffaxad%2Fcartify.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffaxad%2Fcartify?ref=badge_shield)

### Introduction
**Cartify** provides the core functionality of an online Shopping Cart. The application is meant to serve as a shell for building e-commerce web applications. Some of the core features include the ability to browse the list of products organized to highlight the key attributes namely category, price, reviews, rating etc. Detail of each product can be viewed along with associated user feedback.  Customers can add/remove items to/from the shopping cart. Administrators can manage inventory by adding new items and revising attributes of the existing items.

**Try it out** https://faxad.github.io/cartify

### Technology Stack
- Angular 7
- Typescript
- Reactive
- Express JS as a Backend
- MongoDB Atlas as DBaaS Provider (MongoDB Cloud Services)
- Error Logging & Reporting using Sentry
- DB Performance Monitoring
- Material Design
- Flexbox Layout

### Usage & Configuration

#### Step 1: Clone!
  ```
  git clone --recursive https://github.com/faxad/cartify.git
  ```

#### Step 2: Configure Database Provider (Optional)
- You can either setup your own MongoDB instance or register with a Database-as-a-Service provider 
- MongoDB DBaaS Providers: mLab, MongoDB Atlas..

#### Step 3: Configure Backend - API (Optional)
- Create a `.env` file in the project's root directory
- Set the required environment variables as per the [instructions](https://github.com/faxad/xpress)

#### Step 4: Configure Frontend - Angular
- The frontend is pre-configured to use APIs hosted on OpenShift which consumes MongoDB cloud services to persists data.
- If you wish to run backend locally, you have to configure the following variables in *./src/environments/environment.ts*
  ```
  apiUrl: 'http://<BACKEND_IP>:<PORT>/',
  sentryDns: 'https://<SENTRY_DSN>'
  ```
- You may have to register with [Sentry](https://sentry.io) for error logging, reporting and monitoring

#### How to run Cartify?
- Install required node packages
  ```
  npm install
  ```
  
- Start the backend server (API)
  ```
  npm run backend
  ```
  
- Start the angular application
  ```
  npm start
  ```

#### Demo Instructions
- Open browser and navigate to http://localhost:4200
- Sign in using the following credentials:
  - **administrator:** admin / pass
  - **user:** user / pass


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffaxad%2Fcartify.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffaxad%2Fcartify?ref=badge_large)
