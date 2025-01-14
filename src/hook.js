// var my_stringify = JSON.stringify;
// JSON.stringify = function (params) {
//     if (params.payload.length>300){
//         window.__aa = params
//         params["signVersion"] = '1'
//     }
//     debugger
//     console.log("json_stringify params:",params);
//     return my_stringify(params);
// };
//
// var my_parse = JSON.parse;
// JSON.parse = function (params) {
//     debugger
//     console.log("json_parse params:",params);
//     return my_parse(params);
// };


canvas = {
    getContext:function (res) {
        console.log("canvas.getContext:",arguments)
        if (res == "webgl"){
            return {
                drawingBufferColorSpace: "srgb",
                drawingBufferFormat: 32856,
                drawingBufferHeight: 150,
                drawingBufferWidth: 300,
                unpackColorSpace: "srgb",
                getExtension:function (res) {
                    console.log("canvas.getExtension:",res)
                    if (res == "WEBGL_debug_renderer_info"){
                        return {}
                    }
                },
                getParameter:function (res) {
                    console.log('canvas.getContext.getParameter:',res)
                    return "Google Inc. (Intel)"
                }
            }
        }
    }
}
div = {
    accessKey: "",
    align: "",
    baseURI:"https://www.coze.com/",
    
    contentEditable: "inherit",
    localName: "div",
    namespaceURI:"http://www.w3.org/1999/xhtml",
    nodeName: "DIV",
    tabIndex: -1,
    tagName: "DIV",
    textContent: "",
    title: "",
    translate: true,
    virtualKeyboardPolicy: "",
    getElementsByTagName: function (res) {
        console.log('div中getElementsByTagName的参数为：', res)
        if (res === "i") {
            return []
        }
    },
    appendChild:function (res) {
        console.log("div.appendChild: ",res)
        return res
    },
}
Plugin = {
    0:{type: 'application/pdf', suffixes: 'pdf', description: 'Portable Document Format'},
    1:{type: 'text/pdf', suffixes: 'pdf', description: 'Portable Document Format'},
    application:{type: 'application/pdf', suffixes: 'pdf', description: 'Portable Document Format'},
    text:{type: 'text/pdf', suffixes: 'pdf', description: 'Portable Document Format'},
    description:"Portable Document Format",
    filename:"internal-pdf-viewer",
    length:2,
    name:"PDF Viewer"
}
Plugin['0']["enabledPlugin"]=Plugin
Plugin['1']["enabledPlugin"]=Plugin
Plugin['application']["enabledPlugin"]=Plugin
Plugin['text']["enabledPlugin"]=Plugin
location = {
    hash: "",
    host: "www.xiaohongshu.com",
    hostname: "www.xiaohongshu.com",
    href: "https://www.coze.com/",
    origin: "https://www.coze.com",
    pathname: "/",
    port: "",
    protocol: "https:",
    toString: function() {
        return location.href
    }
}
navigator = {
    appVersion:"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    platform:'Win32',
    appCodeName:'Mozilla',
    appName:'Netscape',
    language:'zh-CN',
    product:'Gecko',
    vendorSub:'',
    vendor:'Google Inc.',
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    onLine:true,
    cookieEnabled:true,
    hardwareConcurrency:16,
    maxTouchPoints:0,
    productSub:'20030107',
    deviceMemory:8,
    pdfViewerEnabled:true,
    languages:["zh-CN"],
    webdriver:false,
    doNotTrack:null,
    bluetooth:{},
    clipboard:{},
    credentials:{},
    webkitTemporaryStorage:{},
    webkitPersistentStorage:{},
    storage:{},
    wakeLock:{},
    ink:{},
    mediaCapabilities:{},
    scheduling:{},
    geolocation:{},
    locks:{},
    plugins: {
    }, // --------------------------------------------------------------------------------------------------------------------
    mimeTypes:{
        0:{
            description: "Portable Document Format",
            enabledPlugin:Plugin,
            suffixes:"pdf",
            type:"application/pdf"
        },
        1:{
            description: "Portable Document Format",
            enabledPlugin: Plugin,
            suffixes:"pdf",
            type:"text/pdf"
        },
        application: {type: 'application/pdf', suffixes: 'pdf', description: 'Portable Document Format', enabledPlugin: Plugin},
        text: {type: 'text/pdf', suffixes: 'pdf', description: 'Portable Document Format', enabledPlugin: Plugin},
        length:2
    },
    connection:{
        downlink: 0.9,
        effectiveType: "3g",
        onchange: null,
        rtt: 350,
        saveData: false
    },
    userActivation:{
        hasBeenActive: false,
        isActive: false
    },
    userAgentData:{
        mobile:false,
        platform:"Windows",
        brands: [
            {
                brand: "Chromium",
                version: "122"
            },
            {
                brand: "Not(A:Brand",
                version: "24"
            },
            {
                brand: "Google Chrome",
                version: "122"
            }
        ]
    },
    xr:{
        ondevicechange:null
    },
    windowControlsOverlay:{
        ongeometrychange: null,
        visible: false
    },
    usb:{
        onconnect: null,
        ondisconnect: null
    },
    gpu:{
        wgslLanguageFeatures:{size:0}
    },
    serial:{
        onconnect: null,
        ondisconnect: null
    },
    presentation:{
        defaultRequest: null,
        receiver: null
    },
    mediaSession:{
        metadata: null,
        playbackState: "none"
    },
    hid:{
        onconnect: null,
        ondisconnect: null
    },
    virtualKeyboard:{
        boundingRect: {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
            x: 0,
            y: 0
        },
        ongeometrychange:null,
        overlaysContent:false
    },
    managed:{onmanagedconfigurationchange:null},
    serviceWorker:{
        controller: null,
        oncontrollerchange: null,
        onmessage: null,
        onmessageerror: null
    },
    mediaDevices:{ondevicechange:null},
    keyboard:{},
    permissions:{},
    sendBeacon:function (res) {
        console.log('navigator.sendBeacon:',res)
    },
    unregisterProtocolHandler:function (res) {
        console.log('navigator.unregisterProtocolHandler:',res)
    },
    registerProtocolHandler:function (res) {
        console.log('navigator.registerProtocolHandler:',res)
    },
    getInstalledRelatedApps:function (res) {
        console.log('navigator.getInstalledRelatedApps:',res)
    },
    webkitGetUserMedia:function (res) {
        console.log('navigator.webkitGetUserMedia:',res)
    },
    setAppBadge:function (res) {
        console.log('navigator.setAppBadge:',res)
    },
    requestMIDIAccess:function (res) {
        console.log('navigator.requestMIDIAccess:',res)
    },
    getUserMedia:function (res) {
        console.log('navigator.getUserMedia:',res)
    },
    getBattery:function (res) {
        console.log('navigator.getBattery:',res)
    },
    javaEnabled:function (res) {
        console.log('navigator.javaEnabled:',res)
    },
    getGamepads:function (res) {
        console.log('navigator.getGamepads:',res)
    },
    vibrate:function (res) {
        console.log('navigator.vibrate:',res)
    },
    requestMediaKeySystemAccess:function (res) {
        console.log('navigator.requestMediaKeySystemAccess:',res)
    },
    clearAppBadge:function (res) {
        console.log('navigator.clearAppBadge:',res)
    },
}
window = global;
window.CanvasRenderingContext2D = function (res) {
    console.log("window.CanvasRenderingContext2D:",res)
}
window.AudioContext = function (res) {
    console.log("window.AudioContext:",res)
}
window.HTMLCanvasElement = function (res) {
    console.log("window.HTMLCanvasElement:",res)
}
window.devicePixelRatio = 1.25
window.external = {}
window.Image = function (res) {
    console.log("window.Image :",res)
}
window.Window = function (res) {
    console.log("window.Window : ", res)
}
window.localStorage = {
    MF_STATISTICS:"{\"timestamp\":"+Date.now()+",\"visitTimes\":0,\"readFeedCount\":1}",
    XHS_STRATEGY_BOX: "{\"firstVisit-\":false}",
    'xhs-pc-theme':"system",
    getItem:function (res) {
        console.log("window.localStorage.getItem",res)
        return '{"url":"https://fe-video-qc.xhscdn.com/fe-platform/7a700537086390bf42ed95a3c3b675820f791299.js","reportUrl":"/api/sec/v1/shield/webprofile","desVersion":"2","validate":true,"commonPatch":["/fe_api/burdock/v2/note/post","/api/sns/web/v1/comment/post","/api/sns/web/v1/note/like","/api/sns/web/v1/note/collect","/api/sns/web/v1/user/follow","/api/sns/web/v1/feed","/api/sns/web/v1/login/activate","/api/sns/web/v1/note/metrics_report","/api/redcaptcha","/api/store/jpd/main","/phoenix/api/strategy/getAppStrategy"],"signUrl":"https://fe-video-qc.xhscdn.com/fe-platform/6e0d0a976c31ec4cf07d8dfaea68aefe79a8c678.js","signVersion":"1"}'
    },
    length: 3
}
// document 补环境
document = {
    cookie: 'i18next=en; s_v_web_id=verify_m5po092n_4L7rywvH_aeWA_4MSh_9bmo_l61hxmli9Put; msToken=DHk9uCy1XBxtJsiQeBIPJGDyvygc67vlnnu2Uo1JSOuTdhg391jQB1BQUd8MX6aNVOL4wV8lNRSuocK-Rdj5CrWfQ_QfgNvx-VxSl9BGivfX52RnAzRaMzim4rNRPRo=; msToken=BOrYzwLqb4X6rHDDldO78aS4nCrFGaNWkM81RvTrjjUHPvXKLM4pEWRFvJ0Wfsf4yei9Cw9w8nhucQ5smIVg9HAE8PxDkmQtM4QcnPG2HVUU4CX9N3b0kg==',
    createElement:function (res) {
        console.log("document.createElement:",arguments)
        if (res == "canvas"){
            return canvas
        }
        if (res == "div"){
            return div;
        }
    },
    documentElement:{
        getAttribute:function (res) {
            console.log("document.documentElement.getAttribute:",arguments)
            return null
        }
    },
    toString: function() {
        return "[object HTMLDocument]"
    }
};

// ======================

// window = globalThis
// window.sessionStorage = {}
// window.toString = () => { return '[object Window]' }
// cookie = "i18next=en; s_v_web_id=verify_m5po092n_4L7rywvH_aeWA_4MSh_9bmo_l61hxmli9Put; msToken=DHk9uCy1XBxtJsiQeBIPJGDyvygc67vlnnu2Uo1JSOuTdhg391jQB1BQUd8MX6aNVOL4wV8lNRSuocK-Rdj5CrWfQ_QfgNvx-VxSl9BGivfX52RnAzRaMzim4rNRPRo=; msToken=BOrYzwLqb4X6rHDDldO78aS4nCrFGaNWkM81RvTrjjUHPvXKLM4pEWRFvJ0Wfsf4yei9Cw9w8nhucQ5smIVg9HAE8PxDkmQtM4QcnPG2HVUU4CX9N3b0kg=="
// document = {
//     referrer: '',
//     cookie: cookie,
//     toString: () => { return '[object HTMLDocument]' }
// }
// location = {
//     href: 'https://www.coze.com/',
//     protocol: 'https:',
//     toString() {
//         return location.href
//     }
// }
// // delete process


// // // 防反hook的检测
// // unsafeEval = window.eval;
// // window.eval = function(str) { debugger; unsafeEval(str); }
// // window.eval.toString = function() { return unsafeEval.toString(); }

// // // 防原型链检测
// // String.prototype.split_bk = String.prototype.split;
// // String.prototype.split = function(val) { return this.toString().spilt_bk(val) }
// // //伪装原型链
// // String.prototype.split.toString = function() { return 'function split() { [native code] }' }

// // 伪造Storage
// function storageMock(data = {}) {
//     let storage = {...data};
//     return {
//         setItem: function(key, value) {
//             config.state.debug && console.log(key, value)
//             storage[key] = value || '';
//         },
//         getItem: function(key) {
//             config.state.debug && console.log(key, key in storage ? storage[key] : null)
//             return key in storage ? storage[key] : null;
//         },
//         removeItem: function(key) {
//             config.state.debug && console.log(key)
//             delete storage[key];
//         },
//         get length() {
//             return Object.keys(storage).length;
//         },
//         key: function(i) {
//             const keys = Object.keys(storage);
//             return keys[i] || null;
//         }
//     };
// }
// window.localStorage = storageMock(require('./local.json'));
// window.sessionStorage = storageMock(require('./global.json'));

// // 伪造原型
// Navigator = function Navigator() { throw new TypeError("Illegal constructor") };
// Object.defineProperties(Navigator.prototype, {
//     [Symbol.toStringTag]: {
// 		value: "Navigator",
// 	    configurable: true
// 	}
// });
// var navigator = {};
// navigator.__proto__ = Navigator.prototype;
// Navigator.prototype.plugins = [];
// Navigator.prototype.language = 'en-US'
// Navigator.prototype.languages = ['en-US', 'en'];
// Navigator.prototype.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36';
// Navigator.prototype.platform = 'Win32';
// Navigator.prototype.maxTouchPoints = 0;
// Navigator.prototype.onLine = true;
// for (var _prototype in Navigator.prototype) {
//     navigator[_prototype] = Navigator.prototype[_prototype];
//     if (typeof (Navigator.prototype[_prototype]) != "function") {
//         Navigator.prototype.__defineGetter__(_prototype, function () {
//             var e = new Error();
//             e.name = "TypeError";
//             e.message = "Illegal constructor";
//             e.stack = "VM988:1 Uncaught TypeError: Illegal invocation \r\n at <anonymous>:1:21";
//             throw e;
//         });
//     }
// }
// // =====

XMLHttpRequest = function XMLHttpRequest() { throw new TypeError("Illegal constructor") };
Object.defineProperties(XMLHttpRequest.prototype, {
    [Symbol.toStringTag]: {
		value: "XMLHttpRequest",
	    configurable: true
	}
});

// // 这段代码可以用来检查属性被赋值的debug
// // obj = new Proxy(obj, {
// //     set: function(target, property, value, receiver) {
// //         if (property == 'encode') {
// //             debugger
// //         }
// //         return Reflect.set(...arguments);
// //     }
// // })

function fix(target, property, value, echo) {
    if (echo && (property == 'sessionStorage' || property == 'localStorage')) {
        return '{ ... }'
    }

    let map = {
        global: 'Window',
    }
    if (property == Symbol.toStringTag) {
        if (map[value]) {
            return map[value]
        }
        if (target == document) {
            return 'HTMLDocument'
        }
    }
    return value
}

function newProxy(obj, name) {
    return new Proxy(obj, {
        get: function(target, property, receiver) {
            let value = Reflect.get(target, property, receiver);
            name = name ?? obj.toString()
            config.state.debug && console.log("方法:", "get  ", "对象:", name, "  属性:", property, ", 属性值:", fix(target, property, value, true), ", 属性值类型:", typeof value);
            value = fix(target, property, value);
            if (typeof value == 'object') {
                return newProxy(value, property);
            }
            return value;
        },
        set: function(target, property, value, receiver) {
            name = name ?? obj.toString()
            config.state.debug && console.log("方法:", "set  ", "对象:", name, "  属性:", property, ", 属性值:", fix(target, property, value, true), ", 属性值类型:", typeof target[property]);
            return Reflect.set(...arguments);
        }
    })
}

function getEnvs(proxyObjs) {
    for (let i = 0; i < proxyObjs.length; i++) {
        const handler = `{
            get: function(target, property, receiver) {
                let value = Reflect.get(target, property, receiver);
                config.state.debug && console.log("方法:", "get  ", "对象:", "${proxyObjs[i]}", "  属性:", property, ", 属性值:", fix(target, property, value, true), ", 属性值类型:", typeof value);
                value = fix(target, property, value);
                // if (typeof value == 'object') {
                //     return newProxy(value, property);
                // }
                return value;
            },
            set: function(target, property, value, receiver) {
                config.state.debug && console.log("方法:", "set  ", "对象:", "${proxyObjs[i]}", "  属性:", property, ", 属性值:", fix(target, property, value, true), ", 属性值类型:", typeof target[property]);
                return Reflect.set(...arguments);
            }
        }`;
        eval(`try {
            ${proxyObjs[i]};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        } catch (e) {
            ${proxyObjs[i]} = {};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        }`);
    }
}

proxyObjs = ['window', 'document', 'location', 'navigator', 'history', 'screen']
getEnvs(proxyObjs);


config = {
    state: {
        debug: false
    },

    doBogus: undefined,
    doSignature: undefined,
    init: (timer) => {
        if (!timer) {
            window.setTimeout = () => {}
            window.setInterval = () => {}
        }
        bbb()
        // ======
        require('./webmssdk_1.0.0.56.es5');
        config.doBogus = window['_0x2ae157'];
        config.doSignature = window['_0x1ae21a'];
        window['_0x2b87de'].init({
            "aid": 511700,
            "isSDK": false,
            "region": "sg",
            "enablePathList": [
                "^/api",
                "^/models",
                "^/passport"
            ],
            "mode": 513
        });
        // ======
    },
    debug: (enabled) => {
        config.state.debug = enabled
    }
};

module.exports = config;