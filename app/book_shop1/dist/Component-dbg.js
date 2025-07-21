sap.ui.define(["sap/ui/core/UIComponent", "./model/models"], function (BaseComponent, ___model_models) {
  "use strict";

  const createDeviceModel = ___model_models["createDeviceModel"];
  /**
   * @namespace bookshop1
   */
  const Component = BaseComponent.extend("bookshop1.Component", {
    metadata: {
      manifest: "json",
      interfaces: ["sap.ui.core.IAsyncContentCreation"]
    },
    init: function _init() {
      // call the base component's init function
      BaseComponent.prototype.init.call(this);

      // set the device model
      this.setModel(createDeviceModel(), "device");

      // enable routing
      this.getRouter().initialize();
    }
  });
  return Component;
});
//# sourceMappingURL=Component-dbg.js.map
