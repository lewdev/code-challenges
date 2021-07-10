

const setShowById = (id, show) => document.getElementById(id).style.display = show ? 'block' : 'none';;
const setCodeShow = show => setShowById("code", show);
const setBackBtnShow = show => setShowById("backBtn", show);
const setMenuShow = show => { setShowById("menu", show); setBackBtnShow(!show); setCodeShow(!show);}
const setOuputShow = show => { setShowById("output", show); setBackBtnShow(show); setCodeShow(show);}
const goToMenu = () => {
  setMenuShow(true);
  setOuputShow(false);
  setUrlParam("");
  document.title = "🔥lewdev code solutions";
};
const run = name => {
  setMenuShow(false);
  setOuputShow(true);
  setUrlParam(`p=${name}`);
  const problem = data.find(a => a.method === name);
  if (!problem) {
    output.innerHTML = `Problem "${name}" not found.`;
    return;
  }
  const {url, site, num} = problem;
  const output = document.getElementById("output")
    , title = `${num}. ${name} (${site})`;
  document.title = title;
  output.innerHTML = `<h1>💡 ${title}</h1>
    <a href="${url}" target="_blank">🔗 Link to Problem</a>
    <table id="results" class="table">
    <thead>
      <th>input</th><th>result</th><th>expected</th><th>P/F</th>
    </thead>
    <tbody></tbody>
    </table>`;
  if (typeof tests === 'undefined') {
    alert("'tests' was not defined. e.g. [[input, expected], [input, expected], [input, expected]]")
    return;
  }
  else if (typeof myMethod === 'undefined') {
    alert("'myMethod' was not defined.")
    return;
  }
  //run tests
  const tbody = document.getElementById("results").querySelector("tbody");
  const promises = [];
  tests.map(t => {
    promises.push(new Promise(res => {
      const input = t[0];
      let result;
      switch (problem.params) {
        case 2: result = myMethod(input[0], input[1]); break;
        case 3: result = myMethod(input[0], input[1], input[2]); break;
        case 4: result = myMethod(input[0], input[1], input[2], input[3]); break;
        default: result = myMethod(input);
      }
      const expected = t[1];
      // const pass = (expected + "") === (result + "");
      const pass = isEqual(expected, result);
      const color = pass ? 'success' : 'danger';
      const passOrFail = `<span class="badge badge-${color}">${pass ? '✔️PASS' : '⛔FAIL'}</span>`;
      addRow([input, result, expected , passOrFail], tbody);
      res();
    }));
  });
  Promise.all(promises).then(() => {
    total = (new Date()).getTime() - start;
    output.innerHTML += `<div><strong>Runtime:</strong> ${total}ms</div>`;
  });
};
let myMethod, tests, start, total;
function loadScript(name) {
  const script = document.createElement('script');
  const problem = data.find(a => a.method === name);
  const urlToCode = `${problem.site}/${pad(problem.num, 4)}-${name}.js`;
  script.src = urlToCode;
  document.head.appendChild(script); //or something of the likes
  script.onload = () => {
    myMethod = eval(name);
    tests = eval(name + "Tests");
    if (typeof myMethod === 'undefined') return alert(`Function ${name} not found.`);
    if (typeof tests === 'undefined') return alert(`Array ${name}Tests not found.`);
    start = new Date().getTime();
    run(name);
  };
  fetch(urlToCode).then(res => {
    res.text().then(codeStr => {
      const code = document.getElementById("codeStr");
      code.innerHTML = `<a href="${urlToCode}">📦 Download</a><pre><code>${codeStr}</code></pre>`;
    });
  });
};
window.onload = () => {
  setBackBtnShow(false);
  let currSite = null;
  const tbody = document.getElementById("challenges").querySelector("tbody");
  data.map(a => {
    if (!currSite || currSite !== a.site) addRow([`☁️ ${a.site}`], tbody);
    currSite = a.site;
    addRow([
      `💡 ${a.num}. ${a.name} ${a.incomplete ? '<span class="text-danger">INCOMPLETE</span>' : ''}`
      , `<a href="${a.url}" target="_blank">🔗 Link to Problem</a>`
      , `<button class="btn btn-secondary" onclick="loadScript('${a.method}')">Run 🏃‍♂️</button>`
    ], tbody);
  });
  const methodName = getUrlParam('p');
  if (methodName) {
    const problem = data.find(a => a.method === methodName);
    if (problem) loadScript(methodName, problem.num);
  }
};
//-----------------------------------------------------------------------------
// Utility Methods
//-----------------------------------------------------------------------------
const formatInput = input => Array.isArray(input) ? `[${input.map(a => Array.isArray(a) ? formatInput(a) : a)}]` : input;
const addRow = (arr, tbody) => {
  const outputArr = arr.map(a => formatInput(a));
  if (arr.length === 1) tbody.innerHTML += `<tr class="bg-secondary"><td colspan="99" class="text-light">${arr[0]}</td></tr>`;
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