/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 01:25:26 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

// for local dev
require('dotenv').config()

const express = require('express'),
    cors = require('cors'),
    os = require('os'),
    path = require('path'),
    { graphqlHTTP } = require('express-graphql'),
    schema = require('./schemas')


// init express app
const app = express()
// use CORS
app.use(cors())

// routes if any
// require('./routes/testRoute')(app)

app.use('/api',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

// GET endpoints for prod
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    })
}

// server port
const PORT = process.env.PORT
// network interfaces of os
const netInterfaces = os.networkInterfaces()
// public server url on network
const SERVER_URL_NETWORK = netInterfaces.eth0[0].address

// create http server instance
const server = app.listen(PORT, () => {
    console.log(`[SERVER][I] On Local:   http://localhost:${PORT}`)
    console.log(`[SERVER][I] On Network: http://${SERVER_URL_NETWORK}:${PORT}`)
})
