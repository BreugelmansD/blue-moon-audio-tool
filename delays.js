let selectedSystem = "m1";

function renderSystemRow() {
  const row = document.getElementById("system-row");
  row.innerHTML = "";

  DELAY_SYSTEMS.forEach((s) => {
    const card = document.createElement("div");
    card.className = "series-card system-card" + (selectedSystem === s.id ? " active" : "");
    card.innerHTML = `<div class="card-title">${s.label}</div>`;
    card.addEventListener("click", () => {
      selectedSystem = s.id;
      renderSystemRow();
      renderDelayTables();
    });
    row.appendChild(card);
  });
}

function renderDelayTables() {
  const container = document.getElementById("delay-tables");
  container.innerHTML = "";

  const tables = DELAY_TABLES[selectedSystem];

  if (!tables || tables.length === 0) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = "Nog geen data ingevoerd voor dit systeem.";
    container.appendChild(empty);
    return;
  }

  tables.forEach((table) => {
    const heading = document.createElement("h3");
    heading.className = "delay-title";
    heading.textContent = table.title;
    container.appendChild(heading);

    const wrap = document.createElement("div");
    wrap.className = "delay-rows";

    table.rows.forEach((row) => {
      const rowEl = document.createElement("div");
      rowEl.className = "delay-row";

      const valuesHtml = row.components
        .map((c) => {
          const pol = c.polarity === "-" ? "neg" : "pos";
          const label = c.label ? `${c.label} = ` : "";
          return `<span class="delay-component">${label}${c.value} <span class="pol pol-${pol}">${c.polarity}</span></span>`;
        })
        .join("");

      rowEl.innerHTML = `
        <span class="delay-preset">${row.preset}</span>
        <span class="delay-values">${valuesHtml}</span>
      `;
      wrap.appendChild(rowEl);
    });

    container.appendChild(wrap);
  });
}

document.getElementById("sidebar-toggle").addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
  sidebar.classList.toggle("open");
});

renderSystemRow();
renderDelayTables();
