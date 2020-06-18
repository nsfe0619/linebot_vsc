var findBeauty = require("../func/findBeauty");
module.exports.features = features;

function features() {
  return [
    {
      keyword: "找妹子",
      type: "equal",
      function: findBeauty.findBeauty(context),
    },
    {
      keyword: "運勢",
      type: "indexOf",
      function: divination.divination(context),
    },
  ];
}
