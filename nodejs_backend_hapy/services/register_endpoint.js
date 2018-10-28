const ApiClient = require('./api_client');
const neon_js = require('@cityofzion/neon-js');

const addressScriptHash = "19f19de51717aa70e1dccf06e2f4666f7653775a"
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
        let params = {
            manufacturer_id: "12345",
            mileage: "0"
        };

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
        this.response.data = data;
        this.response.code = 200;
        return this.response;
    }
}

module.exports = RegisterEndPoint;