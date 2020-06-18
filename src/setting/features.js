var findBeauty = require("../func/findBeauty");
var divination = require("../func/divination");
module.exports.features = features;

function features(context) {
  return [
    {
      keyword: "看妹子",
      type: "equal",
      function: function (context) {
        return findBeauty.findBeauty(context);
      },
    },
    {
      keyword: "運勢",
      type: "indexOf",
      function: function (context) {
        return divination.divination(context);
      },
    },
  ];
}
