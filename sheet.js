/* ================= CONFIG ================= */
const PHONE_NUMBER = "+919848386898"; // TODO: replace with real phone
const WHATSAPP_NUMBER = "919949483794"; // TODO: replace with real WhatsApp number (no + or spaces)

/* ================= CITY DATA ================= */
const CITIES = [{
        name: "Vijayawada",
        lat: 16.5062,
        lng: 80.6480
    },
    {
        name: "Guntur",
        lat: 16.3067,
        lng: 80.4365
    },

];
const CITY_ALIASES = {
    "bezawada": "Vijayawada",
    "vja": "Vijayawada",
    "bezwada": "Vijayawada"
};

/* ================= PROPERTY DATA ================= */
let _id = 1;

function P(city, type, price, unitPrice, unitLabel, size, isNew, image, fullAddress) {
    const c = CITIES.find(c => c.name === city);
    return {
        id: _id++,
        city,
        price,
        type,
        unitPrice,
        unitLabel,
        size,
        lat: c.lat + (Math.random() - 0.5) * 0.05,
        lng: c.lng + (Math.random() - 0.5) * 0.05,
        isNew: !!isNew,
        image: image || "https://placehold.co/600x400?text=Property",
        address: fullAddress || `${city}, Andhra Pradesh` // Falls back to default if no specific address is provided
    };
}
const PROPERTIES = [
    P("Vijayawada", "Apartment", 4000000, 1100, "", "1100 sq.ft", true, "https://i.postimg.cc/LXpcSvG5/devi-nagar-building.jpg", "Devi Nagar, Gadde Vari Polalu Road, Near Madhura Nagar, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "New Projects", 6000000, 1230, "", "Sold", true, "https://i.postimg.cc/CxjtNXvp/VINAYAKA-COLONY-PLANNING.png", "Devi Nagar,Vinayaka Colony, Gadde Vari Polalu Road, Near Madhura Nagar, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "New Projects", 6800000, 1000, "", "1000 sq.ft- Independent", true, "https://i.postimg.cc/rsjsxQvB/RAJARAJESWARI-INDIVIDUAL.png", "Rajarajeswari Peta(new),Amaravati Colony, First Line, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "New Projects", 18500000, 1100, "", "1350 sq.ft", true, "https://i.postimg.cc/T1t2phDQ/AMABAPURAM-PANCHAYATHI.png", "Ambapuram Panchayathi,Beside S-Convention,Lumina Collection, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "Apartment", 6500000, 1100, "", "Sold - 3BHK", true, "https://i.postimg.cc/C5xBv3Cr/THOTAVARI-APARTMENT.png", "Nandamuri Nagar,Thota Vari Street,Road Number-9, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "Apartment", 8000000, 1100, "", "Sold -2BHK", true, "https://i.postimg.cc/2jWhtYf9/SIDARTHA-STREET.png", "Sidartha Nagar,Nandamuri Nagar, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "Apartment", 6000000, 1100, "", "Sold - 3BHK", true, "https://i.postimg.cc/hjzTcWQt/UDA-COLONY.png", "Uda Colony,Payakapuram,Singh Nagar, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "Apartment", 7000000, 1100, "", "Sold- 2BHK", true, "https://i.postimg.cc/nczjJt88/PIPLE-ROAD.png", "Piple Road, Ajith Singh Nagar, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "Buy", 8000000, 1100, "", "Sold- Independent", true, "https://i.postimg.cc/6q67qkyP/THOTA-ROAD-NO-12.png", "Nandamuri Nagar,Thota Vari Street,Road Number-12, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "Apartment", 9500000, 1100, "", "Sold- 3BHK", true, "https://i.postimg.cc/MXkhdSVj/BHAVANIPURAM.png", "Bhavanipuram, Swathi Road, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "Apartment", 7800000, 1100, "", "Sold- 2BHK", true, "https://i.postimg.cc/kXqr6nM4/RAMAKRISHNAPURAM.png", "Ramakrishnapuram,Ajith Singh Nagar, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "Apartment", 6400000, 1100, "", "Sold- 3BHK", true, "https://i.postimg.cc/PqL0sJyF/CURRENCY-NAGAR.png", "Currency Nagar,Back Side Ayush Hospitals, Vijayawada-520015, Andhra Pradesh"),
    P("Vijayawada", "Buy", 8800000, 1100, "", "Sold-Individual", true, "https://i.postimg.cc/xTtZXMFB/PRASHANTHI-NAGAR.png", "Prashanthi Nagar,Road No-1,Ajith Singh Nagar, Vijayawada-520015, Andhra Pradesh"),
       P("Vijayawada", "Land", 6500, 1100, "","4 acres", true, "https://i.postimg.cc/g28TbyM9/KANCHARLA.png", "Kancherla,Non-layout,Near Nandigama, Vijayawada-520015, Andhra Pradesh"),
        P("Vijayawada", "Land", 12000, 1100, "", "5 acres", true, "https://i.postimg.cc/MK4CSpqh/G-KONDURU.png", "G-konduru,Vijayawada-520015, Andhra Pradesh")
];

const TYPE_ICON = {
    Villa: "🏡",
    Plot: "📐",
    Land: "🌾",
    Apartment: "🏢"
};
let listingCategory = "All";
let listingVisible = 9;
let featuredList = [];

/* ================= HELPERS ================= */
function formatINR(n) {
    if (n >= 10000000) return "₹" + (n / 10000000).toFixed(n % 10000000 === 0 ? 0 : 2) + " Cr";
    if (n >= 100000) return "₹" + (n / 100000).toFixed(n % 100000 === 0 ? 0 : 1) + " L";
    return "₹" + Math.round(n).toLocaleString('en-IN');
}

function formatFullINR(n) {
    return "₹" + Math.round(n).toLocaleString('en-IN');
}

function openWhatsApp(msg) {
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
}

function callNow() {
    window.location.href = "tel:" + PHONE_NUMBER;
}

function scrollToMap() {
    goHome();
    setTimeout(() => document.getElementById('map-section').scrollIntoView({
        behavior: 'smooth'
    }), 60);
}

function goHome() {
    document.getElementById('home-view').classList.remove('hidden');
    document.getElementById('listing-view').classList.add('hidden');
    document.getElementById('mobile-menu').classList.remove('open');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    setTimeout(() => {
        if (map) {
            map.invalidateSize();
        }
    }, 200);
}

function goHomeScroll(id) {
    goHome();
    setTimeout(() => document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    }), 60);
}

function propVisual(type, isNew) {
    const grads = {
        Villa: ["#123A5E", "#0A66C2"],
        Plot: ["#5C4A12", "#D4AF37"],
        Land: ["#1F4A2E", "#3E8A55"],
        Apartment: ["#2B1A4A", "#5B3FA0"]
    };
    const g = grads[type] || grads.Villa;
    return `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g${type}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${g[0]}"/><stop offset="100%" stop-color="${g[1]}"/>
    </linearGradient></defs>
    <rect width="300" height="190" fill="url(#g${type})"/>
    <g opacity="0.5">
      <rect x="30" y="90" width="60" height="70" fill="#ffffff22"/>
      <rect x="100" y="60" width="50" height="100" fill="#ffffff33"/>
      <rect x="160" y="100" width="70" height="60" fill="#ffffff22"/>
      <rect x="240" y="75" width="35" height="85" fill="#ffffff2b"/>
    </g>
    <text x="150" y="180" text-anchor="middle" font-family="Poppins" font-size="34" fill="#ffffff" opacity="0.9">${TYPE_ICON[type]||"🏠"}</text>
  </svg>`;
}

/* ================= DROPDOWNS ================= */
function populateCityDropdowns() {
    [document.getElementById('q-city'), document.getElementById('l-city')].forEach(sel => {
        CITIES.forEach(c => {
            const o = document.createElement('option');
            o.value = c.name;
            o.textContent = c.name;
            sel.appendChild(o);
        });
    });
    const apSel = document.getElementById('appt-property');
    PROPERTIES.forEach(p => {
        const o = document.createElement('option');
        o.value = p.id;
        o.textContent = `${p.type} in ${p.city} — ${formatINR(p.price)}`;
        apSel.appendChild(o);
    });
}

/* ================= HOME FEATURED ================= */
function renderFeatured() {
    featuredList = PROPERTIES.filter(p => p.isNew).concat(PROPERTIES.slice(0, 9)).slice(0, 9);
    const grid = document.getElementById('featured-grid');
    grid.innerHTML = featuredList.map(p => propCard(p)).join('');
    observeCards();
}

function propCard(p) {
    return `
    <div class="property-card">
        <div class="property-badge">${p.isNew ? 'New' : ''}</div>
        <div class="property-type">${p.type}</div>
        
        <div class="property-image-container">
            <img src="${p.image}" alt="${p.type}" class="property-card-img">
        </div>
        
        <h3>${p.city}</h3>
        <div class="prop-loc" style="font-size: 12px; line-height: 1.4; min-height: 38px;">📍 ${p.address}</div>
        
        <div class="prop-split">
            <div class="prop-size">${p.size}</div>
            <div class="prop-price">₹${p.price.toLocaleString('en-IN')}${p.unitLabel}</div>
        </div>
        
        <div class="prop-action">
            <button class="btn-call" onclick="window.open('tel:+919848386898')">📞 Call Now</button>
            <button class="btn-wa" onclick="window.open('https://wa.me/919949483794')">💬 WhatsApp</button>
        </div>
    </div>
    `;
}

function waEnquire(id) {
    const p = PROPERTIES.find(x => x.id === id);
    openWhatsApp(`Hi, I'm interested in this property: ${p.type} in ${p.city}, ${p.size}, ${formatINR(p.price)} total (${formatFullINR(p.unitPrice)}${p.unitLabel}). Please share more details.`);
}

/* ================= CATEGORY / LISTING VIEW ================= */
function categoryMatch(p, cat) {
    if (cat === 'All') return true;
    if (cat === 'Buy') return p.type === 'Villa' || p.type === 'Plot';
    if (cat === 'Apartment') return p.type === 'Apartment';
    if (cat === 'Plot') return p.type === 'Plot';
    if (cat === 'Land') return p.type === 'Land';
    if (cat === 'New Projects') return p.isNew === true;
    return true;
}
const CATEGORY_LABELS = {
    All: "All Properties",
    Buy: "Buy — Villas & Plots",
    Apartment: "Apartment Properties",
    "New Projects": "New Projects",
    Plot: "Residential Plots",
    Land: "Land & Agricultural Plots"
};
const CATEGORY_SUB = {
    All: "Every listing across Andhra Pradesh & Hyderabad",
    Buy: "Ready villas and residential plots to call home",
    Apartment: "Living spaces, Apartment, Group Houses",
    "New Projects": "Freshly launched developments",
    Plot: "Compact residential plots, ready to build",
    Land: "Open land and agricultural parcels"
};

let listingFilters = {
    city: "",
    budget: "",
    type: ""
};

function showCategory(cat) {
    listingCategory = cat;
    listingVisible = 9;
    listingFilters = {
        city: "",
        budget: "",
        type: ""
    };
    document.getElementById('l-city').value = "";
    document.getElementById('l-budget').value = "";
    document.getElementById('l-type').value = "";
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('listing-view').classList.remove('hidden');
    document.getElementById('listing-view').classList.add('fade-enter');
    document.getElementById('listing-heading').textContent = CATEGORY_LABELS[cat];
    document.getElementById('listing-sub').textContent = CATEGORY_SUB[cat];
    document.getElementById('mobile-menu').classList.remove('open');
    renderPills();
    renderListingGrid();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function renderPills() {
    const cats = ["All", "Buy", "Apartment", "New Projects", "Plot", "Land"];
    document.getElementById('listing-pills').innerHTML = cats.map(c =>
        `<button class="pill ${c===listingCategory?'active':''}" onclick="showCategory('${c}')">${c}</button>`
    ).join('');
}

function applyListingSearch() {
    listingFilters.city = document.getElementById('l-city').value;
    listingFilters.budget = document.getElementById('l-budget').value;
    listingFilters.type = document.getElementById('l-type').value;
    listingVisible = 9;
    renderListingGrid();
}

function applyHomeSearch() {
    const city = document.getElementById('q-city').value;
    const budget = document.getElementById('q-budget').value;
    const type = document.getElementById('q-type').value;
    showCategory('All');
    document.getElementById('l-city').value = city;
    document.getElementById('l-budget').value = budget;
    document.getElementById('l-type').value = type;
    listingFilters = {
        city,
        budget,
        type
    };
    renderListingGrid();
}

function getListingFiltered() {
    return PROPERTIES.filter(p => {
        if (!categoryMatch(p, listingCategory)) return false;
        if (listingFilters.city && p.city !== listingFilters.city) return false;
        if (listingFilters.type && p.type !== listingFilters.type) return false;
        if (listingFilters.budget) {
            const [min, max] = listingFilters.budget.split('-').map(Number);
            if (p.price < min || p.price > max) return false;
        }
        return true;
    });
}

function renderListingGrid() {
    const grid = document.getElementById('listing-grid');
    const filtered = getListingFiltered();
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">No properties currently match this search. Try a different city, budget or type — or ask our chatbot, which covers every city we operate in.</div>`;
        document.getElementById('listing-load-more').style.display = 'none';
        return;
    }
    grid.innerHTML = filtered.slice(0, listingVisible).map(p => propCard(p)).join('');
    document.getElementById('listing-load-more').style.display = listingVisible >= filtered.length ? 'none' : 'inline-block';
    observeCards();
}

function loadMoreListing() {
    listingVisible += 9;
    renderListingGrid();
}

/* ================= PROPERTY MODAL ================= */
function openModal(id) {
    const p = PROPERTIES.find(x => x.id === id);
    const box = document.getElementById('modal-box');
    box.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-img">${propVisual(p.type, p.isNew)}</div>
    <div class="modal-content">
      <h3>${p.type} in ${p.city}</h3>
      <div class="modal-tags">
        <span class="tag">${p.type}</span>
        <span class="tag">${p.city}</span>
        ${p.isNew ? '<span class="tag">New Project</span>' : ''}
      </div>
      <div class="modal-price">${formatFullINR(p.unitPrice)} <span style="font-size:14px; color:var(--ink-soft); font-weight:400;">${p.unitLabel}</span></div>
      <div style="font-size:13.5px; color:var(--ink-soft);">Total price: <b style="color:var(--ink);">${formatINR(p.price)}</b> · Size: <b style="color:var(--ink);">${p.size}</b></div>
      <p style="font-size:13px; color:var(--ink-soft); margin-top:14px; font-style:italic;">To know more details, contact us.</p>
      <div class="modal-actions">
        <button class="btn-call" style="flex:1;" onclick="callNow()">📞 Call Now</button>
        <button class="btn-wa" style="flex:1;" onclick="waEnquire(${p.id})">💬 WhatsApp Now</button>
      </div>
      <div style="margin-top:12px;">
        <button class="btn-outline" style="width:100%;" onclick="closeModal(); document.getElementById('appt-property').value=${p.id}; goHomeScroll('appointment');">Book a Visit for This Property</button>
      </div>
    </div>`;
    document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
}

/* ================= AUTH MODAL ================= */
function openAuth(mode) {
    switchAuth(mode);
    document.getElementById('auth-overlay').classList.add('open');
    document.getElementById('mobile-menu').classList.remove('open');
}

function closeAuth() {
    document.getElementById('auth-overlay').classList.remove('open');
}

function switchAuth(mode) {
    document.getElementById('tab-login').classList.toggle('active', mode === 'login');
    document.getElementById('tab-register').classList.toggle('active', mode === 'register');
    document.getElementById('auth-title').textContent = mode === 'login' ? 'Login' : 'Create your account';
    document.getElementById('auth-name-field').style.display = mode === 'register' ? 'block' : 'none';
}

function submitAuth() {
    closeAuth();
    alert("This is a UI demo — hook this up to a real authentication backend (e.g. your own API + database) to enable real accounts.");
}
/* ================= APPOINTMENTS ================= */
let appointments = [];

function bookAppointment() {
    const name = document.getElementById('appt-name').value.trim();
    const phone = document.getElementById('appt-phone').value.trim();
    const propId = Number(document.getElementById('appt-property').value);
    const date = document.getElementById('appt-date').value;
    const time = document.getElementById('appt-time').value;
    const p = PROPERTIES.find(x => x.id === propId);
    if (!name || !phone || !date || !time) {
        alert("Please fill in your name, phone, date and time.");
        return;
    }
    appointments.unshift({
        name,
        phone,
        date,
        time,
        p
    });
    renderAppointments();
    const confirm = document.getElementById('appt-confirm');
    confirm.classList.add('show');
    setTimeout(() => confirm.classList.remove('show'), 4000);
    openWhatsApp(`Site visit request:\nName: ${name}\nPhone: ${phone}\nProperty: ${p.type} in ${p.city} (${formatINR(p.price)})\nDate: ${date} at ${time}`);
    document.getElementById('appt-name').value = '';
    document.getElementById('appt-phone').value = '';
    document.getElementById('appt-date').value = '';
    document.getElementById('appt-time').value = '';
}

function renderAppointments() {
    const list = document.getElementById('appt-list');
    if (appointments.length === 0) {
        list.innerHTML = '<div class="appt-empty">No visits booked yet this session.</div>';
        return;
    }
    list.innerHTML = appointments.map(a => `
    <div class="appt-item">
      <b>${a.p.type} in ${a.p.city}</b>
      ${a.name} · ${a.phone}<br>
      Visit requested for <strong>${a.date} at ${a.time}</strong>
    </div>`).join('');
}

/* ================= MAP ================= */
let map;

function initMap() {
    map = L.map('map').setView([16.5, 80.2], 6.3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 17
    }).addTo(map);
    PROPERTIES.forEach(p => {
        const marker = L.marker([p.lat, p.lng]).addTo(map);
        marker.bindPopup(`<b>${p.type} in ${p.city}</b><br>${formatFullINR(p.unitPrice)}${p.unitLabel} · ${p.size}<br>${formatINR(p.price)} total`);
    });
}

/* ================= CHATBOT ================= */
function toggleChat() {
    const panel = document.getElementById('chat-panel');
    panel.classList.toggle('open');
    if (panel.classList.contains('open') && document.getElementById('chat-body').children.length === 0) {
        botSay("Hi! I'm the Varshini Assistant. I cover every city we operate in across Andhra Pradesh and Hyderabad. Ask me things like \"plots in Hyderabad\" or \"land under 30 lakhs in Guntur\".");
    }
}

function botSay(text) {
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function userSay(text) {
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = 'msg user';
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function showTyping() {
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.id = 'typing-indicator';
    div.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
}

function botShowResults(results) {
    const body = document.getElementById('chat-body');
    const wrap = document.createElement('div');
    wrap.className = 'msg bot';
    wrap.style.padding = '10px';
    wrap.innerHTML = `<div style="margin-bottom:6px;">Found ${results.length} matching ${results.length===1?'property':'properties'}:</div>` +
        results.slice(0, 4).map(p => `
      <div class="msg-card">
        <b>${p.type} in ${p.city}</b>
        <div>${p.size} ${p.isNew ? '· New Project' : ''}</div>
        <div class="p">${formatFullINR(p.unitPrice)}${p.unitLabel} · ${formatINR(p.price)} total</div>
        <div class="msg-card-actions">
          <button style="background:var(--bg); color:var(--primary-dark);" onclick="openModal(${p.id})">Details</button>
          <button style="background:var(--wa); color:#fff;" onclick="waEnquire(${p.id})">WhatsApp</button>
        </div>
      </div>`).join('');
    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
}

function resolveCity(text) {
    const t = text.toLowerCase();
    for (const alias in CITY_ALIASES) {
        if (t.includes(alias)) return CITY_ALIASES[alias];
    }
    return CITIES.find(c => t.includes(c.name.toLowerCase()));
}

function parseBudgetFromText(text) {
    const t = text.toLowerCase();
    let m = t.match(/(under|below|less than)\s*₹?\s*([\d.]+)\s*(lakh|lakhs|l|crore|cr)\b/);
    if (m) {
        const v = parseFloat(m[2]) * (m[3][0] === 'c' ? 10000000 : 100000);
        return {
            min: 0,
            max: v
        };
    }
    m = t.match(/(above|over|more than)\s*₹?\s*([\d.]+)\s*(lakh|lakhs|l|crore|cr)\b/);
    if (m) {
        const v = parseFloat(m[2]) * (m[3][0] === 'c' ? 10000000 : 100000);
        return {
            min: v,
            max: 999999999
        };
    }
    m = t.match(/([\d.]+)\s*(?:lakh|lakhs|l|crore|cr)?\s*-\s*([\d.]+)\s*(lakh|lakhs|l|crore|cr)\b/);
    if (m) {
        const mult = m[3][0] === 'c' ? 10000000 : 100000;
        return {
            min: parseFloat(m[1]) * mult,
            max: parseFloat(m[2]) * mult
        };
    }
    m = t.match(/([\d.]+)\s*(lakh|lakhs|l|crore|cr)\b/);
    if (m) {
        const v = parseFloat(m[1]) * (m[2][0] === 'c' ? 10000000 : 100000);
        return {
            min: 0,
            max: v
        };
    }
    return null;
}

function detectType(text) {
    const t = text.toLowerCase();
    if (t.includes("commercial") || t.includes("shop") || t.includes("office")) return "Commercial";
    if (t.includes("villa") || t.includes("house") || t.includes("home")) return "Villa";
    if (t.includes("plot")) return "Plot";
    if (t.includes("land") || t.includes("agri") || t.includes("acre")) return "Land";
    return null;
}

function handleUserQuery(text) {
    const typingEl = showTyping();
    setTimeout(() => {
        typingEl.remove();
        const t = text.toLowerCase();
        const city = resolveCity(text);
        const type = detectType(text);
        const budget = parseBudgetFromText(t);

        if (!city && !type && !budget) {
            if (/hi|hello|hey/.test(t)) {
                botSay("Hello! Tell me a city, a property type, or a budget — e.g. \"villas in Hyderabad under 1 crore\" — and I'll pull up matches.");
                return;
            }
            if (t.includes("emi") || t.includes("loan")) {
                botSay("You can use the EMI calculator on the home page — taking you there now.");
                goHomeScroll('emi');
                return;
            }
            if (t.includes("visit") || t.includes("appointment") || t.includes("book")) {
                botSay("Sure — here's the booking form.");
                goHomeScroll('appointment');
                return;
            }
            botSay("I can search by city (any city across Vijayawada), property type (villa/plot/land/Apartment), or budget. Try \"land in Vijayawada under 20 lakhs\".");
            return;
        }

        if (city && !CITIES.find(c => c.name === city.name)) {
            botSay(`We don't have listings in that area yet. I can pass your enquiry to our team on WhatsApp instead.`);
            return;
        }

        let results = PROPERTIES.filter(p => {
            if (city && p.city !== city.name) return false;
            if (type && p.type !== type) return false;
            if (budget && (p.price < budget.min || p.price > budget.max)) return false;
            return true;
        });

        let intro = "";
        if (city && results.length === 0) {
            intro = `Currently, we don't have ${type ? type.toLowerCase()+' ' : ''}properties available in ${city.name}${budget ? ' within that budget' : ''}. `;
            botSay(intro + "Want me to notify you on WhatsApp when new listings come up there, or show nearby cities instead?");
            return;
        }
        if (city) intro += `Here's what's available in ${city.name}`;
        else intro += "Here's what I found";
        if (type) intro += ` (${type})`;
        if (budget) intro += `, within your budget`;
        botSay(intro + ":");
        botShowResults(results);
    }, 700);
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;
    userSay(text);
    input.value = '';
    handleUserQuery(text);
}

function sendQuick(text) {
    userSay(text);
    handleUserQuery(text);
}

/* ================= REVEAL ANIMATION ================= */
function observeCards() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('reveal');
        });
    }, {
        threshold: 0.1
    });
    document.querySelectorAll('.prop-card').forEach(c => obs.observe(c));
}

/* ================= INIT ================= */
document.getElementById('appt-date').min = new Date().toISOString().split('T')[0];
populateCityDropdowns();
renderFeatured();
renderAppointments();
initMap();

function sendToWhatsApp(event) {
    // Prevent page reload
    event.preventDefault();

    // Grab elements using the exact IDs from the HTML above
    const name = document.getElementById('appt-name').value;
    const phone = document.getElementById('appt-phone').value;
    const property = document.getElementById('appt-property').value;
    const date = document.getElementById('appt-date').value;
    const time = document.getElementById('appt-time').value;

    // Your actual target WhatsApp business/personal number (with country code, no +)
    const whatsappNumber = "919949483794";

    // Format the text message smoothly
    const message = `Hello Varshini Construction,%0A%0A` +
        `I would like to book a property visit.%0A%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Property:* ${encodeURIComponent(property)}%0A` +
        `*Date:* ${encodeURIComponent(date)}%0A` +
        `*Time:* ${encodeURIComponent(time)}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    // Open WhatsApp tab
    window.open(whatsappUrl, '_blank');
}