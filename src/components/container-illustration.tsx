type Props = {
  className?: string;
};

/**
 * Clean 3/4-view illustration of a blue storage container (long corrugated side
 * + door end with locking rods), matching the real containers. Self-contained
 * SVG — no external assets. Swap for a real photo later by replacing the usage
 * in the hero.
 */
export function ContainerIllustration({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Tárolókonténer"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="container-hazard"
          patternUnits="userSpaceOnUse"
          width="12"
          height="12"
          patternTransform="rotate(45)"
        >
          <rect width="12" height="12" fill="#facc15" />
          <rect width="6" height="12" fill="#1a1a1a" />
        </pattern>
      </defs>

      {/* ground shadow */}
      <ellipse cx="195" cy="268" rx="160" ry="18" fill="#000000" opacity="0.13" />

      {/* top face */}
      <polygon
        points="230,95 40,60 140,43 330,78"
        fill="#3a7cb8"
        stroke="#143a5a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <polyline points="150,49 305,73" fill="none" stroke="#1b4f7d" strokeWidth="1.5" opacity="0.4" />
      <polyline points="95,55 250,79" fill="none" stroke="#1b4f7d" strokeWidth="1.5" opacity="0.4" />

      {/* left long (corrugated) side */}
      <polygon
        points="230,95 40,60 40,215 230,250"
        fill="#2f74b0"
        stroke="#143a5a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <g stroke="#1b4f7d" strokeWidth="2" opacity="0.5" strokeLinecap="round">
        <line x1="209" y1="91" x2="209" y2="246" />
        <line x1="188" y1="87" x2="188" y2="242" />
        <line x1="167" y1="83" x2="167" y2="238" />
        <line x1="146" y1="80" x2="146" y2="235" />
        <line x1="126" y1="76" x2="126" y2="231" />
        <line x1="105" y1="72" x2="105" y2="227" />
        <line x1="84" y1="68" x2="84" y2="223" />
        <line x1="63" y1="64" x2="63" y2="219" />
      </g>

      {/* door end */}
      <polygon
        points="230,95 330,78 330,233 230,250"
        fill="#235f92"
        stroke="#143a5a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* hazard stripes (top corners) */}
      <rect x="234" y="97" width="26" height="7" fill="url(#container-hazard)" opacity="0.95" />
      <rect x="300" y="84" width="26" height="7" fill="url(#container-hazard)" opacity="0.95" />

      {/* CSC plate decal */}
      <rect x="243" y="205" width="20" height="15" rx="1.5" fill="#dbe4ee" stroke="#143a5a" strokeWidth="0.8" />
      <line x1="246" y1="210" x2="260" y2="210" stroke="#7d93aa" strokeWidth="0.8" />
      <line x1="246" y1="214" x2="260" y2="214" stroke="#7d93aa" strokeWidth="0.8" />

      {/* door divider */}
      <line x1="280" y1="87" x2="280" y2="242" stroke="#143a5a" strokeWidth="1.5" opacity="0.5" />

      {/* locking rods */}
      <g stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round">
        <line x1="248" y1="92" x2="248" y2="247" />
        <line x1="264" y1="89" x2="264" y2="244" />
        <line x1="290" y1="85" x2="290" y2="240" />
        <line x1="312" y1="81" x2="312" y2="236" />
      </g>
      {/* rod keepers + handles */}
      <g fill="#94a3b8">
        <rect x="244" y="150" width="8" height="6" rx="1" />
        <rect x="260" y="147" width="8" height="6" rx="1" />
        <rect x="286" y="143" width="8" height="6" rx="1" />
        <rect x="308" y="139" width="8" height="6" rx="1" />
        <rect x="243" y="196" width="10" height="5" rx="1" />
        <rect x="259" y="193" width="10" height="5" rx="1" />
        <rect x="285" y="189" width="10" height="5" rx="1" />
        <rect x="307" y="185" width="10" height="5" rx="1" />
      </g>

      {/* corner castings */}
      <g fill="#0f2e47">
        <rect x="223" y="88" width="14" height="14" rx="2" />
        <rect x="223" y="243" width="14" height="14" rx="2" />
        <rect x="33" y="53" width="14" height="14" rx="2" />
        <rect x="33" y="208" width="14" height="14" rx="2" />
        <rect x="323" y="71" width="14" height="14" rx="2" />
        <rect x="323" y="226" width="14" height="14" rx="2" />
      </g>
    </svg>
  );
}
