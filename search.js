/**
 * Client-side search for RACS website.
 * Searches current page content and falls back to cross-page search.
 */
(function () {
    var searchIndex = [
        { keywords: ["vision"], page: "about.html", hash: "vision", label: "VISION" },
        { keywords: ["mission"], page: "about.html", hash: "mission", label: "MISSION" },
        { keywords: ["about", "believe"], page: "about.html", hash: "about-page-heading", label: "ABOUT RACS" },
        { keywords: ["facilities", "facility", "gallery"], page: "about.html", hash: "gallery-facilities", label: "FACILITIES" },
        { keywords: ["people", "staff", "teaching"], page: "about.html", hash: "gallery-people", label: "PEOPLE" },
        { keywords: ["life", "school", "learning", "playground", "graduation", "trip"], page: "about.html", hash: "gallery-life-at-school", label: "LIFE AT SCHOOL" },

        { keywords: ["admission", "apply", "join", "requirements", "graduation", "enquiry"], page: "admissions.html", hash: "admission-process", label: "ADMISSION PROCESS" },
        { keywords: ["online", "application"], page: "admissions.html", hash: "online-application", label: "ONLINE APPLICATION" },
        { keywords: ["requirements", "join"], page: "admissions.html", hash: "admission-requirements", label: "ADMISSION & GRADUATION REQUIREMENTS" },
        { keywords: ["fee", "fees", "structure", "payment", "paybill", "deposit", "charges", "tuition"], page: "admissions.html", hash: "fee-structure", label: "FEE STRUCTURE" },

        { keywords: ["calendar", "term", "dates", "holiday"], page: "academics.html", hash: "calendar", label: "SCHOOL CALENDAR" },
        { keywords: ["timetable", "class", "lesson", "schedule"], page: "academics.html", hash: "timetable", label: "TIMETABLE" },

        { keywords: ["menu", "meal", "food", "lunch", "break", "breakfast", "porridge", "mandazi", "chocolate", "chapati", "eat"], page: "student-life.html", hash: "school-menu", label: "SCHOOL MENU" },
        { keywords: ["transport", "zone", "zones", "bus", "pickup", "kiserian", "rimpa", "kandisi", "mashuria"], page: "student-life.html", hash: "transport-fees", label: "TRANSPORT FEES" },
        { keywords: ["uniform", "sweater", "skirt", "jumper", "dress", "trouser", "socks", "track", "suit", "tshirt"], page: "student-life.html", hash: "uniforms", label: "SCHOOL UNIFORM GUIDE" },
        { keywords: ["swimming", "french", "language", "activities", "sport", "music", "club", "co-curricular", "extra-curricular", "playground"], page: "student-life.html", hash: "activities", label: "ACTIVITIES & LIFE" },

        { keywords: ["contact", "location", "address", "phone", "email", "cana"], page: "index.html", hash: "contact", label: "CONTACT & LOCATION" }
    ];

    var messageEl = null;

    function escapeHtml(str) {
        return (str || "").replace(/[&<>"']/g, function (c) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "\"": "&quot;",
                "'": "&#039;"
            }[c];
        });
    }

    function getCurrentPage() {
        return window.location.pathname.split("/").pop() || "index.html";
    }

    function getSearchResults(query) {
        var q = (query || "").trim().toLowerCase();
        if (!q) return [];

        var currentPage = getCurrentPage();
        var results = [];
        var seen = {};

        function addResult(page, hash, label) {
            if (!hash || !page) return;
            var key = page + "#" + hash;
            if (seen[key]) return;
            seen[key] = true;
            results.push({ page: page, hash: hash, label: label });
        }

        // Same-page headings (instant keyword matching)
        var main = document.querySelector("main");
        if (main) {
            var headings = main.querySelectorAll("h1[id], h2[id], h3[id]");
            for (var i = 0; i < headings.length; i++) {
                var el = headings[i];
                var text = (el.textContent || "").trim().toLowerCase();
                if (text.indexOf(q) !== -1) {
                    addResult(currentPage, el.id, (el.textContent || "").trim().toUpperCase());
                }
            }
        }

        // Cross-page keyword mapping
        for (var j = 0; j < searchIndex.length; j++) {
            var item = searchIndex[j];
            for (var k = 0; k < item.keywords.length; k++) {
                if (q.indexOf(item.keywords[k]) !== -1) {
                    addResult(item.page, item.hash, item.label);
                    break;
                }
            }
        }

        return results;
    }

    function renderSearchResults(query) {
        if (!messageEl) return;

        var qTrim = (query || "").trim();
        var keywordUpper = qTrim ? qTrim.toUpperCase() : "";
        var results = getSearchResults(qTrim);

        if (!qTrim) {
            messageEl.innerHTML = "";
            return;
        }

        if (!results.length) {
            messageEl.innerHTML =
                '<div class="nav-search-nothing-found">NOTHING FOUND</div>' +
                '<div class="nav-search-nothing-note">Try searching for something else, for example: fees, student life, facilities</div>';
            return;
        }

        var linksHtml = "";
        for (var i = 0; i < results.length; i++) {
            var r = results[i];
            var href = "";
            if (r.page === getCurrentPage()) {
                href = "#" + r.hash;
            } else {
                href = r.page + "#" + r.hash;
            }
            linksHtml +=
                '<a class="nav-search-result-link" href="' + escapeHtml(href) + '">' + escapeHtml(String(r.label).toUpperCase()) + "</a>";
        }

        messageEl.innerHTML =
            '<div class="nav-search-results-heading">SEARCH RESULTS FOR: ' + escapeHtml(keywordUpper) + "</div>" +
            '<div class="nav-search-results-list">' + linksHtml + "</div>";
    }

    function initSearch() {
        var toggleBtn = document.getElementById("nav-search-toggle");
        var panel = document.getElementById("nav-search-panel");
        var closeBtn = document.getElementById("nav-search-close");
        var input = document.getElementById("nav-search-input");
        messageEl = document.getElementById("nav-search-message");

        if (!toggleBtn || !panel || !closeBtn || !input) return;

        function openPanel() {
            document.body.classList.add("search-open");
            panel.classList.add("is-open");
            panel.setAttribute("aria-hidden", "false");
            toggleBtn.setAttribute("aria-expanded", "true");
            input.focus();
            renderSearchResults(input.value || "");
        }

        function closePanel() {
            document.body.classList.remove("search-open");
            panel.classList.remove("is-open");
            panel.setAttribute("aria-hidden", "true");
            toggleBtn.setAttribute("aria-expanded", "false");
        }

        toggleBtn.addEventListener("click", function () {
            var isOpen = panel.classList.contains("is-open");
            if (isOpen) closePanel();
            else openPanel();
        });

        closeBtn.addEventListener("click", function () {
            closePanel();
        });

        document.addEventListener("keydown", function (e) {
            if (!panel.classList.contains("is-open")) return;

            if (e.key === "Escape") {
                closePanel();
                toggleBtn.focus();
                return;
            }

            // Keep keyboard focus inside the search panel while active.
            if (e.key === "Tab") {
                var focusables = panel.querySelectorAll(
                    'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
                );
                if (!focusables.length) return;

                var first = focusables[0];
                var last = focusables[focusables.length - 1];
                var active = document.activeElement;

                if (e.shiftKey && active === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && active === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });

        // Live results while typing
        var debounceTimer = null;
        input.addEventListener("input", function () {
            var q = input.value || "";
            if (debounceTimer) window.clearTimeout(debounceTimer);
            debounceTimer = window.setTimeout(function () {
                renderSearchResults(q);
            }, 120);
        });

        input.addEventListener("keydown", function (e) {
            if (e.key !== "Enter") return;
            e.preventDefault();
            renderSearchResults(input.value || "");
        });

        // If the user clicks a result, close the panel.
        messageEl.addEventListener("click", function (e) {
            var link = e.target && e.target.closest && e.target.closest("a.nav-search-result-link");
            if (link) closePanel();
        });
    }

    function initRevealAnimations() {
        // Enable animations only when JS is available.
        document.documentElement.classList.add("js-enabled");

        var page = document.querySelector(".page");
        if (page) {
            page.classList.add("page-transition-in");
            window.requestAnimationFrame(function () {
                page.classList.remove("page-transition-in");
            });
        }

        if (!("IntersectionObserver" in window)) {
            // Fallback: show everything immediately.
            var fallbackItems = document.querySelectorAll(".reveal-item");
            for (var f = 0; f < fallbackItems.length; f++) {
                fallbackItems[f].classList.add("is-revealed");
            }
            return;
        }

        var containers = document.querySelectorAll("main .section-shell, main .gallery-section");
        var revealItems = [];

        containers.forEach(function (container) {
            var directChildren = Array.from(container.children).filter(function (el) {
                // Never animate hidden gallery thumbnails (Load More handles those separately).
                if (el.classList.contains("gallery-item") || el.classList.contains("gallery-item--hidden")) return false;
                return true;
            });

            for (var i = 0; i < directChildren.length; i++) {
                var item = directChildren[i];
                item.classList.add("reveal-item");
                item.style.setProperty("--reveal-delay", String(i * 80) + "ms");
                revealItems.push(item);
            }
        });

        if (!revealItems.length) return;

        var observer = new IntersectionObserver(
            function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-revealed");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        for (var r = 0; r < revealItems.length; r++) {
            observer.observe(revealItems[r]);
        }
    }

    function initPageTransitions() {
        var page = document.querySelector(".page");
        if (!page) return;

        // Fade between pages for internal .html navigations.
        document.addEventListener("click", function (e) {
            var a = e.target && e.target.closest ? e.target.closest("a") : null;
            if (!a) return;

            var href = a.getAttribute("href");
            if (!href) return;
            if (href.indexOf("#") === 0) return;
            if (href.startsWith("javascript:")) return;

            var url;
            try {
                url = new URL(href, window.location.href);
            } catch (err) {
                return;
            }

            // Only same-origin .html pages.
            if (url.origin !== window.location.origin) return;
            if (url.pathname === window.location.pathname) return;
            if (url.pathname && url.pathname.indexOf(".html") === -1) return;

            // Avoid animating when search panel is open.
            var panel = document.getElementById("nav-search-panel");
            if (panel && panel.classList.contains("is-open")) return;

            e.preventDefault();
            document.body.classList.remove("nav-open");

            page.classList.add("page-transition-out");
            window.setTimeout(function () {
                window.location.href = url.toString();
            }, 220);
        });
    }

    function initBackButton() {
        var btn = document.getElementById("back-to-top");
        if (!btn) return;
        function toggle() {
            btn.classList.toggle("visible", window.scrollY > 400);
        }
        window.addEventListener("scroll", toggle);
        toggle();
        btn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    function initNavToggle() {
        var toggle = document.getElementById("nav-toggle");
        var overlay = document.getElementById("nav-overlay");
        var navLinks = document.querySelector(".nav-links");
        if (!toggle || !overlay || !navLinks) return;
        // REVIEW: nav drawer hooks are retained because markup/behavior still exist.
        // If the nav toggle is intentionally retired project-wide, this function can be removed.

        function closeNav() {
            document.body.classList.remove("nav-open");
            toggle.setAttribute("aria-expanded", "false");
        }

        function openNav() {
            document.body.classList.add("nav-open");
            toggle.setAttribute("aria-expanded", "true");
        }

        toggle.addEventListener("click", function () {
            if (document.body.classList.contains("nav-open")) {
                closeNav();
            } else {
                openNav();
            }
        });

        overlay.addEventListener("click", closeNav);

        // Close menu when navigating via a direct link.
        var regularLinks = navLinks.querySelectorAll("a:not(.has-dropdown)");
        for (var i = 0; i < regularLinks.length; i++) {
            regularLinks[i].addEventListener("click", function () {
                closeNav();
            });
        }
    }

    function initComingSoonModal() {
        var modal = document.getElementById('coming-soon-modal');
        var closeBtn = document.getElementById('coming-soon-close');
        var triggers = document.querySelectorAll('.coming-soon-trigger');
        
        if (!modal) return;
        
        function openModal(e) {
            e.preventDefault();
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            if (document.body.classList.contains("nav-open")) {
                var toggle = document.getElementById("nav-toggle");
                document.body.classList.remove("nav-open");
                if (toggle) toggle.setAttribute("aria-expanded", "false");
            }
        }
        
        function closeModal() {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
        }
        
        for (var i = 0; i < triggers.length; i++) {
            triggers[i].addEventListener('click', openModal);
        }
        
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('is-open')) {
                closeModal();
            }
        });
    }

    function init() {
        initSearch();
        initBackButton();
        initNavToggle();
        initRevealAnimations();
        initPageTransitions();
        initComingSoonModal();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
