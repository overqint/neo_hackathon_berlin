const networkConfig = {
  name: 'PrivateNet',
  extra: {
    neoscan: 'http://localhost:4000/api/main_net',
    neonode: "http://localhost:30333"
  }
}
const contractScript = "791ac646ea313cb556bac445400cf8829e2239b2"

var neon_js = require('@cityofzion/neon-js');
var Neon = neon_js.default;

class ApiClient {

  constructor(hash) {
    const privateNet = new neon_js.rpc.Network(networkConfig);
    Neon.add.network(privateNet);
    let privNet = new neon_js.api.neoscan.instance("PrivateNet");
    console.log('private net url', privNet)
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

}

module.exports = ApiClient;