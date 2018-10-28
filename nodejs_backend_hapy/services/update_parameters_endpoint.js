const ApiClient = require('./api_client');
const neon_js = require('@cityofzion/neon-js');

var Neon = neon_js.default;

class UpdateParametersEndPoint {
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
            manufacturer_id: "66666",
            mileage: "500000"
        };
        let tokenId = 1

        let parameterString = JSON.stringify(params);
        let parameterStringHex = Neon.u.str2hexstring(parameterString);

        let args = [tokenId, parameterStringHex];

        const data = await apiClient.doInvoke("modifyProps", args);
        return this.successfulResponse(data);

    }

    successfulResponse(data) {
        this.response.data = data;
        this.response.code = 200;
        return this.response;
    }
}

module.exports = UpdateParametersEndPoint;