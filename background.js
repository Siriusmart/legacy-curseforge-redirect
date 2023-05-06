chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {
      redirectUrl:
        "https://legacy.curseforge.com" + new URL(details.url).pathname,
    };
  },
  {
    urls: ["*://curseforge.com/*", "*://www.curseforge.com/*"],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);
