var findBeauty = require("../func/findBeauty");
var divination = require("../func/divination");
module.exports.features = features;

function features() {
  return featuresArray;
}
const featuresArray = [
  {
    keyword: "你會做什麼",
    type: "equal",
    function: function (context) {
      return queryFeatures(context);
    },
  },
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
function queryFeatures(context) {
  let message = "";
  featuresArray.forEach((element) => {
    message += message ? "、" : "";
    message += element.keyword;
  });

  context.sendText("我會做這些事情喔(.w. ) %0D%0A" + message);
}
