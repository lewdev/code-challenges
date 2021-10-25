

const setShowById = (id, show) => document.getElementById(id).style.display = show ? 'block' : 'none';;
const setCodeShow = show => setShowById("code", show);
const setBackBtnShow = show => setShowById("backBtn", show);
const setMenuShow = show => { setShowById("menu", show); setBackBtnShow(!show); setCodeShow(!show);}
const setOuputShow = show => { setShowById("output", show); setBackBtnShow(show); setCodeShow(show);}
const viewTest = index => {
  const name = getUrlParam("p");
  if (!name) return alert("No problem name.");
  const results = document.getElementById("results");
  const row = results.querySelectorAll("tbody > tr")[index];
  const tests = row.querySelectorAll("td > div");
  const input = tests[0].innerHTML;
  const result = tests[1].innerHTML;
  const expected = tests[2].innerHTML;

  const div = document.createElement("div");
  div.style = "position: absolute; top: 20px;width: 90%; margin-left: 5%; margin-right: 5%; padding: 1.5rem; border: 1px solid gray;";
  div.className = "rounded bg-light";

  div.innerHTML = `
  <p align="right">
    <button class="btn btn-secondary" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);">✖ Close</button>
  </p>
  <div class="m-2"><strong>input:</strong> ${input || 'N/A'}</div>
  <table id="viewResult" class="table">
    <thead>
      <tr>
        <th>result</th><th>expected</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><pre>${result}</pre></td><td><pre>${expected}</pre></td>
      </tr>
    </tbody>
  </table>
  <p align="right">
    <button class="btn btn-secondary" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);">✖ Close</button>
  </p>`;
  document.body.appendChild(div);
};
const goToMenu = () => {
  const name = getUrlParam("p");
  if (name) {
    const problem = data.find(a => a.method === name);
    if (problem) setSite(problem.site)
  }
  setMenuShow(true);
  setOuputShow(false);
  document.title = "lewdev code solutions";
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
  const {url, site, num, params} = problem;
  const output = document.getElementById("output")
    , title = `${num}. ${problem.name} (☁ ${site})`;
  document.title = title;
  output.innerHTML = `
    <div class="row mt-2 mb-2">
      <div class="col-9">
        <h1>${title}</h1>
      </div>
      <div class="col-3 text-right">
        <a href="${url}" target="_blank" class="mt-2 btn btn-secondary">🔗 Link to Problem</a>
      </div>
    </div>
    <table id="results" class="table">
    <thead>
      <th>${"input,result,expected,P/F,View".split(",").join("</th><th>")}</th>
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
  tests.map((t, i) => {
    promises.push(new Promise(res => {
      const input = t[0];
      let result;
      switch (params || 1) {
        case 2: result = myMethod(input[0], input[1]); break;
        case 3: result = myMethod(input[0], input[1], input[2]); break;
        default:
          result = myMethod(input);
      }
      const expected = t[1];
      const pass = isEqual(expected, result);
      const color = pass ? 'success' : 'danger';
      const passOrFail = `<span class="badge badge-${color}">${pass ? '✔️PASS' : '⛔FAIL'}</span>`;
      const viewBtn = `<button class="btn btn-secondary" onclick="viewTest(${i}); return false;">👁 View</button>`
      addRow([input, result, expected , passOrFail, viewBtn], tbody);
      res();
    }));
  });
  Promise.all(promises).then(() => {
    total = (new Date()).getTime() - start;
    output.innerHTML += `<div><strong>Runtime:</strong> ${total}ms</div>`;
  });
};
let myMethod, tests, start, total, selectedSite, sites;
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
      code.innerHTML = `<a href="${urlToCode}">📦 Download</a><pre class="language-js"><code>${Prism.highlight(codeStr, Prism.languages.javascript, 'javascript')}</code></pre>`;
    })
    .then(() => {
      //console.log("Prism.highlightAll()");
      Prism.highlightAll();
    });
  });
};
const setSite = site => {
  selectedSite = site;
  // sites.map(s => {
  //   const option = document.createElement("option");
  //   option.value = s;
  //   option.innerHTML = s;
  //   siteList.appendChild(option);
  // });
  setUrlParam(selectedSite ? "s=" + selectedSite : "");
  renderTopRightMenu();
  renderTable();
};
window.onload = () => {
  setBackBtnShow(false);
  
  const methodName = getUrlParam('p');
  if (methodName) {
    const problem = data.find(a => a.method === methodName);
    if (problem) loadScript(methodName, problem.num);
  }
  const site = getUrlParam('s');
  if (site) setSite(site);
  renderTopRightMenu();
  renderTable();
};
const renderTable = () => {
  let currSite = null;
  const tbody = document.getElementById("challenges").querySelector("tbody");
  tbody.innerHTML = "";
  data.forEach(a => {
    if (selectedSite && a.site !== selectedSite) return;
    if (!currSite || currSite !== a.site) addRow([`☁️ ${a.site} <span class="badge badge-secondary">${data.filter(b => a.site === b.site).length}</span>`], tbody);
    currSite = a.site;
    addRow([
      `💡 ${a.num}. ${a.name} ${a.incomplete ? '<span class="text-danger">INCOMPLETE</span>' : ''}`
      , `<a href="${a.url}" target="_blank" class="btn btn-secondary">🔗 Link to Problem</a>`
      , `<button class="btn btn-primary" onclick="loadScript('${a.method}')">Run 🏃‍♂️</button>`
    ], tbody);
  });
};
const renderTopRightMenu = () => {
  const siteMap = {};
  data.forEach(a => siteMap[a.site] = true);
  const sites = Object.keys(siteMap);
  // if (!selectedSite) selectedSite = sites[0];
  topRightMenu.innerHTML = `<button class="btn btn-${!selectedSite ? 'primary' : 'secondary'}"
  onclick="setSite('')">All</button>` + sites.map(a => `<button class="btn btn-${a === selectedSite ? 'primary' : 'secondary'}"
    onclick="setSite('${a}')">${a}</button>`).join('');
};