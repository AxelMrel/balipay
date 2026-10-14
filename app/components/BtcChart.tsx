"use client";

import Script from "next/script";

export default function BtcChart() {
  return (
    <>
      <div className="btcwdgt-chart"></div>
      <Script id="btcwdgt" src="https://widgets.bitcoin.com/widget.js" strategy="lazyOnload" />
    </>
  );
}
