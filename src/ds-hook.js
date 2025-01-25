const fs = require('node:fs');
const buffer = fs.readFileSync('./sha3_wasm_bg.wasm');

async function calc(challenge, salt, diff) {
    var r, o;

    function u(e, t, n) {
        if (void 0 === n) {
            let n = c.encode(e)
            , r = t(n.length, 1) >>> 0;
            return a().subarray(r, r + n.length).set(n),
            o = n.length,
            r
        }
        let r = e.length
        , i = t(r, 1) >>> 0
        , u = a()
        , f = 0;
        for (; f < r; f++) {
            let t = e.charCodeAt(f);
            if (t > 127)
                break;
            u[i + f] = t
        }
        if (f !== r) {
            0 !== f && (e = e.slice(f)),
            i = n(i, r, r = f + 3 * e.length, 1) >>> 0;
            let t = s(e, a().subarray(i + f, i + r));
            f += t.written,
            i = n(i, r, f, 1) >>> 0
        }
        return o = f,
        i
    }

    let f = null;
    function l() {
        return (null === f || !0 === f.buffer.detached || void 0 === f.buffer.detached && f.buffer !== r.memory.buffer) && (f = new DataView(r.memory.buffer)),
        f
    }

    let i0 = null;
    function a() {
        return (null === i0 || 0 === i0.byteLength) && (i0 = new Uint8Array(r.memory.buffer)),
        i0
    }

    const wasmModule = await WebAssembly.instantiate(buffer);
    const instance = wasmModule.instance;
    r = instance.exports;

    let e, t, n;
    e = challenge
    t = salt
    n = diff

    try {
        let c = r.__wbindgen_add_to_stack_pointer(-16)
          , s = u(e, r.__wbindgen_export_0, r.__wbindgen_export_1)
          , f = o
          , d = u(t, r.__wbindgen_export_0, r.__wbindgen_export_1)
          , p = o;
        r.wasm_solve(c, s, f, d, p, n);
        var i = l().getInt32(c + 0, !0)
          , a = l().getFloat64(c + 8, !0);
        console.log('result: ', (0 === i ? void 0 : a))
        return (0 === i ? void 0 : a)
    } finally {
        r.__wbindgen_add_to_stack_pointer(16)
    }
}

module.exports = {
    calc
}