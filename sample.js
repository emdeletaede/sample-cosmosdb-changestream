

var watchcursor = db.calcio.watch([
{$match : { operationType : {$in : ["insert","update","replace"] }}},
{$project : { fullDocument:1}},
{$replaceRoot: { newRoot: "$fullDocument"}}],
{fullDocument : "updateLookup"})

while (!watchcursor.isExhausted()) {
    if (watchcursor.hasNext()) {
        printjson(watchcursor.next());
    }
}


db.calcio.insert({  "Sport" : "calcio", "Giornata" : 6, "Categoria" : "Serie A", "partita" : [ { "juventus" : 0 }, { "Parma" : 0 }, { "inter" : 0 }, { "genoa" : 0 }, { "Torino" : 0 }, { "sampdoria" : 0 } ] })
db.calcio.update( { "Giornata": 3},{$set: { "partita.$[elem].Parma":5 } },{  arrayFilters:[{"elem.Parma":3  }]})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })



var watchcursor = db.calcio.watch([
    {$match : { operationType : {$in : ["insert","update","replace"] }}},
    {$project : { fullDocument:1}},
    {$replaceRoot: { newRoot: "$fullDocument"}},
    {$match : { Giornata: 3}}],
    {fullDocument : "updateLookup"})

    
