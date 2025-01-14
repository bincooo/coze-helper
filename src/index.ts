import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import * as edge from "edge-paths"
import * as path from 'node:path'
import { HTTPRequest, HTTPResponse, Page } from 'puppeteer-core'
import { intercept, patterns } from 'puppeteer-interceptor'

import fs from 'fs'


import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import {randomUUID} from "node:crypto";

// const sdk = require('./webmssdk_1.0.0.56.es5.js')

const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0"

async function main() {
    puppeteer.use(StealthPlugin())
    const puppeteerArgs = [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
        '--disable-dev-shm-usage',
        '--disable-blink-features=AutomationControlled',
        '--ignore-certificate-errors',
        '--no-first-run',
        '--no-service-autorun',
        '--password-store=basic',
        '--system-developer-mode',
        // the following flags all try to reduce memory
        // '--single-process',
        '--mute-audio',
        '--disable-default-apps',
        '--no-zygote',
        '--disable-accelerated-2d-canvas',
        '--disable-web-security',
        '--lang=zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        '--disable-gpu',
        // '--js-flags="--max-old-space-size=1024"'
    ]
    puppeteerArgs.push(`--proxy-server=http://127.0.0.1:7890`)
    const browser = await puppeteer.launch({
        executablePath: edge.getEdgePath(),
        // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",

        // headless: true,
        headless: false,
        args: puppeteerArgs,
        ignoreDefaultArgs: [
            '--disable-extensions',
            '--enable-automation',
            '--disable-component-extensions-with-background-pages'
        ],
        ignoreHTTPSErrors: true,
    })

    const page: Page = await browser.newPage()
    await page.goto('https://www.coze.com', {
        waitUntil: 'networkidle2'
    })

    await page.setUserAgent(userAgent)
    await page.setCacheEnabled(false)

    const wssdkJs = fs.readFileSync('./src/webmssdk_1.0.0.56.es5.hook.js')
    intercept(page, patterns.Script('*\/webmssdk_1\.0\.0\.56\.es5\.js'), {
        onResponseReceived: event => {
            console.log(`${event.request.url} intercepted, going to modify wssdk.`)
            event.response.body = wssdkJs.toString()
            return event.response
        }
    })

    const bytedJs = fs.readFileSync('./src/byted-uploader.eeec6bce.hook.js')
    intercept(page, patterns.Script('*\/byted-uploader\.eeec6bce\.js'), {
        onResponseReceived: event => {
            console.log(`${event.request.url} intercepted, going to modify byted.`)
            event.response.body = bytedJs.toString()
            return event.response
        }
    })

    await page.goto('https://www.coze.com', {
        waitUntil: 'networkidle2'
    })

    // await browser.close()
    server(page)
}

function server(page: Page) {
    const app = express()
    app.use(morgan('dev'))
    app.use(bodyParser.json({ limit: '100mb' }))
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(express.json())

    app.get('/report', async function(request: Request, response: Response) {
        const data = await page.evaluate((taskId: string) : any => {
            const w: any = window
            const _0x2de208 = w['_0x2de208']
            _0x2de208(taskId)
            const res = w[taskId]
            delete w[taskId]
            return res
        }, randomUUID())

        response.json({
            ok: true,
            data,
        })
    })

    app.post('/upload-sign', async function(request: Request, response: Response) {
        const body = request.body
        const type = request.header('content-type') ?? ''
        if (type.indexOf('application/json') < 0) {
            response.status(500)
            response.json({error: '请用json请求数据' })
            return
        }
        console.log(body)
        const {
            accessKeyId,
            secretAccessKey,
            sessionToken,
            mime,
        } = request.query
        if (!accessKeyId || !secretAccessKey || !sessionToken) {
            response.json({
                ok: false,
                msg: 'accessKeyId、secretAccessKey、sessionToken缺失'
            })
            return
        }

        if (body.url && !body.url.includes('Action=CommitImageUpload')) {
            const s = Math.random().toString(36).substr(2)
            body.url += "&s="+s
            if (body.params) {
                body.params.s = s
            }
        }

        let data = await page.evaluate((mime: string, sign: any, body: any) : string => {
            const w: any = window
            const eC = w['eC']
            const t = new eC.a(body, mime)
            t.addAuthorization(sign, new Date())
            return t
        }, mime, {
            accessKeyId,
            secretAccessKey,
            sessionToken,
        }, body)

        response.json({
            ok: true,
            data: data
        })
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
        let bogus = await page.evaluate((msToken: string, body: any) : string => {
            const w: any = window
            const _0x2ae157 = w['_0x2ae157']
            return _0x2ae157('msToken=' + msToken, JSON.stringify(body))
        }, msToken, body)

        let signature = await page.evaluate((msToken: string, uri: string, bogus: string, body: any): string => {
            const w: any = window
            const _0x1ae21a = w['_0x1ae21a']
            return  _0x1ae21a({
                    "url": ( uri.startsWith("/") ? uri : ("https://" + uri) ) + "?msToken=" + msToken + "&X-Bogus=" + bogus,
                    "body": body,
                },
                undefined,
                "forreal",
                )
        }, msToken, uri, bogus, body)

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