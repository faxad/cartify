var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID
var MongoClient = require('mongodb').MongoClient
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");    
    next();
  });


const con = 'mongodb://faxad:faxad@mongodbcluster-shard-00-00-wsqeg.mongodb.net:27017,' +
            'mongodbcluster-shard-00-01-wsqeg.mongodb.net:27017,' +
            'mongodbcluster-shard-00-02-wsqeg.mongodb.net:27017/' +
            'test?ssl=true&replicaSet=MongoDbCluster-shard-0&authSource=admin';


const AUTH_SECRET = 'PTasQf3QuqubG-4u7tae2nOxobJ8QNkw26CnfLiVp5pe8jK6WK4guQd1LHI9KFNV';

const checkIfAuthenticated = expressJwt({
    secret: new Buffer(AUTH_SECRET, 'base64'),
});

/**
 * FETCH ALL records for a given collection
 */
function fetchAll(req, res, collection) {    
    MongoClient.connect(con, function (err, db) {
        if (err) throw err

        db.collection(collection).find().toArray(function (err, result) {
            if (err) throw err
    
            res.send(result)
        })
    })
}

/**
 * FETCH FILTERED records for a given collection
 */
function fetchFiltered(req, res, collection, condition) {
    MongoClient.connect(con, function (err, db) {
        if (err) throw err
        
        db.collection(collection).find(condition).toArray(function (err, result) {
            if (err) throw err
    
            res.send(result);
        })
    })
}

/**
 * FETCH ONE records from a given collection
 */
function fetchOne(req, res, collection, condition) {
    MongoClient.connect(con, function (err, db) {
        if (err) throw err
        
        db.collection(collection).findOne(condition, function (err, result) {
            if (err) throw err
    
            res.send(result);
        })
    })
}

/**
 * CREATE ONE record for a given collection
 */
function createOne(req, res, collection, document) {
    MongoClient.connect(con, function (err, db) {
        if (err) throw err
        
        db.collection(collection).insertOne(document).then(function(result) {
            console.log(collection + ' - Inserted');
            res.statusCode = 201;
            res.json(result.ops[0]);
            res.send(result);
        })
    })
}

/**
 * REMOVE ONE record from a given collection
 */
function removeOne(req, res, collection, condition) {
    MongoClient.connect(con, function (err, db) {
        if (err) throw err
        
        db.collection(collection).deleteOne(condition).then(function(result) {
            console.log(collection + ' - Deleted');
            res.statusCode = 204;
            res.send(result);
        })
    })
}

/**
 * REVISE ONE record for a given collection
 */
function reviseOne(req, res, collection, condition, document) {
    MongoClient.connect(con, function (err, db) {
        if (err) throw err
        
        db.collection(collection).findOneAndUpdate(
            condition,
            { 
                $set: document,
                $currentDate: {
                    lastModified: true 
                }
            },
            {
                returnOriginal: false
            }
        ).then(function(result) {
            console.log(collection + ' - Updated');
            //res.statusCode = 204;
            res.json(result.value);
            res.send(result);
        })
    })
}

// ENDPOINTS: ADHOC (TO BE REMOVED)

// app.get('/review', (req, res) => {
//     fetchAll(req, res, 'review')
// })


app.get('/cart', (req, res) => {
    fetchAll(req, res, 'cart')
})

// ENDPOINTS: INVENTORY

/**
 * INVENTORY (GET) - Retrieves inventory list for non-authenticated user
 * Includes users review count for each item
 */
app.get('/inventory', function (req, res) {
    MongoClient.connect(con, function (err, db) {
        if (err) throw err;

        db.collection('inventory').aggregate(
            [
                {
                    $lookup: {
                        from: "review",
                        localField: "_id",
                        foreignField: "itemId",
                        as: "reviews"
                    }
                },
                {
                    $project: {
                        _id: true,
                        name: true,
                        code: true,
                        releaseDate: true,
                        description: true,
                        unitPrice: true,
                        quantityInStock: true,
                        rating: true,
                        imageUrl: true,
                        reviewsCount: { 
                            $size: "$reviews" 
                        }
                    }
                }
            ]
        ).toArray(function (err, result) {
            if (err) throw err
            
            res.send(result);
        })
    })
})

/**
 * INVENTORY (GET) - Retrieves inventory list for authenticated user
 * Includes users review count and cart count for each item
 */
app.get('/inventory/:username', checkIfAuthenticated, function (req, res) {
    MongoClient.connect(con, function (err, db) {
        if (err) throw err;

        db.collection('inventory').aggregate(
            [
                {
                    $lookup: {
                        from: "review",
                        localField: "_id",
                        foreignField: "itemId",
                        as: "reviews"
                    }
                },
                {
                    $lookup: {
                        from: "cart",
                        localField: "_id",
                        foreignField: "itemId",
                        as: "cartItems"
                    }
                },
                {
                    $project: {
                        _id: true,
                        name: true,
                        code: true,
                        releaseDate: true,
                        description: true,
                        unitPrice: true,
                        quantityInStock: true,
                        rating: true,
                        imageUrl: true,
                        reviewsCount: { $size: "$reviews" },
                        cartCount: {
                            "$let": {
                                "vars": {
                                    "item": {
                                        "$arrayElemAt": [
                                            {
                                                $filter: { 
                                                    input: "$cartItems", 
                                                    as: "cartItem", 
                                                    cond: {
                                                        $eq: ["$$cartItem.userId", req.params.username] 
                                                    } 
                                                }
                                            }, 
                                        0]
                                    }
                                },
                                "in": "$$item.quantity"
                            }
                        }   
                    }
                }
            ]
        ).toArray(function (err, result) {
            if (err) throw err
            
            res.send(result);
        })
    })
})

/**
 * INVENTORY DETAIL (GET) - Retrieves item detail (includes users reviews)
 */
app.get('/inventory/:itemId/detail', function (req, res) {
    MongoClient.connect(con, function (err, db) {
        if (err) throw err;

        db.collection('inventory').aggregate(
            [
                {
                    $match : {
                        _id : mongodb.ObjectID(req.params.itemId) 
                    } 
                },
                {
                    $lookup: {
                        from: "review",
                        localField: "_id",
                        foreignField: "itemId",
                        as: "reviews"
                    }
                },
                {
                    $project: {
                        _id: true,
                        name: true,
                        code: true,
                        releaseDate: true,
                        description: true,
                        unitPrice: true,
                        quantityInStock: true,
                        rating: true,
                        imageUrl: true,
                        reviews: true,
                        reviewsCount: {
                            $size: "$reviews"
                        }
                    }
                }
            ]
        ).next(function (err, result) {
            if (err) throw err
            
            res.send(result);
        })
    })
})

/**
 * ITEM/PRODUCT (POST) - Handles adding item to item/product
 */
app.post('/inventory', checkIfAuthenticated, (req, res) => {
    document =  {
        name: req.body.name,
        code: req.body.code,
        unitPrice: req.body.unitPrice,
        quantityInStock: req.body.quantityInStock,
        releaseDate: req.body.releaseDate,
        description: req.body.description,
        rating: req.body.rating,
        imageUrl: req.body.imageUrl
    }
    
    createOne(req, res, 'inventory', document)
})

/**
 * UPDATE ITEM/PRODUCT - Handles modification of item/product
 */
app.put('/inventory', checkIfAuthenticated, (req, res) => {
    condition = {
        _id: mongodb.ObjectID(req.body._id)
    }

    document = {
        name: req.body.name,
        code: req.body.code,
        unitPrice: req.body.unitPrice,
        quantityInStock: req.body.quantityInStock,
        releaseDate: req.body.releaseDate,
        description: req.body.description,
        // rating: req.body.rating,
        // imageUrl: req.body.imageUrl
    }

    reviseOne(req, res, 'inventory', condition, document)
})

/**
 * DELETE ITEM/PRODUCT - Handles removing item/product
 */
app.delete('/inventory/:itemId', checkIfAuthenticated, function (req, res) {
    condition = {
        _id: mongodb.ObjectID(req.params.itemId)
    }

    removeOne(req, res, 'inventory', condition)
})

// ENDPOINTS: CART

/**
 * CART (GET) - Retrieves user's cart item(s)
 */
app.get('/cart/:username', checkIfAuthenticated, (req, res) => {
    let itemId = req.query.itemId

    condition = {
        userId: req.params.username,
    }

    if (itemId) {
        condition['itemId'] = mongodb.ObjectID(req.query.itemId)
        fetchOne(req, res, 'cart', condition) 
    } else {
        // fetchFiltered(req, res, 'cart', condition)
        MongoClient.connect(con, function (err, db) {
            if (err) throw err;
    
            db.collection('cart').aggregate(
                [
                    { 
                        $match: { 
                            userId: req.params.username
                        } 
                    },
                    {
                        $lookup: {
                            from: "inventory",
                            localField: "itemId",
                            foreignField: "_id",
                            as: "item"
                        }
                    },
                    {
                        $unwind: "$item"
                    },
                    {
                        $project: {
                            _id: true,
                            itemId: true,
                            "item.name": true,
                            "item.code": true,
                            "item.unitPrice": true,
                            quantity: true,
                        }
                    }
                ]
            ).toArray(function (err, result) {
                if (err) throw err
                
                res.send(result);
            })
        })
    }
})

/**
 * CART ITEM (POST) - Handles adding item to cart
 */
app.post('/cart', checkIfAuthenticated, (req, res) => {
    document =  {
        userId: req.body.userId,
        itemId: mongodb.ObjectID(req.body.itemId),
        quantity: req.body.quantity
    }
    
    createOne(req, res, 'cart', document)
})

/**
 * UPDATE CART - Handles modification of cart item
 */
app.put('/cart', checkIfAuthenticated, (req, res) => {
    condition = {
        _id: mongodb.ObjectID(req.body._id)
    }

    document = {
        _id: mongodb.ObjectID(req.body._id),
        userId: req.body.userId,
        itemId: mongodb.ObjectID(req.body.itemId),
        quantity: req.body.quantity
    }

    reviseOne(req, res, 'cart', condition, document)
})

/**
 * DELETE CART ITEM - Handles removing user cart item
 */
app.delete('/cart/:cartItemId', checkIfAuthenticated, function (req, res) {
    condition = {
        _id: mongodb.ObjectID(req.params.cartItemId)
    }

    removeOne(req, res, 'cart', condition)
})

// ENDPOINTS: REVIEW

/**
 * ITEM/PRODUCT REVIEW (POST) - Handles creation of product's review
 */
app.post('/review', checkIfAuthenticated, (req, res) => {
    document =  {
        userId: req.body.userId,
        itemId: mongodb.ObjectID(req.body.itemId),
        rating: req.body.rating,
        reviewDate: req.body.reviewDate,
        remarks: req.body.remarks
    }
    
    createOne(req, res, 'review', document)
})

/**
 * DELETE ITEM/PRODUCT REVIEW - Handles removing user review
 */
app.delete('/review/:reviewId', checkIfAuthenticated, function (req, res) {
    condition = {
        _id: mongodb.ObjectID(req.params.reviewId)
    }

    removeOne(req, res, 'review', condition)
})

/**
 * UPDATE ITEM/PRODUCT REVIEW - Handles modification of user review
 */
app.put('/review', checkIfAuthenticated, (req, res) => {
    condition = {
        _id: mongodb.ObjectID(req.body._id)
    }

    document = {
        _id: mongodb.ObjectID(req.body._id),
        userId: req.body.userId,
        itemId: mongodb.ObjectID(req.body.itemId),
        rating: req.body.rating,
        reviewDate: req.body.reviewDate,
        comments: req.body.comments
    }

    reviseOne(req, res, 'review', condition, document)
})

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
