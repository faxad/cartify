var http = require('http');
var HttpDispatcher = require('httpdispatcher');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = require('url');
var query = require('querystring');


// Server Config

const PORT=8080;
var mongoDBUrl = 'mongodb://fawad:fawad@ds013574.mlab.com:13574/foxtaildb';
var dispatcher = new HttpDispatcher();

function handleRequest(request, response){
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

function initialize(res, callback) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, {'Content-Type': 'application/json'});
  
  MongoClient.connect(mongoDBUrl, function(err, db) {
      assert.equal(null, err);
      if (db != null) { callback(db); }
    });
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});

// Static Config

dispatcher.setStatic('resources');

// Dispatcher: Get all items

dispatcher.onGet("/items", function(req, res) {
    initialize(res, function(db) {
      db.collection('items').find().toArray(function(err, result) {
        assert.equal(err, null);
        if (result != null) {
            res.end(JSON.stringify(result));
            db.close();
        }
      });
    })
}); 

// Dispatcher: Get item by identifier

dispatcher.onGet("/item", function(req, res) {
    initialize(res, function(db) {
      db.collection('items').find({ "id": url.parse(req.url, true).query.id }).each(function(err, result) {
        assert.equal(err, null);
        if (result != null) {
            console.log(JSON.stringify(result));
            res.end(JSON.stringify(result));
            db.close();
        }
      });
    })
}); 

// Dispatcher: Set item

dispatcher.onPost("/insert", function(req, res) {
    initialize(res, function(db) {
      db.collection('items').insertOne(JSON.parse(req.body), function(err, result) {
        assert.equal(err, null);
        if (result != null) {
            res.end(JSON.stringify({ msg: '' }));
            db.close();
        }
      });
    })
});

// Dispatcher: Update item

dispatcher.onPost("/update", function(req, res) {
    initialize(res, function(db) {

      db.collection('items').find({ "id": JSON.parse(req.body).id }).each(function(err, result) {
        assert.equal(err, null);
        if (result != null) {
              db.collection('items').updateOne(result, {$set: JSON.parse(req.body)}, function(err, result) {
                assert.equal(err, null);
                if (result != null) {
                    res.end(JSON.stringify({ msg: '' }));
                    db.close();
                }
              });
        }
      });
    });
}); 


// Dispatcher: Get cart items by user identifier

dispatcher.onGet("/cart", function(req, res) {
    initialize(res, function(db) {
      db.collection('cart').find({ "userId": url.parse(req.url, true).query.userId }).toArray(function(err, result) {
        assert.equal(err, null);
        if (result != null) {
            res.end(JSON.stringify(result));
            db.close();
        }
      });
    })
}); 

// Dispatcher: Set cart

dispatcher.onPost("/add", function(req, res) {
    initialize(res, function(db) {
      db.collection('cart').insertOne(JSON.parse(req.body), function(err, result) {
        assert.equal(err, null);
        if (result != null) {
            res.end(JSON.stringify({ msg: '' }));
            db.close();
        }
      });
    })
});

function removeUnwantedKeys(body) {
    delete body['paid'];
    delete body['name'];
    delete body['code'];
    delete body['unitPrice'];
    return body;
  }

// Dispatcher: Get cart item by identifier

dispatcher.onPost("/revise", function(req, res) {
    var body = JSON.parse(req.body);
    body = removeUnwantedKeys(body);
    body._id = new ObjectId(body._id);

    initialize(res, function(db) {
      db.collection('cart').find({ "itemId": body.itemId }).each(function(err, result) {
        assert.equal(err, null);
        if (result != null) {
              db.collection('cart').updateOne(result, {$set: body}, function(err, result) {
                assert.equal(err, null);
                if (result != null) {
                    res.end(JSON.stringify({ msg: '' }));
                    db.close();
                }
              });
        }
      });
    });
});

// Dispatcher: Remove cart item

dispatcher.onPost("/remove", function(req, res) {
    var body = JSON.parse(req.body);
    body = removeUnwantedKeys(body);
    body._id = new ObjectId(body._id);
    initialize(res, function(db) {
      db.collection('cart').deleteOne(body, function(err, result) {
        assert.equal(err, null);
        if (result != null) {
            res.end(JSON.stringify({ msg: '' }));
            db.close();
        }
      });
    });
});


// Dispatcher: Get reviews by item

dispatcher.onGet("/review", function(req, res) {
    initialize(res, function(db) {
      db.collection('review').find({ "itemId": url.parse(req.url, true).query.itemId }).toArray(function(err, result) {
        assert.equal(err, null);
        if (result != null) {
            res.end(JSON.stringify(result));
            db.close();
        }
      });
    });
}); 


// Dispatcher: Get review count for given item

dispatcher.onGet("/reviewcount", function(req, res) {
    initialize(res, function(db) {
        db.collection('review').find({ "itemId": url.parse(req.url, true).query.itemId }).count(function(err, count) {
            res.end(JSON.stringify(count));
            db.close();
        })
    });
}); 

// Dispatcher: Get ratings for shop items

dispatcher.onGet("/ratings", function(req, res) {
    initialize(res, function(db) {
        db.collection('review').aggregate([{$group : {_id : "$itemId", rating : {$avg : "$rating"}}}]).toArray(function(err, result) {
            var ratings = {}
            for (item of result) {
                ratings[item['_id']] = item['rating']
            }

            res.end(JSON.stringify(ratings));
            db.close();
        });
    });
}); 

// Dispatcher: Set review

dispatcher.onPost("/addreview", function(req, res) {
    initialize(res, function(db) {
      db.collection('review').insertOne(JSON.parse(req.body), function(err, result) {
        assert.equal(err, null);
        if (result != null) {
            res.end(JSON.stringify({ msg: '' }));
            db.close();
        }
      });
    });
});