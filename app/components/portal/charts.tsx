// Small dependency-free SVG charts used by the dashboard.
export function Sparkline({ values, positive }: { values: number[]; positive: boolean }) {
  const w = 96;
  const h = 32;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const points = values
    .map(
      (v, i) =>
        `${((i / (values.length - 1)) * w).toFixed(1)},${(h - 2 - ((v - min) / (max - min || 1)) * (h - 4)).toFixed(1)}`,
    )
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke={positive ? "#16a34a" : "#dc2626"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Donut({
  slices,
  label,
  value,
}: {
  slices: { color: string; share: number }[];
  label: string;
  value: string;
}) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const offsets = slices.map((_, i) => slices.slice(0, i).reduce((sum, s) => sum + s.share * c, 0));
  return (
    <svg viewBox="0 0 140 140" className="donut" role="img" aria-label={label}>
      <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(15,27,51,0.08)" strokeWidth="16" />
      {slices.map((s, i) => {
        const dash = Math.max(s.share * c - 2, 0);
        return (
          <circle
            key={i}
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth="16"
            strokeDasharray={`${dash} ${c - dash}`}
            strokeDashoffset={-offsets[i]}
            transform="rotate(-90 70 70)"
          />
        );
      })}
      <text x="70" y="66" textAnchor="middle" className="donut-label">
        {label}
      </text>
      <text x="70" y="86" textAnchor="middle" className="donut-value">
        {value}
      </text>
    </svg>
  );
}
