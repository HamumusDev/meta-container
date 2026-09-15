type Props = {
  className?: string;
};

/**
 * Small line-art container icon (3/4 view, stroke only) using currentColor.
 * Set the colour via a text-* class on the element.
 */
export function ContainerLineIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 120 84"
      role="img"
      aria-label="Konténer"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* top face */}
      <polygon points="70,30 14,20 42,13 100,24" />
      {/* left long side */}
      <polygon points="70,30 14,20 14,60 70,70" />
      {/* door end */}
      <polygon points="70,30 100,24 100,64 70,70" />
      {/* corrugation ribs (left) */}
      <g strokeWidth="1.5" opacity="0.7">
        <line x1="52" y1="27" x2="52" y2="67" />
        <line x1="33" y1="23" x2="33" y2="63" />
      </g>
      {/* door lines (right) */}
      <g strokeWidth="1.5" opacity="0.7">
        <line x1="85" y1="27" x2="85" y2="67" />
        <line x1="78" y1="29" x2="78" y2="69" />
        <line x1="93" y1="26" x2="93" y2="66" />
      </g>
    </svg>
  );
}
