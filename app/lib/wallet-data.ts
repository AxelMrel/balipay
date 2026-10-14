import "server-only";

// Demo data only: deterministic per user so every visit shows the same wallet.
export type Asset = {
  symbol: string;
  name: string;
  color: string;
  price: number;
  change24h: number;
  amount: number;
  value: number;
  spark: number[];
};

export type Transaction = {
  id: string;
  kind: "received" | "sent" | "bought" | "sold";
  symbol: string;
  amount: number;
  value: number;
  status: "completed" | "pending";
  hoursAgo: number;
};

export type RangeKey = "1D" | "1W" | "1M" | "1Y";

export type Wallet = {
  total: number;
  change24h: number;
  changeValue24h: number;
  assets: Asset[];
  transactions: Transaction[];
  history: Record<RangeKey, number[]>;
};

function rng(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const catalog = [
  { symbol: "BTC", name: "Bitcoin", color: "#f7931a", price: 54220.9, holdings: [0.08, 0.35] },
  { symbol: "ETH", name: "Ethereum", color: "#627eea", price: 1836.5, holdings: [1.2, 6] },
  { symbol: "LTC", name: "Litecoin", color: "#9aa4b2", price: 199.8, holdings: [8, 40] },
  { symbol: "ADA", name: "Cardano", color: "#2a71d0", price: 1.24, holdings: [900, 4500] },
  { symbol: "DOT", name: "Polkadot", color: "#e6007a", price: 28.6, holdings: [40, 220] },
];

function walk(rand: () => number, points: number, end: number, volatility: number) {
  const raw = [1];
  for (let i = 1; i < points; i++) raw.push(raw[i - 1] * (1 + (rand() - 0.46) * volatility));
  const scale = end / raw[raw.length - 1];
  return raw.map((v) => v * scale);
}

export function getWallet(userId: string): Wallet {
  const rand = rng(userId);

  const assets: Asset[] = catalog.map((c) => {
    const amount = c.holdings[0] + rand() * (c.holdings[1] - c.holdings[0]);
    const value = amount * c.price;
    const spark = walk(rand, 24, c.price, 0.05);
    const change24h = (spark[spark.length - 1] / spark[0] - 1) * 100;
    return { symbol: c.symbol, name: c.name, color: c.color, price: c.price, change24h, amount, value, spark };
  });

  const total = assets.reduce((sum, a) => sum + a.value, 0);
  const change24h = assets.reduce((sum, a) => sum + a.change24h * (a.value / total), 0);
  const changeValue24h = total - total / (1 + change24h / 100);

  const history: Record<RangeKey, number[]> = {
    "1D": walk(rand, 24, total, 0.012),
    "1W": walk(rand, 28, total, 0.03),
    "1M": walk(rand, 30, total, 0.05),
    "1Y": walk(rand, 52, total, 0.09),
  };

  const kinds: Transaction["kind"][] = ["received", "bought", "sent", "sold", "received", "bought"];
  const transactions: Transaction[] = kinds.map((kind, i) => {
    const asset = assets[Math.floor(rand() * assets.length)];
    const amount = asset.amount * (0.03 + rand() * 0.12);
    return {
      id: `${userId.slice(0, 4)}-${i}`,
      kind,
      symbol: asset.symbol,
      amount,
      value: amount * asset.price,
      status: i === 0 ? "pending" : "completed",
      hoursAgo: 2 + i * 19 + Math.floor(rand() * 10),
    };
  });

  return { total, change24h, changeValue24h, assets, transactions, history };
}
