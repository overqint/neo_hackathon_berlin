class CreateNftEndPoint {
    constructor(hash) {
        this.response = {
            "data": {},
            "code": 200
        };
        this.hash = hash;
    }

    async run() {
        console.log("NFT hash: " + this.hash);
        this.response.data = {
            "data": {"engine_sn": 12233444, 
                    "km_status": 12000,
                    "nft_hash": this.hash
            },
            "msg": "Successfully Done",
            "error": ""
        };
        this.response.code = 200;
        return this.response;
    }
}

module.exports = CreateNftEndPoint;