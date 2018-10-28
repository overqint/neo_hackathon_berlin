const ApiClient = require('./api_client');
const neon_js = require('@cityofzion/neon-js');

const contractScript = "8f02b02cc528ee5de89d5e27090ed4fa7dffaa19"
const addressScriptHash = "23ba2703c53263e8d6e522dc32203339dcd8eee9"
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

        let data = {
            "totalSupply": totalSupply,
            "msg": "Successfully Done",
            "error": ""
        };

        return this.successfulResponse(data)
    }

    // register a new motor as NFT
    async register() {
        const apiClient = new ApiClient()

        let params = {
            manufacturer_id: "12345",
            mileage: "0"
        }

        let parameterString = JSON.stringify(params);
        let uri = Neon.u.str2hexstring("/mdcva/1233")
        let parameterStringHex = Neon.u.str2hexstring(parameterString)

        let args = [addressScriptHash,
            parameterStringHex,
            uri
        ]

        const data = await apiClient.doInvoke("mintToken", args)
        return this.successfulResponse(data)
    }

    successfulResponse(data) {
        this.response.data = data;
        this.response.code = 200;
        return this.response;
    }
}

module.exports = CreateNftEndPoint;