import type { Metadata } from "next";
import { Suspense } from "react";
import BalanceChart from "@/app/components/portal/BalanceChart";
import { Donut, Sparkline } from "@/app/components/portal/charts";
import { requireUser } from "@/app/lib/auth";
import { getLocale, getT } from "@/app/lib/i18n";
import { getWallet } from "@/app/lib/wallet-data";

const intlTag = { fr: "fr-FR", en: "en-US", it: "it-IT", de: "de-DE" } as const;

// Session-bound page (see the dashboard layout): skip instant-navigation validation.
export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t("Dashboard") };
}

export default function DashboardPage() {
  // The session is read at request time, so the user-specific content streams in behind a boundary.
  return (
    <Suspense fallback={<main className="dash-content" aria-busy="true"></main>}>
      <DashboardContent />
    </Suspense>
  );
}

async function DashboardContent() {
  const user = await requireUser();
  const locale = await getLocale();
  const t = await getT();
  const tag = intlTag[locale];

  const wallet = getWallet(user.id);
  const money = (value: number, digits = 0) =>
    new Intl.NumberFormat(tag, {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: digits,
    }).format(value);
  const number = (value: number) =>
    new Intl.NumberFormat(tag, { maximumFractionDigits: value < 10 ? 4 : 2 }).format(value);
  const percent = (value: number) =>
    `${value >= 0 ? "+" : "−"}${new Intl.NumberFormat(tag, { maximumFractionDigits: 2 }).format(Math.abs(value))}%`;
  const ago = new Intl.RelativeTimeFormat(tag, { numeric: "auto" });
  const when = (hours: number) =>
    hours < 24 ? ago.format(-hours, "hour") : ago.format(-Math.round(hours / 24), "day");

  const firstName = user.name.split(/\s+/)[0];
  const pending = wallet.transactions.filter((tx) => tx.status === "pending").length;
  const kindLabel = {
    received: t("Received"),
    sent: t("Sent"),
    bought: t("Bought"),
    sold: t("Sold"),
  };
  const kindIcon = { received: "fa-arrow-down", sent: "fa-arrow-up", bought: "fa-plus", sold: "fa-minus" };

  const stats = [
    { label: t("Total balance"), value: money(wallet.total), icon: "fa-credit-card", tone: "brand" },
    {
      label: t("24h change"),
      value: `${wallet.changeValue24h >= 0 ? "+" : "−"}${money(Math.abs(wallet.changeValue24h))}`,
      sub: percent(wallet.change24h),
      icon: "fa-line-chart",
      tone: wallet.change24h >= 0 ? "up" : "down",
    },
    { label: t("Assets"), value: String(wallet.assets.length), icon: "fa-pie-chart", tone: "accent" },
    { label: t("Pending transactions"), value: String(pending), icon: "fa-clock-o", tone: "muted" },
  ];

  return (
    <main className="dash-content">
      <section id="overview">
        <div className="dash-hello">
          <h1>
            {t("Hello")}, {firstName} 👋
          </h1>
          <p>{t("Here is what is happening with your portfolio today.")}</p>
        </div>

        <div className="stat-grid">
          {stats.map((stat) => (
            <article key={stat.label} className={`stat tone-${stat.tone}`}>
              <span className="stat-icon">
                <i className={`fa ${stat.icon}`} aria-hidden="true"></i>
              </span>
              <p>{stat.label}</p>
              <strong>{stat.value}</strong>
              {stat.sub && <small>{stat.sub}</small>}
            </article>
          ))}
        </div>

        <div className="panel-grid">
          <article className="panel panel-wide">
            <h2>{t("Portfolio value")}</h2>
            <BalanceChart history={wallet.history} locale={tag} />
          </article>
          <article className="panel">
            <h2>{t("Allocation")}</h2>
            <Donut
              label={t("Total")}
              value={money(wallet.total)}
              slices={wallet.assets.map((a) => ({ color: a.color, share: a.value / wallet.total }))}
            />
            <ul className="legend">
              {wallet.assets.map((a) => (
                <li key={a.symbol}>
                  <span className="dot" style={{ background: a.color }}></span>
                  {a.symbol}
                  <em>{Math.round((a.value / wallet.total) * 100)}%</em>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="assets" className="panel">
        <h2>{t("My assets")}</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{t("Asset")}</th>
                <th>{t("Price")}</th>
                <th>{t("24h")}</th>
                <th>{t("Holdings")}</th>
                <th>{t("Value")}</th>
                <th>{t("Trend")}</th>
              </tr>
            </thead>
            <tbody>
              {wallet.assets.map((a) => (
                <tr key={a.symbol}>
                  <td>
                    <span className="coin" style={{ background: a.color }}>
                      {a.symbol[0]}
                    </span>
                    <strong>{a.name}</strong>
                    <small>{a.symbol}</small>
                  </td>
                  <td>{money(a.price, a.price < 10 ? 2 : 0)}</td>
                  <td className={a.change24h >= 0 ? "up" : "down"}>{percent(a.change24h)}</td>
                  <td>
                    {number(a.amount)} {a.symbol}
                  </td>
                  <td>
                    <strong>{money(a.value)}</strong>
                  </td>
                  <td>
                    <Sparkline values={a.spark} positive={a.change24h >= 0} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="activity" className="panel">
        <h2>{t("Recent activity")}</h2>
        <ul className="activity">
          {wallet.transactions.map((tx) => (
            <li key={tx.id}>
              <span className={`tx-icon ${tx.kind}`}>
                <i className={`fa ${kindIcon[tx.kind]}`} aria-hidden="true"></i>
              </span>
              <div>
                <strong>
                  {kindLabel[tx.kind]} {tx.symbol}
                </strong>
                <small>{when(tx.hoursAgo)}</small>
              </div>
              <div className="tx-amount">
                <strong>
                  {tx.kind === "received" || tx.kind === "bought" ? "+" : "−"}
                  {number(tx.amount)} {tx.symbol}
                </strong>
                <small>{money(tx.value, 2)}</small>
              </div>
              <span className={`badge ${tx.status}`}>{tx.status === "completed" ? t("Completed") : t("Pending")}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
