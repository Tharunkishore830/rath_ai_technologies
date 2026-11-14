# RATH A. I. Technologies Website

## About the website

This website introduces RATH A. I. Technologies, a Hyderabad-based provider of HVAC, power, electrical, and MEP services for commercial buildings, data centres, and other critical facilities. It presents the company's solutions, maintenance support, and contact options in a responsive, mobile-friendly format.

The site is deployed on Vercel: [https://rathaitechnologies.vercel.app](https://rathaitechnologies.vercel.app).

## Features

- Responsive layouts for desktop, tablet, and mobile screens.
- Sections for HVAC and power solutions, services, industries, company strengths, and contact details.
- Mobile-friendly navigation and accessible page controls.
- Animated, responsive contact ticker with WhatsApp, Gmail, phone, and Hyderabad location links.
- Contact links for phone, email, Instagram, and WhatsApp.
- Enquiry form that opens a prefilled Gmail compose window. The visitor reviews and sends the email from Gmail; the site does not submit or store form data.
- Locally stored images and assets.

## Project files

```text
.
├── index.html       # Website content and structure
├── styles.css       # Design system, layouts, and responsive styles
├── script.js        # Navigation, enquiry form, and reveal interactions
└── images/          # Logo, hero, and service images
```

## Run locally

No package installation or build step is required. You can open `index.html` directly in a browser. To preview it through a local web server, run this command from the project directory:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Deployment and updates

For deployment or updates, publish the project root (the directory containing `index.html`) with the complete `images/` directory. The site uses relative paths for its stylesheet, JavaScript, and local images, so keep the files and folders in the structure shown above. After deployment, check that images, navigation, and contact links work.
