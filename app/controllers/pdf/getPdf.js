// AuthController.js
// const validator = require('node-validator')
// const jwt = require('jsonwebtoken')
// const sql = require('mssql')
// const { poolPromise } = require('../../db.js')
// const jwt_decode = require('jwt-decode')
const testFolder = '//green-sage/mssqlserver/GREENWISHES/Documents/';
const fs = require('fs');

module.exports = class GetPdf {
  constructor (app) {
    this.app = app
    this.UserTrio
    this.run()
  }


  /**
   * Middleware
   */
   middleware() {
     this.app.get(`/static-file/pdf/get/`, async (req, res) => {
      try {
          console.log('tesssssss')
          fs.readdir(testFolder, (err, files) => {
            files.forEach(file => {
              console.log(file);
            });
          });
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
