class ApiClient {
  networkConfig: ENV.APP.neoConfig.networkConfig,
    neoNode: ENV.APP.neoConfig.networkConfig.extra.neonode,
    contractScript: ENV.APP.neoConfig.contractScript,
    nwUrl: null,

    init() {
      this._super(...arguments);
      const privateNet = new rpc.Network(this.get("networkConfig"));
      Neon.add.network(privateNet);
      let privNet = new api.neoscan.instance("PrivateNet");

      this.set("nwUrl", privNet.url);
    },

    client() {
      return api.neoscan;
    },

    networkUrl() {
      return this.nwUrl;
    },

    invokeScript(method, params) {
      const sb = Neon.create.scriptBuilder();
      sb.emitAppCall(this.contractScript, method, params);

      return rpc.Query.invokeScript(sb.str).execute(this.neoNode);
    }
};