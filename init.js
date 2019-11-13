USE RCS 

db.runCommand({customAction: "CreateDatabase", offerThroughput: 400 });
db.runCommand({customAction: "CreateCollection", collection: "calcio", offerThroughput: 400});

db.calcio.createIndex({ Giornata : 1});
db.calcio.createIndex({ Categoria : 1});
db.calcio.createIndex({ Giornata : 1},{Categoria : 1 });


db.calcio.insert({  "Sport" : "calcio", "Giornata" : 1, "Categoria" : "Serie A", "partita" : [ { "juventus" : 0 }, { "Parma" : 0 }, { "inter" : 0 }, { "genoa" : 0 }, { "Torino" : 0 }, { "sampdoria" : 0 } ] });
db.calcio.insert({  "Sport" : "calcio", "Giornata" : 2, "Categoria" : "Serie A", "partita" : [ { "juventus" : 0 }, { "Parma" : 0 }, { "inter" : 0 }, { "genoa" : 0 }, { "Torino" : 0 }, { "sampdoria" : 0 } ] });
db.calcio.insert({  "Sport" : "calcio", "Giornata" : 3, "Categoria" : "Serie A", "partita" : [ { "juventus" : 0 }, { "Parma" : 0 }, { "inter" : 0 }, { "genoa" : 0 }, { "Torino" : 0 }, { "sampdoria" : 0 } ] });
db.calcio.insert({  "Sport" : "calcio", "Giornata" : 4, "Categoria" : "Serie A", "partita" : [ { "juventus" : 0 }, { "Parma" : 0 }, { "inter" : 0 }, { "genoa" : 0 }, { "Torino" : 0 }, { "sampdoria" : 0 } ] });
db.calcio.insert({  "Sport" : "calcio", "Giornata" : 5, "Categoria" : "Serie A", "partita" : [ { "juventus" : 0 }, { "Parma" : 0 }, { "inter" : 0 }, { "genoa" : 0 }, { "Torino" : 0 }, { "sampdoria" : 0 } ] });
