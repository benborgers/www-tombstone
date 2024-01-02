export const GET = ({ params, redirect }) => {
  let { path } = params;
  path = path.replace(/\/$/, "");

  if (path === "sitemap-index.xml") {
    return redirect("https://ben.page/sitemap-index.xml");
  }

  if (path === "sitemap-0.xml") {
    return redirect("https://ben.page/sitemap-0.xml");
  }

  if (path === "rss.xml") {
    return redirect("https://ben.page/rss");
  }

  if (path === "slowmochristian") {
    return redirect("https://slowmochristian.ben.page");
  }

  if (path === "swipes") {
    return redirect("https://swipes.ben.page");
  }

  if (path === "pittsburgh") {
    return redirect("https://pittsburgh.ben.page");
  }

  if (path === "tufts" || path === "+/tufts") {
    return redirect("https://tufts.ben.page");
  }

  const matchFall22 = path.match(/^tufts\/(cs86|psy1|chem6|ger170|cshd167)$/);
  if (matchFall22) {
    return redirect(`https://fall22.ben.page/${matchFall22[1]}`);
  }

  const matchFall22Subpage = path.match(
    /^tufts\/(cs86|psy1|chem6|ger170|cshd167)\/(.*)$/
  );
  if (matchFall22Subpage) {
    return redirect(
      `https://fall22.ben.page/${matchFall22Subpage[1]}/${matchFall22Subpage[2]}`
    );
  }

  const POST_ALIASES = {
    "posts/50": "notion-to-website",
    "92258a23-27df-4946-9d43-03041a8fd803":
      "netlify-cancel-build-programmatically",
    "901f8d0e-ba28-4bfc-af74-e36d7c111d23": "tailwind-typography-customize",
    "28f8b29b-97a2-48b2-9988-03a9b8d4335f": "tailwind-font",
    "b10e36b0-9568-4c4a-9660-88cf9fb3fe97": "node-sha1",
    "1b635a80-be09-46d1-ba85-a6d1921068eb": "node-fetch-download-image",
    "e0f14f4b-5a8d-4100-8f45-4653622a9f38": "fathom-netlify",
    "ad1b276c-edae-46da-afaa-6c8f653851ca": "react-static-tailwind",
    "9713fcf4-abba-4cc2-98f5-b7adcd2ce0b3": "react-static-scroll",
    "e021ff80-253b-4dc2-931e-9d67a582bccb": "react-static-head",
    "dba3cd3d-7517-476c-a564-994112f355e3": "react-static-sitemap",
    "29ed200d-5148-48bd-b2ba-23e4230e79c1": "error-spread-array-tslib",
    "e61f1f37-e664-45a3-92d1-d892e49fd5c0": "ses-smtp",
    "332a561c-992f-4e46-b291-4ad4bdf42eb8": "next-auth-ses",
    "b7874b71-45c1-432f-8a20-ca5db1769224": "psql",
    "alpine-textarea-auto-resize": "alpine-textarea-auto-resize",
    "css-list-disc": "css-list-disc",
    "eleventy-katex": "eleventy-katex",
    "eleventy-tailwind": "eleventy-tailwind",
    "emoji-favicon": "emoji-favicon",
    "emojicdn-how": "emojicdn-how",
    emojicdn: "emojicdn",
    "emotion-global": "emotion-global",
    "error-spread-array-tslib": "error-spread-array-tslib",
    "expo-app-name": "expo-app-name",
    "expo-ip": "expo-ip",
    "expo-mailto": "expo-mailto",
    "expo-screen-height": "expo-screen-height",
    "expo-screen-width": "expo-screen-width",
    "expo-version": "expo-version",
    "express-access-cookies": "express-access-cookies",
    "express-password-protect": "express-password-protect",
    "express-powered-by": "express-powered-by",
    "express-set-cookies": "express-set-cookies",
    "fathom-gatsby": "fathom-gatsby",
    "feature-branches-clients": "feature-branches-clients",
    "feature-branches": "feature-branches",
    "gatsby-active-link": "gatsby-active-link",
    "gatsby-favicon": "gatsby-favicon",
    "gatsby-google-fonts": "gatsby-google-fonts",
    "gatsby-last-built": "gatsby-last-built",
    "gatsby-meta": "gatsby-meta",
    "gatsby-react-helmet-async": "gatsby-react-helmet-async",
    "gatsby-sitemap": "gatsby-sitemap",
    "github-syntax-highlighting": "github-syntax-highlighting",
    "glitch-awake": "glitch-awake",
    "glitch-cors": "glitch-cors",
    "glitch-cron-job": "glitch-cron-job",
    "glitch-disk-space": "glitch-disk-space",
    "glitch-password-protect": "glitch-password-protect",
    "google-sheets-json": "google-sheets-json",
    "grid-center": "grid-center",
    "instagram-bio": "instagram-bio",
    "js-array-remove-duplicates": "js-array-remove-duplicates",
    "js-audio": "js-audio",
    "js-back-and-refresh": "js-back-and-refresh",
    "js-copy-text": "js-copy-text",
    "js-double-spaces": "js-double-spaces",
    "js-hash-passwords": "js-hash-passwords",
    "js-hash": "js-hash",
    "js-object-changes": "js-object-changes",
    "js-relative-date": "js-relative-date",
    "js-remove-hash": "js-remove-hash",
    "js-snow": "js-snow",
    "js-textarea-auto-resize": "js-textarea-auto-resize",
    "json-ld": "json-ld",
    "kill-localhost": "kill-localhost",
    "laravel-artisan-commands-not-working":
      "laravel-artisan-commands-not-working",
    "laravel-double-spaces": "laravel-double-spaces",
    "laravel-log-404": "laravel-log-404",
    "laravel-mix-notifications": "laravel-mix-notifications",
    "laravel-password-resets-tinker": "laravel-password-resets-tinker",
    "laravel-plaintext-emails": "laravel-plaintext-emails",
    "laravel-return-path": "laravel-return-path",
    "laravel-schedule-job-daily": "laravel-schedule-job-daily",
    "laravel-schedule-prevent": "laravel-schedule-prevent",
    "laravel-tinker-dispatch-job": "laravel-tinker-dispatch-job",
    "livewire-refresh-other-component": "livewire-refresh-other-component",
    "livewire-test-class-not-found": "livewire-test-class-not-found",
    "livewire-url-changing": "livewire-url-changing",
    "livewire-validation-messages": "livewire-validation-messages",
    "marked-prism": "marked-prism",
    "marked-quotes": "marked-quotes",
    "media-hover": "media-hover",
    "navigator-sendbeacon": "navigator-sendbeacon",
    "netlify-functions-cors": "netlify-functions-cors",
    "netlify-toml-gatsby": "netlify-toml-gatsby",
    "next-auth-ses": "next-auth-ses",
    "node-fetch-download-image": "node-fetch-download-image",
    "node-latex-to-html": "node-latex-to-html",
    "node-minify-css": "node-minify-css",
    "node-minify-html": "node-minify-html",
    "node-serve-static-files": "node-serve-static-files",
    "node-sha1": "node-sha1",
    "node-shell": "node-shell",
    "node-spawn-callback": "node-spawn-callback",
    "node-spawn-logging": "node-spawn-logging",
    "normalize-gatsby": "normalize-gatsby",
    "notion-blog": "notion-blog",
    "notion-table": "notion-table",
    "notion-to-website": "notion-to-website",
    "php-datetime-add-days": "php-datetime-add-days",
    psql: "psql",
    "pwa-detect-installed": "pwa-detect-installed",
    "react-helmet-async": "react-helmet-async",
    "react-native-right-align": "react-native-right-align",
    "react-native-width": "react-native-width",
    "react-static-head": "react-static-head",
    "react-static-scroll": "react-static-scroll",
    "react-static-sitemap": "react-static-sitemap",
    "react-static-tailwind": "react-static-tailwind",
    "route53-list-dns": "route53-list-dns",
    "route53-pricing": "route53-pricing",
    "ses-smtp": "ses-smtp",
    "speed-up-gatsby-on-netlify": "speed-up-gatsby-on-netlify",
    "subreddit-json": "subreddit-json",
    "swr-refresh": "swr-refresh",
    "tailwind-colors": "tailwind-colors",
    "tailwind-font": "tailwind-font",
    "tailwind-gradient-text": "tailwind-gradient-text",
    "tailwind-postcss-error": "tailwind-postcss-error",
    "tailwind-typography-customize": "tailwind-typography-customize",
    "terminal-mkdir": "terminal-mkdir",
    "textarea-tab": "textarea-tab",
    "trix-disable-files": "trix-disable-files",
    "vapor-database": "vapor-database",
    "vapor-maintenance": "vapor-maintenance",
    "vapor-migrations": "vapor-migrations",
    "vapor-trix-attachments": "vapor-trix-attachments",
    "vercel-cors": "vercel-cors",
    "vscode-spellcheck": "vscode-spellcheck",
    "webkit-tap-highlight-color": "webkit-tap-highlight-color",
    "zeit-regions": "zeit-regions",
  };

  if (path in POST_ALIASES) {
    return redirect(`https://ben.page/${POST_ALIASES[path]}`);
  }

  const matchBlogPost = path.match(/^(?:blog|posts)\/(.*)$/);
  if (matchBlogPost) {
    return redirect(`https://ben.page/${matchBlogPost[1]}`);
  }

  return redirect("https://ben.page");
};
