const ApiClient = require('./api_client');
const neon_js = require('@cityofzion/neon-js');

const privateKey = "KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr";
const contractScript = "8f02b02cc528ee5de89d5e27090ed4fa7dffaa19"

var Neon = neon_js.default;


class CreateNftEndPoint {
    constructor(hash) {
        this.response = {
            "data": {},
            "code": 200
        };
        this.hash = hash;
    }

    // get total supply of NFT tokens
    async totalSupply() {
        const apiClient = new ApiClient()
        let totalSupply = null;
        let invoke = await apiClient.invokeScript('totalSupply')
            .then(res => {
                let value = res.result.stack[0].value
                totalSupply = value;
            })
            .catch(error => {
                console.log("Invoke error", error)
            });

        this.response.data = {
            "totalSupply": totalSupply,
            "msg": "Successfully Done",
            "error": ""
        };
        this.response.code = 200;
        return this.response;
    }

    // register a new motor as NFT
    async register() {
        let params = {
            manufacturer_id: "12345",
            mileage: "0"
        }
        let parameterString = JSON.stringify(params);
        console.log(parameterString);

        const networkConfig = {
            name: 'PrivateNet',
            extra: {
                neoscan: 'http://localhost:4000/api/main_net',
                neonode: "http://localhost:30333"
            }
        }

        const privateNet = new neon_js.rpc.Network(networkConfig)
        Neon.add.network(privateNet)
        console.log('private net setup')
        const neoscanInstance = new neon_js.api.neoscan.instance('PrivateNet');
        console.log('configuration')


        let uri = Neon.u.str2hexstring("/mdcva/1233")
        let parameterStringHex = Neon.u.str2hexstring(parameterString)

        console.log('hex hex')


        const config = {
            api: neoscanInstance,
            script: {
                scriptHash: contractScript,
                operation: 'mintToken',
                args: ["23ba2703c53263e8d6e522dc32203339dcd8eee9",
                    parameterStringHex,
                    uri
                ]
            },
            account: new neon_js.wallet.Account(privateKey),
            gas: 1
        };

        let data = null
        console.log('invoking')
        let invoke = await Neon.doInvoke(config)
            .then(res => {
                data = {
                    "response": res,
                    "msg": "Successfully Done",
                    "error": ""
                }
            })
            .catch(error => {
                data = {
                    "response": error,
                    "msg": "Invocation Error",
                    "error": "Invocation Error"
                }
                console.log("Invoke error", error)
            });;

        this.response.data = data;
        this.response.code = 200;
        return this.response;
    }
}

module.exports = CreateNftEndPoint;