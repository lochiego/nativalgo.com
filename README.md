# README

**Natalia's Personal Website**

Natalia's website to track pubs, CV, mission statement, etc.

## Dev

Going with a stupid basic site, no JS libs other than the Tailwind tool. The base CSS file is `preprocess.css` and tailwind will read and append to it, outputting to the `index.css` file that gets linked in the actual HTML. To execute, run:

```
npx tailwindcss -i ./preprocesss.css -o ./index.css --watch
```
