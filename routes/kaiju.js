module.exports.main = function(req, res, next){
  res.send('Hello, Kaijus');
}

module.exports.showMongo = function(req, res, next){
  util.flow.exec(
    function(){
      db.collection("kaiju_test", this);
    },
    
    function(err, coll){
      coll.find().toArray(this);
    },
    
    function(err, docs){
      res.send(docs);
    }
  )
  //~ res.send('Hello, Kaijus');
}
