const fs = require('node:fs')
Log = (...args) => {
    let content = '';
    for (let k in args) {
        let v = args[k];
        if (typeof v == 'object') {
            v = JSON.stringify(v, (_, obj) => {
                if (obj == window) {
                    obj = '[object Window]'
                }
                else if (obj == location) {
                    obj = '[object Location]'
                }
                else if (obj == document) {
                    obj = '[object Document]'
                }
                return obj
            })
        }
        content += `${v} `
    }
    if (content != '') {
        fs.writeFile('log.txt', content + '\n', { flag: 'a+' }, err => {
            err && console.error(err)
        })
    }
}

Date.prototype.getTime = function() {
    return 1736619812859;
}

__getOwnPropertyNames = Object.getOwnPropertyNames
Object.getOwnPropertyNames = function(obj) {
    if (obj == navigator) {
        return [];
    }
    // console.log('getOwnPropertyNames: ', obj)
    return __getOwnPropertyNames.apply(Object, arguments)
}

// ======================
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0';
canvas = {
    getContext: function (res) {
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
    },
    toDataURL: function() {
        console.log("canvas.toDataURL:", arguments)
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAAAAXNSR0IArs4c6QAAA8NJREFUSEvNllmoVlUYhp9jA2VUNphhUkQD0URBZKSQTRReZBJWNCiNF5GQEVgXNpgGokk5JeQQJaEGUTSPllaWpWWDgg1aR6TBIhMTO6WuB94du91/ON0c8wPx/P9e/1rf+73D2m20rhOAr4A/87gnsBXY0cn67v76IGAzsC8wCrgPOAz4qa1x8gHAH8DVwOHAXOBK4DvgXODOrB8OLAA2dkPnA4HJaXgDsA24oTQ/oXb+b8CpwLomgGuAM4EjgdeAaWXq9wA9gLOBd4H9gCOA8cCqbgDgljLuIFXAccAaYBywHjgwYI5ysHUA/UpDl6c5F30dIEcDv5cN9sxGfYD9gUtrzXuga6r/fbQXsDewpROQSsDpbupiCI8ABwNLo4TvgZeBkwoz7U0GbLy90PN0Nu0LSNfzwHlh4CxgIfBS1pxe5PU2sDa0DgO+zW9sUqDP1pq8GRgDODDrTeCKTuToWa8CelI5VWVPJ8pIE4CT1byTslKUvwCflgZHAB8XWR0KrAR+AOYBD5eGryvTfgDolb8123zgpshwZPabGpaHAssKyDOA2cCP8VidDHt5v4TH6MhJFtxXCbuPMt7QBNAbeCE+0LR3A28Bn5fmHspUt5fv/Te40HpREkG5nAPcBjyZpm4MUH1zSzoT5K2RoGb12V0B7x711HumNPlokcpTkfIA4Jtyxq/Ah8AxrVJIySgPZTAoKF9JhC5KOiiZz9Kc9Pp5FvAOoF9k7ZR4QqbqAIxDGb2jgHgwoEwYf79PPKGPZFZmHGZVAuyfc74ATgM66gz4w4lp1qb+At6LrpWOmrVBJ+AkTk4zavixcuixJX6/LOa/Ng14cBNAteZC4PUWADT9FEDjKrGqLouU9Kh+87k9UQdgXDl5tX58zPVR0eHFhcI5JQGuD5gVwHOlOXXsvaHU1sXkb4SBKl7rAJSYkjQMOgNgKjXrEmB67iPZvCC+k+l/ABC9l4Um9j7oSGOfJA41msyYvz8nabwjqiHYmABMh9Xpog5A2mdmwupZdq2mhJoAZuRS08xVmZTK6V8mfhz4INN2iofERDaudIaUCS6ON/aIhEwgS8/okyYA15tCgr0XWBIWKsN2BcBh+upwfgYqA/pHD+xoptATOcAEUc9OUt36HiQzV0WDAvN1QlMK7L+WGu7q4mq1l682Sljf6R1fNZY3JeRnGXgxzZkwTtVkMnvvL5fa7Ukpo8/3IIE60V1VvtIY4X9Xk4HqgfIwharyEjH+xiZllI33w/9erQBUWjZZbNLXAhPE7/1s6uw2tRN/auoRceiY2wAAAABJRU5ErkJggg==";
    },
    toString: function() {
        return '[object HTMLCanvasElement]';
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
    toString: function() {
        return '[object HTMLDivElement]';
    }
}
Plugin = {
    0:{type: 'application/pdf', suffixes: 'pdf', description: 'Portable Document Format'},
    1:{type: 'text/pdf', suffixes: 'pdf', description: 'Portable Document Format'},
    application:{type: 'application/pdf', suffixes: 'pdf', description: 'Portable Document Format'},
    text:{type: 'text/pdf', suffixes: 'pdf', description: 'Portable Document Format'},
    description:"Portable Document Format",
    filename:"internal-pdf-viewer",
    length:2,
    name:"PDF Viewer",
}
Plugin['0']["enabledPlugin"]=Plugin
Plugin['1']["enabledPlugin"]=Plugin
Plugin['application']["enabledPlugin"]=Plugin
Plugin['text']["enabledPlugin"]=Plugin

Plugin = {
    0: Plugin,
    __name__: 'Plugin',
}

global.toString = function() {
    return '[object Window]'
}

window = globalThis
// window.safari = {
//     pushNotification: {
//         toString: function() {
//             return "[object SafariRemoteNotification]";
//         }
//     }
// }
window.sessionStorage = {}
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
window.HTMLElement = function() {
    console.log("window.HTMLElement")
}
window.Audio = function() {
    console.log("window.Audio")
}
window.open = function() {
    console.log("window.open: ", arguments)
}
window.fetch = function() {
    console.log("window.fetch: ", arguments)
}
window.toString = () => {
    return '[object Window]' }
Object.defineProperties(window, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    },
    toString: () => {
        return '[object Window]'
    }
});
cookie = "ttwid=1%7CZMQxp1EFgx4fuKu--p-15nkXczXljduJSLy1ZO2jk6Y%7C1736920611%7Cf07a804c4bd85e470728fcf30d1a1ad350fb2c8fa597a7313dbd45e89facfd99; store-idc=maliva; sessionid_ss=5a9aa493d052986dd08ca64299125099; sessionid=5a9aa493d052986dd08ca64299125099; store-country-code-src=uid; uid_tt=3be5481e5343a2668290910c62f79cdabbe47e4e3501daea8fbd75ae2368a93c; i18next=en; odin_tt=32aef92ad466e336ef26f6fe2513d86da7071cfdc1ba9d4f533bb98f4e45d2f1e661f34305151736804b641dcf80ba8c47ea34045a5c41cd50fcf01abbf4753d; passport_csrf_token=1bde4ec8a179c656122892c75fafacc4; passport_csrf_token_default=1bde4ec8a179c656122892c75fafacc4; s_v_web_id=verify_m5xhoqf7_HQlKktUI_u07T_4LRE_9CYl_vIJOY6ZrLhAB; sid_guard=5a9aa493d052986dd08ca64299125099%7C1733288798%7C5184000%7CSun%2C+02-Feb-2025+05%3A06%3A38+GMT; sid_tt=5a9aa493d052986dd08ca64299125099; sid_ucp_v1=1.0.0-KDc2Y2M1OGE0NzQ4NWExMGYzNzgzMjA2YWY5NjZlNjYzYzhmOGNhNWUKIAiRiKra0dfixGYQ3sa_ugYY1J0fIAww-pWmtAY4CEASEAMaBm1hbGl2YSIgNWE5YWE0OTNkMDUyOTg2ZGQwOGNhNjQyOTkxMjUwOTk; ssid_ucp_v1=1.0.0-KDc2Y2M1OGE0NzQ4NWExMGYzNzgzMjA2YWY5NjZlNjYzYzhmOGNhNWUKIAiRiKra0dfixGYQ3sa_ugYY1J0fIAww-pWmtAY4CEASEAMaBm1hbGl2YSIgNWE5YWE0OTNkMDUyOTg2ZGQwOGNhNjQyOTkxMjUwOTk; store-country-code=jp; uid_tt_ss=3be5481e5343a2668290910c62f79cdabbe47e4e3501daea8fbd75ae2368a93c; msToken=hragVqPGcp_l6krhht6KADhVLj-gbunMzZQaGrpouct_3F_0tNdNIujCvXv8aqqhKy_OIlmdquyPNq31ftsqvKE1jpz8ACjalkW1gSXA4wt52M9Lw3fpZyD28iZ9yvha; msToken=hragVqPGcp_l6krhht6KADhVLj-gbunMzZQaGrpouct_3F_0tNdNIujCvXv8aqqhKy_OIlmdquyPNq31ftsqvKE1jpz8ACjalkW1gSXA4wt52M9Lw3fpZyD28iZ9yvha"
document = {
    referrer: '',
    cookie: cookie,
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
}

const url = 'https://www.coze.com/space/7388825719436673032/develop';
location = {
    host: "www.coze.com",
    href: url,
    origin: "https://www.coze.com",
    hostname: "www.coze.com",
    protocol: "https:",
    pathname: "/space/7388825719436673032/develop",
    port: "",
    hash: "",
    toString: function() {
        return url
    }
}

history = {
    scrollRestoration: "auto",
    state: {
        idx: 2,
        key: "vjlfxro2",
        title: "Coze",
        url: url,
        usr: null,
    },
    toString: function() {
        return '[object History]' }
}

screen = {
    availHeight: 1796,
    availLeft: 0,
    availTop: 25,
    availWidth: 3360,
    colorDepth: 24,
    width: 3360,
    height: 1890,
    isExtended: false,
    pixelDepth: 24,
}

// // 防反hook的检测
// unsafeEval = window.eval;
// window.eval = function(str) { debugger; unsafeEval(str); }
// window.eval.toString = function() { return unsafeEval.toString(); }

// // 防原型链检测
// String.prototype.split_bk = String.prototype.split;
// String.prototype.split = function(val) { return this.toString().spilt_bk(val) }
// //伪装原型链
// String.prototype.split.toString = function() { return 'function split() { [native code] }' }

// 伪造Storage
function storageMock(data = {}) {
    let storage = {...data};
    return {
        setItem: function(key, value) {
            console.log('setItem: ', key, value)
            config.state.debug && console.log(key, value)
            storage[key] = value || '';
        },
        getItem: function(key) {
            console.log('getItem: ', key)
            config.state.debug && console.log(key, key in storage ? storage[key] : null)
            return key in storage ? storage[key] : null;
        },
        removeItem: function(key) {
            console.log('removeItem: ', key)
            config.state.debug && console.log(key)
            delete storage[key];
        },
        get length() {
            return Object.keys(storage).length;
        },
        key: function(i) {
            const keys = Object.keys(storage);
            return keys[i] || null;
        }
    };
}
window.localStorage = storageMock({}); //(require('./local.json'));
window.sessionStorage = storageMock({});//(require('./global.json'));

// 伪造原型
Navigator = function Navigator() { throw new TypeError("Illegal constructor") };
Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
		value: "Navigator",
	    configurable: true
	}
});
navigator = {};
navigator.__proto__ = Navigator.prototype;
Navigator.prototype.plugins = [];//Plugin;
Navigator.prototype.language = 'en-US'
Navigator.prototype.languages = ['en-US', 'en'];
Navigator.prototype.userAgent = userAgent;
Navigator.prototype.platform = 'MacIntel';
Navigator.prototype.maxTouchPoints = 0;
Navigator.prototype.onLine = true;
Navigator.prototype.webdriver = false;
for (var _prototype in Navigator.prototype) {
    navigator[_prototype] = Navigator.prototype[_prototype];
    if (typeof (Navigator.prototype[_prototype]) != "function") {
        Navigator.prototype.__defineGetter__(_prototype, function () {
            var e = new Error();
            e.name = "TypeError";
            e.message = "Illegal constructor";
            e.stack = "VM988:1 Uncaught TypeError: Illegal invocation \r\n at <anonymous>:1:21";
            throw e;
        });
    }
}

window.Navigator = Navigator
window.navigator = navigator
window.location = location
window.document = document
// =====

XMLHttpRequest = function XMLHttpRequest() { throw new TypeError("Illegal constructor") };
Object.defineProperties(XMLHttpRequest.prototype, {
    [Symbol.toStringTag]: {
		value: "XMLHttpRequest",
	    configurable: true
	}
});
window.XMLHttpRequest = XMLHttpRequest;

// 伪造原型
Image = function Image() { return {} };
Object.defineProperties(Image.prototype, {
    [Symbol.toStringTag]: {
		value: "Image",
	    configurable: true
	}
});
window.Image = Image;

// 伪造原型
// PluginArray = function PluginArray() { throw new TypeError("Illegal constructor") };
// Object.defineProperties(PluginArray.prototype, {
//     item: function() {},
//     namedItem: function() {},
//     refresh: function() {},
//     toString: function() {
//         return 'function PluginArray() { [native code] }';
//     },
//     [Symbol.hasInstance]: function() {
//         return '[Symbol.hasInstance]() { [native code] }';
//     }
// });
window.PluginArray = Plugin;

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
    if (echo && (
        property == 'sessionStorage' ||
        property == 'localStorage' ||
        property == 'console' ||
        property == 'location'
    )) {
        return `{ ... }`
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
                if (typeof value == 'object') {
                    return newProxy(value, property);
                }
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

proxyObjs = ['window', 'document', 'location', 'navigator', 'history', 'screen', 'canvas', 'PluginArray']
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

        // delete process
        // delete globalThis
        // delete global
        // delete Buffer
        delete __dirname
        delete __filename

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