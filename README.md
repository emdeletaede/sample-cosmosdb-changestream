# sample-cosmosdb-changestream
sample how to use changestream with cosmosdb Mongo API 3.6 

this sample show you how to use changestream in cosmosdb mongo API 3.6 


## Setup instructions

1  create a new Azure Cosmos DB account for mongo API : .
    - Do not enable multi-region writes or geo-redundancy. 
    - install mongo shell 3.6 in your laptop ( not less than 3.6 shell) 
    
   
2  With mongo command run the init.js file https://github.com/emdeletaede/sample-cosmosdb-changestream/blob/master/init.js

this will create one DB RCS and one collection calcio with information , and some indexes . 

3 use the sample.js.file  to experiment in 2 mongo shell 
in the first mongoshell run 

### enable the changestream 
```.JS 

use RCS ;

var watchcursor = db.calcio.watch([
{$match : { operationType : {$in : ["insert","update","replace"] }}},
{$project : { fullDocument:1}},
{$replaceRoot: { newRoot: "$fullDocument"}}],
{fullDocument : "updateLookup"})
var cosmosClientOptions = new CosmosClientOptions()

```
after to check launch the cursor 
```.JS 
while (!watchcursor.isExhausted()) {
    if (watchcursor.hasNext()) {
        printjson(watchcursor.next());
    }
}

```
in another mongo shell connect to the same database change one items 
```.JS 

db.calcio.insert({  "Sport" : "calcio", "Giornata" : 6, "Categoria" : "Serie A", "partita" : [ { "juventus" : 0 }, { "Parma" : 0 }, { "inter" : 0 }, { "genoa" : 0 }, { "Torino" : 0 }, { "sampdoria" : 0 } ] });
db.calcio.update( { "Giornata": 6},{$set: { "partita.$[elem].Parma":1 } },{  arrayFilters:[{"elem.Parma":0  }]});
db.calcio.update( { "Giornata": 6},{$inc: { "partita.$[elem].Parma":1 } },{  arrayFilters:[{"elem.Parma":1  }]});


```
in the first mongo shell , you will see the result of your update and insert ... .
