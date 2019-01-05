 const MongoClient = require('mongodb').MongoClient;

 async function beforeRender(req, res) {
     const conn = await MongoClient.connect('mongodb://34.220.110.164:27017');
    // const query = { name: "sss" };
     Object.assign(req.data,{
        items: await  conn.db('foundry').collection('customers').find().toArray()
   
     });
 }