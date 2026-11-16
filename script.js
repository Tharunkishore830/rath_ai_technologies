const enquiryForm = document.querySelector(".enquiry-form");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(enquiryForm);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "rath.aitechnologies@gmail.com",
      su: "Website enquiry from " + name,
      body: message + "\n\nName: " + name + "\nPhone: " + phone
    });

    window.open("https://mail.google.com/mail/?" + params.toString(), "_blank", "noopener,noreferrer");
  });
}

const navigation = document.querySelector(".navigation");

if (navigation) {
  const mobileNavigation = window.matchMedia("(max-width: 860px)");
  let isCompactNavigation = mobileNavigation.matches;
  navigation.open = !isCompactNavigation;

  function syncNavigation() {
    const isCompact = mobileNavigation.matches;
    if (isCompact !== isCompactNavigation) {
      navigation.open = !isCompact;
      isCompactNavigation = isCompact;
    }
  }

  if (mobileNavigation.addEventListener) {
    mobileNavigation.addEventListener("change", syncNavigation);
  } else {
    mobileNavigation.addListener(syncNavigation);
  }

  const navigationLinks = Array.from(document.querySelectorAll(".primary-nav a"));
  const navigationSections = navigationLinks
    .map((link) => document.querySelector(link.hash))
    .filter(Boolean);

  function setActiveNavigation(activeSection) {
    navigationLinks.forEach((link) => {
      if (activeSection && link.hash === "#" + activeSection.id) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileNavigation.matches) navigation.open = false;
      const activeSection = navigationSections.find((section) => link.hash === "#" + section.id);
      if (activeSection) setActiveNavigation(activeSection);
    });
  });

  let navigationUpdateScheduled = false;

  function updateActiveNavigation() {
    const header = document.querySelector(".site-header");
    const activationPoint = window.scrollY + header.offsetHeight + window.innerHeight * 0.25;
    let activeSection = null;
    let activeSectionTop = -Infinity;

    navigationSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      if (sectionTop <= activationPoint && sectionTop > activeSectionTop) {
        activeSection = section;
        activeSectionTop = sectionTop;
      }
    });

    setActiveNavigation(activeSection);
  }

  function scheduleActiveNavigationUpdate() {
    if (navigationUpdateScheduled) return;
    navigationUpdateScheduled = true;
    window.requestAnimationFrame(() => {
      navigationUpdateScheduled = false;
      updateActiveNavigation();
    });
  }

  window.addEventListener("scroll", scheduleActiveNavigationUpdate, { passive: true });
  window.addEventListener("resize", scheduleActiveNavigationUpdate);
  scheduleActiveNavigationUpdate();
}

const revealMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!revealMotion.matches && "IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll(
    ".section-heading, .solution-card, .service-card, .why-intro, .benefit-card, .industries-layout > div:first-child, .industry-card, .contact-copy, .enquiry-form, .footer-grid > *"
  );
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -5% 0px",
    threshold: 0.1
  });

  revealItems.forEach((item) => {
    item.classList.add("js-reveal");
    revealObserver.observe(item);
  });
}

