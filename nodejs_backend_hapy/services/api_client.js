const networkConfig = {
  name: 'PrivateNet',
  extra: {
    neoscan: 'http://localhost:4000/api/main_net',
    neonode: "http://localhost:30333"
  }
}
const privateKey = "KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr";
const contractScript = "8f02b02cc528ee5de89d5e27090ed4fa7dffaa19"

var neon_js = require('@cityofzion/neon-js');
var Neon = neon_js.default;

class ApiClient {

  constructor(hash) {
    const privateNet = new neon_js.rpc.Network(networkConfig);
    Neon.add.network(privateNet);
    this.privNet = new neon_js.api.neoscan.instance("PrivateNet");
  }

  client() {
    return neon_js.api.neoscan;
  }

  async invokeScript(method, params) {
    const sb = Neon.create.scriptBuilder();
    sb.emitAppCall(contractScript, method, params);

    return await neon_js.rpc.Query.invokeScript(sb.str)
      .execute(networkConfig.extra.neonode);
  }

  async doInvoke(operation, args) {
    const config = {
      api: this.privNet,
      script: {
        scriptHash: contractScript,
        operation: operation,
        args: args
      },
      account: new neon_js.wallet.Account(privateKey),
      gas: 1
    };

    let data = null

    await Neon.doInvoke(config)
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

    return data;
  }

}

module.exports = ApiClient;