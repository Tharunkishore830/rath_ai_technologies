# RATH A. I. Technologies Website

A responsive static website for RATH A. I. Technologies, a Hyderabad-based provider of HVAC, power, electrical, and MEP services. The page presents the company's solutions, maintenance services, industries served, and contact options.

## Features

- Responsive layouts and mobile navigation.
- HVAC and power solution listings, service information, and industries served.
- Contact links for phone, email, Instagram, and WhatsApp.
- Enquiry form that opens a prefilled Gmail compose window. The visitor reviews and sends the email; the site does not submit or store form data.
- Scroll-based navigation highlighting and reveal effects, with reduced-motion preferences respected.
- Local image assets, plus `robots.txt` and an XML sitemap.

## Working directory structure

```text
Website/
├── index.html              # Page content, metadata, and page structure
├── styles.css              # Layout, visual styles, and responsive breakpoints
├── script.js               # Navigation, reveal effects, and enquiry form behavior
├── robots.txt              # Crawler rules and sitemap location
├── sitemap.xml             # Public site URL for search engines
└── images/
    ├── 2k/                 # Image variants referenced by index.html
    │   ├── hero-building.jpg
    │   ├── hvac-ahu.jpg
    │   ├── hvac-bms.jpg
    │   ├── hvac-chillers.jpg
    │   ├── hvac-cooling-towers.jpg
    │   ├── hvac-ducting.jpg
    │   ├── hvac-pac-crac.jpg
    │   ├── hvac-pumps.jpg
    │   ├── hvac-vrf.jpg
    │   ├── logo.jpg
    │   ├── power-batteries.jpg
    │   ├── power-dg.jpg
    │   ├── power-electrical.jpg
    │   ├── power-lt-panels.jpg
    │   ├── power-monitoring.jpg
    │   ├── power-motors.jpg
    │   ├── power-pdu.jpg
    │   ├── power-transformers.jpg
    │   ├── power-ups.jpg
    │   └── technician.jpg
    ├── hero-building.jpg
    ├── hvac-ahu.jpg
    ├── hvac-bms.jpg
    ├── hvac-chillers.jpg
    ├── hvac-cooling-towers.jpg
    ├── hvac-ducting.jpg
    ├── hvac-pac-crac.jpg
    ├── hvac-pumps.jpg
    ├── hvac-vrf.jpg
    ├── logo.jpg
    ├── power-batteries.jpg
    ├── power-dg.jpg
    ├── power-electrical.jpg
    ├── power-lt-panels.jpg
    ├── power-monitoring.jpg
    ├── power-motors.jpg
    ├── power-pdu.jpg
    ├── power-transformers.jpg
    ├── power-ups.jpg
    └── technician.jpg
```

The root `images/` folder and `images/2k/` contain matching sets of image filenames. The current page references the `images/2k/` versions.

## Run locally

This is a static site: it has no package installation or build step. From the project directory, start Python's built-in web server:

```powershell
py -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). If the `py` command is unavailable, use `python -m http.server 8000` instead. You can also open `index.html` directly in a browser.

## Deployment

Publish the project root with all five root-level files and the complete `images/` directory. Keep the directory structure intact because the page uses relative paths for its stylesheet, script, and images. After deployment, check the page, image loading, navigation, contact links, and the sitemap URL configured in `robots.txt`.
