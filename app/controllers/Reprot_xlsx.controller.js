var request = require('request');



exports.findAll = (req, res) => {
    var data = {
        template: { 'shortid': 'ByU4Nn2-E' },
        options: {
            preview: false
        }
    }
    var options = {
        url: 'http://localhost:5400/api/report',
        method: 'POST',
        json: data
    }
    request(options).pipe(res);
}