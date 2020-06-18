var findBeauty = require("../func/findBeauty");
var divination = require("../func/divination");
module.exports.features = features;

function features(context) {
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
