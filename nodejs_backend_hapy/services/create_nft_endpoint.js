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

    // get NFT tokens by owner address
    async getTokensByOwner() {
        let params = {
            addressScriptHash: addressScriptHash,
            startIndex: 0
        }

        const apiClient = new ApiClient()
        let args = [params.addressScriptHash, params.startIndex]

        const data = await apiClient.invokeScript("tokensDataOfOwner", args)

        let value = data.result.stack[0].value;
        let decoded = Neon.u.hexstring2str(value);

        let properties = JSON.parse(decoded.match("(.*properties/)(.*)(,])")[2] + "]")

        let respObject = {
            "response": properties,
            "msg": "Successfully Done",
            "error": ""
        }

        return this.successfulResponse(respObject)
    }

    successfulResponse(data) {
        this.response.data = data;
        this.response.code = 200;
        return this.response;
    }
}

module.exports = CreateNftEndPoint;