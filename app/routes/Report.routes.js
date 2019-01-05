module.exports = (app) => {
    const PDF = require('../controllers/Report.controller.js');
    const Xlsx =require('../controllers/Reprot_xlsx.controller.js')

    app.get('/pdf', PDF.findAll);

    app.get('/xlsx',Xlsx.findAll);


}