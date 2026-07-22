const properties = [
  {
    id: 1,
    title: 'Apartment in Vijayawada',
    description: 'Spacious apartment : 1100 sq ft in Devi Nagar, Gadde Vari Polalu Road, Near Madhura Nagar, Vijayawada-520015, Andhra Pradesh',
    price: '40 Lakhs',
    image: 'https://i.postimg.cc/LXpcSvG5/devi-nagar-building.jpg',
    type: 'Apartment',
    city: 'Vijayawada'
  },
  {
    id: 2,
    title: 'Premium Apartment',
    description: 'Well-designed apartment in 1230 sq ft near Devi Nagar,Vinayaka Colony, Gadde Vari Polalu Road, Near Madhura Nagar, Vijayawada-520015, Andhra Pradesh.',
    price: '60 Lakhs',
    image: 'https://i.postimg.cc/CxjtNXvp/VINAYAKA-COLONY-PLANNING.png',
    type: 'New Projects',
    city: 'Vijayawada'
  },
  {
    id: 3,
    title: 'Individual House',
    description: 'Prime Individual House of 1000 sq ft in Rajarajeswari Peta(new),Amaravati Colony, First Line, Vijayawada-520015, Andhra Pradesh',
    price: '68 Lakhs',
    image: 'https://i.postimg.cc/rsjsxQvB/RAJARAJESWARI-INDIVIDUAL.png',
    type: 'Land',
    city: 'Vijayawada'
  },
  {
    id: 4,
    title: 'New Project Launch',
    description: 'Modern Apartment of 1350 sqft near Ambapuram Panchayathi,Beside S-Convention,Lumina Collection, Vijayawada-520015, Andhra Pradesh.',
    price: '1.85 lakhs',
    image: 'https://i.postimg.cc/T1t2phDQ/AMABAPURAM-PANCHAYATHI.png',
    type: 'New Projects',
    city: 'Vijayawada'
  },
  {
    id: 5,
    title: 'Apartment',
    description: 'Perfect apartment of 3BHK-sold near Nandamuri Nagar,Thota Vari Street,Road Number-9, Vijayawada-520015, Andhra Pradesh .',
    price: '65 Lakhs',
    image: 'https://i.postimg.cc/C5xBv3Cr/THOTAVARI-APARTMENT.png',
    type: 'Plot',
    city: 'Vijayawada'
  },
  {
    id: 6,
    title: 'Luxury Apartment',
    description: 'Elevated living apartment of 2BHK-sold near Sidartha Nagar,Nandamuri Nagar, Vijayawada-520015, Andhra Pradesh.',
    price: '80 lakhs',
    image: 'https://i.postimg.cc/2jWhtYf9/SIDARTHA-STREET.png',
    type: 'Apartment',
    city: 'Vijayawada'
  },
  // Add more property objects below this line and before the closing array bracket.
  // Example:
  {
    id: 7,
    title: 'New Modern Apartment',
    description: 'Brand new apartment of 3BHK-sold near Uda Colony,Payakapuram,Singh Nagar, Vijayawada-520015, Andhra Pradesh.',
    price: '60 lakhs',
    image: 'https://i.postimg.cc/hjzTcWQt/UDA-COLONY.png',
    type: 'Apartment',
    city: 'Vijayawada'
  },

  {
    id: 8,
    title: 'Apartment',
    description: 'Apartment 2BHK-sold near Piple Road, Ajith Singh Nagar, Vijayawada-520015, Andhra Pradesh.',
    price: '60 lakhs',
    image: 'https://i.postimg.cc/nczjJt88/PIPLE-ROAD.png',
    type: 'Apartment',
    city: 'Vijayawada'
  },
   {
    id: 9,
    title: 'Individual House',
    description: 'Modern Individual House near Nandamuri Nagar,Thota Vari Street,Road Number-12, Vijayawada-520015, Andhra Pradesh.',
    price: '80 lakhs',
    image: 'https://i.postimg.cc/6q67qkyP/THOTA-ROAD-NO-12.png',
    type: 'Buy',
    city: 'Vijayawada'
  },
   {
    id: 10,
    title: 'Apartment',
    description: 'Apartment 3BHK-sold near Bhavanipuram, Swathi Road, Vijayawada-520015, Andhra Pradesh.',
    price: '95 lakhs',
    image: 'https://i.postimg.cc/MXkhdSVj/BHAVANIPURAM.png',
    type: 'Apartment',
    city: 'Vijayawada'
  },
   {
    id: 11,
    title: 'Apartment',
    description: 'Apartment 2BHK-sold near Ramakrishnapuram,Ajith Singh Nagar, Vijayawada-520015, Andhra Pradesh.',
    price: '78 lakhs',
    image: 'https://i.postimg.cc/kXqr6nM4/RAMAKRISHNAPURAM.png',
    type: 'Apartment',
    city: 'Vijayawada'
  },
   {
    id: 12,
    title: 'Modern Apartment',
    description: 'Modern living space Apartment 3BHK-sold near Currency Nagar,Back Side Ayush Hospitals, Vijayawada-520015, Andhra Pradesh.',
    price: '65 lakhs',
    image: 'https://i.postimg.cc/PqL0sJyF/CURRENCY-NAGAR.png',
    type: 'Apartment',
    city: 'Vijayawada'
  },
  {
    id: 13,
    title: 'Individual House',
    description: 'Modern Individual House near Prashanti Nagar,Road No- 1, Ajith Singh Nagar, Vijayawada-520015, Andhra Pradesh.',
    price: '88 lakhs',
    image: 'https://i.postimg.cc/xTtZXMFB/PRASHANTHI-NAGAR.png',
    type: 'Buy',
    city: 'Vijayawada'
  },
  {
    id: 14,
    title: 'Land',
    description: '4 acres near Kancherla, Non-layout, Near nandigama, Vijayawada-520015, Andhra Pradesh.',
    price: '6,500 sq ft',
    image: 'https://i.postimg.cc/g28TbyM9/KANCHARLA.png',
    type: 'New Projects',
    city: 'Vijayawada'
  },
  {
    id: 15,
    title: 'Land',
    description: '5 acres,G-Konduru, Vijayawada-520015, Andhra Pradesh.',
    price: '12,000 sq ft',
    image: 'https://i.postimg.cc/MK4CSpqh/G-KONDURU.png',
    type: 'New Projects',
    city: 'Vijayawada'
  },

];

let activeCategory = 'All';
let searchFilters = { location: '', budget: '', type: '' };

const propertyGrid = document.getElementById('propertyGrid');
const categoryButtons = document.querySelectorAll('.category-card');
const searchForm = document.getElementById('searchForm');
const appointmentForm = document.getElementById('appointmentForm');
const appointmentSubmitButton = document.getElementById('appointmentSubmitBtn');
const whatsappNumber = '919949483794';
const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatBody = document.getElementById('chatBody');
const allPropertiesPage = document.getElementById('allPropertiesPage');
const allPropertyGrid = document.getElementById('allPropertyGrid');
const viewAllBtn = document.getElementById('viewAllBtn');
const navAllPropertiesLink = document.getElementById('navAllPropertiesLink');
const backHomeBtn = document.getElementById('backHomeBtn');
const mainContent = document.getElementById('home');

function openWhatsApp(message = '') {
  const url = new URL(`https://wa.me/${whatsappNumber}`);
  if (message) {
    url.searchParams.set('text', message);
  }

  const fullUrl = url.toString();
  const newWindow = window.open(fullUrl, '_blank', 'noopener,noreferrer');
  if (!newWindow) {
    window.location.href = fullUrl;
  }
}

function parsePriceToRupees(priceText) {
  if (!priceText) return 0;

  const normalized = String(priceText).toLowerCase().replace(/,/g, '').trim();

  if (normalized.includes('crore') || normalized.includes('crores')) {
    const amount = Number.parseFloat(normalized.replace(/[^\d.]/g, ''));
    return Number.isFinite(amount) ? amount * 10000000 : 0;
  }

  if (normalized.includes('lakh') || normalized.includes('lakhs')) {
    const amount = Number.parseFloat(normalized.replace(/[^\d.]/g, ''));
    return Number.isFinite(amount) ? amount * 100000 : 0;
  }

  const digitsOnly = Number.parseFloat(normalized.replace(/[^\d.]/g, ''));
  return Number.isFinite(digitsOnly) ? digitsOnly : 0;
}

function normalizePropertyType(type) {
  return String(type || '').toLowerCase().replace(/\s+/g, '');
}

function matchesCategoryFilter(property, category) {
  const normalizedCategory = normalizePropertyType(category);
  const normalizedType = normalizePropertyType(property.type);

  if (!normalizedCategory || normalizedCategory === 'all') {
    return true;
  }

  if (normalizedCategory === 'buy') {
    return normalizedType === 'buy' || normalizedType === 'plot';
  }

  if (normalizedCategory === 'newprojects') {
    return normalizedType === 'newprojects' || normalizedType === 'newproject';
  }

  return normalizedType === normalizedCategory;
}

function getFilteredProperties() {
  return properties.filter((property) => {
    const categoryMatches = matchesCategoryFilter(property, activeCategory);
    const locationMatches = !searchFilters.location || property.city === searchFilters.location;
    const typeMatches = !searchFilters.type || normalizePropertyType(property.type) === normalizePropertyType(searchFilters.type) || (searchFilters.type === 'Buy' && (property.type === 'Buy' || property.type === 'Plot'));

    const budgetMatches = (() => {
      if (!searchFilters.budget) return true;
      const [min, max] = searchFilters.budget.split('-').map(Number);
      const priceValue = parsePriceToRupees(property.price);
      return priceValue >= min && priceValue <= max;
    })();

    return categoryMatches && locationMatches && typeMatches && budgetMatches;
  });
}

function renderProperties() {
  const filtered = getFilteredProperties();
  if (!filtered.length) {
    propertyGrid.innerHTML = '<div class="property-card"><h3>No properties found</h3><p>Try another category or search filter.</p></div>';
    return;
  }

  propertyGrid.innerHTML = filtered.map((property) => `
    <article class="property-card">
      <img src="${property.image}" alt="${property.title}" />
      <h3>${property.title}</h3>
      <p class="property-meta">${property.description}</p>
      <div class="property-price">${property.price}</div>
      <div class="property-actions">
        <a class="call-btn" href="tel:+919949483794">📞 Call Now</a>
        <a class="wa-btn" href="https://wa.me/919949483794?text=Hello%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
      </div>
    </article>
  `).join('');
}

function renderAllPropertiesPage() {
  allPropertyGrid.innerHTML = properties.map((property) => `
    <article class="property-card">
      <img src="${property.image}" alt="${property.title}" />
      <h3>${property.title}</h3>
      <p class="property-meta">${property.description}</p>
      <div class="property-details">
        <p><strong>Location:</strong> ${property.city}</p>
        <p><strong>Type:</strong> ${property.type}</p>
        <p><strong>Price:</strong> ${property.price}</p>
      </div>
      <div class="property-actions">
        <a class="call-btn" href="tel:+919949483794">📞 Call Now</a>
        <a class="wa-btn" href="https://wa.me/919949483794?text=Hello%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
      </div>
    </article>
  `).join('');
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((item) => item.classList.toggle('active', item === button));
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth', block: 'start' });
    renderProperties();
  });
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  searchFilters = {
    location: document.getElementById('locationSelect').value,
    budget: document.getElementById('budgetSelect').value,
    type: document.getElementById('typeSelect').value
  };
  document.getElementById('properties').scrollIntoView({ behavior: 'smooth', block: 'start' });
  renderProperties();
});

viewAllBtn.addEventListener('click', () => {
  showAllPropertiesPage();
});

navAllPropertiesLink.addEventListener('click', (event) => {
  event.preventDefault();
  showAllPropertiesPage();
});

backHomeBtn.addEventListener('click', () => {
  hideAllPropertiesPage();
});

let isAppointmentSubmitting = false;

function handleAppointmentSubmit() {
  if (isAppointmentSubmitting) {
    return;
  }

  isAppointmentSubmitting = true;
  if (appointmentSubmitButton) {
    appointmentSubmitButton.disabled = true;
    appointmentSubmitButton.textContent = 'Opening WhatsApp...';
  }

  const fullName = document.getElementById('fullName').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const propertyVisit = document.getElementById('propertyVisit').value;
  const visitDate = document.getElementById('visitDate').value;
  const visitTime = document.getElementById('visitTime').value;
  const message = `Hello JMR Infra Developers. I would like to book a property visit. Name: ${fullName}. Phone: ${phoneNumber}. Property: ${propertyVisit}. Date: ${visitDate}. Time: ${visitTime}.`;
  openWhatsApp(message);
  appointmentForm.reset();

  const confirmation = document.createElement('div');
  confirmation.className = 'property-card';
  confirmation.innerHTML = '<h3>Booking request ready</h3><p>WhatsApp opened with your booking details. Click Send in the chat to send it to the admin.</p>';
  appointmentForm.replaceWith(confirmation);
}

appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

if (appointmentSubmitButton) {
  appointmentSubmitButton.addEventListener('click', handleAppointmentSubmit);
}

function appendChatBubble(text, type) {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${type}`;
  bubble.textContent = text;
  chatBody.appendChild(bubble);
}

function showAllPropertiesPage() {
  mainContent.classList.add('hidden');
  allPropertiesPage.classList.remove('hidden');
  renderAllPropertiesPage();
  allPropertiesPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideAllPropertiesPage() {
  allPropertiesPage.classList.add('hidden');
  mainContent.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getBotReply(input) {
  const message = input.toLowerCase();
  if (['hi', 'hello', 'hey'].some((word) => message.includes(word))) {
    return 'Hello! I am JMR Infra Developers assistant. I can help you explore premium apartments, land, plots, and new projects across Vijayawada.';
  }
  if (message.includes('appointment')) {
    return 'You can book a property visit directly from the appointment section. We will confirm your slot and send the details on WhatsApp.';
  }
  if (message.includes('apartment')) {
    return 'We have premium apartments with modern amenities and excellent connectivity. You can view them in the featured properties section.';
  }
  if (message.includes('land')) {
    return 'Our land listings include clear title plots with strong long-term investment value. We can help you shortlist the right location.';
  }
  if (message.includes('new project') || message.includes('project')) {
    return 'We have upcoming new projects with contemporary planning, good access, and premium construction standards.';
  }
  if (message.includes('budget')) {
    return 'We can help you find homes in different budget ranges, from affordable options to premium villas and penthouses.';
  }
  if (message.includes('thanks')) {
    return 'Thank you for visiting! For more details, explore our website or contact us on WhatsApp.';
  }
  return 'Sorry, I don�t have that data. Please contact us on WhatsApp for quick assistance.';
}

chatToggle.addEventListener('click', () => chatPanel.classList.toggle('open'));
chatClose.addEventListener('click', () => chatPanel.classList.remove('open'));

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = chatInput.value.trim();
  if (!value) return;
  appendChatBubble(value, 'user');
  appendChatBubble(getBotReply(value), 'bot');
  chatInput.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;
});

renderProperties();
