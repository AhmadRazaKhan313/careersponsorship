// Shared inline SVG icon set
const PATHS = {
  doc: "M6 2h7l5 5v15H6z|M13 2v5h5",
  pen: "M4 20l4-1L20 7l-3-3L5 16z",
  link: "M9 15l6-6|M8 12l-3 3a3 3 0 104 4l3-3|M16 12l3-3a3 3 0 10-4-4l-3 3",
  chat: "M4 5h16v11H8l-4 4z",
  send: "M3 11l18-8-8 18-2-7z",
  cap: "M3 8l9-4 9 4-9 4z|M7 11v5l5 2 5-2v-5",
  heart: "M12 21s-7-4.5-9.5-9A4.5 4.5 0 0112 6a4.5 4.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z",
  shield: "M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6z",
  spark: "M12 3v18|M3 12h18|M6 6l12 12|M18 6L6 18",
  phone: "M4 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2C9 22 2 15 2 6a2 2 0 012-2z",
  mail: "M3 6h18v12H3z|M3 6l9 7 9-7",
  pin: "M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z",
  monitor: "M2 4h20v13H2z|M8 21h8|M12 17v4",
  chart: "M4 20V8l6 5 8-11v18z",
  health: "M12 4v6M9 7h6M12 10v8a3 3 0 11-6 0",
  clock: "M12 3a9 9 0 100 18 9 9 0 000-18z|M12 7v5l3 2",
  scale: "M12 3v16M5 8h14M7 8l-3 7h6zM17 8l-3 7h6z",
  gear: "M12 8a4 4 0 100 8 4 4 0 000-8z|M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14z|M20 20l-4-4",
  list: "M4 4h16v16H4z|M8 9h8M8 13h6",
  star2: "M12 3l2.6 6 6.4.5-4.9 4.2L18 21l-6-3.5L6 21l1.9-7.3L3 9.5l6.4-.5z",
  check: "M5 12l4 4 10-10",
  arrow: "M5 12h14|M13 6l6 6-6 6",
};

export default function Icon({ name, size = 24, sw = 1.6, ...rest }) {
  const raw = PATHS[name] || PATHS.doc;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {raw.split("|").map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}
