var http = require('http');
var dispatcher = require('httpdispatcher');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = require('url');
var query = require('querystring');


// Server Config

const PORT=8080;
var mongoDBUrl = 'mongodb://fawad:fawad@ds013574.mlab.com:13574/foxtaildb';


function handleRequest(request, response){
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});

// Static Config

dispatcher.setStatic('resources');

// Dispatcher: Get all items

var getAllItems = function(db, callback) {
   var cursor =db.collection('items').find();
   cursor.toArray(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        callback(doc)
      }
   });
};

dispatcher.onGet("/items", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    MongoClient.connect(mongoDBUrl, function(err, db) {
      assert.equal(null, err);
      getAllItems(db, function(result) {
          res.end(JSON.stringify(result));
          db.close();
      });
    });
}); 

// Dispatcher: Get item by identifier

var getItemById = function(db, id, callback) {
   var cursor =db.collection('items').find({ "id": id });
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        callback(doc)
      }
   });
};


dispatcher.onGet("/item", function(req, res) {
    var url_parts = url.parse(req.url, true);
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    MongoClient.connect(mongoDBUrl, function(err, db) {
      assert.equal(null, err);
      getItemById(db, url_parts.query.id, function(result) {
          res.end(JSON.stringify(result));
          db.close();
      });
    });
}); 

// Dispatcher: Set item

var addItem = function(db, body, callback) {
    db.collection('items').insertOne(JSON.parse(body), function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the items collection.");
    callback();
  });
};

dispatcher.onPost("/insert", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, {'Content-Type': 'application/json'});

    MongoClient.connect(mongoDBUrl, function(err, db) {
      assert.equal(null, err);
      addItem(db, req.body, function() {
          res.end(JSON.stringify({ msg: '' }))
          db.close();
      });
    });
}); 

// Dispatcher: Update item

var updateItem = function(db, body, callback) {
    getItemById(db, JSON.parse(body).id, function(r) {
        db.collection('items').updateOne(
          r, {$set: JSON.parse(body)}, function(err, result) {
        assert.equal(err, null);
        console.log("Updated a document in the items collection.");
        callback();
      });
    });

};

dispatcher.onPost("/update", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, {'Content-Type': 'application/json'});

    MongoClient.connect(mongoDBUrl, function(err, db) {
      assert.equal(null, err);
      updateItem(db, req.body, function() {
          res.end(JSON.stringify({ msg: '' }))
          db.close();
      });
    });
}); 

/////////////// CART////////////////////////////

// Dispatcher: Get cart items by user identifier

var getUserCart = function(db, userId, callback) {
   var cursor =db.collection('cart').find({ "userId": userId });
   cursor.toArray(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        callback(doc)
      }
   });
};


dispatcher.onGet("/cart", function(req, res) {
    var url_parts = url.parse(req.url, true);
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    MongoClient.connect(mongoDBUrl, function(err, db) {
      assert.equal(null, err);
      getUserCart(db, url_parts.query.userId, function(result) {
          res.end(JSON.stringify(result));
          db.close();
      });
    });
});

// Dispatcher: Set cart

var addCartItem = function(db, body, callback) {
    db.collection('cart').insertOne(JSON.parse(body), function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the cart collection.");
    callback();
  });
};

dispatcher.onPost("/add", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, {'Content-Type': 'application/json'});

    MongoClient.connect(mongoDBUrl, function(err, db) {
      assert.equal(null, err);
      addCartItem(db, req.body, function() {
          res.end(JSON.stringify({ msg: '' }))
          db.close();
      });
    });
});

// Dispatcher: Get cart item by identifier

var getCartItemById = function(db, id, callback) {
  console.log(id)
   //oid = new ObjectId(id);
   var cursor =db.collection('cart').find({"itemId": id });
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        console.log(doc)
        callback(doc)
      }
   });
};

// Dispatcher: Update cart item

var updateCartItem = function(db, body, callback) {
    body = JSON.parse(body)
    body._id = new ObjectId(body._id)
    getCartItemById(db, body.itemId, function(r) {
        db.collection('cart').updateOne(
          r, {$set: body}, function(err, result) {
        assert.equal(err, null);
        console.log("Updated a document in the cart collection.");
        callback();
      });
    });

};

dispatcher.onPost("/revise", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, {'Content-Type': 'application/json'});

    MongoClient.connect(mongoDBUrl, function(err, db) {
      assert.equal(null, err);
      updateCartItem(db, req.body, function() {
          res.end(JSON.stringify({ msg: '' }))
          db.close();
      });
    });
}); 

// Dispatcher: Remove cart item

var removeCartItem = function(db, body, callback) {
    body = JSON.parse(body)
    body._id = new ObjectId(body._id)

    db.collection('cart').deleteOne(body, function(err, result) {
      assert.equal(err, null);
      console.log("Deleted a document in the cart collection.");
      callback();
    });

};

dispatcher.onPost("/remove", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, {'Content-Type': 'application/json'});

    MongoClient.connect(mongoDBUrl, function(err, db) {
      assert.equal(null, err);
      removeCartItem(db, req.body, function() {
          res.end(JSON.stringify({ msg: '' }))
          db.close();
      });
    });
}); 