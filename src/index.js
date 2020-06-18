// var findBeauty = require("./func/findBeauty");
var features = require("./setting/features");
// require nodeJS 內建 File System 模組.
var fs = require("fs");
// google-spreadsheet modules 宣告
var GoogleSpreadsheet = require("google-spreadsheet");
module.exports = async function App(context) {
  // spreadsheet key is the long id in the sheets URL
  // 如上圖將表單 key 值交傳給 google-spreadsheet modules 如上圖.
  var my_sheet = new GoogleSpreadsheet(
    "12XpWRjPWUkcFqRIY7lpC2o8YPcBwn1kinYsrIrGoy7s"
  );
  // JSON 檔案儲存名稱
  var saveFileName = "spreadsheet.json";
  // Without auth -- read only
  // IMPORTANT: See note below on how to make a sheet public-readable!
  // # is worksheet id - IDs start at 1
  // console.log("my_sheet", my_sheet); //my_sheet
  my_sheet.getRows(1, function (err, row_data) {
    // 發生錯誤時
    if (err) {
      console.log("err", err);
    }
    // console.log("row_data", row_data); //每列資料
    // console.log(row_data.length); 	//資料總數
    // 在此處理你的資料
    // 儲存成 JSON
    // fs.writeFile 使用 File System 的 writeFile 方法做儲存
    // 傳入三個參數（ 存檔名, 資料, 格式 ）
    fs.writeFile(
      saveFileName,
      JSON.stringify(row_data),
      "utf8",
      function () {}
    );
  });
  // console.log("context", context.session.user);
  // context.sendText('');
  if ((context.event.type = "text")) {
    features.features().forEach((element) => {
      if (element.type == "equal") {
        if (context.event.text == element.keyword) {
          element.function(context);
        }
      } else if (element.type == "indexOf") {
        if (context.event.text.indexOf(element.keyword) > -1) {
          element.function(context);
        }
      }
    });
    // if (context.event.text.indexOf("運勢") > -1) {
    //   divination.divination(context);
    // }
    // if (context.event.text == "看妹子") {
    //   findBeauty.findBeauty(context);
    // }
  }
};
