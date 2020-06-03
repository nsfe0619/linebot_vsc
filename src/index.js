var findBeauty = require("./func/findBeauty");
module.exports = async function App(context) {
  if ((context.event.type = "text")) {
    if (context.event.text == "吼猴抽表特") {
      findBeauty.findBeauty(context);
    }
  }
};
