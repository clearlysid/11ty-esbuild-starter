# 11ty-esbuild-starter

A simple 11ty starter for small websites, blogs and landing pages.

The files are structured as follows.

```plaintext
.
├── _data                # Any external CMS/data sources
│   └── global.js        # Global variables
├── _includes            # CSS, JS and templates to be processed
│   ├── helmet.html      # All meta tags in the <head> tag
│   └── default.html     # Base template
├── _site                # Build directory
├── assets               # Public directory
├── .eleventy.js         # Eleventy configuration
├── index.html           # Entry point
├── LICENSE              # MIT License
└── README.md            # This file
```

## Notes

1. The assets folder is a passthrough, anything in it is copied to the public site.
2. Add global meta tags in `global.js`
3. `main.css` in `_includes` is added inline within the default layout.
4. All JS files in `_includes` are compiled into one `main.js` in assets.
5. The rest of the folder structure is up to you.
6. Feedback and suggestions on how to improve this are always welcome.

## How to build

1. Clone this repo
2. `npm install` to install all dependencies
3. `npm start` to spin up a server
4. `npm run build` will build the static site in the `_site` directory
