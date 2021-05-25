// AuthController.js
// const validator = require('node-validator')
// const jwt = require('jsonwebtoken')
// const sql = require('mssql')
// const { poolPromise } = require('../../db.js')
// const jwt_decode = require('jwt-decode')
const testFolder = '//green-sage/mssqlserver/GREENWISHES/Documents/';
const fs = require('fs');
var file = fs.createReadStream('//green-sage/mssqlserver/GREENWISHES/Documents/V-FA-201900859.pdf');
var stat = fs.statSync('//green-sage/mssqlserver/GREENWISHES/Documents/V-FA-201900859.pdf');

module.exports = class ReadPdf {
  constructor (app) {
    this.app = app
    this.UserTrio
    this.run()
  }


  /**
   * Middleware
   */
   middleware() {
     this.app.get(`/static-file/pdf/read/`, async (req, res) => {
      try {

        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
        file.pipe(res);
      	// const queryString = 'SELECT * FROM users'
      	// con.query(queryString, (error, result, field) => {
      	// 	return res.status(200).send(result)
      	// })
        } catch (e) {
          console.error(`[ERROR] pdf/read -> ${e}`)
          res.status(400).json({
            'code': 400,
            'message': 'Bad request'
          })
        }
     })
   }

  /**
   * Run
   */
   run () {
    this.middleware()
  }
}
