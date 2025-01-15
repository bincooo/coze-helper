
// raw = body_hash=1323137922&X-Bogus=DFSzswVYLJLQ3iB4tp/X9HSjtbdL&msToken=ACVOyPCjhmZKm1IkOB9aHXySvnuQtDKZwvOENf44_0i8rt-10b8BeEzmXkPFPz8rmJECFhW53batenjleVGYibU5lGv5IPoGUR7gu78AC4DAYlbPKSJAZaPuI-AkONQw&pathname=/api/playground_api/mget_user_info&tt_webid=&uuid=
function genSignature(msToken, bogus, pathname, body = {}) {
    let raw = `X-Bogus=${bogus}&msToken=${msToken}&pathname=${pathname}&tt_webid=&uuid=`
    if (Object.keys(body).length > 0) {
      raw = `body_hash=${_0xaea537(_0x108761, JSON.stringify(body))}&${raw}`
    }
    // _signature
    const [slice, params] = command("484e4f4a403f5243003b2225b004aa69000000dc9b76278b00000477110001033f2e17000135491102004a120000110001110001031a2747000503414500201100010334274700050347450012110001033e2747000603041d45000303111d184301421101021400020211000211000103182c43010211000211000103122c43011802110002110001030c2c4301180211000211000103062c43011802110002110001430118421100011401010211010311000103022c430142110101031c2b11000103042d2f1400021100011401010211010311000243014202110103110101031a2b11000103062d2f4301021101021100014301184205000000003b0114000205000000473b01140003050000008b3b01140004050000009e3b0114000505000000be3b0114000603001400010300140007030014000811010144004a12000143000403e81b03002d14000911010212000232330033021101030211010303001100090700031843021101041200044a12000511010412000612000703021843014302050000fff11c140008110009110008050000fff11a3103002d4a1200080302430114000a11000a14000b11000a12000703202947001811000a4a12000511000a120007032019430114000b45004511000a12000703202747003907000314000c030014000d11000d032011000a120007192747001411000c0700091817000c354917000d214945ffdc11000c11000b1814000b07000a11000b18140007021101051100070302430214000702110103030011000707000318430214000e02110106430014000f11011807000b25470004014500010011000f07000c1607000314001011011612000d3300131101074a12000e11011612000d430107000f2647006503001400111101161200104700290211010803001101074a12000e0211010911011612000d1101161200104302430143021400114500200211010803001101074a12000e0211010a11011612000d43014301430214001107001111001118070012181400100211010b110116120013430114001211011612001447001511010c4a12001511001211011612001443024500031100121400121100100211010d110012430118140010110010070016180211010e1101161200134301180700121814001011001007001718070018181400100211010f11000f4301140013110102120002323300060211011043001400141101021200023233001811011112001934000f021101120211011307001a430143011400150211000411000743010211000511000706001b1b03002d4301180211000611001411000731430118021100040211010311000e1101021200023233000611011412001c4a12000843004302050000fff11c03102b0211010311000e110010070003184302050000fff11c2f4301180211000511001303082b11010212001d03042b2f110007314301180211000311000843011814001602110006030043014911001547000a1100161100151814001607001e1100161814001702110108030011001743024a120008031043011400181100184a12001f1100181200070302191100181200074302140019110017110019181400171100174200200c06120f0d23080112230f04050707051434090d050b040f0d2e0f1436010c090400040812050609131502131412090e070810120f140f030f0c060c050e07140808140f331412090e0701500e515050505050505051515050505007060f121205010c0a0409120503143309070e04020f041909131412090e07090619021b1d0b020f041936010c521314120a020f04193f080113085d01460315120c0511150512190a01130f0c043f1309070e09100114080e010d055d0914143f17050209045d0646151509045d0e3f02191405043f1305033f0409040714143f130309040a5452595459565752595609151305122107050e1409060536051213090f0e0e3f505222543a56170f505050505105130c090305")
    const p1 = params[30];

    const timer = 1736858931373 /* new Date().getTime()*/ / ( (slice[pos = 297] << 8) + slice[pos = 297 + 1] ) >> 0; // 去小数

    const Ox0 = _0x2d72f8(0, timer.toString());  // 2534090369
    const Ox1 = _0x2d72f8(Ox0, "www.coze.com/"); // 4181143255

    const Ox2 = ( ( ( ( (slice[362] << 8) + slice[362 + 1] ) << 8 ) + slice[362 + 2] ) << 8 ) + slice[362 + 3]; // 65521
    const Ox3 = (Ox1 % Ox2) * Ox2; // 1679041146
    const Ox4 = (timer ^ Ox3) >>> 0;  // 2924508913

    const bin = Ox4.toString(2); // 10101110010100000111011011110001
    const binCode = parseInt(params[10] + bin, 2); // 35393455027953

    let num = parseInt(bin, 2) >> 2;
    let i, i1, i2; // 35393903335504 >> 2
    let Ox5, Ox6;
    Ox6 = Ox1 % Ox2;
    

    // 进入正题
    let str = '';

    i1 = slice[85] << 24 >> 24; // 24
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1; // 50 = -14 & 63

    i1 = slice[45] << 24 >> 24; // 71
    i = i + i1; // 121 = 50 + 71
    str += fromCharCode(i)

    // =====

    i1 = slice[97] << 24 >> 24; // 18
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1; // 16 = -880 & 63

    i1 = slice[45] << 24 >> 24; // 71
    i = i + i1; // 81 = 16 + 65
    str += fromCharCode(i)

    // =====

    i1 = slice[110] << 24 >> 24; // 12
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;
    i = i & i1; // 16 = -880 & 63

    i1 = slice[31] << 24 >> 24;
    i = i + i1; // 81 = 16 + 65
    str += fromCharCode(i)

    // =====

    i1 = slice[123] << 24 >> 24; // 6
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;
    i = i & i1; // 16 = -880 & 63

    i1 = slice[59] << 24 >> 24; // 特殊
    i1 = -i1;
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[4] << 24 >> 24;
    i = num & i1; // 16 = -880 & 63

    i1 = slice[59] << 24 >> 24; // 特殊
    i1 = -i1;
    i = i + i1;
    str += fromCharCode(i)

    // console.log("str: ", str)
    // str = '';

    // 前置
    i = (slice[912] << 8) + slice[913]
    i1 = + parseInt(params[i]);
    let next = binCode / i1; // 8024.xxx
    i = binCode << 28;
    i1 = next >> 4;
    num = i ^ i1;
    /// 第2轮

    // =====

    i1 = slice[85] << 24 >> 24; // 24
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[31] << 24 >> 24; // 65
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[97] << 24 >> 24; // 18
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[31] << 24 >> 24; // 65
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[110] << 24 >> 24; // 12
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[31] << 24 >> 24; // 65
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[123] << 24 >> 24; // 12
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[31] << 24 >> 24; // 65
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[4] << 24 >> 24;
    i = num & i1; // 16 = -880 & 63

    i1 = slice[31] << 24 >> 24;
    i = i + i1;
    str += fromCharCode(i)

    // console.log("str: ", str)
    // str = '';

    // 前置
    i = _0x46b4a1(); // 2729189100
    i1 = binCode;
    i = i ^ i1;
    i1 = slice[198] << 24 >> 24; // 26
    i2 = next << i1;
    num = slice[204] << 24 >> 24; // 6
    num = i >> num;
    num = i2 | num; // -1070337632
    next = i; // 217868317
    /// 第3轮
    
    // =====
    i1 = slice[85] << 24 >> 24;
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[31] << 24 >> 24; // 65
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[97] << 24 >> 24; // 18
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[31] << 24 >> 24; // 65
    i = i + i1;
    str += fromCharCode(i)

    // =====
    // 特殊的一个符
    i1 = slice[4] << 24 >> 24;  // 63
    i = - slice[65];
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[123] << 24 >> 24; // 12
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[31] << 24 >> 24; // 65
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[4] << 24 >> 24; // 63
    i = num & i1; // 16 = -880 & 63

    i1 = slice[45] << 24 >> 24;
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[4] << 24 >> 24; // 63
    i = next & i1; // 16 = 217868317 & 63

    i1 = slice[45] << 24 >> 24;
    i = i + i1;
    str += fromCharCode(i)

    // console.log("str: ", str)
    // str = '';

    // 前置
    i1 = _0x2d72f8(0, binCode.toString() ); // 3680146767
    i = _0x2d72f8(i1, raw); // 2201684832
    i2 = i % Ox2; // 48190
    i1 = _0x2d72f8(i1, userAgent); // 2396438437
    i1 = i1 % Ox2; // 7862
    i = slice[977] << 24 >> 24; // 16
    i1 = i1 << i; // 515244032
    Ox5 = i1 ^ i2; // 515292222
    i1 = slice[153] << 24 >> 24; // 2
    num = Ox5 >> i1; // 128823055
    /// 第4轮

    // =====

    i1 = slice[85] << 24 >> 24; // 24
    i = num >> i1;

    i1 = slice[31] << 24 >> 24; // 71
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[97] << 24 >> 24; // 18
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[45] << 24 >> 24; // 71
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[110] << 24 >> 24; // 12
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[45] << 24 >> 24; // 71
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[123] << 24 >> 24; // 6
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;
    i = i & i1; // 16 = -880 & 63

    i1 = slice[59] << 24 >> 24;
    i1 = -i1;
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[4] << 24 >> 24;
    i = num & i1; // 15 = 128823055 & 63

    i1 = slice[31] << 24 >> 24; // 65
    i = i + i1;
    str += fromCharCode(i)

    // console.log("str: ", str);
    // str = '';

    // 前置
    i = info.feVersion; // 2
    num = slice[1022] << 24 >> 24; // 4
    i1 = i << num; // 32
    i = 1 << slice[1013]; // 256
    i1 = i | i1; // 288
    i2 = binCode;
    i1 = i1 ^ i2;
    i1 = i1 >>> num; // 182781821
    i = Ox5 << slice[162]; // -536870912
    num = i ^ i1; // -354089091

    /// 第5轮

    // =====

    i1 = slice[85] << 24 >> 24; // 24
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[45] << 24 >> 24; // 71
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[97] << 24 >> 24; // 18
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1; // 16 = -880 & 63

    i1 = slice[59] << 24 >> 24; // 4
    i1 = -i1;
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[110] << 24 >> 24; // 12
    i = num >> i1; // -86448
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1; // 16

    i1 = slice[31] << 24 >> 24; // 71
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[123] << 24 >> 24; // 12
    i = num >> i1; // -86448
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1; // 16

    i1 = slice[45] << 24 >> 24; // 71
    i = i + i1;
    str += fromCharCode(i)

    // =====
    i1 = slice[4] << 24 >> 24;
    i = num & i1; // 15 = 128823055 & 63

    i1 = slice[59] << 24 >> 24; // 4
    i1 = -i1;
    i = i + i1;
    str += fromCharCode(i)

    // console.log("str: ", str)
    // str = '';

    // 前置
    i  = ( ( ( ( (slice[362] << 8) + slice[362 + 1] ) << 8 ) + slice[362 + 2] ) << 8 ) + slice[362 + 3]; // 65521
    num = Ox1 % i; // 51682
    /// 第6轮

    // =====

    i1 = slice[85] << 24 >> 24; // 24
    i = num >> i1; // 0
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[31] << 24 >> 24; // 65
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[97] << 24 >> 24; // 18
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[31] << 24 >> 24; // 71
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[110] << 24 >> 24; // 18
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[31] << 24 >> 24; // 71
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[123] << 24 >> 24; // 18
    i = num >> i1;
    i1 = slice[4] << 24 >> 24;  // 63
    i = i & i1;

    i1 = slice[45] << 24 >> 24; // 71
    i = i + i1;
    str += fromCharCode(i)

    // =====

    i1 = slice[4] << 24 >> 24;
    i = num & i1; // 15 = 128823055 & 63

    i1 = slice[45] << 24 >> 24; // 4
    i = i + i1;
    str += fromCharCode(i)

    // console.log("str: ", str);
    // str = '';

    const code = _0xaea537(0, p1 + str).toString(16);
    str += code.slice(6, 8);
    return p1 + str;
}

function genBogus(msToken, body = {}) {
    // X-Bogus
    const [slice, params] = command("484e4f4a403f5243002d180a34dfb8c100000016c31d7c94000003090b4a12000911021607000a07000b4402070001430242070000140001110115082633000511011502263300071101150700012647001d3e000a140029070002140001413d000d021101001101154301140001411101013234000611010212000347000b001401010211010343004902110104430049110105120004140002110106120005140003030214000411000414000503401400060211010011011443011400071101074a120006021101001101074a1200061100074301430143011400081101074a120006021101001101074a1200061100014301430143011400091101081200071200083247001005000000003b0011010812000715000811010912000c14000a11000a33000811000a3a07000d2547000c11000a4a120008430014000a0211010a110003110002430214000b0211010b11000b11000a430214000c0211010c11000c07000e430214000d1101074a1200060211010011000d4301430114000e11010d44004a12000f43000403e81b14000f0211010e43001400101100061400111100030401001b1400121100030401001c140013110002140014110008030e13140015110008030f13140016110009030e13140017110009030f1314001811000e030e1314001911000e030f1314001a11000f03182c0400ff2e14001b11000f03102c0400ff2e14001c11000f03082c0400ff2e14001d11000f03002c0400ff2e14001e11001003182c0400ff2e14001f11001003102c0400ff2e14002011001003082c0400ff2e14002111001003002c0400ff2e140022110011110012311100133111001431110015311100163111001731110018311100193111001a3111001b3111001c3111001d3111001e3111001f311100203111002131110022311400230400ff1400240211010f11001111001311001511001711001911001b11001d11001f11002111002311001211001411001611001811001a11001c11001e11002011002243131400250211010b02110110110024430111002543021400260211011111000511002411002643031400270211011211002707001043021400281100284200112028787d28742f2875742a7c7c2e7e7c782975747c7c757574292f2a74787e7b2900202a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a013a06392e2f2328290729223a2f2328290628292f232829093c3e23382338353c2904383e2521073e293c202d2f29211217103f10390a090a0a10340d7c11673017103f10390a090a0a10340d7c116768012b09393f293e0d2b292238063f383e25222b023f7c072b293818252129023f7e")
    const bodyHex = new alg_kit(true).update(JSON.stringify(body)).hex();
    const msTokenHex = new alg_kit(true).update(`msToken=${msToken}`).hex();
    const uaHex = randHex("\u0000\u0001\u000e", userAgent)
    const rHex = randHex2(uaHex)

    const bodyHexBuffer0 = enc.decode( bodyHex );
    const bodyHexBuffer = enc.decode( new alg_kit(true).update( bodyHexBuffer0 ).hex() );
    const msTokenHexBuffer = enc.decode( new alg_kit(true).update( enc.decode( msTokenHex ) ).hex() );
    const timer = (new Date().getTime() / ( (slice[368] << 8) + slice[368 + 1] ));
    const cid = canvasToInt()

    const args = [
        [],
        bodyHex,
        14,1,2,2,64,
        msTokenHex,
        msTokenHexBuffer ,
        bodyHexBuffer,
        userAgent,
        "\u0000\u0001\u000e",
        uaHex,
        rHex,
        enc.decode( new alg_kit(true).update( rHex ).hex() ),
        timer,
        cid,
        64,
        1 / 256,
        1,
        14,
        
        msTokenHexBuffer[14],
        msTokenHexBuffer[15],
        bodyHexBuffer[14],
        bodyHexBuffer[15],
        bodyHexBuffer0[14],
        bodyHexBuffer0[15],

        timer >> 24,
        timer >> 16 & 255,
        timer >> 8 & 255,
        timer & 255,

        cid >> 24 & 255,
        cid >> 16 & 255,
        cid >> 8 & 255,
        cid & 255,
        
        8, 255,
    ];
    // console.log(args);

    let buf = [], pos = 658;
    for (let index = 0; index < 19; index++) {
        buf[index] = args[slice[pos+1]];
        pos += 3;
    }

    buf = _0x4baec2(...buf);
    buf = _0x1e93a1(fromCharCode(255), buf);
    buf = fromCharCode(2) + fromCharCode(255) + buf;
    return bogus0(buf);
}

const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0"
module.exports = {
    genBogus,
    genSignature,
}

var info = {
    __version__: "2.11.0",
    feVersion: 2,
    domNotValid: false,
    refererKey: "__ac_referer",
    pushVersion: "B4Z6wo",
    secInfoHeader: "X-Mssdk-Info"
  };

function command(_0x23c8d9) {
    var _0xc0ba5d = [];
    function _0x5c61ed(_0x41c392, _0x447560) {
        var _0x51dbbe = parseInt(_0x41c392.slice(_0x447560, _0x447560 + 2), 16);
        if (_0x51dbbe >>> 7 == 0) {
          return [1, _0x51dbbe];
        } else if (_0x51dbbe >>> 6 == 2) {
          _0x51dbbe = (_0x51dbbe & 63) << 8;
          return [2, _0x51dbbe += parseInt(_0x41c392.slice(_0x447560 + 2, _0x447560 + 4), 16)];
        } else {
          _0x51dbbe = (_0x51dbbe & 63) << 16;
          return [3, _0x51dbbe += parseInt(_0x41c392.slice(_0x447560 + 2, _0x447560 + 6), 16)];
        }
      }

    var _0x1a49a4;
    var _0x48b8c2 = 0;
    var _0x1b3fba = [];
    var _0x55f9b1 = parseInt(_0x23c8d9.slice(0, 8), 16);
    var _0x153c22 = parseInt(_0x23c8d9.slice(8, 16), 16);
    if (_0x55f9b1 !== 1213091658 || _0x153c22 !== 1077891651) {
      throw new Error("mhe");
    }
    if (parseInt(_0x23c8d9.slice(16, 18), 16) !== 0) {
      throw new Error("ve");
    }
    for (_0x1a49a4 = 0; _0x1a49a4 < 4; ++_0x1a49a4) {
      _0x48b8c2 += (parseInt(_0x23c8d9.slice(24 + _0x1a49a4 * 2, 26 + _0x1a49a4 * 2), 16) & 3) << _0x1a49a4 * 2;
    }
    var _0x8f185a = parseInt(_0x23c8d9.slice(48, 56), 16) * 2;
    for (_0x1a49a4 = 56; _0x1a49a4 < _0x8f185a + 56; _0x1a49a4 += 2) {
      _0x1b3fba.push(parseInt(_0x23c8d9.slice(_0x1a49a4, _0x1a49a4 + 2), 16));
    }

    var _0x57d5ce = _0x8f185a + 56;
    var _0xbcd33e = parseInt(_0x23c8d9.slice(_0x57d5ce, _0x57d5ce + 4), 16);

    _0x57d5ce += 4;
    for (_0x1a49a4 = 0; _0x1a49a4 < _0xbcd33e; ++_0x1a49a4) {
        var _0x5f31a8 = _0x5c61ed(_0x23c8d9, _0x57d5ce);
        _0x57d5ce += _0x5f31a8[0] * 2;
        for (var _0x5c2a2b = "", _0x4ed1d3 = 0; _0x4ed1d3 < _0x5f31a8[1]; ++_0x4ed1d3) {
          var _0x2d1ff1 = _0x5c61ed(_0x23c8d9, _0x57d5ce);
          _0x5c2a2b += String.fromCharCode(_0x48b8c2 ^ _0x2d1ff1[1]);
          _0x57d5ce += _0x2d1ff1[0] * 2;
        }
        _0xc0ba5d.push(_0x5c2a2b);
      }

    return [_0x1b3fba, _0xc0ba5d]
}

for (var _0xac2a16 = {
    boe: false,
    aid: 0,
    dfp: false,
    sdi: false,
    enablePathList: [],
    _enablePathListRegex: [],
    urlRewriteRules: [],
    _urlRewriteRules: [],
    initialized: false,
    enableTrack: false,
    track: {
      unitTime: 0,
      unitAmount: 0,
      fre: 0
    },
    triggerUnload: false,
    region: "",
    regionConf: {},
    umode: 0,
    v: false,
    _enableSignature: [],
    perf: false,
    xxbg: true
  }, _0x685583 = {
    debug: function (_0x56910a, _0x4e7491) {
      _0xac2a16.boe;
    }
  }, _0x5df8b4 = "0123456789abcdef".split(""), _0x58bd34 = [], _0x29301d = [], _0x3a03a9 = 0; _0x3a03a9 < 256; _0x3a03a9++) {
  _0x58bd34[_0x3a03a9] = _0x5df8b4[_0x3a03a9 >> 4 & 15] + _0x5df8b4[_0x3a03a9 & 15];
  if (_0x3a03a9 < 16) {
    if (_0x3a03a9 < 10) {
      _0x29301d[48 + _0x3a03a9] = _0x3a03a9;
    } else {
      _0x29301d[87 + _0x3a03a9] = _0x3a03a9;
    }
  }
}

var _0x416641 = 0;
function _0x46b4a1() {
  try {
    return _0x416641 || (_0xac2a16.perf ? -1 : _0x416641 = _0x5ed50a(3735928559));
  } catch (_0x3429f4) {
    return -1;
  }
}

function _0x2d72f8(_0x2ef8d2, _0x474cd5) {
    for (var _0x25f71e = 0; _0x25f71e < _0x474cd5.length; _0x25f71e++) {
      _0x2ef8d2 = (_0x2ef8d2 ^ _0x474cd5.charCodeAt(_0x25f71e)) * 65599 >>> 0;
    }
    return _0x2ef8d2;
  }

function _0xaea537(_0x4586bc, _0x23681f) {
    for (var _0x46a895 = 0; _0x46a895 < _0x23681f.length; _0x46a895++) {
      var _0x54c8b8 = _0x23681f.charCodeAt(_0x46a895);
      if (_0x54c8b8 >= 55296 && _0x54c8b8 <= 56319 && _0x46a895 < _0x23681f.length) {
        var _0x2a3352 = _0x23681f.charCodeAt(_0x46a895 + 1);
        if ((_0x2a3352 & 64512) == 56320) {
          _0x54c8b8 = ((_0x54c8b8 & 1023) << 10) + (_0x2a3352 & 1023) + 65536;
          _0x46a895 += 1;
        }
      }
      _0x4586bc = _0x4586bc * 65599 + _0x54c8b8 >>> 0;
    }
    return _0x4586bc;
  }

function bogus0(hex) {
    let str = '';
    const [slice, params] = command("484e4f4a403f52430013040afb279b8c000000002f0e58d3000001c60700001400010d1400020700011100020700021607000311000207000416070005110002070006161100021101021314000307000714000403001400061101011200081100060303182a4700b11101014a1200091700062143010400ff2e03102b1101014a1200091700062143010400ff2e03082b2f1101014a1200091700062143010400ff2e2f1400051100041100034a12000a1100050500fc00002e03122c43011817000435491100041100034a12000a110005050003f0002e030c2c43011817000435491100041100034a12000a110005040fc02e03062c43011817000435491100041100034a12000a110005033f2e430118170004354945ff3f110101120008110006190300294700b41101014a1200091700062143010400ff2e03102b110101120008110006294700161101014a12000911000643010400ff2e03082b45000203002f1400051100041100034a12000a1100050500fc00002e03122c43011817000435491100041100034a12000a110005050003f0002e030c2c4301181700043549110004110101120008110006294700161100034a12000a110005040fc02e03062c430145000311000118170004354911000411000118170004354911000442000b0102417e7d7c7b7a797877767574737271706f6e6d6c6b6a69686766655e5d5c5b5a595857565554535251504f4e4d4c4b4a49484746450f0e0d0c0b0a09080706141002024c0f417b545b4f58570b65744c6e7d070f10725949480c0967760e6d0d0a14686a7e537a560871735d504e666b706f4a4552795575514d4647067769785c5e6c4b7c5a02024c0e417b545b4f58570b65744c6e7d070f10725949480c0967760e6d0d0a12686a7e537a560871735d504e666b706f4a4552795575514d4647067769785c5e6c4b7c5a02024c0d0006535a51584b570a5c575e4d7c505b5a7e4b065c575e4d7e4b");

    let pos = 153, idx = 0;
    for (let index = 0; index < 7; index++) {
        let i1 = hex.charCodeAt(idx++);
        let i2 = hex.charCodeAt(idx++);
        let i3 = hex.charCodeAt(idx++);
        let i = i1 << 16;
        i = i2 << 8 | i;
        const num  = i3 & 255 | i;
    
        i1 = (( ( ( (slice[pos] << 8) + slice[pos+1] ) << 8 ) + slice[pos+2] ) << 8 + slice[pos+3]);
        i = (num & i1) >> 18;
        str += params[5].charAt(i);
        pos += 30;

        i1 = (( ( ( (slice[pos] << 8) + slice[pos+1] ) << 8 ) + slice[pos+2] ) << 8 + slice[pos+3]);
        i = (num & i1) >> 12;
        str += params[5].charAt(i);
        pos += 30;

        i1 = ( (slice[pos] << 8) + slice[pos+1] );
        i = (num & i1) >> 6;
        str += params[5].charAt(i);
        pos += 28;

        i1 = slice[pos];
        i = num & i1;
        str += params[5].charAt(i);
        pos = 153;
    }

    return str;
}

function randHex(_0x3c03fe, _0x4ff076) {
    for (var _0x593bf3, _0x4d8fc2 = [], _0x5b49af = 0, _0x86c25a = "", _0x259836 = 0; _0x259836 < 256; _0x259836++) {
      _0x4d8fc2[_0x259836] = _0x259836;
    }
    for (var _0xe9f5ab = 0; _0xe9f5ab < 256; _0xe9f5ab++) {
      _0x5b49af = (_0x5b49af + _0x4d8fc2[_0xe9f5ab] + _0x3c03fe.charCodeAt(_0xe9f5ab % _0x3c03fe.length)) % 256;
      _0x593bf3 = _0x4d8fc2[_0xe9f5ab];
      _0x4d8fc2[_0xe9f5ab] = _0x4d8fc2[_0x5b49af];
      _0x4d8fc2[_0x5b49af] = _0x593bf3;
    }
    var _0x324791 = 0;
    _0x5b49af = 0;
    for (var _0x5f0143 = 0; _0x5f0143 < _0x4ff076.length; _0x5f0143++) {
      _0x5b49af = (_0x5b49af + _0x4d8fc2[_0x324791 = (_0x324791 + 1) % 256]) % 256;
      _0x593bf3 = _0x4d8fc2[_0x324791];
      _0x4d8fc2[_0x324791] = _0x4d8fc2[_0x5b49af];
      _0x4d8fc2[_0x5b49af] = _0x593bf3;
      _0x86c25a += String.fromCharCode(_0x4ff076.charCodeAt(_0x5f0143) ^ _0x4d8fc2[(_0x4d8fc2[_0x324791] + _0x4d8fc2[_0x5b49af]) % 256]);
    }
    return _0x86c25a;
  }

function randHex2(uaHex) {
    let str = '';
    const [slice, params] = command("484e4f4a403f52430013040afb279b8c000000002f0e58d3000001c60700001400010d1400020700011100020700021607000311000207000416070005110002070006161100021101021314000307000714000403001400061101011200081100060303182a4700b11101014a1200091700062143010400ff2e03102b1101014a1200091700062143010400ff2e03082b2f1101014a1200091700062143010400ff2e2f1400051100041100034a12000a1100050500fc00002e03122c43011817000435491100041100034a12000a110005050003f0002e030c2c43011817000435491100041100034a12000a110005040fc02e03062c43011817000435491100041100034a12000a110005033f2e430118170004354945ff3f110101120008110006190300294700b41101014a1200091700062143010400ff2e03102b110101120008110006294700161101014a12000911000643010400ff2e03082b45000203002f1400051100041100034a12000a1100050500fc00002e03122c43011817000435491100041100034a12000a110005050003f0002e030c2c4301181700043549110004110101120008110006294700161100034a12000a110005040fc02e03062c430145000311000118170004354911000411000118170004354911000442000b0102417e7d7c7b7a797877767574737271706f6e6d6c6b6a69686766655e5d5c5b5a595857565554535251504f4e4d4c4b4a49484746450f0e0d0c0b0a09080706141002024c0f417b545b4f58570b65744c6e7d070f10725949480c0967760e6d0d0a14686a7e537a560871735d504e666b706f4a4552795575514d4647067769785c5e6c4b7c5a02024c0e417b545b4f58570b65744c6e7d070f10725949480c0967760e6d0d0a12686a7e537a560871735d504e666b706f4a4552795575514d4647067769785c5e6c4b7c5a02024c0d0006535a51584b570a5c575e4d7c505b5a7e4b065c575e4d7e4b");
    const h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    
    let pos = 153, idx = 0;
    for (let index = 0; index < 44; index++) {
        let i;
        let i1 = uaHex.charCodeAt(idx++) << 16;
        let i2 = uaHex.charCodeAt(idx++) << 8;
        i = i1 | i2;
        const num = i ^ uaHex.charCodeAt(idx++);

        i1 = (( ( ( (slice[pos] << 8) + slice[pos+1] ) << 8 ) + slice[pos+2] ) << 8 + slice[pos+3]);
        i = num & i1;
        i = i >> 18;
        str += h[i];
        pos += 30;

        i1 = (( ( ( (slice[pos] << 8) + slice[pos+1] ) << 8 ) + slice[pos+2] ) << 8 + slice[pos+3]);
        i = num & i1;
        i = i >> 12;
        str += h[i];
        pos += 30;

        i1 = ( (slice[pos] << 8) + slice[pos+1] );
        i = num & i1;
        i = i >> 6;
        str += h[i];
        pos += 28;

        if (index == 43) {
            str += '=';
            break;
        }

        i1 = slice[pos];
        i = num & i1;
        str += h[i];
        pos = 153;
    }

    return str;
}

function fromCharCode(_0x1b291e) {
    return String.fromCharCode(_0x1b291e);
  }

function _0x1e93a1(_0x3c03fe, _0x4ff076) {
    for (var _0x593bf3, _0x4d8fc2 = [], _0x5b49af = 0, _0x86c25a = "", _0x259836 = 0; _0x259836 < 256; _0x259836++) {
      _0x4d8fc2[_0x259836] = _0x259836;
    }
    for (var _0xe9f5ab = 0; _0xe9f5ab < 256; _0xe9f5ab++) {
      _0x5b49af = (_0x5b49af + _0x4d8fc2[_0xe9f5ab] + _0x3c03fe.charCodeAt(_0xe9f5ab % _0x3c03fe.length)) % 256;
      _0x593bf3 = _0x4d8fc2[_0xe9f5ab];
      _0x4d8fc2[_0xe9f5ab] = _0x4d8fc2[_0x5b49af];
      _0x4d8fc2[_0x5b49af] = _0x593bf3;
    }
    var _0x324791 = 0;
    _0x5b49af = 0;
    for (var _0x5f0143 = 0; _0x5f0143 < _0x4ff076.length; _0x5f0143++) {
      _0x5b49af = (_0x5b49af + _0x4d8fc2[_0x324791 = (_0x324791 + 1) % 256]) % 256;
      _0x593bf3 = _0x4d8fc2[_0x324791];
      _0x4d8fc2[_0x324791] = _0x4d8fc2[_0x5b49af];
      _0x4d8fc2[_0x5b49af] = _0x593bf3;
      _0x86c25a += String.fromCharCode(_0x4ff076.charCodeAt(_0x5f0143) ^ _0x4d8fc2[(_0x4d8fc2[_0x324791] + _0x4d8fc2[_0x5b49af]) % 256]);
    }
    return _0x86c25a;
  }

function _0x4baec2(_0x4d553a, _0x3db7d7, _0x375ebb, _0x1d9f4d, _0x1e2600, _0x508954, _0x54850d, _0x450591, _0x1c3e06, _0x4114c0, _0x2683e8, _0x55d2a9, _0x5cc1b9, _0x1d1980, _0x53b77a, _0x303861, _0x509e22, _0x1e8eaa, _0x2ea4d8) {
    var _0x37c10a = new Uint8Array(19);
    _0x37c10a[0] = _0x4d553a;
    _0x37c10a[1] = _0x2683e8;
    _0x37c10a[2] = _0x3db7d7;
    _0x37c10a[3] = _0x55d2a9;
    _0x37c10a[4] = _0x375ebb;
    _0x37c10a[5] = _0x5cc1b9;
    _0x37c10a[6] = _0x1d9f4d;
    _0x37c10a[7] = _0x1d1980;
    _0x37c10a[8] = _0x1e2600;
    _0x37c10a[9] = _0x53b77a;
    _0x37c10a[10] = _0x508954;
    _0x37c10a[11] = _0x303861;
    _0x37c10a[12] = _0x54850d;
    _0x37c10a[13] = _0x509e22;
    _0x37c10a[14] = _0x450591;
    _0x37c10a[15] = _0x1e8eaa;
    _0x37c10a[16] = _0x1c3e06;
    _0x37c10a[17] = _0x2ea4d8;
    _0x37c10a[18] = _0x4114c0;
    return String.fromCharCode.apply(null, _0x37c10a);
  }


var _0x416641 = 0;
function canvasToInt() {
    try {
      return _0x416641 || (_0xac2a16.perf ? -1 : _0x416641 = _0x5ed50a(3735928559));
    } catch (_0x3429f4) {
      return -1;
    }
  }

function _0x5ed50a(_0x345e9a) { // 检测canvas的
    var _0x47a844;
    // var _0x385ca6 = document.createElement("canvas");
    // _0x385ca6.width = 48;
    // _0x385ca6.height = 16;
    // var _0xf516ba = _0x385ca6.getContext("2d");
    // _0xf516ba.font = "14px serif";
    // _0xf516ba.fillText("龘ฑภ경", 2, 12);
    // _0xf516ba.shadowBlur = 2;
    // _0xf516ba.showOffsetX = 1;
    // _0xf516ba.showColor = "lime";
    // _0xf516ba.arc(8, 8, 8, 0, 2);
    // _0xf516ba.stroke();
    // _0x47a844 = _0x385ca6.toDataURL();
    _0x47a844 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAAAAXNSR0IArs4c6QAAA8NJREFUSEvNllmoVlUYhp9jA2VUNphhUkQD0URBZKSQTRReZBJWNCiNF5GQEVgXNpgGokk5JeQQJaEGUTSPllaWpWWDgg1aR6TBIhMTO6WuB94du91/ON0c8wPx/P9e/1rf+73D2m20rhOAr4A/87gnsBXY0cn67v76IGAzsC8wCrgPOAz4qa1x8gHAH8DVwOHAXOBK4DvgXODOrB8OLAA2dkPnA4HJaXgDsA24oTQ/oXb+b8CpwLomgGuAM4EjgdeAaWXq9wA9gLOBd4H9gCOA8cCqbgDgljLuIFXAccAaYBywHjgwYI5ysHUA/UpDl6c5F30dIEcDv5cN9sxGfYD9gUtrzXuga6r/fbQXsDewpROQSsDpbupiCI8ABwNLo4TvgZeBkwoz7U0GbLy90PN0Nu0LSNfzwHlh4CxgIfBS1pxe5PU2sDa0DgO+zW9sUqDP1pq8GRgDODDrTeCKTuToWa8CelI5VWVPJ8pIE4CT1byTslKUvwCflgZHAB8XWR0KrAR+AOYBD5eGryvTfgDolb8123zgpshwZPabGpaHAssKyDOA2cCP8VidDHt5v4TH6MhJFtxXCbuPMt7QBNAbeCE+0LR3A28Bn5fmHspUt5fv/Te40HpREkG5nAPcBjyZpm4MUH1zSzoT5K2RoGb12V0B7x711HumNPlokcpTkfIA4Jtyxq/Ah8AxrVJIySgPZTAoKF9JhC5KOiiZz9Kc9Pp5FvAOoF9k7ZR4QqbqAIxDGb2jgHgwoEwYf79PPKGPZFZmHGZVAuyfc74ATgM66gz4w4lp1qb+At6LrpWOmrVBJ+AkTk4zavixcuixJX6/LOa/Ng14cBNAteZC4PUWADT9FEDjKrGqLouU9Kh+87k9UQdgXDl5tX58zPVR0eHFhcI5JQGuD5gVwHOlOXXsvaHU1sXkb4SBKl7rAJSYkjQMOgNgKjXrEmB67iPZvCC+k+l/ABC9l4Um9j7oSGOfJA41msyYvz8nabwjqiHYmABMh9Xpog5A2mdmwupZdq2mhJoAZuRS08xVmZTK6V8mfhz4INN2iofERDaudIaUCS6ON/aIhEwgS8/okyYA15tCgr0XWBIWKsN2BcBh+upwfgYqA/pHD+xoptATOcAEUc9OUt36HiQzV0WDAvN1QlMK7L+WGu7q4mq1l682Sljf6R1fNZY3JeRnGXgxzZkwTtVkMnvvL5fa7Ukpo8/3IIE60V1VvtIY4X9Xk4HqgfIwharyEjH+xiZllI33w/9erQBUWjZZbNLXAhPE7/1s6uw2tRN/auoRceiY2wAAAABJRU5ErkJggg==";
    for (var _0x5c035d = 0; _0x5c035d < 32; _0x5c035d++) {
      _0x345e9a = _0x345e9a * 65599 + _0x47a844.charCodeAt(_0x345e9a % _0x47a844.length) >>> 0;
    }
    return _0x345e9a;
  }

/// ===== uncode /////

function _0x97254e(_0x7fc4ff) {
    for (var _0x258a8d = _0x7fc4ff.length, _0x4d9945 = "", _0x376d5 = 0; _0x376d5 < _0x258a8d;) {
      _0x4d9945 += _0x58bd34[_0x7fc4ff[_0x376d5++]];
    }
    return _0x4d9945;
  }
function _0x390b98(_0xb7a223) {
    for (var _0x2cd0c3 = _0xb7a223.length >> 1, _0x42c267 = _0x2cd0c3 << 1, _0x12f994 = new Uint8Array(_0x2cd0c3), _0x36a943 = 0, _0x2e934e = 0; _0x2e934e < _0x42c267;) {
      _0x12f994[_0x36a943++] = _0x29301d[_0xb7a223.charCodeAt(_0x2e934e++)] << 4 | _0x29301d[_0xb7a223.charCodeAt(_0x2e934e++)];
    }
    return _0x12f994;
  }

var enc = {
    encode: _0x97254e,
    decode: _0x390b98
  };
/// ===== uncode /////


var _0x78f454 = new ArrayBuffer(68);
var _0x1e07c0 = new Uint32Array(_0x78f454);
const _0x108761 = new Uint8Array(_0x78f454);
function alg_kit(condition) {
    if (condition) {
      _0x1e07c0[0] = _0x1e07c0[16] = _0x1e07c0[1] = _0x1e07c0[2] = _0x1e07c0[3] = _0x1e07c0[4] = _0x1e07c0[5] = _0x1e07c0[6] = _0x1e07c0[7] = _0x1e07c0[8] = _0x1e07c0[9] = _0x1e07c0[10] = _0x1e07c0[11] = _0x1e07c0[12] = _0x1e07c0[13] = _0x1e07c0[14] = _0x1e07c0[15] = 0;
      this.blocks = _0x1e07c0;
      this.buffer8 = _0x108761;
    } else {
      var _0x17075d = new ArrayBuffer(68);
      this.buffer8 = new Uint8Array(_0x17075d);
      this.blocks = new Uint32Array(_0x17075d);
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
}

var _0x41e834 = true;
var _0x47a14f = "0123456789abcdef".split("");
var _0x58c74d = [128, 32768, 8388608, -2147483648];
alg_kit.prototype.update = function (_0xb1cb3f) {
    if (!this.finalized) {
      var _0x396382;
      var _0x19a443 = typeof _0xb1cb3f;
      if (_0x19a443 !== "string") {
        if (_0x19a443 !== "object") {
          throw _0x5659af;
        }
        if (_0xb1cb3f === null) {
          throw _0x5659af;
        }
        if (_0x41e834 && _0xb1cb3f.constructor === ArrayBuffer) {
          _0xb1cb3f = new Uint8Array(_0xb1cb3f);
        } else if (!(Array.isArray(_0xb1cb3f) || _0x41e834 && ArrayBuffer.isView(_0xb1cb3f))) {
          throw _0x5659af;
        }
        _0x396382 = true;
      }
      for (var _0x12664a, _0x22a93a, _0x31794a = 0, _0x3996d0 = _0xb1cb3f.length, _0x23b516 = this.blocks, _0x336310 = this.buffer8; _0x31794a < _0x3996d0;) {
        if (this.hashed) {
          this.hashed = false;
          _0x23b516[0] = _0x23b516[16];
          _0x23b516[16] = _0x23b516[1] = _0x23b516[2] = _0x23b516[3] = _0x23b516[4] = _0x23b516[5] = _0x23b516[6] = _0x23b516[7] = _0x23b516[8] = _0x23b516[9] = _0x23b516[10] = _0x23b516[11] = _0x23b516[12] = _0x23b516[13] = _0x23b516[14] = _0x23b516[15] = 0;
        }
        if (_0x396382) {
          if (_0x41e834) {
            for (_0x22a93a = this.start; _0x31794a < _0x3996d0 && _0x22a93a < 64; ++_0x31794a) {
              _0x336310[_0x22a93a++] = _0xb1cb3f[_0x31794a];
            }
          } else {
            for (_0x22a93a = this.start; _0x31794a < _0x3996d0 && _0x22a93a < 64; ++_0x31794a) {
              _0x23b516[_0x22a93a >> 2] |= _0xb1cb3f[_0x31794a] << _0x25216e[_0x22a93a++ & 3];
            }
          }
        } else if (_0x41e834) {
          for (_0x22a93a = this.start; _0x31794a < _0x3996d0 && _0x22a93a < 64; ++_0x31794a) {
            if ((_0x12664a = _0xb1cb3f.charCodeAt(_0x31794a)) < 128) {
              _0x336310[_0x22a93a++] = _0x12664a;
            } else if (_0x12664a < 2048) {
              _0x336310[_0x22a93a++] = _0x12664a >> 6 | 192;
              _0x336310[_0x22a93a++] = _0x12664a & 63 | 128;
            } else if (_0x12664a < 55296 || _0x12664a >= 57344) {
              _0x336310[_0x22a93a++] = _0x12664a >> 12 | 224;
              _0x336310[_0x22a93a++] = _0x12664a >> 6 & 63 | 128;
              _0x336310[_0x22a93a++] = _0x12664a & 63 | 128;
            } else {
              _0x12664a = 65536 + ((_0x12664a & 1023) << 10 | _0xb1cb3f.charCodeAt(++_0x31794a) & 1023);
              _0x336310[_0x22a93a++] = _0x12664a >> 18 | 240;
              _0x336310[_0x22a93a++] = _0x12664a >> 12 & 63 | 128;
              _0x336310[_0x22a93a++] = _0x12664a >> 6 & 63 | 128;
              _0x336310[_0x22a93a++] = _0x12664a & 63 | 128;
            }
          }
        } else {
          for (_0x22a93a = this.start; _0x31794a < _0x3996d0 && _0x22a93a < 64; ++_0x31794a) {
            if ((_0x12664a = _0xb1cb3f.charCodeAt(_0x31794a)) < 128) {
              _0x23b516[_0x22a93a >> 2] |= _0x12664a << _0x25216e[_0x22a93a++ & 3];
            } else if (_0x12664a < 2048) {
              _0x23b516[_0x22a93a >> 2] |= (_0x12664a >> 6 | 192) << _0x25216e[_0x22a93a++ & 3];
              _0x23b516[_0x22a93a >> 2] |= (_0x12664a & 63 | 128) << _0x25216e[_0x22a93a++ & 3];
            } else if (_0x12664a < 55296 || _0x12664a >= 57344) {
              _0x23b516[_0x22a93a >> 2] |= (_0x12664a >> 12 | 224) << _0x25216e[_0x22a93a++ & 3];
              _0x23b516[_0x22a93a >> 2] |= (_0x12664a >> 6 & 63 | 128) << _0x25216e[_0x22a93a++ & 3];
              _0x23b516[_0x22a93a >> 2] |= (_0x12664a & 63 | 128) << _0x25216e[_0x22a93a++ & 3];
            } else {
              _0x12664a = 65536 + ((_0x12664a & 1023) << 10 | _0xb1cb3f.charCodeAt(++_0x31794a) & 1023);
              _0x23b516[_0x22a93a >> 2] |= (_0x12664a >> 18 | 240) << _0x25216e[_0x22a93a++ & 3];
              _0x23b516[_0x22a93a >> 2] |= (_0x12664a >> 12 & 63 | 128) << _0x25216e[_0x22a93a++ & 3];
              _0x23b516[_0x22a93a >> 2] |= (_0x12664a >> 6 & 63 | 128) << _0x25216e[_0x22a93a++ & 3];
              _0x23b516[_0x22a93a >> 2] |= (_0x12664a & 63 | 128) << _0x25216e[_0x22a93a++ & 3];
            }
          }
        }
        this.lastByteIndex = _0x22a93a;
        this.bytes += _0x22a93a - this.start;
        if (_0x22a93a >= 64) {
          this.start = _0x22a93a - 64;
          this.hash();
          this.hashed = true;
        } else {
          this.start = _0x22a93a;
        }
      }
      if (this.bytes > 4294967295) {
        this.hBytes += this.bytes / 4294967296 << 0;
        this.bytes = this.bytes % 4294967296;
      }
      return this;
    }
  };
alg_kit.prototype.finalize = function () {
    if (!this.finalized) {
      this.finalized = true;
      var _0x20ff86 = this.blocks;
      var _0x3f1259 = this.lastByteIndex;
      _0x20ff86[_0x3f1259 >> 2] |= _0x58c74d[_0x3f1259 & 3];
      if (_0x3f1259 >= 56) {
        if (!this.hashed) {
          this.hash();
        }
        _0x20ff86[0] = _0x20ff86[16];
        _0x20ff86[16] = _0x20ff86[1] = _0x20ff86[2] = _0x20ff86[3] = _0x20ff86[4] = _0x20ff86[5] = _0x20ff86[6] = _0x20ff86[7] = _0x20ff86[8] = _0x20ff86[9] = _0x20ff86[10] = _0x20ff86[11] = _0x20ff86[12] = _0x20ff86[13] = _0x20ff86[14] = _0x20ff86[15] = 0;
      }
      _0x20ff86[14] = this.bytes << 3;
      _0x20ff86[15] = this.hBytes << 3 | this.bytes >>> 29;
      this.hash();
    }
  };
alg_kit.prototype.hash = function () {
    var _0x24ebf1;
    var _0x180327;
    var _0x5e7f73;
    var _0x4d557a;
    var _0x5375cd;
    var _0x58bf3c;
    var _0x2631b8 = this.blocks;
    if (this.first) {
      _0x180327 = ((_0x180327 = ((_0x24ebf1 = ((_0x24ebf1 = _0x2631b8[0] - 680876937) << 7 | _0x24ebf1 >>> 25) - 271733879 << 0) ^ (_0x5e7f73 = ((_0x5e7f73 = ((_0x4d557a = ((_0x4d557a = (_0x24ebf1 & 2004318071 ^ -1732584194) + _0x2631b8[1] - 117830708) << 12 | _0x4d557a >>> 20) + _0x24ebf1 << 0) & (_0x24ebf1 ^ -271733879) ^ -271733879) + _0x2631b8[2] - 1126478375) << 17 | _0x5e7f73 >>> 15) + _0x4d557a << 0) & (_0x4d557a ^ _0x24ebf1)) + _0x2631b8[3] - 1316259209) << 22 | _0x180327 >>> 10) + _0x5e7f73 << 0;
    } else {
      _0x24ebf1 = this.h0;
      _0x180327 = this.h1;
      _0x5e7f73 = this.h2;
      _0x180327 = ((_0x180327 += ((_0x24ebf1 = ((_0x24ebf1 += ((_0x4d557a = this.h3) ^ _0x180327 & (_0x5e7f73 ^ _0x4d557a)) + _0x2631b8[0] - 680876936) << 7 | _0x24ebf1 >>> 25) + _0x180327 << 0) ^ (_0x5e7f73 = ((_0x5e7f73 += (_0x180327 ^ (_0x4d557a = ((_0x4d557a += (_0x5e7f73 ^ _0x24ebf1 & (_0x180327 ^ _0x5e7f73)) + _0x2631b8[1] - 389564586) << 12 | _0x4d557a >>> 20) + _0x24ebf1 << 0) & (_0x24ebf1 ^ _0x180327)) + _0x2631b8[2] + 606105819) << 17 | _0x5e7f73 >>> 15) + _0x4d557a << 0) & (_0x4d557a ^ _0x24ebf1)) + _0x2631b8[3] - 1044525330) << 22 | _0x180327 >>> 10) + _0x5e7f73 << 0;
    }
    _0x180327 = ((_0x180327 += ((_0x24ebf1 = ((_0x24ebf1 += (_0x4d557a ^ _0x180327 & (_0x5e7f73 ^ _0x4d557a)) + _0x2631b8[4] - 176418897) << 7 | _0x24ebf1 >>> 25) + _0x180327 << 0) ^ (_0x5e7f73 = ((_0x5e7f73 += (_0x180327 ^ (_0x4d557a = ((_0x4d557a += (_0x5e7f73 ^ _0x24ebf1 & (_0x180327 ^ _0x5e7f73)) + _0x2631b8[5] + 1200080426) << 12 | _0x4d557a >>> 20) + _0x24ebf1 << 0) & (_0x24ebf1 ^ _0x180327)) + _0x2631b8[6] - 1473231341) << 17 | _0x5e7f73 >>> 15) + _0x4d557a << 0) & (_0x4d557a ^ _0x24ebf1)) + _0x2631b8[7] - 45705983) << 22 | _0x180327 >>> 10) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x24ebf1 = ((_0x24ebf1 += (_0x4d557a ^ _0x180327 & (_0x5e7f73 ^ _0x4d557a)) + _0x2631b8[8] + 1770035416) << 7 | _0x24ebf1 >>> 25) + _0x180327 << 0) ^ (_0x5e7f73 = ((_0x5e7f73 += (_0x180327 ^ (_0x4d557a = ((_0x4d557a += (_0x5e7f73 ^ _0x24ebf1 & (_0x180327 ^ _0x5e7f73)) + _0x2631b8[9] - 1958414417) << 12 | _0x4d557a >>> 20) + _0x24ebf1 << 0) & (_0x24ebf1 ^ _0x180327)) + _0x2631b8[10] - 42063) << 17 | _0x5e7f73 >>> 15) + _0x4d557a << 0) & (_0x4d557a ^ _0x24ebf1)) + _0x2631b8[11] - 1990404162) << 22 | _0x180327 >>> 10) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x24ebf1 = ((_0x24ebf1 += (_0x4d557a ^ _0x180327 & (_0x5e7f73 ^ _0x4d557a)) + _0x2631b8[12] + 1804603682) << 7 | _0x24ebf1 >>> 25) + _0x180327 << 0) ^ (_0x5e7f73 = ((_0x5e7f73 += (_0x180327 ^ (_0x4d557a = ((_0x4d557a += (_0x5e7f73 ^ _0x24ebf1 & (_0x180327 ^ _0x5e7f73)) + _0x2631b8[13] - 40341101) << 12 | _0x4d557a >>> 20) + _0x24ebf1 << 0) & (_0x24ebf1 ^ _0x180327)) + _0x2631b8[14] - 1502002290) << 17 | _0x5e7f73 >>> 15) + _0x4d557a << 0) & (_0x4d557a ^ _0x24ebf1)) + _0x2631b8[15] + 1236535329) << 22 | _0x180327 >>> 10) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x4d557a = ((_0x4d557a += (_0x180327 ^ _0x5e7f73 & ((_0x24ebf1 = ((_0x24ebf1 += (_0x5e7f73 ^ _0x4d557a & (_0x180327 ^ _0x5e7f73)) + _0x2631b8[1] - 165796510) << 5 | _0x24ebf1 >>> 27) + _0x180327 << 0) ^ _0x180327)) + _0x2631b8[6] - 1069501632) << 9 | _0x4d557a >>> 23) + _0x24ebf1 << 0) ^ _0x24ebf1 & ((_0x5e7f73 = ((_0x5e7f73 += (_0x24ebf1 ^ _0x180327 & (_0x4d557a ^ _0x24ebf1)) + _0x2631b8[11] + 643717713) << 14 | _0x5e7f73 >>> 18) + _0x4d557a << 0) ^ _0x4d557a)) + _0x2631b8[0] - 373897302) << 20 | _0x180327 >>> 12) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x4d557a = ((_0x4d557a += (_0x180327 ^ _0x5e7f73 & ((_0x24ebf1 = ((_0x24ebf1 += (_0x5e7f73 ^ _0x4d557a & (_0x180327 ^ _0x5e7f73)) + _0x2631b8[5] - 701558691) << 5 | _0x24ebf1 >>> 27) + _0x180327 << 0) ^ _0x180327)) + _0x2631b8[10] + 38016083) << 9 | _0x4d557a >>> 23) + _0x24ebf1 << 0) ^ _0x24ebf1 & ((_0x5e7f73 = ((_0x5e7f73 += (_0x24ebf1 ^ _0x180327 & (_0x4d557a ^ _0x24ebf1)) + _0x2631b8[15] - 660478335) << 14 | _0x5e7f73 >>> 18) + _0x4d557a << 0) ^ _0x4d557a)) + _0x2631b8[4] - 405537848) << 20 | _0x180327 >>> 12) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x4d557a = ((_0x4d557a += (_0x180327 ^ _0x5e7f73 & ((_0x24ebf1 = ((_0x24ebf1 += (_0x5e7f73 ^ _0x4d557a & (_0x180327 ^ _0x5e7f73)) + _0x2631b8[9] + 568446438) << 5 | _0x24ebf1 >>> 27) + _0x180327 << 0) ^ _0x180327)) + _0x2631b8[14] - 1019803690) << 9 | _0x4d557a >>> 23) + _0x24ebf1 << 0) ^ _0x24ebf1 & ((_0x5e7f73 = ((_0x5e7f73 += (_0x24ebf1 ^ _0x180327 & (_0x4d557a ^ _0x24ebf1)) + _0x2631b8[3] - 187363961) << 14 | _0x5e7f73 >>> 18) + _0x4d557a << 0) ^ _0x4d557a)) + _0x2631b8[8] + 1163531501) << 20 | _0x180327 >>> 12) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x4d557a = ((_0x4d557a += (_0x180327 ^ _0x5e7f73 & ((_0x24ebf1 = ((_0x24ebf1 += (_0x5e7f73 ^ _0x4d557a & (_0x180327 ^ _0x5e7f73)) + _0x2631b8[13] - 1444681467) << 5 | _0x24ebf1 >>> 27) + _0x180327 << 0) ^ _0x180327)) + _0x2631b8[2] - 51403784) << 9 | _0x4d557a >>> 23) + _0x24ebf1 << 0) ^ _0x24ebf1 & ((_0x5e7f73 = ((_0x5e7f73 += (_0x24ebf1 ^ _0x180327 & (_0x4d557a ^ _0x24ebf1)) + _0x2631b8[7] + 1735328473) << 14 | _0x5e7f73 >>> 18) + _0x4d557a << 0) ^ _0x4d557a)) + _0x2631b8[12] - 1926607734) << 20 | _0x180327 >>> 12) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x58bf3c = (_0x4d557a = ((_0x4d557a += ((_0x5375cd = _0x180327 ^ _0x5e7f73) ^ (_0x24ebf1 = ((_0x24ebf1 += (_0x5375cd ^ _0x4d557a) + _0x2631b8[5] - 378558) << 4 | _0x24ebf1 >>> 28) + _0x180327 << 0)) + _0x2631b8[8] - 2022574463) << 11 | _0x4d557a >>> 21) + _0x24ebf1 << 0) ^ _0x24ebf1) ^ (_0x5e7f73 = ((_0x5e7f73 += (_0x58bf3c ^ _0x180327) + _0x2631b8[11] + 1839030562) << 16 | _0x5e7f73 >>> 16) + _0x4d557a << 0)) + _0x2631b8[14] - 35309556) << 23 | _0x180327 >>> 9) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x58bf3c = (_0x4d557a = ((_0x4d557a += ((_0x5375cd = _0x180327 ^ _0x5e7f73) ^ (_0x24ebf1 = ((_0x24ebf1 += (_0x5375cd ^ _0x4d557a) + _0x2631b8[1] - 1530992060) << 4 | _0x24ebf1 >>> 28) + _0x180327 << 0)) + _0x2631b8[4] + 1272893353) << 11 | _0x4d557a >>> 21) + _0x24ebf1 << 0) ^ _0x24ebf1) ^ (_0x5e7f73 = ((_0x5e7f73 += (_0x58bf3c ^ _0x180327) + _0x2631b8[7] - 155497632) << 16 | _0x5e7f73 >>> 16) + _0x4d557a << 0)) + _0x2631b8[10] - 1094730640) << 23 | _0x180327 >>> 9) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x58bf3c = (_0x4d557a = ((_0x4d557a += ((_0x5375cd = _0x180327 ^ _0x5e7f73) ^ (_0x24ebf1 = ((_0x24ebf1 += (_0x5375cd ^ _0x4d557a) + _0x2631b8[13] + 681279174) << 4 | _0x24ebf1 >>> 28) + _0x180327 << 0)) + _0x2631b8[0] - 358537222) << 11 | _0x4d557a >>> 21) + _0x24ebf1 << 0) ^ _0x24ebf1) ^ (_0x5e7f73 = ((_0x5e7f73 += (_0x58bf3c ^ _0x180327) + _0x2631b8[3] - 722521979) << 16 | _0x5e7f73 >>> 16) + _0x4d557a << 0)) + _0x2631b8[6] + 76029189) << 23 | _0x180327 >>> 9) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x58bf3c = (_0x4d557a = ((_0x4d557a += ((_0x5375cd = _0x180327 ^ _0x5e7f73) ^ (_0x24ebf1 = ((_0x24ebf1 += (_0x5375cd ^ _0x4d557a) + _0x2631b8[9] - 640364487) << 4 | _0x24ebf1 >>> 28) + _0x180327 << 0)) + _0x2631b8[12] - 421815835) << 11 | _0x4d557a >>> 21) + _0x24ebf1 << 0) ^ _0x24ebf1) ^ (_0x5e7f73 = ((_0x5e7f73 += (_0x58bf3c ^ _0x180327) + _0x2631b8[15] + 530742520) << 16 | _0x5e7f73 >>> 16) + _0x4d557a << 0)) + _0x2631b8[2] - 995338651) << 23 | _0x180327 >>> 9) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x4d557a = ((_0x4d557a += (_0x180327 ^ ((_0x24ebf1 = ((_0x24ebf1 += (_0x5e7f73 ^ (_0x180327 | ~_0x4d557a)) + _0x2631b8[0] - 198630844) << 6 | _0x24ebf1 >>> 26) + _0x180327 << 0) | ~_0x5e7f73)) + _0x2631b8[7] + 1126891415) << 10 | _0x4d557a >>> 22) + _0x24ebf1 << 0) ^ ((_0x5e7f73 = ((_0x5e7f73 += (_0x24ebf1 ^ (_0x4d557a | ~_0x180327)) + _0x2631b8[14] - 1416354905) << 15 | _0x5e7f73 >>> 17) + _0x4d557a << 0) | ~_0x24ebf1)) + _0x2631b8[5] - 57434055) << 21 | _0x180327 >>> 11) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x4d557a = ((_0x4d557a += (_0x180327 ^ ((_0x24ebf1 = ((_0x24ebf1 += (_0x5e7f73 ^ (_0x180327 | ~_0x4d557a)) + _0x2631b8[12] + 1700485571) << 6 | _0x24ebf1 >>> 26) + _0x180327 << 0) | ~_0x5e7f73)) + _0x2631b8[3] - 1894986606) << 10 | _0x4d557a >>> 22) + _0x24ebf1 << 0) ^ ((_0x5e7f73 = ((_0x5e7f73 += (_0x24ebf1 ^ (_0x4d557a | ~_0x180327)) + _0x2631b8[10] - 1051523) << 15 | _0x5e7f73 >>> 17) + _0x4d557a << 0) | ~_0x24ebf1)) + _0x2631b8[1] - 2054922799) << 21 | _0x180327 >>> 11) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x4d557a = ((_0x4d557a += (_0x180327 ^ ((_0x24ebf1 = ((_0x24ebf1 += (_0x5e7f73 ^ (_0x180327 | ~_0x4d557a)) + _0x2631b8[8] + 1873313359) << 6 | _0x24ebf1 >>> 26) + _0x180327 << 0) | ~_0x5e7f73)) + _0x2631b8[15] - 30611744) << 10 | _0x4d557a >>> 22) + _0x24ebf1 << 0) ^ ((_0x5e7f73 = ((_0x5e7f73 += (_0x24ebf1 ^ (_0x4d557a | ~_0x180327)) + _0x2631b8[6] - 1560198380) << 15 | _0x5e7f73 >>> 17) + _0x4d557a << 0) | ~_0x24ebf1)) + _0x2631b8[13] + 1309151649) << 21 | _0x180327 >>> 11) + _0x5e7f73 << 0;
    _0x180327 = ((_0x180327 += ((_0x4d557a = ((_0x4d557a += (_0x180327 ^ ((_0x24ebf1 = ((_0x24ebf1 += (_0x5e7f73 ^ (_0x180327 | ~_0x4d557a)) + _0x2631b8[4] - 145523070) << 6 | _0x24ebf1 >>> 26) + _0x180327 << 0) | ~_0x5e7f73)) + _0x2631b8[11] - 1120210379) << 10 | _0x4d557a >>> 22) + _0x24ebf1 << 0) ^ ((_0x5e7f73 = ((_0x5e7f73 += (_0x24ebf1 ^ (_0x4d557a | ~_0x180327)) + _0x2631b8[2] + 718787259) << 15 | _0x5e7f73 >>> 17) + _0x4d557a << 0) | ~_0x24ebf1)) + _0x2631b8[9] - 343485551) << 21 | _0x180327 >>> 11) + _0x5e7f73 << 0;
    if (this.first) {
      this.h0 = _0x24ebf1 + 1732584193 << 0;
      this.h1 = _0x180327 - 271733879 << 0;
      this.h2 = _0x5e7f73 - 1732584194 << 0;
      this.h3 = _0x4d557a + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + _0x24ebf1 << 0;
      this.h1 = this.h1 + _0x180327 << 0;
      this.h2 = this.h2 + _0x5e7f73 << 0;
      this.h3 = this.h3 + _0x4d557a << 0;
    }
  };
alg_kit.prototype.hex = function () {
    this.finalize();
    var _0x57c866 = this.h0;
    var _0x4a8e07 = this.h1;
    var _0x32e878 = this.h2;
    var _0x4985f6 = this.h3;
    return _0x47a14f[_0x57c866 >> 4 & 15] + _0x47a14f[_0x57c866 & 15] + _0x47a14f[_0x57c866 >> 12 & 15] + _0x47a14f[_0x57c866 >> 8 & 15] + _0x47a14f[_0x57c866 >> 20 & 15] + _0x47a14f[_0x57c866 >> 16 & 15] + _0x47a14f[_0x57c866 >> 28 & 15] + _0x47a14f[_0x57c866 >> 24 & 15] + _0x47a14f[_0x4a8e07 >> 4 & 15] + _0x47a14f[_0x4a8e07 & 15] + _0x47a14f[_0x4a8e07 >> 12 & 15] + _0x47a14f[_0x4a8e07 >> 8 & 15] + _0x47a14f[_0x4a8e07 >> 20 & 15] + _0x47a14f[_0x4a8e07 >> 16 & 15] + _0x47a14f[_0x4a8e07 >> 28 & 15] + _0x47a14f[_0x4a8e07 >> 24 & 15] + _0x47a14f[_0x32e878 >> 4 & 15] + _0x47a14f[_0x32e878 & 15] + _0x47a14f[_0x32e878 >> 12 & 15] + _0x47a14f[_0x32e878 >> 8 & 15] + _0x47a14f[_0x32e878 >> 20 & 15] + _0x47a14f[_0x32e878 >> 16 & 15] + _0x47a14f[_0x32e878 >> 28 & 15] + _0x47a14f[_0x32e878 >> 24 & 15] + _0x47a14f[_0x4985f6 >> 4 & 15] + _0x47a14f[_0x4985f6 & 15] + _0x47a14f[_0x4985f6 >> 12 & 15] + _0x47a14f[_0x4985f6 >> 8 & 15] + _0x47a14f[_0x4985f6 >> 20 & 15] + _0x47a14f[_0x4985f6 >> 16 & 15] + _0x47a14f[_0x4985f6 >> 28 & 15] + _0x47a14f[_0x4985f6 >> 24 & 15];
  };
alg_kit.prototype.toString =  alg_kit.prototype.hex
alg_kit.prototype.digest = function () {
    this.finalize();
    var _0x2aaaa4 = this.h0;
    var _0x259b87 = this.h1;
    var _0x4428a0 = this.h2;
    var _0x5e8841 = this.h3;
    return [_0x2aaaa4 & 255, _0x2aaaa4 >> 8 & 255, _0x2aaaa4 >> 16 & 255, _0x2aaaa4 >> 24 & 255, _0x259b87 & 255, _0x259b87 >> 8 & 255, _0x259b87 >> 16 & 255, _0x259b87 >> 24 & 255, _0x4428a0 & 255, _0x4428a0 >> 8 & 255, _0x4428a0 >> 16 & 255, _0x4428a0 >> 24 & 255, _0x5e8841 & 255, _0x5e8841 >> 8 & 255, _0x5e8841 >> 16 & 255, _0x5e8841 >> 24 & 255];
  };
alg_kit.prototype.array = alg_kit.prototype.digest;
alg_kit.prototype.arrayBuffer = function () {
    this.finalize();
    var _0x3df6c2 = new ArrayBuffer(16);
    var _0x157fab = new Uint32Array(_0x3df6c2);
    _0x157fab[0] = this.h0;
    _0x157fab[1] = this.h1;
    _0x157fab[2] = this.h2;
    _0x157fab[3] = this.h3;
    return _0x3df6c2;
  };
alg_kit.prototype.buffer = alg_kit.prototype.arrayBuffer;
alg_kit.prototype.base64 = function () {
    for (var _0x408b27, _0x512cea, _0x48a322, _0xd55bbb = "", _0x36f6ef = this.array(), _0x27b8bc = 0; _0x27b8bc < 15;) {
      _0x408b27 = _0x36f6ef[_0x27b8bc++];
      _0x512cea = _0x36f6ef[_0x27b8bc++];
      _0x48a322 = _0x36f6ef[_0x27b8bc++];
      _0xd55bbb += _0x1dffed[_0x408b27 >>> 2] + _0x1dffed[(_0x408b27 << 4 | _0x512cea >>> 4) & 63] + _0x1dffed[(_0x512cea << 2 | _0x48a322 >>> 6) & 63] + _0x1dffed[_0x48a322 & 63];
    }
    _0x408b27 = _0x36f6ef[_0x27b8bc];
    return _0xd55bbb += _0x1dffed[_0x408b27 >>> 2] + _0x1dffed[_0x408b27 << 4 & 63] + "==";
  };