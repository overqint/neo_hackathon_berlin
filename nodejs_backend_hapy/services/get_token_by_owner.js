const ApiClient = require('./api_client');
const neon_js = require('@cityofzion/neon-js');

const contractScript = "8f02b02cc528ee5de89d5e27090ed4fa7dffaa19";
const addressScriptHash = "23ba2703c53263e8d6e522dc32203339dcd8eee9";
var Neon = neon_js.default;

class GetTokenByOwnerEndPoint {
    constructor(hash) {
        this.response = {
            "data": {},
            "code": 200
        };
        this.hash = hash;
    }

    async run() {
        const params = {
            addressScriptHash: addressScriptHash,
            startIndex: 0
        };

        const apiClient = new ApiClient();
        const args = [params.addressScriptHash, params.startIndex];

        const data = await apiClient.invokeScript("tokensDataOfOwner", args);

        const value = data.result.stack[0].value;
        const decoded = Neon.u.hexstring2str(value);
        console.log(decoded);

        const properties = JSON.parse(decoded.match("(.*properties/)(.*)(,])")[2] + "]");

        const respObject = {
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

module.exports = GetTokenByOwnerEndPoint;