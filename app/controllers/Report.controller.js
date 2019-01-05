var request = require('request');



exports.findAll = (req, res) => {
    //   res.send('respond with a resource');
    //  var shortid = req.query.shortid;
    //  var preview =  JSON.parse(req.query.preview);

    var data = {
        template: { 'shortid': 'rJXhjs3bN' },
        //data:{
        //     "products":[ {
        //         "Id1":1,
        //         "name":"A Tale of Two Cities",
        //         "price":"250",
        //         "shopName":"Asssddffg"
        //     }, {
        //         "Id1":2,
        //         "name":"A Tale of Two Cities",
        //         "price":"2660",
        //         "shopName":"qwerty"
        //     }, {
        //         "Id1":3,
        //         "name":"A Tale of Two Cities",
        //         "price":'980',
        //         "shopName":"qwertttttt"
        //     },
        // ]
        //   },
        options: {
            preview: true
        }
    }
    var options = {
        url: 'http://localhost:5400/api/report',
        method: 'POST',
        json: data
    }
    request(options).pipe(res);
}