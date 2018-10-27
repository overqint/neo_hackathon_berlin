const ApiClient = require('./api_client');
const neon_js = require('@cityofzion/neon-js');

class CreateNftEndPoint {
    constructor(hash) {
        this.response = {
            "data": {},
            "code": 200
        };
        this.hash = hash;
    }

    async run() {
        console.log('test')
        const apiClient = new ApiClient()
        let totalSupply = null;
        let invoke = await apiClient.invokeScript('totalSupply')
            .then(res => {
                console.log(res);
                let value = res.result.stack[0].value
                console.log("returned value", value)
                totalSupply = value;
                console.log("totalSupply", totalSupply)
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
}

module.exports = CreateNftEndPoint;