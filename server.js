const express = require('express')
const app = express()
const liveServer = require('live-server')

async function main() {

    app.listen(8081, () => {
        liveServer.start({
            port: 8081,
            logLevel: 0,
            root: './public'
        })
    })
}

main()