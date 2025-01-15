const hook = require('./hook');
const express = require('express');
const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );

function server() {
    const app = express()
    app.use(morgan('dev'))
    app.use(bodyParser.json({ limit: '100mb' }))
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(express.json())

    // app.get('/report', async function(request, response) {
    //     const data = await page.evaluate((taskId) => {
    //         const w: any = window
    //         const _0x2de208 = w['_0x2de208']
    //         _0x2de208(taskId)
    //         const res = w[taskId]
    //         delete w[taskId]
    //         return res
    //     }, randomUUID())

    //     response.json({
    //         ok: true,
    //         data,
    //     })
    // })

    // app.post('/upload-sign', async function(request, response) {
    //     const body = request.body
    //     const type = request.header('content-type') ?? ''
    //     if (type.indexOf('application/json') < 0) {
    //         response.status(500)
    //         response.json({error: '请用json请求数据' })
    //         return
    //     }
    //     console.log(body)
    //     const {
    //         accessKeyId,
    //         secretAccessKey,
    //         sessionToken,
    //         mime,
    //     } = request.query
    //     if (!accessKeyId || !secretAccessKey || !sessionToken) {
    //         response.json({
    //             ok: false,
    //             msg: 'accessKeyId、secretAccessKey、sessionToken缺失'
    //         })
    //         return
    //     }

    //     if (body.url && !body.url.includes('Action=CommitImageUpload')) {
    //         const s = Math.random().toString(36).substr(2)
    //         body.url += "&s="+s
    //         if (body.params) {
    //             body.params.s = s
    //         }
    //     }

    //     let data = await page.evaluate((mime: string, sign: any, body: any) : string => {
    //         const w: any = window
    //         const eC = w['eC']
    //         const t = new eC.a(body, mime)
    //         t.addAuthorization(sign, new Date())
    //         return t
    //     }, mime, {
    //         accessKeyId,
    //         secretAccessKey,
    //         sessionToken,
    //     }, body)

    //     response.json({
    //         ok: true,
    //         data: data
    //     })
    // })

    app.post('*', async function(request, response) {
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
        let bogus = hook.doBogus('msToken=' + msToken, JSON.stringify(body))
        let signature = hook.doSignature({
            url: ( uri.startsWith("/") ? uri : ("https://" + uri) ) + "?msToken=" + msToken + "&X-Bogus=" + bogus,
            body
        }, undefined, 'forreal')

        console.log('bogus: ', bogus)
        console.log('signature: ', signature)
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

function main() {
    hook.init(false)
    hook.debug(true)
    server()
}


function test() {
    let msToken = '4_HTLO9MM4Tb_rET6BRVfjySlocGly2Hf6holD167CeoZJKybz1Np-rObTn1IBmfnwsGJrdp4zZSnxJQeiWrc5jdSdTQKc1y9DiqwiQhUpRkHwPxvqWxuhRGB5zHBjo='
    let body = {
        // "bot_id": "7447187140963778566",
        // "chat_history": [],
        // "content_type": "text",
        // "conversation_id": "iPYv6PwRnzkiFOC3WojCP",
        // "device_id": "2314742806",
        // "draft_mode": false,
        // "extra": {},
        // "local_message_id": "1XguhC7dyFnp8Lx-zE594",
        // "mention_list": [],
        // "query": "\\n\\r\\nHuman: 你好\\n\\r\\nAssistant: 你好！有什么我可以帮你的吗？😊\\n\\r\\nHuman: NextChat自定义模型怎么配置图片上传",
        // "scene": 1000,
        // "stream": true,
        // "user": "b4a3d64c3fef42ad9e93205b755970a3"
    }

    hook.init(false)
    
    const bogus = hook.doBogus('msToken=' + msToken, JSON.stringify(body))
    hook.doBogus('msToken=' + msToken, JSON.stringify(body))
    hook.debug(true)
    const signature = hook.doSignature({
        url: "api.coze.com/open_api/v1/web_chat?msToken=" + msToken + "&X-Bogus=" + bogus,
        body
    }, undefined, 'forreal')
    console.log('bogus: ', bogus)
    console.log('signature: ', signature)
    hook.debug(false)
}

// test()
// main()


const alg = require('./alg')
// console.log(alg.genBogus())
console.log(alg.genSignature("X-Bogus=DFSzswVYpHVdUvB4tpQ2UZSjtbp/&msToken=MJnVjNdXAPG-SVFjZEYt2oag31xZcMm14HBXvwU256KE2Ikrmj30qJTRqTlR_m-W-U0mM5jnM6YVmo0P_8cmQZI-ABMNbO_LhgkGXIh23n8Pvl4jwngrN4piNYMZvsSy&pathname=/api/intelligence_api/ping&tt_webid=&uuid="))
