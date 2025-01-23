const products = [
    { id: 1, title: "VT-LITE", details: "The VT LITE provides crucial visibility into the status of the vehicle and the behaviour of its driver.", features: "Driving Behavior Analysis, Remote Cut-off(Fuel/Power), Ignition Detection", price: "₹4,500", image: "/images/vt-lite.jpg" },
    { id: 2, title: "VT-PRO", details: "Multifunctional Vehicle Tracker with solid performance and reasonable price, allowing you to constantly keep an eye on your fleet.", features: "GPS & LBS Positioning, IP66 Dust & Water Resistance, Emergency SOS Button", price: "₹4,500", image: "/images/vt-pro.webp" },
    { id: 3, title: "VT-140", details: "VT-140 would be the best option for government fleet, courier delivery services or car rental companies.", features: "AIS 140 Certified, Support GPS, IRNSS, GLONASS, Embedded e-SIM", price: "₹4,500", image: "/images/vt-140.jpg" },
    { id: 4, title: "VT-CHARGER", details: "The tracker is a discreet car GPS tracker cleverly integrated into a lighter style USB charger.", features: "Embedded Microphone, Panic Button, Over-speed Alert", price: "₹4,500", image: "/images/vt-charger.jpg" },
    { id: 5, title: "VT-OBD", details: "Plug & Play OBD Tracker.", features: "Compact Size, Unplug Alert, GPS & LBS Positioning.", price: "₹4,500", image: "/images/vt-obd.jpg" },
    { id: 6, title: "VT-MAGNETIC(VT)", details: "Long-standby magnetic Traker.", features: "GPS & WiFi & LBS Positioning, Remote Listen-in, IPX5 Water Resistance", price: "₹4,500", image: "/images/vt-magnetic.webp" },
    { id: 7, title: "VT-MAGNETIC LITE (VT 2)", details: "Long-standby magnetic Tracker.", features: "GPS & WiFi & LBS Positioning, 6000mAh Rechargeable Battery, Remote Listen-in", price: "₹4,500", image: "/images/vt-magnetic-lite.jpg" },
    { id: 8, title: "VT-MAGNETIC PRO (VT 3)", details: "Long-standby magnetic Tracker.", features: "GPS & WiFi & LBS Positioning, Temper Alert, Strong Magnetic Base", price: "₹4,500", image: "/images/vt-magnetic-pro.jpg" },
    { id: 9, title: "VT-MINI", details: "Mini Personal Tracker.", features: "Geo-fence, Compact Size, Two-way Communication", price: "₹4,500", image: "/images/vt-mini.AVIF" },
    { id: 10, title: "VT-4", details: "Intelligent Personal Tracker.", features: "Intelligent Positioning Modes, Extra-Long Standby, GPS & WiFi & LBS Positioning", price: "₹4,500", image: "/images/vt-4.jpg" },
    { id: 11, title: "VT-6", details: "Mini Personal Tracker.", features: "GPS & WiFi & LBS Positioning, Low Battery Alert, Panic Button", price: "₹4,500", image: "/images/vt-6.jpg" },
    { id: 12, title: "VT-B1", details: "Solar GPS Tracker for bicycles.", features: "Quick & Simple Unlocking, Solar Powered, Rugged and Durable Design", price: "₹4,500", image: "/images/vt-b1.jpg" }
];

function generateCards() {
    const container = document.getElementById('cardsContainer');
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="card-content">
                <h2 class="card-title">${product.title}</h2>
                <p class="card-details">${product.details}</p>
                <p class="card-features">Features: ${product.features}</p>
                <p class="card-price">${product.price}</p>
                <a href="product${product.id}.html"><button>Shop Now</button>
            </div>
        `;
        // onclick="shopNow(${index})"
        container.appendChild(card);
    });
}

function shopNow(index) {
    alert(`Redirecting to purchase page for ${products[index].title}...`);
    // Add redirection logic here.
}

function filterCards() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    products.forEach((product, index) => {
        const card = cards[index];
        if (product.title.toLowerCase().includes(query) || product.details.toLowerCase().includes(query) || product.features.toLowerCase().includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

generateCards();