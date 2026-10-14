import { getLocale, getT } from "@/app/lib/i18n";
import CoinCalculatorClient from "./CoinCalculatorClient";

const intlTag = { fr: "fr-FR", en: "en-US", it: "it-IT", de: "de-DE" } as const;

export default async function CoinCalculator() {
  const locale = await getLocale();
  const t = await getT();

  return (
    <CoinCalculatorClient
      locale={intlTag[locale]}
      labels={{
        send: t("You send"),
        get: t("You get"),
        swap: t("Swap currencies"),
        live: t("Live rates"),
        offline: t("Indicative rates"),
        rate: t("Rate"),
      }}
    />
  );
}
