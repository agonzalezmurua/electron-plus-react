//
// Waits until the renderer server is running
//

const waitOn = require("wait-on");
const config = require("config");
const opts = {
  resources: [`http://localhost:${config.get("renderer.dev.port")}`],
};

waitOn(opts, (err) => {
  if (err) {
    throw err;
  }
});
