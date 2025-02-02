//@ts-nocheck
import acceptLanguage from "accept-language";
import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { cookies as getCookies, headers as getHeaders } from "next/headers";
import { initReactI18next } from "react-i18next/initReactI18next";
import "server-only";
import { fallbackLng, getOptions, languages } from "./settings";
import { cache } from "react";


const initServerI18next = async (ns: string | undefined) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, ns: string) => import(`./locales/${language}/${ns}.json`)))
    .init(getOptions(ns));
  return i18nInstance;
};

acceptLanguage.languages(languages);

const cookieName = "i18next";

export async function detectLanguage() {
  const cookies = await getCookies();
  const headers = await getHeaders();

  let language;
  if (!language && cookies.has(cookieName)) {
    language = acceptLanguage.get(cookies.get(cookieName)?.value);
  }
  if (!language) {
    language = acceptLanguage.get(headers.get("Accept-Language"));
  }
  if (!language) {
    language = fallbackLng;
  }
  return language;
}

export const getServerTranslations = cache(async (ns: string, options: { keyPrefix?: string } = {}) => {
  const language = await detectLanguage();
  const i18nextInstance = await initServerI18next(ns);
  return {
    t: i18nextInstance.getFixedT(language, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance,
  };
});