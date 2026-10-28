# full-plate-website
Full Plate Marketing website

## Every page must include the Google Analytics tag

Paste this right after the opening `<head>` tag on every new or rebuilt `.html` page. If a page is missing it, visits to that page are not recorded.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VG30S8M2N7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VG30S8M2N7');
</script>
```

Also load `site.js` on every page (before `</body>`). It counts phone and email link clicks as leads.

## Lead tracking (GA4 key events)

- `generate_lead`: fired in `contact.html` only after Web3Forms confirms a successful submission
- `phone_click`: any `tel:` link click (handled in `site.js`)
- `email_click`: any `mailto:` link click, except client portal help links (handled in `site.js`)

When you change `site.js`, bump the `?v=` number in every page's `site.js` script tag so browsers load the new version.

## Privacy policy

`privacy.html` describes the use of Google Analytics. If tracking changes (new tools, ad pixels, etc.), update that section and its effective date.
