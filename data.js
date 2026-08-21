// ============================================================
// BLUE MOON AUDIO TOOL — data configuratie
// Pas hier je eigen series, modellen, versterkers en aantallen
// aan. De rest van de app (index.html / script.js) hoef je
// niet aan te passen.
// ============================================================

// Series waarop gefilterd kan worden (knoppen boven de tabel)
const SERIES = [
  { id: "series-1", label: "Series 1" },
  { id: "series-2", label: "Series 2" },
  { id: "series-3", label: "Series 3" },
  { id: "subs", label: "Subs" },
  { id: "legacy", label: "Legacy" },
];

// Versterker-kolommen. "label" is wat er boven de kolom staat.
const AMPS = [
  { id: "amp4", label: "AMP-4" },
  { id: "amp8", label: "AMP-8" },
  { id: "amp12", label: "AMP-12" },
  { id: "amp16", label: "AMP-16" },
  { id: "amp16i", label: "AMP-16i" },
];

// Speaker-modellen. "series" verwijst naar het id hierboven.
// "counts" geeft per amp-id aan hoeveel speakers van dit model
// die versterker kan aansturen. Laat een amp-id weg (of null)
// als die combinatie niet bestaat -- dan verschijnt "--".
const MODELS = [
  { name: "M1",        series: "series-1", counts: { amp4: 2, amp8: 4, amp12: 6, amp16: null, amp16i: 8 } },
  { name: "M1-SUB",    series: "series-1", counts: { amp4: null, amp8: 4, amp12: 4, amp16: null, amp16i: null } },
  { name: "M2",        series: "series-1", counts: { amp4: 1, amp8: 3, amp12: 3, amp16: 4, amp16i: null } },
  { name: "M3",        series: "series-1", counts: { amp4: 2, amp8: 6, amp12: 4, amp16: 8, amp16i: null } },

  { name: "X1",        series: "series-2", counts: { amp4: 4, amp8: 6, amp12: 6, amp16: 4, amp16i: null } },
  { name: "X2",        series: "series-2", counts: { amp4: 4, amp8: 6, amp12: 6, amp16: 4, amp16i: null } },
  { name: "X3 Compact",series: "series-2", counts: { amp4: 8, amp8: 24, amp12: 16, amp16: 8, amp16i: 10 } },
  { name: "X3 Twin",   series: "series-2", counts: { amp4: 8, amp8: 12, amp12: 12, amp16: null, amp16i: 8 } },

  { name: "K-One",     series: "series-3", counts: { amp4: null, amp8: null, amp12: null, amp16: 1, amp16i: null } },
  { name: "K-Two",     series: "series-3", counts: { amp4: null, amp8: null, amp12: null, amp16: 1, amp16i: null } },
  { name: "K-Three",   series: "series-3", counts: { amp4: null, amp8: null, amp12: null, amp16: 1, amp16i: null } },

  { name: "Sub-15",    series: "subs",     counts: { amp4: 2, amp8: 4, amp12: 4, amp16: null, amp16i: null } },
  { name: "Sub-18",    series: "subs",     counts: { amp4: 2, amp8: 4, amp12: 4, amp16: null, amp16i: null } },
  { name: "Sub-28",    series: "subs",     counts: { amp4: 1, amp8: 2, amp12: 2, amp16: null, amp16i: null } },

  { name: "Legacy-10", series: "legacy",   counts: { amp4: 4, amp8: 6, amp12: 6, amp16: 4, amp16i: null } },
  { name: "Legacy-12", series: "legacy",   counts: { amp4: 4, amp8: 6, amp12: 6, amp16: 4, amp16i: null } },
];
