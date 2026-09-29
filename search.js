/**
 * Client-side search engine for RACS website.
 * Provides full-site indexing across fees, transport, meals, uniforms,
 * academics, admissions, contacts, and campus gallery.
 */
(function () {
    var searchIndex = [
        // --- ADMISSIONS & FEES ---
        {
            title: "Fee Structure & Tuition Fees",
            category: "Fees",
            badgeClass: "badge-fees",
            page: "admissions.html",
            hash: "fee-structure",
            keywords: ["fee", "fees", "structure", "tuition", "term", "cost", "charges", "price", "ksh", "shillings", "pay", "rates"],
            snippet: "Official termly tuition fees: Playgroup (Ksh 6,000), Pre-Primary PP1 & PP2 (Ksh 8,500), Lower Primary Grade 1–3 (Ksh 11,000), Upper Primary Grade 4–6 (Ksh 13,000)."
        },
        {
            title: "Playgroup & Daycare Fees",
            category: "Fees",
            badgeClass: "badge-fees",
            page: "admissions.html",
            hash: "fee-structure",
            keywords: ["playgroup", "play group", "daycare", "baby class", "early years", "6000", "6,000", "toddler"],
            snippet: "Tuition for Play Group learners is Ksh 6,000 per term with dedicated early childhood nurturing, Christian values, and gentle care."
        },
        {
            title: "Pre-Primary (PP1 & PP2) Fees",
            category: "Fees",
            badgeClass: "badge-fees",
            page: "admissions.html",
            hash: "fee-structure",
            keywords: ["pp1", "pp2", "pre-primary", "pre primary", "kindergarten", "nursery", "8500", "8,500", "early childhood"],
            snippet: "Tuition for Pre-Primary PP1 and PP2 learners is Ksh 8,500 per term covering CBC foundational literacy, numeracy, and psychomotor skills."
        },
        {
            title: "Lower Primary (Grades 1 to 3) Fees",
            category: "Fees",
            badgeClass: "badge-fees",
            page: "admissions.html",
            hash: "fee-structure",
            keywords: ["lower primary", "grade 1", "grade 2", "grade 3", "grades 1-3", "classes 1-3", "11000", "11,000"],
            snippet: "Tuition for Lower Primary (Grade 1–3) learners is Ksh 11,000 per term, integrating CBC competency curriculum and mentorship."
        },
        {
            title: "Upper Primary (Grades 4 to 6) Fees",
            category: "Fees",
            badgeClass: "badge-fees",
            page: "admissions.html",
            hash: "fee-structure",
            keywords: ["upper primary", "grade 4", "grade 5", "grade 6", "grades 4-6", "classes 4-6", "13000", "13,000"],
            snippet: "Tuition for Upper Primary (Grade 4–6) learners is Ksh 13,000 per term covering advanced CBC studies, science, agriculture, and CRE."
        },
        {
            title: "Auxiliary Fees (Registration & Activity)",
            category: "Fees",
            badgeClass: "badge-fees",
            page: "admissions.html",
            hash: "fee-structure",
            keywords: ["registration", "admission fee", "assessment fee", "activity fee", "new learners", "2000", "1500", "1000", "other fees"],
            snippet: "One-off Registration/Admission: Ksh 2,000. Annual Assessment Fee: Ksh 1,500. Annual School Activity Fee: Ksh 1,000."
        },
        {
            title: "Payment Methods (M-Pesa Paybill & Bank Deposit)",
            category: "Fees",
            badgeClass: "badge-fees",
            page: "admissions.html",
            hash: "fee-structure",
            keywords: ["payment", "paybill", "mpesa", "m-pesa", "bank", "deposit", "account", "lipa na mpesa", "equity", "kcb", "finance"],
            snippet: "Fees are payable securely through official school payment channels: M-Pesa Paybill and Direct Bank Deposit. Contact the office for account numbers."
        },
        {
            title: "Admission Process & How to Apply",
            category: "Admissions",
            badgeClass: "badge-admissions",
            page: "admissions.html",
            hash: "admission-process",
            keywords: ["admission", "admissions", "apply", "application", "enrol", "enrollment", "join", "process", "steps", "intake", "register"],
            snippet: "Step-by-step admissions guide: from first enquiry and application forms to learner interview/assessment and confirmed placement."
        },
        {
            title: "Online & Remote Application Process",
            category: "Admissions",
            badgeClass: "badge-admissions",
            page: "admissions.html",
            hash: "online-application",
            keywords: ["online application", "remote application", "download forms", "email forms", "whatsapp forms", "soft copy", "digital application"],
            snippet: "Request soft copies of admission forms via phone, email, or WhatsApp, and submit electronically for quick processing."
        },
        {
            title: "Admission & Graduation Requirements",
            category: "Admissions",
            badgeClass: "badge-admissions",
            page: "admissions.html",
            hash: "admission-requirements",
            keywords: ["requirements", "documents", "birth certificate", "photos", "passport photos", "previous report", "transfer", "graduation", "nemis"],
            snippet: "Required documents: completed application form, copy of birth certificate, recent passport photos, and previous school transfer reports."
        },

        // --- STUDENT LIFE, TRANSPORT, MENU & UNIFORMS ---
        {
            title: "School Transport Fees & All 7 Zones",
            category: "Transport",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "transport-fees",
            keywords: ["transport", "bus", "van", "pickup", "drop off", "route", "routes", "zones", "zone", "kiserian", "rimpa", "kandisi", "shuttle"],
            snippet: "Official termly transport charges across all 7 operational zones from Mashuria & Rimpa (Zone 1: Ksh 4,000) to Kandisi Ndani (Zone 7: Ksh 8,500)."
        },
        {
            title: "Transport Zone 1: Mashuria, Rimpa, Nalepo",
            category: "Transport",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "transport-fees",
            keywords: ["zone 1", "mashuria", "rimpa", "nalepo", "4000", "4,000"],
            snippet: "Zone 1 coverage includes Mashuria, Rimpa, and Nalepo at Ksh 4,000 per term with door-to-door learner safety."
        },
        {
            title: "Transport Zone 2: Kahuho Stage, Kamura, Kanisani, Destiny",
            category: "Transport",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "transport-fees",
            keywords: ["zone 2", "kahuho stage", "kamura", "kanisani", "destiny", "5500", "5,500"],
            snippet: "Zone 2 coverage includes Kahuho Stage, Kamura, Kanisani, and Destiny at Ksh 5,500 per term."
        },
        {
            title: "Transport Zone 3: Kwa Maji, Kahuho Ndani, Triangle, Red Soil",
            category: "Transport",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "transport-fees",
            keywords: ["zone 3", "kwa maji", "kahuho ndani", "triangle", "red soil", "6000", "6,000"],
            snippet: "Zone 3 coverage includes Kwa Maji, Kahuho Ndani, Triangle, and Red Soil at Ksh 6,000 per term."
        },
        {
            title: "Transport Zone 4: Gichagi, Ntamat, Acacia, Oloosurutia",
            category: "Transport",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "transport-fees",
            keywords: ["zone 4", "gichagi ndani", "kanisani ndani", "ntamat", "red soil ndani", "acacia", "oloosurutia", "6800", "6,800"],
            snippet: "Zone 4 coverage includes Gichagi Ndani, Ntamat, Red Soil Ndani, Acacia, and Oloosurutia at Ksh 6,800 per term."
        },
        {
            title: "Transport Zone 5: Kiserian Town, QuickMart, Secondary, Kimani Rd",
            category: "Transport",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "transport-fees",
            keywords: ["zone 5", "kiserian", "quickmart", "kwa maji ndani", "kiserian secondary", "kimani road", "7200", "7,200"],
            snippet: "Zone 5 coverage includes Kwa Maji Ndani, QuickMart Kiserian, Town, Secondary, and Kimani Road at Ksh 7,200 per term."
        },
        {
            title: "Transport Zone 6 & 7: Kandisi Center, Chap Chap, Millenia",
            category: "Transport",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "transport-fees",
            keywords: ["zone 6", "zone 7", "kandisi", "chap chap", "kandisi ndani", "millenia", "st patrick", "7500", "8500", "7,500", "8,500"],
            snippet: "Zone 6 (Kandisi Center, Chap Chap: Ksh 7,500) and Zone 7 (Kandisi Ndani, Millenia, St. Patrick: Ksh 8,500)."
        },
        {
            title: "School Weekly Menu & Nutrition",
            category: "Student Life",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "school-menu",
            keywords: ["menu", "food", "meals", "lunch", "break", "breakfast", "eat", "dining", "porridge", "mandazi", "chocolate", "rice", "beans", "ugali", "vegetables", "greens"],
            snippet: "Sample weekly meal plan: Morning break porridge and white chocolate with mandazi or chapati; nutritious hot lunches of Ugali, Rice, Beans, and Greens."
        },
        {
            title: "Thursday School Menu: Chapati & Beans",
            category: "Student Life",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "school-menu",
            keywords: ["chapati", "beans", "thursday", "thursday lunch", "white chocolate"],
            snippet: "Learner favorite Thursday meal plan: Morning White Chocolate & Chapati, followed by lunchtime Chapati & Bean stew (Friday: White Chocolate & Mandazi, Rice & Beans)."
        },
        {
            title: "School Uniform Guide & Prices",
            category: "Student Life",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "uniforms",
            keywords: ["uniform", "uniforms", "sweater", "trouser", "shirt", "dress", "socks", "jumper", "fleece", "track suit", "tshirt", "t-shirt", "clothes", "wear"],
            snippet: "Official school uniform: Complete package (Sweater, Trouser, Shirt/Dress, Socks) Ksh 2,500; Fleece Jumper Ksh 2,300; Track Suit Ksh 1,800; T-shirt Ksh 500."
        },
        {
            title: "French Language Lessons",
            category: "Activities",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "activities",
            keywords: ["french", "foreign language", "language lessons", "french class", "1000", "month", "co-curricular"],
            snippet: "Enriching foreign language communication skills for our learners at Ksh 1,000 per month."
        },
        {
            title: "Professional Swimming Lessons",
            category: "Activities",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "activities",
            keywords: ["swimming", "swim", "pool", "coaching", "water safety", "sports", "2000", "year", "coach"],
            snippet: "Professional swimming coaching building water safety, stamina, and confidence at Ksh 2,000 per year."
        },
        {
            title: "Playground & Outdoor Recreation",
            category: "Student Life",
            badgeClass: "badge-life",
            page: "student-life.html",
            hash: "activities",
            keywords: ["playground", "play", "swings", "slides", "games", "sports", "outdoor", "recreation", "physical education"],
            snippet: "Spacious, equipped playground giving learners a happy, active environment to play, socialize, and build friendships."
        },

        // --- ACADEMICS & CALENDAR ---
        {
            title: "Academics at RACS & CBC Programmes",
            category: "Academics",
            badgeClass: "badge-academics",
            page: "academics.html",
            hash: "academics-page-heading",
            keywords: ["academics", "curriculum", "cbc", "competency", "classes", "learning", "pre-primary", "primary", "mentorship", "education"],
            snippet: "National CBC curriculum enriched with Christian values, active learning, continuous assessment, and close mentorship."
        },
        {
            title: "School Calendar & Term Dates",
            category: "Academics",
            badgeClass: "badge-academics",
            page: "academics.html",
            hash: "calendar",
            keywords: ["calendar", "term dates", "dates", "opening date", "closing date", "midterm", "mid-term", "holiday", "assessment week", "exam"],
            snippet: "Academic calendar with clearly defined term dates, mid-term breaks, assessment weeks, and special activity events."
        },
        {
            title: "Daily Timetable & Learning Routines",
            category: "Academics",
            badgeClass: "badge-academics",
            page: "index.html",
            hash: "timetable",
            keywords: ["timetable", "schedule", "routine", "lessons", "periods", "daily schedule", "devotions", "hours", "routine"],
            snippet: "Balanced daily timetable combining spiritual devotions, core learning areas, creative activities, meal times, and recreation."
        },

        // --- ABOUT RACS, VISION & MISSION ---
        {
            title: "About Rimpa Adventist Comprehensive School",
            category: "About RACS",
            badgeClass: "badge-general",
            page: "about.html",
            hash: "about-page-heading",
            keywords: ["about", "about racs", "history", "christian school", "adventist", "philosophy", "holistic", "kajiado", "seventh-day"],
            snippet: "Christian-based school fostering balanced development of the whole child: spiritual, physical, intellectual, and social-emotional."
        },
        {
            title: "Why Choose RACS (Four Core Pillars)",
            category: "About RACS",
            badgeClass: "badge-general",
            page: "about.html",
            hash: "why-choose-heading",
            keywords: ["why choose", "pillars", "excellence", "quality", "affordability", "talent", "values", "advantages", "reasons"],
            snippet: "An institution of Excellence, Quality teaching, Affordability for local families, and Talent Nurturing in sports and languages."
        },
        {
            title: "Our Vision Statement",
            category: "About RACS",
            badgeClass: "badge-general",
            page: "about.html",
            hash: "vision",
            keywords: ["vision", "vision statement", "empower", "lifelong learners", "compassion", "integrity", "future", "aim"],
            snippet: "To be an institution of excellence that empowers learners through holistic, faith-based education, serving with integrity and compassion."
        },
        {
            title: "Our Mission Statement",
            category: "About RACS",
            badgeClass: "badge-general",
            page: "about.html",
            hash: "mission",
            keywords: ["mission", "mission statement", "calling", "purpose", "christian education", "spiritual growth", "service"],
            snippet: "To provide a Christ-centered, inclusive, and holistic education that nurtures the spiritual, intellectual, physical, and social development of every learner."
        },

        // --- CONTACTS, LOCATION & ENQUIRIES ---
        {
            title: "Contact Us & Official Helplines",
            category: "Contact",
            badgeClass: "badge-general",
            page: "contact.html",
            hash: "contact-cards",
            keywords: ["contact", "contacts", "phone", "call", "whatsapp", "0729622381", "0724855225", "mobile", "helpline", "inquiry", "enquiry", "talk to us"],
            snippet: "Official school phone & WhatsApp numbers: 0729 622 381 | 0724 855 225. Call or message us for enquiries on admissions, fees, transport, or visits."
        },
        {
            title: "Official Email Address",
            category: "Contact",
            badgeClass: "badge-general",
            page: "contact.html",
            hash: "contact-cards",
            keywords: ["email", "e-mail", "mail", "racs2021@gmail.com", "address", "inbox", "correspondence", "send documents"],
            snippet: "Send official email enquiries and soft-copy admission documents to RACS2021@gmail.com."
        },
        {
            title: "Campus Location & Directions (Near Cana Hospital)",
            category: "Location",
            badgeClass: "badge-general",
            page: "contact.html",
            hash: "contact-cards",
            keywords: ["location", "directions", "where", "address", "rimpa", "cana hospital", "magadi road", "kajiado", "rongai", "map", "visit"],
            snippet: "Located in Rimpa, Kajiado County, approximately 10 metres from Cana Hospital off Magadi Road."
        },
        {
            title: "School Office & Working Hours (7:00 AM – 6:00 PM)",
            category: "Contact",
            badgeClass: "badge-general",
            page: "contact.html",
            hash: "contact-cards",
            keywords: ["hours", "working hours", "office hours", "open", "opening hours", "closing time", "7am", "6pm", "visiting hours", "monday"],
            snippet: "School office hours are Monday to Friday from 7:00 AM to 6:00 PM for admissions, queries, and school visits."
        },
        {
            title: "Contact & Online Enquiry Form",
            category: "Contact",
            badgeClass: "badge-general",
            page: "contact.html",
            hash: "contact-form",
            keywords: ["form", "message", "enquiry form", "send message", "subject", "admissions enquiry", "feedback"],
            snippet: "Submit an online enquiry message directly to the RACS administration regarding admissions, fees, transport, or academics."
        },
        {
            title: "Chat with Us on WhatsApp",
            category: "Contact",
            badgeClass: "badge-general",
            page: "contact.html",
            hash: "whatsapp-cta",
            keywords: ["whatsapp", "chat", "direct message", "instant message", "wa", "text"],
            snippet: "Instant WhatsApp messaging with the RACS school administration team at +254 729 622 381."
        },
        {
            title: "Frequently Asked Questions (FAQ)",
            category: "Contact",
            badgeClass: "badge-general",
            page: "contact.html",
            hash: "faq",
            keywords: ["faq", "questions", "answers", "how to apply", "arrange visit", "fees summary", "transport summary"],
            snippet: "Frequently asked questions covering admissions application, tuition fees, transport zones, campus visits, and contact methods."
        },

        // --- GALLERY & FACILITIES ---
        {
            title: "Photo Gallery: Facilities & Classrooms",
            category: "Gallery",
            badgeClass: "badge-gallery",
            page: "about.html",
            hash: "gallery-facilities",
            keywords: ["gallery", "photos", "facilities", "admin block", "headteacher office", "pp1", "dining hall", "kitchen", "classrooms", "compound"],
            snippet: "Browse high-resolution photographs of our Administration Block, classrooms, kitchen, dining hall, and campus grounds."
        },
        {
            title: "Main Administration Block & Reception",
            category: "Gallery",
            badgeClass: "badge-gallery",
            page: "about.html",
            hash: "gallery-facilities",
            keywords: ["admin block", "administration", "reception", "office", "headteacher", "building", "front desk"],
            snippet: "Main Administration Block housing reception and administration offices, welcoming parents and visitors."
        },
        {
            title: "Photo Gallery: People, Teachers & Staff",
            category: "Gallery",
            badgeClass: "badge-gallery",
            page: "about.html",
            hash: "gallery-people",
            keywords: ["people", "staff", "teachers", "faculty", "head teacher", "teaching staff", "support staff", "students", "learners"],
            snippet: "Meet our dedicated teaching faculty, Headteacher, student body, and support team in uniform and assemblies."
        },
        {
            title: "Photo Gallery: Student Life, Sports & Trips",
            category: "Gallery",
            badgeClass: "badge-gallery",
            page: "about.html",
            hash: "gallery-life-at-school",
            keywords: ["life at school", "playground", "graduation", "trip", "field trips", "learning", "mentorship", "excursion"],
            snippet: "Photographs of active classroom learning, individual mentorship, playground joy, graduation, and educational excursions."
        }
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

    function escapeRegExp(str) {
        return (str || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function highlightMatch(text, query) {
        if (!text) return "";
        var qTrim = (query || "").trim();
        if (!qTrim) return escapeHtml(text);

        var tokens = qTrim.split(/\s+/).filter(function (t) { return t.length > 0; });
        if (!tokens.length) return escapeHtml(text);

        var escapedText = escapeHtml(text);
        var pattern = tokens.map(function (t) {
            return escapeRegExp(escapeHtml(t));
        }).join("|");

        try {
            var rx = new RegExp("(" + pattern + ")", "gi");
            return escapedText.replace(rx, '<mark class="search-highlight">$1</mark>');
        } catch (e) {
            return escapedText;
        }
    }

    function getCurrentPage() {
        return window.location.pathname.split("/").pop() || "index.html";
    }

    function getSearchResults(query) {
        var q = (query || "").trim().toLowerCase();
        if (!q) return [];

        var tokens = q.split(/\s+/).filter(Boolean);
        if (!tokens.length) return [];

        var currentPage = getCurrentPage();
        var results = [];
        var seen = {};

        function addCandidate(page, hash, title, category, badgeClass, snippet, score) {
            if (!hash || !page) return;
            var key = page + "#" + hash;
            if (seen[key]) {
                if (seen[key].score < score) {
                    seen[key].score = score;
                }
                return;
            }
            var item = {
                page: page,
                hash: hash,
                title: title,
                category: category || "General",
                badgeClass: badgeClass || "badge-general",
                snippet: snippet || "",
                score: score
            };
            seen[key] = item;
            results.push(item);
        }

        // 1. Search Pre-indexed Site Content
        for (var i = 0; i < searchIndex.length; i++) {
            var entry = searchIndex[i];
            var titleLower = entry.title.toLowerCase();
            var snippetLower = entry.snippet.toLowerCase();
            var catLower = entry.category.toLowerCase();
            var keywordsStr = (entry.keywords || []).join(" ").toLowerCase();
            var score = 0;

            // Full query exact/substring matches
            if (titleLower === q) {
                score += 150;
            } else if (titleLower.indexOf(q) !== -1) {
                score += 100;
            } else if (snippetLower.indexOf(q) !== -1) {
                score += 60;
            } else if (keywordsStr.indexOf(q) !== -1) {
                score += 50;
            }

            // Check individual token matches with whole-word prioritization
            var tokensMatched = 0;
            for (var t = 0; t < tokens.length; t++) {
                var tok = tokens[t];
                var matched = false;
                var wordRx = null;
                try {
                    wordRx = new RegExp("\\b" + escapeRegExp(tok) + "\\b", "i");
                } catch (e) {
                    wordRx = null;
                }

                if (wordRx && wordRx.test(titleLower)) {
                    score += 60;
                    matched = true;
                } else if (titleLower.indexOf(tok) !== -1) {
                    score += 20;
                    matched = true;
                }

                if (wordRx && wordRx.test(keywordsStr)) {
                    score += 45;
                    matched = true;
                } else if (keywordsStr.indexOf(tok) !== -1) {
                    score += 15;
                    matched = true;
                }

                if (wordRx && wordRx.test(catLower)) {
                    score += 35;
                    matched = true;
                } else if (catLower.indexOf(tok) !== -1) {
                    score += 10;
                    matched = true;
                }

                if (wordRx && wordRx.test(snippetLower)) {
                    score += 30;
                    matched = true;
                } else if (snippetLower.indexOf(tok) !== -1) {
                    score += 10;
                    matched = true;
                }

                if (matched) tokensMatched++;
            }

            // If all tokens matched or score is significant
            if (score > 0 && (tokensMatched === tokens.length || tokensMatched >= Math.ceil(tokens.length * 0.6))) {
                addCandidate(entry.page, entry.hash, entry.title, entry.category, entry.badgeClass, entry.snippet, score);
            }
        }

        // 2. Dynamic live scanning of the currently open page
        var main = document.querySelector("main");
        if (main) {
            var elements = main.querySelectorAll("h1[id], h2[id], h3[id], section[id], tr, p, li");
            for (var e = 0; e < elements.length; e++) {
                var el = elements[e];
                var text = (el.textContent || "").trim();
                var textLower = text.toLowerCase();
                if (!textLower) continue;

                var liveTokensMatched = 0;
                for (var lt = 0; lt < tokens.length; lt++) {
                    if (textLower.indexOf(tokens[lt]) !== -1) {
                        liveTokensMatched++;
                    }
                }

                if (liveTokensMatched === tokens.length) {
                    // Find suitable ID
                    var targetId = el.id;
                    if (!targetId) {
                        var parentWithId = el.closest("[id]");
                        if (parentWithId) targetId = parentWithId.id;
                    }
                    if (targetId && targetId !== "top") {
                        var titleText = el.tagName.match(/^H[1-6]$/) ? text : (el.closest("section") ? (el.closest("section").querySelector("h1, h2, h3") || {}).textContent : "");
                        titleText = (titleText || text).trim();
                        if (titleText.length > 60) titleText = titleText.substring(0, 57) + "...";

                        var snippetText = text;
                        if (snippetText.length > 130) snippetText = snippetText.substring(0, 127) + "...";

                        addCandidate(currentPage, targetId, titleText, "On This Page", "badge-general", snippetText, 45);
                    }
                }
            }
        }

        // Sort results by score descending
        results.sort(function (a, b) {
            return b.score - a.score;
        });

        return results;
    }

    var selectedIndex = -1;

    function renderSearchResults(query) {
        if (!messageEl) return;

        var qTrim = (query || "").trim();
        selectedIndex = -1;

        if (!qTrim) {
            messageEl.innerHTML =
                '<div class="nav-search-quick-tags">' +
                    '<span class="nav-search-quick-label">Quick Search:</span>' +
                    '<button type="button" class="nav-search-chip" data-search="Fee structure">Fee Structure</button>' +
                    '<button type="button" class="nav-search-chip" data-search="Transport zones">Transport Zones</button>' +
                    '<button type="button" class="nav-search-chip" data-search="School menu">School Menu</button>' +
                    '<button type="button" class="nav-search-chip" data-search="Uniforms">Uniform Guide</button>' +
                    '<button type="button" class="nav-search-chip" data-search="Swimming French">French &amp; Swimming</button>' +
                    '<button type="button" class="nav-search-chip" data-search="Admission requirements">Admissions</button>' +
                    '<button type="button" class="nav-search-chip" data-search="Calendar">School Calendar</button>' +
                    '<button type="button" class="nav-search-chip" data-search="Contacts">Contact Details</button>' +
                    '<button type="button" class="nav-search-chip" data-search="Facilities">Facilities &amp; Campus</button>' +
                '</div>';
            return;
        }

        var results = getSearchResults(qTrim);

        if (!results.length) {
            messageEl.innerHTML =
                '<div class="nav-search-empty-state">' +
                    '<div class="nav-search-empty-title">No matching results found for "' + escapeHtml(qTrim) + '"</div>' +
                    '<p class="nav-search-empty-text">Try searching for other terms like <strong>fees</strong>, <strong>transport</strong>, <strong>lunch</strong>, <strong>uniform</strong>, or <strong>admissions</strong>.</p>' +
                    '<div class="nav-search-quick-tags" style="justify-content: center;">' +
                        '<button type="button" class="nav-search-chip" data-search="Fee structure">Fee Structure</button>' +
                        '<button type="button" class="nav-search-chip" data-search="Transport zones">Transport Zones</button>' +
                        '<button type="button" class="nav-search-chip" data-search="School menu">School Menu</button>' +
                        '<button type="button" class="nav-search-chip" data-search="Uniforms">Uniform Guide</button>' +
                        '<button type="button" class="nav-search-chip" data-search="French swimming">French &amp; Swimming</button>' +
                    '</div>' +
                '</div>';
            return;
        }

        var currentPage = getCurrentPage();
        var cardsHtml = "";

        for (var i = 0; i < results.length; i++) {
            var r = results[i];
            var href = (r.page === currentPage) ? ("#" + r.hash) : (r.page + "#" + r.hash);
            var displayUrl = (r.page === currentPage) ? "Jump to section on this page" : ("Visit " + r.page.replace(".html", ""));

            cardsHtml +=
                '<a class="nav-search-result-card" href="' + escapeHtml(href) + '" data-index="' + i + '" role="option">' +
                    '<div class="nav-search-card-top">' +
                        '<h4 class="nav-search-card-title">' + highlightMatch(r.title, qTrim) + '</h4>' +
                        '<span class="nav-search-badge ' + escapeHtml(r.badgeClass) + '">' + escapeHtml(r.category) + '</span>' +
                    '</div>' +
                    '<p class="nav-search-card-snippet">' + highlightMatch(r.snippet, qTrim) + '</p>' +
                    '<div class="nav-search-card-url">' + escapeHtml(displayUrl) + ' &rarr;</div>' +
                '</a>';
        }

        var countText = results.length + " " + (results.length === 1 ? "result" : "results") + " found for \"" + escapeHtml(qTrim) + "\"";
        messageEl.innerHTML =
            '<div class="nav-search-meta">' +
                '<div class="nav-search-results-count">' + countText + '</div>' +
                '<div class="nav-search-results-hint">Use &uarr; &darr; arrows &amp; Enter to open</div>' +
            '</div>' +
            '<div class="nav-search-results-list" role="listbox">' + cardsHtml + '</div>';
    }

    function updateSelectedCard(newIndex) {
        if (!messageEl) return;
        var cards = messageEl.querySelectorAll(".nav-search-result-card");
        if (!cards.length) return;

        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.remove("is-selected");
        }

        if (newIndex >= 0 && newIndex < cards.length) {
            selectedIndex = newIndex;
            cards[selectedIndex].classList.add("is-selected");
            cards[selectedIndex].scrollIntoView({ block: "nearest" });
        } else {
            selectedIndex = -1;
        }
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
            selectedIndex = -1;
        }

        toggleBtn.addEventListener("click", function () {
            var isOpen = panel.classList.contains("is-open");
            if (isOpen) closePanel();
            else openPanel();
        });

        closeBtn.addEventListener("click", function () {
            closePanel();
        });

        // Global hotkeys (Ctrl+K, Cmd+K, '/')
        document.addEventListener("keydown", function (e) {
            if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
                e.preventDefault();
                if (panel.classList.contains("is-open")) closePanel();
                else openPanel();
                return;
            }

            if (e.key === "/" && !panel.classList.contains("is-open")) {
                var activeTag = (document.activeElement && document.activeElement.tagName) || "";
                if (activeTag !== "INPUT" && activeTag !== "TEXTAREA" && !document.activeElement.isContentEditable) {
                    e.preventDefault();
                    openPanel();
                    return;
                }
            }

            if (!panel.classList.contains("is-open")) return;

            if (e.key === "Escape") {
                closePanel();
                toggleBtn.focus();
                return;
            }

            var cards = messageEl.querySelectorAll(".nav-search-result-card");
            if (cards.length > 0) {
                if (e.key === "ArrowDown") {
                    e.preventDefault();
                    var next = selectedIndex + 1;
                    if (next >= cards.length) next = 0;
                    updateSelectedCard(next);
                    return;
                } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    var prev = selectedIndex - 1;
                    if (prev < 0) prev = cards.length - 1;
                    updateSelectedCard(prev);
                    return;
                } else if (e.key === "Enter" && selectedIndex >= 0 && cards[selectedIndex]) {
                    e.preventDefault();
                    cards[selectedIndex].click();
                    return;
                }
            }

            // Trap focus within panel
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

        // Live input typing with debounce
        var debounceTimer = null;
        input.addEventListener("input", function () {
            var q = input.value || "";
            if (debounceTimer) window.clearTimeout(debounceTimer);
            debounceTimer = window.setTimeout(function () {
                renderSearchResults(q);
            }, 90);
        });

        // Click delegation on quick chips and result cards
        messageEl.addEventListener("click", function (e) {
            var chip = e.target.closest(".nav-search-chip");
            if (chip) {
                var term = chip.getAttribute("data-search") || chip.textContent.trim();
                input.value = term;
                input.focus();
                renderSearchResults(term);
                return;
            }

            var card = e.target.closest(".nav-search-result-card");
            if (card) {
                closePanel();
            }
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
