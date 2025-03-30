import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import {randomUUID} from "node:crypto";

const sdk = require('./hook.js')
const dsSdk = require("./ds-hook.js")

async function main() {
    server()
}

function server() {
    sdk.init()

    const app = express()
    app.use(morgan('dev'))
    app.use(bodyParser.json({ limit: '100mb' }))
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(express.json())

    app.post('/ds', async function(request: Request, response: Response) {
        const body = request.body
        console.log(body)
        try {
            const { challenge, salt, diff, expireAt } = body
            const num = await dsSdk.calc(challenge, salt, diff, expireAt)
            response.json({
                ok: true,
                data: num,
            })
        } catch(err) {
            console.error(err)
            response.json({
                ok: false,
                data: err,
            })
        }
    })

    app.post('*', async function(request: Request, response: Response) {
        const body = request.body
        const msToken = request.query.msToken
        var uri = request.query.uri
        const type = request.header('content-type') ?? ''
        if (type.indexOf('application/json') < 0) {
            response.status(500)
            response.json({error: '请用json请求数据' })
            return
        }

        if (!msToken) {
            response.json({
                ok: false,
                msg: 'msToken缺失'
            })
            return
        }

        if (!uri) {
            uri = "www.coze.com/api/conversation/chat"
        }

        console.log(body)
        const bogus = sdk.Bogus('msToken=' + msToken, JSON.stringify(body))
        const signature = sdk.Signature({
            "url": ( uri.startsWith("/") ? uri : ("https://" + uri) ) + "?msToken=" + msToken + "&X-Bogus=" + bogus,
            "body": body,
        },  undefined, "forreal")

        response.json({
            ok: true,
            data: {
                bogus,
                signature
            }
        })
    })

    app.listen(3000)
    console.log('Start By: http://127.0.0.1:3000')
}

main()
