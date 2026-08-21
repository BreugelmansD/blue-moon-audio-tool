let activeSeries = "all";
let sortKey = null;
let sortDir = 1;

function renderSeriesBar() {
  const bar = document.getElementById("series-bar");
  bar.innerHTML = "";

  const allBtn = makeSeriesButton("all", "All");
  bar.appendChild(allBtn);

  SERIES.forEach((s) => {
    bar.appendChild(makeSeriesButton(s.id, s.label));
  });
}

function makeSeriesButton(id, label) {
  const btn = document.createElement("button");
  btn.className = "series-btn" + (activeSeries === id ? " active" : "");
  btn.textContent = label;
  btn.addEventListener("click", () => {
    activeSeries = id;
    renderSeriesBar();
    renderTable();
  });
  return btn;
}

function getVisibleModels() {
  let models = activeSeries === "all"
    ? MODELS.slice()
    : MODELS.filter((m) => m.series === activeSeries);

  if (sortKey) {
    models.sort((a, b) => {
      const va = sortKey === "name" ? a.name : (a.counts[sortKey] ?? -1);
      const vb = sortKey === "name" ? b.name : (b.counts[sortKey] ?? -1);
      if (sortKey === "name") return va.localeCompare(vb) * sortDir;
      return (va - vb) * sortDir;
    });
  }
  return models;
}

function renderTable() {
  const models = getVisibleModels();

  const thead = document.getElementById("table-head");
  thead.innerHTML = "";
  const headRow = document.createElement("tr");

  const nameTh = document.createElement("th");
  nameTh.textContent = "Model";
  nameTh.classList.toggle("sorted", sortKey === "name");
  nameTh.addEventListener("click", () => toggleSort("name"));
  headRow.appendChild(nameTh);

  AMPS.forEach((amp) => {
    const th = document.createElement("th");
    th.textContent = amp.label;
    th.classList.toggle("sorted", sortKey === amp.id);
    th.addEventListener("click", () => toggleSort(amp.id));
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);

  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";
  models.forEach((model) => {
    const row = document.createElement("tr");
    const nameTd = document.createElement("td");
    nameTd.textContent = model.name;
    row.appendChild(nameTd);

    AMPS.forEach((amp) => {
      const td = document.createElement("td");
      const value = model.counts[amp.id];
      if (value === null || value === undefined) {
        td.innerHTML = '<span class="dash">--</span>';
      } else {
        td.textContent = value;
      }
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
}

function toggleSort(key) {
  if (sortKey === key) {
    sortDir *= -1;
  } else {
    sortKey = key;
    sortDir = 1;
  }
  renderTable();
}

renderSeriesBar();
renderTable();
