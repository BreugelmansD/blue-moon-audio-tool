// ============================================================
// Pre-alignment delays — data
// Voeg per systeem-id een array van tabellen toe. Elke tabel
// heeft een titel en rijen. Elke rij heeft een preset-code en
// een lijst van componenten ({label, value, polarity}).
// polarity is "+" (normale polariteit) of "-" (omgekeerde polariteit).
//
// Dit is voorbeelddata voor illustratiedoeleinden -- pas gerust
// je eigen systemen, presets en waarden aan.
// ============================================================

const DELAY_SYSTEMS = [
  { id: "m1", label: "M1" },
  { id: "m2", label: "M2" },
  { id: "m3", label: "M3" },
  { id: "m1sub", label: "M1-SUB" },
  { id: "x1", label: "X1" },
  { id: "x2", label: "X2" },
  { id: "x3c", label: "X3 Compact" },
  { id: "x3t", label: "X3 Twin" },
  { id: "kone", label: "K-One" },
  { id: "ktwo", label: "K-Two" },
  { id: "kthree", label: "K-Three" },
  { id: "sub15", label: "Sub-15" },
  { id: "sub18", label: "Sub-18" },
  { id: "sub28", label: "Sub-28" },
  { id: "legacy10", label: "Legacy-10" },
  { id: "legacy12", label: "Legacy-12" },
];

const DELAY_TABLES = {
  m1: [
    {
      title: "M1 + Sub-15",
      rows: [
        { preset: "[M1_70] + [SUB15_60]", components: [{ label: "M1", value: "0 ms", polarity: "+" }, { label: "Sub-15", value: "3 ms", polarity: "+" }] },
        { preset: "[M1_70] + [SUB15_60_C]", components: [{ label: "M1", value: "4 ms", polarity: "+" }, { label: "Sub-15", value: "0 ms", polarity: "-" }] },
      ],
    },
  ],
  m2: [
    {
      title: "M2 + Sub-18",
      rows: [
        { preset: "[M2_90] + [SUB18_60]", components: [{ label: "M2", value: "0 ms", polarity: "+" }, { label: "Sub-18", value: "2.5 ms", polarity: "+" }] },
        { preset: "[M2_90] + [SUB18_60_C]", components: [{ label: "M2", value: "5 ms", polarity: "+" }, { label: "Sub-18", value: "0 ms", polarity: "-" }] },
      ],
    },
  ],
  m3: [
    {
      title: "M3 + Sub-28",
      rows: [
        { preset: "[M3_110] + [SUB28_60]", components: [{ label: "M3", value: "0 ms", polarity: "+" }, { label: "Sub-28", value: "1.8 ms", polarity: "+" }] },
      ],
    },
  ],
  m1sub: [
    {
      title: "M1-SUB + Legacy-10",
      rows: [
        { preset: "[M1SUB_60] + [LEGACY10_60]", components: [{ label: "M1-SUB", value: "0 ms", polarity: "+" }, { label: "Legacy-10", value: "1.2 ms", polarity: "+" }] },
      ],
    },
  ],
  x1: [
    {
      title: "X1 + Sub-15",
      rows: [
        { preset: "[X1_FI] + [SUB15_100]", components: [{ label: "X1", value: "1.4 ms", polarity: "+" }, { label: "Sub-15", value: "0 ms", polarity: "-" }] },
      ],
    },
  ],
  x2: [
    {
      title: "X2 + Sub-18",
      rows: [
        { preset: "[X2_MO] + [SUB18_100]", components: [{ label: "X2", value: "0 ms", polarity: "+" }, { label: "Sub-18", value: "0.6 ms", polarity: "+" }] },
      ],
    },
  ],
  x3c: [
    {
      title: "X3 Compact + Sub-28",
      rows: [
        { preset: "[X3C_60] + [SUB28_60]", components: [{ label: "X3 Compact", value: "0 ms", polarity: "+" }, { label: "Sub-28", value: "2 ms", polarity: "+" }] },
        { preset: "[X3C_60_C] + [SUB28_60]", components: [{ label: "X3 Compact", value: "3.5 ms", polarity: "+" }, { label: "Sub-28", value: "0 ms", polarity: "-" }] },
      ],
    },
  ],
  x3t: [
    {
      title: "X3 Twin + Legacy-12",
      rows: [
        { preset: "[X3T_90] + [LEGACY12_60]", components: [{ label: "X3 Twin", value: "0 ms", polarity: "+" }, { label: "Legacy-12", value: "1.1 ms", polarity: "+" }] },
      ],
    },
  ],
  kone: [
    {
      title: "K-One + Sub-15",
      rows: [
        { preset: "[KONE_70] + [SUB15_60]", components: [{ label: "K-One", value: "0 ms", polarity: "+" }, { label: "Sub-15", value: "0.9 ms", polarity: "+" }] },
      ],
    },
  ],
  ktwo: [
    {
      title: "K-Two + Sub-18",
      rows: [
        { preset: "[KTWO_90] + [SUB18_60]", components: [{ label: "K-Two", value: "2 ms", polarity: "+" }, { label: "Sub-18", value: "0 ms", polarity: "-" }] },
      ],
    },
  ],
  kthree: [
    {
      title: "K-Three + Sub-28",
      rows: [
        { preset: "[KTHREE_110] + [SUB28_60]", components: [{ label: "K-Three", value: "0 ms", polarity: "+" }, { label: "Sub-28", value: "1.3 ms", polarity: "+" }] },
      ],
    },
  ],
  sub15: [],
  sub18: [],
  sub28: [],
  legacy10: [],
  legacy12: [],
};
