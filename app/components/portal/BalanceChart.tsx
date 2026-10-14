"use client";

import { useId, useState } from "react";

type RangeKey = "1D" | "1W" | "1M" | "1Y";

const W = 720;
const H = 260;
const PAD = { top: 16, right: 8, bottom: 24, left: 8 };

export default function BalanceChart({
  history,
  locale,
  currency = "USD",
}: {
  history: Record<RangeKey, number[]>;
  locale: string;
  currency?: string;
}) {
  const [range, setRange] = useState<RangeKey>("1M");
  const [hover, setHover] = useState<number | null>(null);
  const gradientId = useId();
  const series = history[range];

  const min = Math.min(...series);
  const max = Math.max(...series);
  const x = (i: number) => PAD.left + (i / (series.length - 1)) * (W - PAD.left - PAD.right);
  const y = (v: number) => PAD.top + (1 - (v - min) / (max - min || 1)) * (H - PAD.top - PAD.bottom);

  const line = series.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${x(series.length - 1)},${H - PAD.bottom} L${x(0)},${H - PAD.bottom} Z`;
  const money = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  });
  const delta = (series[series.length - 1] / series[0] - 1) * 100;
  const shown = hover ?? series.length - 1;

  return (
    <div className="chart">
      <div className="chart-head">
        <div>
          <strong>{money.format(series[shown])}</strong>
          <span className={delta >= 0 ? "up" : "down"}>
            {delta >= 0 ? "▲" : "▼"} {Math.abs(delta).toFixed(2)}%
          </span>
        </div>
        <div className="chart-tabs" role="tablist">
          {(Object.keys(history) as RangeKey[]).map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={key === range}
              className={key === range ? "active" : ""}
              onClick={() => {
                setRange(key);
                setHover(null);
              }}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`${range}: ${money.format(series[0])} → ${money.format(series[series.length - 1])}`}
        onPointerLeave={() => setHover(null)}
        onPointerMove={(e) => {
          const box = e.currentTarget.getBoundingClientRect();
          const ratio = (e.clientX - box.left) / box.width;
          setHover(Math.min(series.length - 1, Math.max(0, Math.round(ratio * (series.length - 1)))));
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5b4fe9" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1f7be0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#${gradientId})`} />
        <path
          d={line}
          fill="none"
          stroke="#4a5cf0"
          strokeWidth="3"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        {hover !== null && (
          <>
            <line
              x1={x(hover)}
              x2={x(hover)}
              y1={PAD.top}
              y2={H - PAD.bottom}
              stroke="rgba(15,27,51,0.25)"
              strokeDasharray="4 4"
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={x(hover)}
              cy={y(series[hover])}
              r="5"
              fill="#fff"
              stroke="#4a5cf0"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
          </>
        )}
      </svg>
    </div>
  );
}
