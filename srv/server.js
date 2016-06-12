var http = require('http');
var dispatcher = require('httpdispatcher');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;


const PORT=8080; 

function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});


// Dispatcher
dispatcher.setStatic('resources');

//A sample GET request    
dispatcher.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var url = 'mongodb://fawad:fawad@ds013574.mlab.com:13574/foxtaildb';
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected correctly to server.");
      db.close();
    });

    res.end('Page One');
});

var insertDocument = function(db, callback) {
   db.collection('items').insertOne({
        "itemId": 1,
        "itemName": "Leaf Rake",
        "itemCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt condimentum turpis. Nullam eu nisi vitae dolor lacinia cursus. Maecenas feugiat risus vel ex egestas, vel semper tellus tincidunt. Nunc lacus magna, dictum quis eros sed, suscipit auctor massa. Maecenas malesuada dui nulla, id ultricies turpis fringilla in. Duis vitae nisl id felis bibendum pulvinar at at nibh. Fusce augue dui, blandit sit amet diam non, pulvinar convallis elit. Sed convallis ipsum ut augue tincidunt, sit amet viverra lorem eleifend. Morbi consequat dignissim nisl, vel tristique erat elementum eu. Fusce maximus tellus in ligula condimentum ultrices. Suspendisse id venenatis risus. Phasellus nec odio lacinia, hendrerit nisi ac, placerat lorem. Ut id facilisis eros. Sed eu semper enim, in placerat felis",
        "price": 19.95,
        "quantity": 5,
        "starRating": 3.2,
        "imageUrl": "http://placehold.it/320x150"
    }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the items collection.");
    callback();
  });
};

var findDocument = function(db, callback) {
   var cursor =db.collection('items').find({ "itemName": "Leaf Rake" });
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

//A sample GET request    
dispatcher.onGet("/insert", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var url = 'mongodb://fawad:fawad@ds013574.mlab.com:13574/foxtaildb';
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      // insertDocument(db, function() {
      //     db.close();
      // });
      findDocument(db, function() {
          db.close();
      });
    });

    res.end('Page One');
}); 

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});
