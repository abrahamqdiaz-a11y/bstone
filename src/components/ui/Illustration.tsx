/**
 * Original line-and-tone illustrations used where project photography will
 * eventually go. Decorative only (aria-hidden) — they carry no information.
 */
type Variant = "home" | "interior" | "door" | "garden";

function Firs({ x, scale = 1, fill }: { x: number; scale?: number; fill: string }) {
  return (
    <g transform={`translate(${x} 0) scale(${scale} 1)`} fill={fill}>
      <path d="M0 300 L22 210 L14 212 L30 160 L22 162 L36 115 L50 162 L42 160 L58 212 L50 210 L72 300 Z" />
    </g>
  );
}

export function Illustration({ variant = "home", className = "" }: { variant?: Variant; className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="480" height="360" fill="#EFEAE1" />
      {variant === "home" && (
        <>
          <path d="M0 210 Q90 150 170 185 T340 165 T480 180 V360 H0Z" fill="#D8CEC0" opacity=".6" />
          <path d="M0 250 Q120 205 240 235 T480 225 V360 H0Z" fill="#D8CEC0" />
          <g opacity=".55">
            <Firs x={20} fill="#39464C" />
            <Firs x={70} scale={0.8} fill="#39464C" />
          </g>
          <g opacity=".85">
            <Firs x={380} scale={1.1} fill="#243D35" />
            <Firs x={330} scale={0.75} fill="#243D35" />
          </g>
          <path d="M150 300 V205 L240 140 L330 205 V300 Z" fill="#F7F5F0" />
          <path d="M138 212 L240 132 L342 212" fill="none" stroke="#243D35" strokeWidth="9" strokeLinejoin="round" />
          <rect x="222" y="238" width="36" height="62" fill="#243D35" />
          <rect x="172" y="222" width="32" height="30" fill="#B49A70" opacity=".55" />
          <rect x="276" y="222" width="32" height="30" fill="#B49A70" opacity=".55" />
          <circle cx="240" cy="188" r="11" fill="none" stroke="#B49A70" strokeWidth="3" />
          <path d="M0 300 H480 V360 H0Z" fill="#243D35" opacity=".92" />
          <path d="M218 300 Q240 330 205 360 H275 Q245 330 262 300Z" fill="#D8CEC0" opacity=".5" />
        </>
      )}
      {variant === "interior" && (
        <>
          <rect x="0" y="270" width="480" height="90" fill="#D8CEC0" />
          <rect x="250" y="50" width="170" height="200" fill="#F7F5F0" stroke="#39464C" strokeWidth="5" />
          <path d="M335 50 V250 M250 150 H420" stroke="#39464C" strokeWidth="4" />
          <g opacity=".35">
            <Firs x={280} scale={0.6} fill="#243D35" />
            <Firs x={350} scale={0.5} fill="#243D35" />
          </g>
          <rect x="60" y="210" width="90" height="70" fill="#B49A70" opacity=".8" />
          <path d="M60 228 H150" stroke="#7A6443" strokeWidth="3" />
          <rect x="90" y="160" width="70" height="52" fill="#B49A70" opacity=".6" />
          <path d="M90 175 H160" stroke="#7A6443" strokeWidth="3" />
          <rect x="165" y="236" width="60" height="44" fill="#B49A70" opacity=".45" />
          <path d="M440 270 V180 Q440 150 410 150 M440 200 Q460 185 470 160" stroke="#243D35" strokeWidth="4" fill="none" />
          <ellipse cx="452" cy="160" rx="16" ry="9" fill="#243D35" transform="rotate(-35 452 160)" />
          <ellipse cx="410" cy="148" rx="16" ry="9" fill="#243D35" transform="rotate(20 410 148)" />
        </>
      )}
      {variant === "door" && (
        <>
          <rect x="140" y="40" width="200" height="280" fill="#F7F5F0" />
          <rect x="185" y="90" width="110" height="230" fill="#243D35" />
          <rect x="200" y="110" width="80" height="80" fill="none" stroke="#CDB98F" strokeWidth="3" />
          <rect x="200" y="210" width="80" height="90" fill="none" stroke="#CDB98F" strokeWidth="3" />
          <circle cx="278" cy="205" r="5" fill="#B49A70" />
          <path d="M160 90 H320" stroke="#39464C" strokeWidth="6" />
          <rect x="0" y="320" width="480" height="40" fill="#D8CEC0" />
          <rect x="165" y="320" width="150" height="14" fill="#39464C" opacity=".4" />
          <path d="M70 320 Q70 250 95 230 Q120 250 120 320Z" fill="#243D35" opacity=".8" />
          <path d="M360 320 Q360 260 385 245 Q410 260 410 320Z" fill="#243D35" opacity=".8" />
        </>
      )}
      {variant === "garden" && (
        <>
          <path d="M0 230 Q120 190 240 215 T480 200 V360 H0Z" fill="#D8CEC0" />
          <Firs x={40} scale={1.2} fill="#243D35" />
          <Firs x={120} scale={0.8} fill="#39464C" />
          <path d="M260 300 L300 230 H420 L460 300 Z" fill="#F7F5F0" stroke="#243D35" strokeWidth="5" strokeLinejoin="round" />
          <rect x="330" y="255" width="40" height="45" fill="#B49A70" opacity=".6" />
          <path d="M0 300 H480 V360 H0Z" fill="#243D35" />
          <circle cx="390" cy="90" r="34" fill="#F7F5F0" opacity=".9" />
        </>
      )}
    </svg>
  );
}
