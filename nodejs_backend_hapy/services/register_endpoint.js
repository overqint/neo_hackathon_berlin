const ApiClient = require('./api_client');
const neon_js = require('@cityofzion/neon-js');

const contractScript = "8f02b02cc528ee5de89d5e27090ed4fa7dffaa19"
const addressScriptHash = "23ba2703c53263e8d6e522dc32203339dcd8eee9"
var Neon = neon_js.default;

class RegisterEndPoint {
    constructor(payload) {
        this.response = {
            "data": {},
            "code": 200
        };
        this.payload = payload;
    }

    async run() {
        const apiClient = new ApiClient();
        const params = {
            manufacturer_id: this.payload.manufacturer_id,
            mileage: this.payload.mileage
        };
        console.log(params);

        let parameterString = JSON.stringify(params);
        let uri = Neon.u.str2hexstring("/mdcva/1233");
        let parameterStringHex = Neon.u.str2hexstring(parameterString);

        let args = [addressScriptHash,
            parameterStringHex,
            uri
        ];

        const data = await apiClient.doInvoke("mintToken", args);
        return this.successfulResponse(data);

    }

    successfulResponse(data) {
        if(data.msg == "Successfully Done") {
            this.response.data = {msg: "success"};
            this.response.code = 200;
        }
        return this.response;
    }
}

module.exports = RegisterEndPoint;