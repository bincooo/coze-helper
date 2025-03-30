const fs = require('node:fs');
const buffer = fs.readFileSync('./sha3_wasm_bg.wasm');

// https://chat.deepseek.com/static/282.af326b738f.js
/*
onmessage = e => {
    if ("pow-challenge" !== e.data.type)
        return;
    let {algorithm: t, challenge: n, salt: r, difficulty: o, signature: a, expireAt: i} = e.data.challenge;
    y.then( () => {
        // 这里就是计算answer值的地方
        let e = w(t, n, r, o, i);
        postMessage({
            type: "pow-answer",
            answer: {
                algorithm: t,
                challenge: n,
                salt: r,
                answer: e,
                signature: a
            }
        })
    }
    ).catch(e => {
        postMessage({
            type: "pow-error",
            error: e
        })
    }
    )
} 
*/

// calc('ff33c2a29b146717c9e478e06be0013f74f6b84e4d82f56804fc1f2ac0453e49', 'e422a91ff3d443bf6fa0', 144000, 1743364337693).then(console.log)

async function calc(challenge, salt, diff, expireAt) {
    function u() {
        let f = null;
        return (null === f || !0 === f.buffer.detached || void 0 === f.buffer.detached && f.buffer !== r.memory.buffer) && (f = new DataView(r.memory.buffer)),
        f
    }

    function i() {
        a = null;
        return (null === a || 0 === a.byteLength) && (a = new Uint8Array(r.memory.buffer)),
        a
    }

    function c(e, t, n) {
        if (void 0 === n) {
            let n = s.encode(e)
            , r = t(n.length, 1) >>> 0;
            return i().subarray(r, r + n.length).set(n),
            o = n.length,
            r
        }
        let r = e.length
        , a = t(r, 1) >>> 0
        , c = i()
        , f = 0;
        for (; f < r; f++) {
            let t = e.charCodeAt(f);
            if (t > 127)
                break;
            c[a + f] = t
        }
        if (f !== r) {
            0 !== f && (e = e.slice(f)),
            a = n(a, r, r = f + 3 * e.length, 1) >>> 0;
            let t = l(e, i().subarray(a + f, a + r));
            f += t.written,
            a = n(a, r, f, 1) >>> 0
        }
        return o = f,
        a
    }

    // let {algorithm: t, challenge: n, salt: r, difficulty: o, signature: a, expireAt: i} = e.data.challenge;
    // t = challenge, n = salt, a = difficulty, i = expireAt
    w = async (t, n, a, i) => {
        const wasmModule = await WebAssembly.instantiate(buffer);
        const instance = wasmModule.instance;
        r = instance.exports;
        let e = 'DeepSeekHashV1';
        let s = "".concat(n, "_").concat(i, "_")
        , l = function(e, t, n) {
            try {
                let s = r.__wbindgen_add_to_stack_pointer(-16)
                , l = c(e, r.__wbindgen_export_0, r.__wbindgen_export_1)
                , f = o
                , d = c(t, r.__wbindgen_export_0, r.__wbindgen_export_1)
                , p = o;
                r.wasm_solve(s, l, f, d, p, n);
                var a = u().getInt32(s + 0, !0)
                , i = u().getFloat64(s + 8, !0);
                return 0 === a ? void 0 : i
            } finally {
                r.__wbindgen_add_to_stack_pointer(16)
            }
        }(t, s, a);
        if (!l)
            throw Error("No solution found: " + "algorithm: ".concat(e, ", ") + "challenge: ".concat(t, ", ") + "difficulty: ".concat(a, ", ") + "prefix: ".concat(s));
        return l
    }

    return await w(challenge, salt, diff, expireAt)
}


// async function calc(challenge, salt, diff) {
//     var r, o;

//     function u(e, t, n) {
//         if (void 0 === n) {
//             let n = m.encode(e)
//               , r = t(n.length, 1) >>> 0;
//             return g().subarray(r, r + n.length).set(n),
//             p = n.length,
//             r
//         }
//         let r = e.length
//           , o = t(r, 1) >>> 0
//           , i = g()
//           , a = 0;
//         for (; a < r; a++) {
//             let t = e.charCodeAt(a);
//             if (t > 127)
//                 break;
//             i[o + a] = t
//         }
//         if (a !== r) {
//             0 !== a && (e = e.slice(a)),
//             o = n(o, r, r = a + 3 * e.length, 1) >>> 0;
//             let t = v(e, g().subarray(o + a, o + r));
//             a += t.written,
//             o = n(o, r, a, 1) >>> 0
//         }
//         return p = a,
//         o
//     }

//     let f = null;
//     function l() {
//         return (null === f || !0 === f.buffer.detached || void 0 === f.buffer.detached && f.buffer !== r.memory.buffer) && (f = new DataView(r.memory.buffer)),
//         f
//     }

//     let i0 = null;
//     function a() {
//         return (null === i0 || 0 === i0.byteLength) && (i0 = new Uint8Array(r.memory.buffer)),
//         i0
//     }

//     const wasmModule = await WebAssembly.instantiate(buffer);
//     const instance = wasmModule.instance;
//     r = instance.exports;

//     let e, t, n;
//     e = challenge
//     t = salt
//     n = diff

//     try {
//         let c = r.__wbindgen_add_to_stack_pointer(-16)
//           , s = u(e, r.__wbindgen_export_0, r.__wbindgen_export_1)
//           , f = o
//           , d = u(t, r.__wbindgen_export_0, r.__wbindgen_export_1)
//           , p = o;
//         r.wasm_solve(c, s, f, d, p, n);
//         var i = l().getInt32(c + 0, !0)
//           , a = l().getFloat64(c + 8, !0);
//         console.log('result: ', (0 === i ? void 0 : a))
//         return (0 === i ? void 0 : a)
//     } finally {
//         r.__wbindgen_add_to_stack_pointer(16)
//     }
// }

module.exports = {
    calc
}