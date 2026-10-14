"use client";

import { useEffect, useMemo, useState } from "react";

export type CalculatorLabels = {
  send: string;
  get: string;
  swap: string;
  live: string;
  offline: string;
  rate: string;
};

type Currency = { code: string; name: string; id?: string; fiat?: boolean };

const currencies: Currency[] = [
  { code: "BTC", name: "Bitcoin", id: "bitcoin" },
  { code: "ETH", name: "Ethereum", id: "ethereum" },
  { code: "LTC", name: "Litecoin", id: "litecoin" },
  { code: "XRP", name: "Ripple", id: "ripple" },
  { code: "ADA", name: "Cardano", id: "cardano" },
  { code: "DOT", name: "Polkadot", id: "polkadot" },
  { code: "USD", name: "US Dollar", fiat: true },
  { code: "EUR", name: "Euro", fiat: true },
];

// Indicative USD prices used until (or if) live data is unavailable.
const fallbackUsd: Record<string, number> = {
  BTC: 54220.9,
  ETH: 1836.5,
  LTC: 199.8,
  XRP: 0.5,
  ADA: 1.24,
  DOT: 28.6,
  USD: 1,
  EUR: 1.08,
};

const API = `https://api.coingecko.com/api/v3/simple/price?ids=${currencies
  .filter((c) => c.id)
  .map((c) => c.id)
  .join(",")}&vs_currencies=usd,eur`;

export default function CoinCalculatorClient({ locale, labels }: { locale: string; labels: CalculatorLabels }) {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("BTC");
  const [to, setTo] = useState("USD");
  const [usd, setUsd] = useState(fallbackUsd);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(API, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: Record<string, { usd: number; eur: number }>) => {
        const next = { ...fallbackUsd };
        for (const c of currencies) if (c.id && data[c.id]?.usd) next[c.code] = data[c.id].usd;
        if (data.bitcoin?.usd && data.bitcoin?.eur) next.EUR = data.bitcoin.usd / data.bitcoin.eur;
        setUsd(next);
        setLive(true);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  const fmt = (value: number, code: string) =>
    new Intl.NumberFormat(locale, {
      maximumFractionDigits: currencies.find((c) => c.code === code)?.fiat ? 2 : 8,
    }).format(value);

  const { result, rate } = useMemo(() => {
    const value = Number(amount.replace(",", "."));
    const unit = usd[from] / usd[to];
    return { result: Number.isFinite(value) ? value * unit : 0, rate: unit };
  }, [amount, from, to, usd]);

  const options = currencies.map((c) => (
    <option key={c.code} value={c.code}>
      {c.code} — {c.name}
    </option>
  ));

  return (
    <div className="calc">
      <div className="calc-row">
        <label>
          <span>{labels.send}</span>
          <input
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-label={labels.send}
          />
        </label>
        <select value={from} onChange={(e) => setFrom(e.target.value)} aria-label={labels.send}>
          {options}
        </select>
      </div>

      <button
        type="button"
        className="calc-swap"
        aria-label={labels.swap}
        onClick={() => {
          setFrom(to);
          setTo(from);
        }}
      >
        <i className="fa fa-exchange" aria-hidden="true"></i>
      </button>

      <div className="calc-row calc-result">
        <label>
          <span>{labels.get}</span>
          <output aria-live="polite">{fmt(result, to)}</output>
        </label>
        <select value={to} onChange={(e) => setTo(e.target.value)} aria-label={labels.get}>
          {options}
        </select>
      </div>

      <p className="calc-foot">
        <span>
          {labels.rate}: 1 {from} = {fmt(rate, to)} {to}
        </span>
        <span className={live ? "is-live" : ""}>
          <i className="fa fa-circle" aria-hidden="true"></i> {live ? labels.live : labels.offline}
        </span>
      </p>
    </div>
  );
}
