//-----------------------------------------------------------------------------
// Utility Methods
//-----------------------------------------------------------------------------
const formatInput = input => Array.isArray(input) ? `[${input.map(a => Array.isArray(a) ? formatInput(a) : a)}]` : input;
const addRow = (arr, tbody) => {
  const outputArr = arr.map(a => formatInput(a));
  if (arr.length === 1) tbody.innerHTML += `<tr class="bg-dark"><td colspan="99" class="text-light">${arr[0]}</td></tr>`;
  else tbody.innerHTML += `<tr><td><div>${outputArr.join("</div></td><td><div>")}</div></td></tr>`;
};
const getUrlParam = param => {
  var urlArr = document.location.href.split("?");
  var queryParam = urlArr.length > 1 ? urlArr[1] : false;
  if (queryParam) {
    var paramArr = queryParam.split("&");
    for (var i = 0; i < paramArr.length; i++) {
      var paramItem = paramArr[i];
      if (paramItem.indexOf(param + "=") === 0) {
        return paramItem.split("=")[1].replace(/%20/g, " ");
      }
    }
  }
  return false;
};
const setUrlParam = param => {
  var url = document.location.href.split("?")[0];
  window.history.pushState({ param: param }, param, url + (param ? "?" + param : ""));
  return false;
};
const pad = (input, size) => {
  const strLen = (input + "").length;
  const char = "0";
  const padSize = size - strLen;
  let arr = [];
  for (let i = 0; i < padSize; i++) {
    arr.push(char);
  }
  return arr.join("") + input;
};
const isEqual = (expected, result) => {
  if (Array.isArray(expected) && Array.isArray(result) && expected.length === result.length) {
    for (let i = 0; i < expected.length; i++) {
      if (expected[i] !== result[i]) {
        return false;
      }
    }
    return true;
  }
  return expected === result;
};