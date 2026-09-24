import styles from "./skyline.module.css";

type Pt = [number, number];

// One contiguous stepped silhouette across the City, west to east: St Paul's,
// Tower Bridge, then the eastern cluster — Walkie Talkie, Cheesegrater,
// 22 Bishopsgate, Gherkin, Tower 42, Heron. Contiguity is what makes it read
// as a skyline rather than a row of unrelated sticks.
const SILHOUETTE: Pt[] = [
  [20, 190],
  [20, 176],
  [56, 176],
  // St Paul's: turret, dome, turret
  [56, 164],
  [64, 164],
  [64, 156],
  [72, 148],
  [84, 142],
  [96, 142],
  [108, 148],
  [116, 156],
  [116, 164],
  [124, 164],
  [124, 176],
  [146, 176],
  [146, 182],
  // Tower Bridge: west tower, deck, east tower
  [156, 182],
  [156, 136],
  [164, 121],
  [172, 136],
  [172, 180],
  [236, 180],
  [236, 136],
  [244, 121],
  [252, 136],
  [252, 182],
  [272, 182],
  [272, 168],
  [296, 168],
  [296, 152],
  [312, 152],
  // 20 Fenchurch St: flares out to the left as it rises
  [312, 116],
  [306, 98],
  [356, 98],
  [356, 116],
  [356, 152],
  [374, 152],
  // Leadenhall: vertical spine, sloping face
  [374, 74],
  [420, 96],
  [420, 150],
  [436, 150],
  // 22 Bishopsgate: tallest, stepped shoulder
  [436, 56],
  [452, 44],
  [496, 44],
  [496, 150],
  [516, 150],
  // 30 St Mary Axe: tapers to a point, widest at the middle
  [516, 132],
  [522, 110],
  [532, 92],
  [542, 110],
  [548, 132],
  [548, 150],
  [566, 150],
  [566, 104],
  [600, 104],
  [600, 150],
  [616, 150],
  [616, 80],
  [648, 80],
  [648, 140],
  [668, 140],
  [668, 112],
  [700, 112],
  [700, 150],
  [726, 150],
  [726, 132],
  [758, 132],
  [758, 160],
  [790, 160],
  [790, 176],
  [836, 176],
  [836, 190],
];

// Small details that sit off the main outline.
const DETAILS: Pt[][] = [
  [
    [90, 142],
    [90, 129],
  ],
  [
    [172, 142],
    [236, 142],
  ],
  [
    [632, 80],
    [632, 63],
  ],
];

// Short hops between neighbouring summits — enough to read as a graph,
// without drawing an envelope over the skyline.
const LINKS: [Pt, Pt][] = [
  [
    [164, 121],
    [244, 121],
  ],
  [
    [306, 98],
    [374, 74],
  ],
  [
    [420, 96],
    [452, 44],
  ],
  [
    [496, 44],
    [532, 92],
  ],
  [
    [532, 92],
    [566, 104],
  ],
  [
    [600, 104],
    [632, 63],
  ],
  [
    [648, 80],
    [700, 112],
  ],
];

// Nodes scattered through the building mass, below the roofline. Each sits
// under the silhouette at its own x, so the web fills the city rather than
// floating over it.
const STRAY: Pt[] = [
  [36, 184],
  [80, 172],
  [98, 170],
  [110, 180],
  [164, 158],
  [190, 158],
  [204, 170],
  [222, 156],
  [244, 160],
  [268, 180],
  [286, 178],
  [304, 172],
  [322, 126],
  [338, 150],
  [330, 172],
  [386, 112],
  [404, 142],
  [392, 170],
  [428, 170],
  [450, 80],
  [472, 66],
  [458, 114],
  [482, 142],
  [446, 166],
  [478, 180],
  [506, 172],
  [528, 118],
  [538, 152],
  [524, 176],
  [556, 174],
  [578, 132],
  [590, 168],
  [608, 172],
  [626, 108],
  [638, 142],
  [622, 174],
  [658, 164],
  [680, 138],
  [690, 172],
  [712, 172],
  [740, 158],
  [734, 180],
  [772, 176],
  [812, 184],
];

const STRAY_EDGES: [Pt, Pt][] = [
  [[36, 184], [80, 172]],
  [[80, 172], [98, 170]],
  [[98, 170], [110, 180]],
  [[80, 172], [90, 142]],
  [[110, 180], [164, 158]],
  [[164, 158], [190, 158]],
  [[190, 158], [204, 170]],
  [[204, 170], [222, 156]],
  [[222, 156], [244, 160]],
  [[190, 158], [222, 156]],
  [[244, 160], [268, 180]],
  [[268, 180], [286, 178]],
  [[286, 178], [304, 172]],
  [[304, 172], [322, 126]],
  [[322, 126], [338, 150]],
  [[338, 150], [330, 172]],
  [[330, 172], [392, 170]],
  [[322, 126], [306, 98]],
  [[386, 112], [404, 142]],
  [[404, 142], [392, 170]],
  [[386, 112], [374, 74]],
  [[404, 142], [428, 170]],
  [[428, 170], [446, 166]],
  [[450, 80], [472, 66]],
  [[472, 66], [452, 44]],
  [[450, 80], [458, 114]],
  [[458, 114], [482, 142]],
  [[482, 142], [478, 180]],
  [[446, 166], [478, 180]],
  [[458, 114], [446, 166]],
  [[478, 180], [506, 172]],
  [[506, 172], [524, 176]],
  [[528, 118], [538, 152]],
  [[538, 152], [524, 176]],
  [[528, 118], [532, 92]],
  [[524, 176], [556, 174]],
  [[556, 174], [578, 132]],
  [[578, 132], [590, 168]],
  [[590, 168], [608, 172]],
  [[608, 172], [626, 108]],
  [[626, 108], [638, 142]],
  [[638, 142], [622, 174]],
  [[626, 108], [632, 80]],
  [[622, 174], [658, 164]],
  [[658, 164], [680, 138]],
  [[680, 138], [690, 172]],
  [[690, 172], [712, 172]],
  [[712, 172], [740, 158]],
  [[740, 158], [734, 180]],
  [[734, 180], [772, 176]],
  [[772, 176], [812, 184]],
  [[680, 138], [668, 112]],
  [[740, 158], [726, 132]],
];

const k = (p: Pt) => `${p[0]}:${p[1]}`;

const VERTICES = Array.from(
  new Map([...SILHOUETTE, ...DETAILS.flat()].map((p) => [k(p), p])).values(),
);

export function Skyline() {
  return (
    <svg
      viewBox="0 0 900 200"
      className={styles.svg}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Dissolves at both ends so the bleed has no hard edge. */}
        <linearGradient id="skylineFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="14%" stopColor="white" stopOpacity="1" />
          <stop offset="86%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="skylineMask">
          <rect x="0" y="0" width="900" height="200" fill="url(#skylineFade)" />
        </mask>
        {/* Bases dissolve so the type sits on clear ground. */}
        <linearGradient id="skylineDrop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="60%" stopColor="white" stopOpacity="0.85" />
          <stop offset="100%" stopColor="white" stopOpacity="0.55" />
        </linearGradient>
        <mask id="skylineDropMask">
          <rect x="0" y="0" width="900" height="200" fill="url(#skylineDrop)" />
        </mask>
      </defs>

      <g mask="url(#skylineMask)">
        <g mask="url(#skylineDropMask)">
          <g className={styles.links}>
            {[...LINKS, ...STRAY_EDGES].map(([a, b]) => (
              <line
                key={`${k(a)}-${k(b)}`}
                x1={a[0]}
                y1={a[1]}
                x2={b[0]}
                y2={b[1]}
              />
            ))}
          </g>

          <g className={styles.strayNodes}>
            {STRAY.map((p) => (
              <circle key={k(p)} cx={p[0]} cy={p[1]} r="1.9" />
            ))}
          </g>

          <g className={styles.edges}>
            {SILHOUETTE.slice(0, -1).map((p, i) => (
              <line
                key={`e${i}`}
                x1={p[0]}
                y1={p[1]}
                x2={SILHOUETTE[i + 1][0]}
                y2={SILHOUETTE[i + 1][1]}
              />
            ))}
            {DETAILS.map(([a, b], i) => (
              <line key={`d${i}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />
            ))}
          </g>

          <g className={styles.nodes}>
            {VERTICES.map((p) => (
              <circle key={k(p)} cx={p[0]} cy={p[1]} r="2.2" />
            ))}
          </g>
        </g>
      </g>
    </svg>
  );
}
