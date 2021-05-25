// Dependencies
const bodyParser = require("body-parser")
const compression = require("compression")
const cors = require("cors")
const express = require("express")
const helmet = require("helmet")
// Core
const routes = require("./controllers/routes.js")

/**
 * Server
 */
module.exports = class Server {
  constructor() {
    this.app = express()
    this.options = {}
    this.run()
  }

  /**
   * Middleware
   */
  middleware() {
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(bodyParser.json({ limit: "10mb", extended: true }))
    this.app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    )
    this.app.use(bodyParser.json())
  }

  /**
   * Routes
   */
  routes() {
    new routes.pdf.GetPdf(this.app)
    new routes.pdf.ReadPdf(this.app)

    // If route not exist
    this.app.use((req, res) => {
      console.log("inside 404")
      res.status(404).json({
        code: 404,
        message: "Not Found"
      })
    })
  }

  /**
   * Security
   */
  security() {
    this.app.use(helmet())
    this.app.disable("x-powered-by")
  }

  /**
   * Run
   */
  run() {
    try {
      this.security()
      this.middleware()
      this.routes()
      const port = process.env.PORT || 4000
      this.app.listen(port)
      console.log(`Your port is ${port}`)
    } catch (e) {
      console.error(`[ERROR] Server -> ${e}`)
    }
  }
}
