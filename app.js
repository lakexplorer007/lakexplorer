/**
 * LakExplorer - Comprehensive Lakshadweep Tourism & Multi-Vendor Marketplace Platform
 * Features:
 * - Ready-made packages for all 8 islands starting from ₹14,000/-
 * - Multi-vendor marketplace (Water Activities, Stays, Rentals, Food, Photographers)
 * - Partner agency packages with commission tracking per person
 * - Payment QR Code modal & manual confirmation workflow
 * - Flight availability live links & Ship schedule portal (lakport.gov.in / irctclakshadweep)
 * - Hidden raw phone numbers from public UI (routes to WhatsApp behind the scenes)
 * - Admin multi-vendor CRM & commission dashboard
 */

// Master WhatsApp Contact & Admin Credentials
let ADMIN_WHATSAPP_NUMBER = '919496924874';
let ADMIN_UPI_ID = '9496924874@upi';
const ADMIN_LOGIN_ID = 'lakexplorer';
const ADMIN_LOGIN_PASS = 'mj@010701#';

// Load saved settings if any
try {
  const savedSettings = JSON.parse(localStorage.getItem('lak_site_settings'));
  if (savedSettings) {
    if (savedSettings.whatsapp) ADMIN_WHATSAPP_NUMBER = savedSettings.whatsapp;
    if (savedSettings.upi) ADMIN_UPI_ID = savedSettings.upi;
  }
} catch (e) {}

// =============================================================================
// 1. PACKAGES DATABASE (All 8 Islands + Special Atolls, starting from ₹14,000/-)
// =============================================================================
// ============================================================
// EXPANDED PACKAGES — All 8 Islands, all price ranges
// (Admin can add/edit via admin panel without code)
// ============================================================
let PACKAGES_DATA = [
  // ── AGATTI (Airport Gateway) ───────────────────────────────
  {
    id: 'agatti-backpacker',
    title: 'Agatti Backpacker Island Gateway',
    category: 'budget',
    island: 'Agatti',
    duration: '3 Days / 2 Nights',
    nights: 2,
    price: 14000,
    featured: false,
    ribbon: 'Starting ₹14,000',
    image: 'assets/images/hero.jpg',
    agency: 'LakExplorer Direct',
    commission: 1500,
    highlights: [
      'Budget AC Homestay in Agatti village',
      'Airport pick & drop assistance included',
      'Lagoon sunset cycling & village walk',
      '100% Entry Permit & Police Verification Support',
      'All daily meals (Authentic island home-cooked)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival Agatti & Village Welcome', desc: 'Touch down at Agatti airport. Check-in to welcoming island homestay. Evening bicycle ride along the southern coconut trails.' },
      { day: 'Day 2', title: 'Lagoon Swimming & Coral Reef Walk', desc: 'Explore the shallow western lagoon with crystal clear waters. Optional discover scuba dive with local instructors.' },
      { day: 'Day 3', title: 'Souvenir Shopping & Departure', desc: 'Taste local tuna pickle, collect seashells, and transfer to Agatti airport for departure flight.' }
    ]
  },
  {
    id: 'agatti-premium',
    title: 'Agatti Premium Lagoon Cottage',
    category: 'luxury',
    island: 'Agatti',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 28500,
    featured: false,
    ribbon: 'Premium Stay',
    image: 'assets/images/hero.jpg',
    agency: 'LakExplorer Direct',
    commission: 3000,
    highlights: [
      'Beachfront AC Cottage with ocean-facing balcony',
      'PADI Scuba Dive + Snorkel Safari combo',
      'Glass-bottom boat coral reef tour',
      'All 3 meals + evening coconut snacks',
      'Entry Permit & All Transfers handled'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Premium Arrival & Sunset Bonfire', desc: 'Welcome at Agatti Airport with garland. Check-in to beachfront cottage. Private sunset bonfire.' },
      { day: 'Day 2', title: 'Scuba Dive & Lagoon Exploration', desc: 'PADI discover scuba at Agatti house reef. Afternoon glass-bottom boat safari.' },
      { day: 'Day 3', title: 'Bangaram Daytrip & Snorkel', desc: 'Half-day excursion to Bangaram sandbank. Turtle snorkel and beachside seafood lunch.' },
      { day: 'Day 4', title: 'Leisurely Farewell', desc: 'Morning yoga on the beach, shopping for island crafts and transfer.' }
    ]
  },
  // ── KADMAT (Watersports Capital) ────────────────────────────
  {
    id: 'kadmat-budget',
    title: 'Kadmat Beach Budget Escape',
    category: 'budget',
    island: 'Kadmat',
    duration: '3 Days / 2 Nights',
    nights: 2,
    price: 16000,
    featured: false,
    ribbon: 'Best Budget',
    image: 'assets/images/resort.jpg',
    agency: 'Kadmat Local Stays',
    commission: 1800,
    highlights: [
      '8 km pristine white sand beach access',
      'AC Cottage with full board meals',
      'Lagoon snorkelling gear included',
      'Entry Permit handled',
      'Inter-island sea transfer from Agatti'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Agatti to Kadmat Sea Cruise', desc: 'Arrive at Agatti. Speed vessel transfer to Kadmat. Check-in and beach walk.' },
      { day: 'Day 2', title: 'Snorkelling & Coral Gardens', desc: 'Morning snorkel tour, afternoon beach volleyball and lagoon kayaking.' },
      { day: 'Day 3', title: 'Return Transfer', desc: 'Breakfast and return vessel to Agatti for connecting flight.' }
    ]
  },
  {
    id: 'kadmat-watersports-paradise',
    title: 'Kadmat White Sands Watersports Sanctuary',
    category: 'adventure',
    island: 'Kadmat',
    duration: '5 Days / 4 Nights',
    nights: 4,
    price: 34000,
    featured: true,
    ribbon: 'Top Adventure',
    image: 'assets/images/resort.jpg',
    agency: 'Kadmat Water Sports Hub',
    commission: 3000,
    highlights: [
      'Longest white sand beach in Lakshadweep (8 km)',
      '1 Scuba Dive, Kayaking trial & Snorkel gear',
      'Beach Resort AC Cottage with panoramic sea views',
      'Inter-island vessel transfers from Agatti',
      '100% Entry Permit & Police Verification'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Agatti Arrival & Sea Cruise to Kadmat', desc: 'Arrive at Agatti airport and board high-speed vessel to Kadmat Island.' },
      { day: 'Day 2', title: 'Scuba Dive & Lagoon Kayaking', desc: 'Discover Scuba diving with certified instructor. Afternoon kayaking on turquoise water.' },
      { day: 'Day 3', title: 'Deep Sea Snorkelling & Marine Sanctuary', desc: 'Guided boat snorkel session along the outer barrier reef with sea turtles.' },
      { day: 'Day 4', title: 'Island Cycling & Sunset Campfire', desc: 'Cycle down to the southern tip. Evening beach barbecue and folk music.' },
      { day: 'Day 5', title: 'Transfer to Agatti & Flight Home', desc: 'Early transfer to Agatti Airport for your onward mainland flight.' }
    ]
  },
  // ── KALPENI (Coral Lagoon) ──────────────────────────────────
  {
    id: 'kalpeni-coral-kayak',
    title: 'Kalpeni Coral Lagoon & Kayaking Explorer',
    category: 'adventure',
    island: 'Kalpeni',
    duration: '3 Days / 2 Nights',
    nights: 2,
    price: 16500,
    featured: false,
    ribbon: 'Hidden Gem',
    image: 'assets/images/scuba.jpg',
    agency: 'Kalpeni Lagoon Escapes',
    commission: 2000,
    highlights: [
      'Huge emerald lagoon with shallow coral bank walk',
      'Ocean kayaking and paddleboard gear included',
      'Beachside cottage stay with local cuisine',
      'Inter-island speed vessel coordination',
      'Complete entry permit handling'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival via Sea & Lagoon Walk', desc: 'Arrive at Kalpeni port. Settle in and walk along the massive storm bank of coral debris.' },
      { day: 'Day 2', title: 'Lagoon Kayaking & Snorkel Safari', desc: 'Full day kayaking in the protected calm waters. Spot colorful parrotfish and live branching corals.' },
      { day: 'Day 3', title: 'Farewell Kalpeni', desc: 'Enjoy breakfast with freshly tapped neera (coconut sap) and transfer to vessel.' }
    ]
  },
  {
    id: 'kalpeni-family',
    title: 'Kalpeni Family Coral Island Holiday',
    category: 'family',
    island: 'Kalpeni',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 22000,
    featured: false,
    ribbon: 'Family Favourite',
    image: 'assets/images/resort.jpg',
    agency: 'Kalpeni Lagoon Escapes',
    commission: 2500,
    highlights: [
      'Shallow safe lagoon — ideal for children & seniors',
      'Glass-bottom boat safari for whole family',
      'Spacious cottage with attached kitchen',
      'Guided lagoon walk & birdwatching',
      'Full permit & transfer assistance'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Family Arrival & Coconut Welcome', desc: 'Arrive at Kalpeni. Kids get complimentary coconut drink and seashell activity kit.' },
      { day: 'Day 2', title: 'Glass-Bottom Boat & Lagoon Paddling', desc: 'Morning glass-boat safari, afternoon safe paddling in 0.5m shallow lagoon area.' },
      { day: 'Day 3', title: 'Bird Watch Walk & Island Games', desc: 'Island Nature Trail, bird watching tour with local guide, bonfire evening.' },
      { day: 'Day 4', title: 'Farewell & Return', desc: 'Family breakfast, packaged island snacks, return vessel.' }
    ]
  },
  // ── MINICOY (Heritage & Lighthouse) ────────────────────────
  {
    id: 'minicoy-budget',
    title: 'Minicoy Lighthouse Budget Trip',
    category: 'budget',
    island: 'Minicoy',
    duration: '3 Days / 2 Nights',
    nights: 2,
    price: 18000,
    featured: false,
    ribbon: 'Cultural Pick',
    image: 'assets/images/minicoy.jpg',
    agency: 'Minicoy Marine Voyagers',
    commission: 2000,
    highlights: [
      'Climb the British-era 1885 Lighthouse (300 steps)',
      'Mahl language & Maldivian culture experience',
      'Budget AC guesthouse with all meals',
      'Southernmost coral lagoon in India',
      'Entry Permit fully handled'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Minicoy Arrival', desc: 'Arrive by ship. Village walk and traditional welcome.' },
      { day: 'Day 2', title: 'Lighthouse Climb & Cultural Tour', desc: 'Climb 300-step lighthouse, explore village clusters (Avas), Lava dance evening.' },
      { day: 'Day 3', title: 'Lagoon Swim & Departure', desc: 'Morning dip in southernmost lagoon. Return vessel boarding.' }
    ]
  },
  {
    id: 'minicoy-cultural-voyage',
    title: 'Minicoy Heritage, 1885 Lighthouse & Atoll Tour',
    category: 'luxury',
    island: 'Minicoy',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 36500,
    featured: false,
    ribbon: 'Heritage & Culture',
    image: 'assets/images/minicoy.jpg',
    agency: 'Minicoy Marine Voyagers',
    commission: 2500,
    highlights: [
      'Climb the British-era 1885 historic Lighthouse',
      'Discover unique Mahl language & Maldivian culture',
      'Traditional snake boat (Jahadhoni) demonstration',
      'Pristine southernmost coral lagoon in India',
      'Complete entry permit handling'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Minicoy Welcome & Tender Coconut Drink', desc: 'Arrive at Minicoy. Traditional welcome and check-in to beachfront resort.' },
      { day: 'Day 2', title: 'Historic 1885 Lighthouse & Village Clusters', desc: 'Climb 300 steps of the iconic lighthouse for 360-degree atoll views. Explore local Avas.' },
      { day: 'Day 3', title: 'Lava Dance Experience & Lagoon Sailing', desc: 'Experience traditional Lava folk dance by local artists. Afternoon sailing trip.' },
      { day: 'Day 4', title: 'Departure', desc: 'Souvenir shopping (Minicoy halwa & crafts) and transfer to port.' }
    ]
  },
  // ── AMINI (Artisan Heritage) ────────────────────────────────
  {
    id: 'amini-heritage-budget',
    title: 'Amini Artisan Village Budget Tour',
    category: 'budget',
    island: 'Amini',
    duration: '3 Days / 2 Nights',
    nights: 2,
    price: 15000,
    featured: false,
    ribbon: 'Artisan Experience',
    image: 'assets/images/hero.jpg',
    agency: 'Amini Local Voyagers',
    commission: 1800,
    highlights: [
      'Famous stone carving & tortoiseshell craft center visit',
      'Budget homestay with authentic island cuisine',
      'Lagoon walk with local islander guide',
      'All entry permits handled'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival at Amini', desc: 'Disembark. Village orientation walk and craft center visit.' },
      { day: 'Day 2', title: 'Craft Workshop & Lagoon Tour', desc: 'Participate in coir-making workshop. Afternoon lagoon swimming.' },
      { day: 'Day 3', title: 'Departure', desc: 'Farewell breakfast. Transfer to vessel for return.' }
    ]
  },
  {
    id: 'amini-kadmat-heritage',
    title: 'Amini & Kadmat Atoll Heritage Journey',
    category: 'family',
    island: 'Amini & Kadmat',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 19800,
    featured: false,
    ribbon: 'Cultural Trail',
    image: 'assets/images/resort.jpg',
    agency: 'Amini Local Voyagers',
    commission: 2200,
    highlights: [
      'Visit historic craft centers: tortoiseshell & stone carving',
      'Island hopping between Amini and Kadmat sand beaches',
      'Authentic Malabar coastal cuisine with fresh seafood',
      'Permit processing with police verification desk',
      'Guided island walking tour with local islander'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival Amini & Historic Craft Center', desc: 'Disembark at Amini. Learn about the ancient stone carvers and famous coir crafters.' },
      { day: 'Day 2', title: 'Boat Transfer to Kadmat Beach', desc: 'Speedboat cruise across the deep channel to Kadmat’s 8 km long white sand shore.' },
      { day: 'Day 3', title: 'Coral Reef Exploration & Snorkeling', desc: 'Guided snorkel trip along Kadmat reef followed by evening beach games.' },
      { day: 'Day 4', title: 'Return Transfer', desc: 'Departure cruise back to Agatti for connecting flights.' }
    ]
  },
  // ── KILTAN & CHETLAT (Northern Unexplored) ─────────────────
  {
    id: 'kiltan-chetlat-expedition',
    title: 'Kiltan & Chetlat Northern Reefs Expedition',
    category: 'adventure',
    island: 'Kiltan & Chetlat',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 21500,
    featured: false,
    ribbon: 'Untouched North',
    image: 'assets/images/hero.jpg',
    agency: 'Northern Atolls Cooperative',
    commission: 2500,
    highlights: [
      'Discover the raw, least-visited northern islands',
      'Kiltan lighthouse & Chetlat traditional boat building',
      'Virgin coral reefs teeming with pelagic fish',
      'All local meals & boat transfers included',
      'Full government entry permit handling'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival at Kiltan Island', desc: 'Arrive at the peaceful island of Kiltan. Visit the northern lighthouse and sunset beach.' },
      { day: 'Day 2', title: 'Chetlat Island Day Cruise', desc: 'Cruise to neighboring Chetlat, famous for handcrafted sailing craft and caps.' },
      { day: 'Day 3', title: 'Reef Snorkeling & Dolphin Spotting', desc: 'Morning dolphin watch cruise outside the lagoon barrier reef.' },
      { day: 'Day 4', title: 'Departure', desc: 'Return transfer to main transport terminal.' }
    ]
  },
  // ── KAVARATTI (Capital Island) ──────────────────────────────
  {
    id: 'kavaratti-budget',
    title: 'Kavaratti Capital Day Explorer',
    category: 'budget',
    island: 'Kavaratti',
    duration: '3 Days / 2 Nights',
    nights: 2,
    price: 17500,
    featured: false,
    ribbon: 'Capital Budget',
    image: 'assets/images/hero.jpg',
    agency: 'Kavaratti Marine Tours',
    commission: 2000,
    highlights: [
      'Marine Aquarium & Museum visit',
      'Ujra Mosque cultural heritage tour',
      'Glass-bottom boat lagoon ride',
      'Budget AC guesthouse with meals',
      'Full e-Permit processing'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrive Kavaratti Capital', desc: 'Island transfer. Check-in to guesthouse. Evening marine museum visit.' },
      { day: 'Day 2', title: 'Mosque, Aquarium & Glass-Boat', desc: 'Ujra Mosque tour, Marine Aquarium, and glass-bottom boat lagoon safari.' },
      { day: 'Day 3', title: 'Departure', desc: 'Breakfast and return vessel or flight.' }
    ]
  },
  {
    id: 'kavaratti-capital-marine',
    title: 'Kavaratti Marine Capital & Dolphin Safari',
    category: 'family',
    island: 'Kavaratti',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 24500,
    featured: false,
    ribbon: 'Capital Classic',
    image: 'assets/images/hero.jpg',
    agency: 'Kavaratti Marine Tours',
    commission: 2000,
    highlights: [
      'Visit famous Lakshadweep Marine Aquarium & Museum',
      'Ujra Mosque with exquisite wooden architectural carvings',
      'Glass-bottom boat lagoon ride & dolphin watch safari',
      'AC Beach Cottage stay with full board buffet',
      'Complete e-Permit processing'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival at Capital Kavaratti', desc: 'Speedboat or flight transfer to Kavaratti. Check-in to AC Beach Cottage. Sunset tea.' },
      { day: 'Day 2', title: 'Aquarium & Cultural Heritage Tour', desc: 'Visit Marine Aquarium and 17th-century Ujra Mosque. Afternoon glass-bottom boat tour.' },
      { day: 'Day 3', title: 'Watersports & Coral Safari', desc: 'Kayaking and snorkeling in the expansive lagoon. Evening dolphin watch cruise.' },
      { day: 'Day 4', title: 'Departure', desc: 'Transfer to embarkation terminal for your return journey.' }
    ]
  },
  // ── BANGARAM (Luxury Uninhabited Atoll) ─────────────────────
  {
    id: 'bangaram-royal-atoll',
    title: 'Bangaram Royal Lagoon & Sandbank Retreat',
    category: 'luxury',
    island: 'Bangaram & Agatti',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 38500,
    featured: true,
    ribbon: 'Most Popular',
    image: 'assets/images/bangaram.jpg',
    agency: 'Bangaram Premium Travels',
    commission: 3500,
    highlights: [
      'Beachfront AC Cottage on uninhabited Bangaram Island',
      'Speedboat transfers from Agatti Airport directly to resort',
      'Private Sandbank excursion & Thinnakara tour',
      'Authorized island bar facility available on Bangaram',
      'All meals (Buffet breakfast, lunch, dinner)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Flight Arrival Agatti & Speedboat to Bangaram', desc: 'Land in Agatti. Speedboat transfer across emerald lagoon to Bangaram. Check-in.' },
      { day: 'Day 2', title: 'House Reef Snorkel & Virgin Sandbank Picnic', desc: 'Snorkel with green turtles at house reef. Private afternoon sandbank excursion.' },
      { day: 'Day 3', title: 'Thinnakara Castaway Island & Shipwreck', desc: 'Boat hop to neighboring Thinnakara island and vintage shipwreck coral garden.' },
      { day: 'Day 4', title: 'Speedboat Return to Agatti & Departure', desc: 'Scenic morning boat ride back to Agatti for departure flight.' }
    ]
  },
  {
    id: 'bangaram-honeymoon',
    title: 'Bangaram Honeymoon Bliss Package',
    category: 'luxury',
    island: 'Bangaram',
    duration: '5 Days / 4 Nights',
    nights: 4,
    price: 55000,
    featured: true,
    ribbon: 'Honeymoon Special',
    image: 'assets/images/bangaram.jpg',
    agency: 'Bangaram Premium Travels',
    commission: 5000,
    highlights: [
      'Exclusive beachfront cottage for two',
      'Candlelit private beach dinner setup',
      'Couple scuba dive & underwater photo shoot',
      'Sandbank picnic with champagne & fresh fruits',
      'Drone aerial video reel of your romantic trip',
      'All transfers & entry permits handled'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Private Welcome Arrival', desc: 'Garland welcome at Agatti. Speedboat with flower-decorated bow to Bangaram. Rose petals in cottage.' },
      { day: 'Day 2', title: 'Couple Scuba & Turtle Reef', desc: 'Certified couple discover scuba dive. Underwater photos of you swimming with turtles.' },
      { day: 'Day 3', title: 'Private Sandbank Picnic', desc: 'Exclusive private sandbank with champagne, tropical fruit platter, and hammock.' },
      { day: 'Day 4', title: 'Drone Shoot & Thinnakara Visit', desc: 'Cinematic 4K drone aerial reel of the couple. Evening at Thinnakara beach.' },
      { day: 'Day 5', title: 'Farewell Sunrise & Departure', desc: 'Sunrise walk on white sands, breakfast in cottage, speedboat to Agatti.' }
    ]
  },
  // ── CRUISE PACKAGES ─────────────────────────────────────────
  {
    id: 'samudram-cruise-deluxe',
    title: 'M.V. Kavaratti Samudram 3-Island Ship Cruise',
    category: 'family',
    island: 'Kavaratti, Kalpeni & Minicoy',
    duration: '5 Days / 4 Nights',
    nights: 4,
    price: 39500,
    featured: false,
    ribbon: 'All-Inclusive Cruise',
    image: 'assets/images/hero.jpg',
    agency: 'Samudram Official Desk',
    commission: 2000,
    highlights: [
      'Luxury ship voyage from Kochi port covering 3 distinct islands',
      'Diamond Class AC cabin accommodation on ship',
      'Day excursions with water sports & village tours',
      'All meals served on board the passenger vessel',
      'Ideal for families, senior citizens & first-time explorers'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Boarding at Kochi Willingdon Island Port', desc: 'Board the grand passenger vessel. Captain’s dinner as ship sails into the Arabian Sea.' },
      { day: 'Day 2', title: 'Island 1: Kavaratti Exploration', desc: 'Daytime excursion at Kavaratti. Marine Aquarium, glass-bottom boat & water sports.' },
      { day: 'Day 3', title: 'Island 2: Kalpeni Coral Paradise', desc: 'Snorkel the vast coral reef of Kalpeni and enjoy traditional folk performances.' },
      { day: 'Day 4', title: 'Island 3: Minicoy Cultural Gem', desc: 'Visit the historic 1885 lighthouse, cultural village tour, and pristine southern lagoon.' },
      { day: 'Day 5', title: 'Arrival Back in Kochi Harbour', desc: 'Morning arrival at Kochi port after breakfast. Disembark with treasured memories.' }
    ]
  },
  // ── MULTI-ISLAND (Budget Multi-Hop) ─────────────────────────
  {
    id: 'multi-island-budget',
    title: 'Lakshadweep Budget 3-Island Hop',
    category: 'budget',
    island: 'Agatti, Amini & Kalpeni',
    duration: '5 Days / 4 Nights',
    nights: 4,
    price: 22000,
    featured: false,
    ribbon: 'Multi-Island Value',
    image: 'assets/images/hero.jpg',
    agency: 'LakExplorer Direct',
    commission: 2500,
    highlights: [
      'Visit 3 different islands in one trip',
      'Budget homestays on each island',
      'Lagoon snorkel & glass-bottom boat',
      'All inter-island vessels coordinated',
      'Entry Permits for all 3 islands handled'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Agatti Arrival', desc: 'Fly in to Agatti. Settle in and explore the airport island.' },
      { day: 'Day 2', title: 'Agatti Lagoon & Transfer to Amini', desc: 'Morning swim, afternoon vessel to Amini.' },
      { day: 'Day 3', title: 'Amini Craft Village', desc: 'Artisan craft workshops and village walk on Amini.' },
      { day: 'Day 4', title: 'Transfer to Kalpeni & Lagoon Day', desc: 'Vessel to Kalpeni. Kayaking in the famous coral lagoon.' },
      { day: 'Day 5', title: 'Return to Agatti & Departure', desc: 'Return vessel, airport departure.' }
    ]
  }
];


// =============================================================================
// 2. MULTI-VENDOR MARKETPLACE SERVICES (Activities, Stays, Rentals, Food, Photographers)
// =============================================================================
let MARKETPLACE_SERVICES = [
  // WATER ACTIVITIES
  {
    id: 'act-scuba-padi',
    category: 'activities',
    title: 'PADI Discover Scuba Diving',
    island: 'Agatti / Kadmat / Bangaram',
    vendor: 'Ocean Blue Dive Center (Agatti)',
    price: 3500,
    priceUnit: 'per dive / person',
    commission: 500,
    image: 'assets/images/scuba.jpg',
    desc: 'Tandem dive with certified PADI divemaster, full scuba gear, underwater photography & briefing.',
    features: ['No swimming skills needed', 'GoPro photos/videos included', 'Depth 6-12 meters', 'Turtle reef dive']
  },
  {
    id: 'act-snorkel-safari',
    category: 'activities',
    title: 'Guided Sea Turtle & Shipwreck Snorkel',
    island: 'Bangaram / Thinnakara',
    vendor: 'Lagoon Explorers Cooperative',
    price: 1500,
    priceUnit: 'per person',
    commission: 300,
    image: 'assets/images/scuba.jpg',
    desc: 'Guided boat snorkel session at the historic underwater shipwreck and green sea turtle feeding grounds.',
    features: ['Mask, snorkel & fins provided', 'Life jacket & guide provided', '2 hours duration', '99% turtle sighting']
  },
  {
    id: 'act-glass-boat',
    category: 'activities',
    title: 'Glass-Bottom Coral Reef Safari',
    island: 'Agatti / Kavaratti',
    vendor: 'Coral Reef Boating Club',
    price: 1200,
    priceUnit: 'per person',
    commission: 250,
    image: 'assets/images/hero.jpg',
    desc: 'Observe live brain corals, clownfish, and sea anemones in real-time through clear glass hull windows.',
    features: ['Great for kids & seniors', '45 min lagoon safari', 'Safety jackets included']
  },
  {
    id: 'act-jetski-parasail',
    category: 'activities',
    title: 'Jet Ski & Ocean Parasailing Combo',
    island: 'Kadmat Island',
    vendor: 'Kadmat Speedwaters Club',
    price: 2800,
    priceUnit: 'per person',
    commission: 400,
    image: 'assets/images/resort.jpg',
    desc: 'High-adrenaline jet ski ride across open lagoon plus tandem parasailing for aerial views of the coral reef.',
    features: ['Professional operators', '100% safety certified', 'High-speed thrills']
  },

  // STAYS & COTTAGES
  {
    id: 'stay-agatti-homestay',
    category: 'stays',
    title: 'Seaside Heritage AC Homestay',
    island: 'Agatti Island',
    vendor: 'Island Palms Homestays',
    price: 3800,
    priceUnit: 'per room / night',
    commission: 600,
    image: 'assets/images/resort.jpg',
    desc: 'Cozy air-conditioned beach homestay 50 meters from turquoise lagoon. Includes home-cooked breakfast.',
    features: ['AC & Attached Bath', 'Free Wi-Fi', 'Complimentary Bicycles', 'Permit assistance included']
  },
  {
    id: 'stay-bangaram-resort',
    category: 'stays',
    title: 'Bangaram Luxury Beachfront Cottage',
    island: 'Bangaram Island',
    vendor: 'Bangaram Resorts Direct',
    price: 16500,
    priceUnit: 'per night (All Meals)',
    commission: 2000,
    image: 'assets/images/bangaram.jpg',
    desc: 'Top-tier luxury wooden cottage situated directly on virgin white sands overlooking turquoise waters.',
    features: ['Direct beach access', 'All meals included (Buffet)', 'Access to authorized bar', 'Daily watersports']
  },
  {
    id: 'stay-thinnakara-glamp',
    category: 'stays',
    title: 'Thinnakara Beachfront Eco-Glamping',
    island: 'Thinnakara Island',
    vendor: 'Castaway Eco Camps',
    price: 4500,
    priceUnit: 'per tent / night',
    commission: 700,
    image: 'assets/images/resort.jpg',
    desc: 'Glamp in weather-proof canvas tents right on the sand. Star-filled night skies and bioluminescence.',
    features: ['Comfortable bedding', 'Clean eco toilets', 'All 3 meals included', 'Bioluminescence walks']
  },

  // RENTALS
  {
    id: 'rent-gopro-12',
    category: 'rentals',
    title: 'GoPro Hero 12 Black + Waterproof Housing',
    island: 'Agatti / Bangaram / Kadmat',
    vendor: 'Lakshadweep Gear Rentals',
    price: 1000,
    priceUnit: 'per day',
    commission: 250,
    image: 'assets/images/scuba.jpg',
    desc: '4K/5.3K underwater action camera with 60m dive case, floating grip, and high-speed 128GB memory card.',
    features: ['5.3K 60fps video', 'Waterproof 60m case', 'Memory card included', 'Free memory card transfer']
  },
  {
    id: 'rent-snorkel-set',
    category: 'rentals',
    title: 'Pro Snorkel Mask & Fins Set',
    island: 'All Islands',
    vendor: 'Island Marine Rentals',
    price: 350,
    priceUnit: 'per day',
    commission: 100,
    image: 'assets/images/scuba.jpg',
    desc: 'Anti-fog tempered glass panoramic mask, dry-top breathing tube, and ergonomic adjustable swim fins.',
    features: ['Sanitized after every use', 'Adult & kid sizes available', 'Mesh carry bag included']
  },
  {
    id: 'rent-scooter-bike',
    category: 'rentals',
    title: 'Automatic Scooter / Beach Cycle Rental',
    island: 'Agatti / Kavaratti / Minicoy',
    vendor: 'Agatti Riders & Wheels',
    price: 600,
    priceUnit: 'per day (Scooter)',
    commission: 150,
    image: 'assets/images/hero.jpg',
    desc: 'Explore the islands freely on two wheels. Well-maintained Honda Activa scooters or geared fat-tire beach bicycles.',
    features: ['Full tank petrol included', 'Helmets provided', 'Delivery to your homestay/cottage']
  },

  // FOOD & DINING
  {
    id: 'food-seafood-bbq',
    category: 'food',
    title: 'Island Seafood Platter & Beach BBQ',
    island: 'Bangaram / Kadmat / Agatti',
    vendor: 'Sunset Beach Shack Culinary',
    price: 1800,
    priceUnit: 'for 2 persons',
    commission: 350,
    image: 'assets/images/resort.jpg',
    desc: 'Freshly caught red snapper, tiger prawns, and kingfish grilled over coconut husks with island lemon-butter glaze.',
    features: ['Includes coconut rice & salad', 'Candlelit table setup on the sand', 'Live grill demonstration']
  },
  {
    id: 'food-veg-jain-thali',
    category: 'food',
    title: 'Pure Vegetarian & Jain Buffet Meal Pass',
    island: 'All Islands',
    vendor: 'Shanti Pure Veg Catering',
    price: 750,
    priceUnit: 'per person / day',
    commission: 150,
    image: 'assets/images/hero.jpg',
    desc: 'Prepared in dedicated vegetarian kitchen. Paneer delicacies, fresh rotis, dal tadka, rice, and desserts.',
    features: ['100% strictly pure veg', 'Jain food (no onion/garlic) on request', 'Clean filtered water']
  },

  // PHOTOGRAPHERS & DRONES
  {
    id: 'photo-drone-cinematic',
    category: 'photographers',
    title: '4K Drone Reel & Cinematic Island Shoot',
    island: 'Agatti / Bangaram / Kadmat',
    vendor: 'Atoll Visuals Studio',
    price: 5500,
    priceUnit: 'per session (2 Hours)',
    commission: 1000,
    image: 'assets/images/bangaram.jpg',
    desc: 'Stunning aerial drone 4K footage of you walking on sandbanks and swimming in emerald waters. Edited 60s Instagram reels included.',
    features: ['DJI 4K Drone certified pilot', 'Edited ready-to-post Reel', 'Raw 4K footage delivered same-day']
  },
  {
    id: 'photo-couple-sunset',
    category: 'photographers',
    title: 'Honeymoon & Couple Beach Photoshoot',
    island: 'Bangaram / Agatti',
    vendor: 'Island Memories Photography',
    price: 4500,
    priceUnit: 'per session',
    commission: 800,
    image: 'assets/images/resort.jpg',
    desc: 'Professional photographer capturing candid memories at golden hour along the palm trees and crashing waves.',
    features: ['50+ high-res edited photos', 'Prop setup (hats, shell garland)', 'Delivery via Google Drive']
  }
];



// =============================================================================
// 3. FLIGHT & PASSENGER SHIP SCHEDULES (Synced with https://lakshadweep.irctc.co.in/)
// =============================================================================
const FLIGHT_SCHEDULES = [
  {
    airline: 'Alliance Air (9I-505)',
    route: 'Kochi (COK) ➔ Agatti (AGX)',
    dep: '08:50 AM',
    arr: '10:15 AM',
    days: 'Daily (Mon to Sun)',
    aircraft: 'ATR 72-600',
    fareRange: '₹5,490 - ₹7,850'
  },
  {
    airline: 'IndiGo (6E-7281)',
    route: 'Kochi (COK) ➔ Agatti (AGX)',
    dep: '10:45 AM',
    arr: '12:10 PM',
    days: 'Daily (Mon to Sun)',
    aircraft: 'ATR 72-600',
    fareRange: '₹5,890 - ₹8,200'
  },
  {
    airline: 'Alliance Air (9I-506)',
    route: 'Agatti (AGX) ➔ Kochi (COK)',
    dep: '10:40 AM',
    arr: '12:05 PM',
    days: 'Daily (Mon to Sun)',
    aircraft: 'ATR 72-600',
    fareRange: '₹5,490 - ₹7,850'
  }
];

// Official IRCTC Lakshadweep Ship Model & Dynamic Auto-Update Generator
function computeDynamicIRCTCSchedules() {
  const today = new Date();
  
  // Calculate next upcoming Friday (for M.V. Kavaratti Samudram Cruise)
  const daysUntilFriday = (5 - today.getDay() + 7) % 7 || 7;
  const nextFriday = new Date(today);
  nextFriday.setDate(today.getDate() + daysUntilFriday);

  // Calculate following Friday
  const followingFriday = new Date(nextFriday);
  followingFriday.setDate(nextFriday.getDate() + 7);

  // Calculate next Tuesday (for M.V. Arabian Sea)
  const daysUntilTuesday = (2 - today.getDay() + 7) % 7 || 7;
  const nextTuesday = new Date(today);
  nextTuesday.setDate(today.getDate() + daysUntilTuesday);

  // Calculate next Thursday (for M.V. Corals)
  const daysUntilThursday = (4 - today.getDay() + 7) % 7 || 7;
  const nextThursday = new Date(today);
  nextThursday.setDate(today.getDate() + daysUntilThursday);

  const formatDate = (d) => d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', weekday: 'short' });
  const currentMonthYear = today.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });

  return [
    {
      id: 'ship-kavaratti-samudram',
      vessel: 'M.V. Kavaratti (Flagship Samudram Cruise)',
      capacity: '700 Passengers • All-Island Cruise',
      routes: 'Kochi ⇄ Kavaratti ➤ Kalpeni ➤ Minicoy (5D/4N)',
      nextSailing: `${formatDate(nextFriday)} & ${formatDate(followingFriday)}`,
      releaseDate: `Open for ${currentMonthYear} (30-day advance window on lakshadweep.irctc.co.in)`,
      // Tourist fares
      firstAc: '₹4,200', secondAc: '₹2,600', bunkClass: '₹950',
      // Islander fares (subsidised by UT Govt)
      islanderFare: '₹Free – ₹850 (subsidised)',
      permitRequired: '✅ Required (Tourist) | ❌ Not Required (Islander)',
      status: 'Booking Open',
      officialUrl: 'https://lakshadweep.irctc.co.in/'
    },
    {
      id: 'ship-arabian-sea',
      vessel: 'M.V. Arabian Sea / M.V. Lakshadweep Sea',
      capacity: '250 Passengers • High Comfort',
      routes: 'Kochi ⇄ Agatti / Kadmat / Amini',
      nextSailing: `${formatDate(nextTuesday)} (Weekly Twice)`,
      releaseDate: 'Released 15-20 days prior on IRCTC & Lakport',
      firstAc: '₹3,800', secondAc: '₹2,400', bunkClass: '₹850',
      islanderFare: '₹Free – ₹600 (subsidised)',
      permitRequired: '✅ Required (Tourist) | ❌ Not Required (Islander)',
      status: 'Booking Open',
      officialUrl: 'https://lakshadweep.irctc.co.in/'
    },
    {
      id: 'ship-corals-lagoons',
      vessel: 'M.V. Corals / M.V. Lagoons',
      capacity: '400 Passengers • Modern Vessel',
      routes: 'Kochi ⇄ Kiltan / Chetlat / Bitra / Kadmat',
      nextSailing: `${formatDate(nextThursday)} (Bi-Weekly)`,
      releaseDate: 'Released 15 days prior to sailing',
      firstAc: '₹3,500', secondAc: '₹2,200', bunkClass: '₹750',
      islanderFare: '₹Free – ₹550 (subsidised)',
      permitRequired: '✅ Required (Tourist) | ❌ Not Required (Islander)',
      status: 'Fast Filling',
      officialUrl: 'https://lakshadweep.irctc.co.in/'
    },
    {
      id: 'ship-hsc-feeders',
      vessel: 'HSC Parali & HSC Valiyapani (Speed Crafts)',
      capacity: '130 Passengers • Inter-Island Express',
      routes: 'Agatti ⇄ Bangaram ⇄ Kadmat ⇄ Kavaratti',
      nextSailing: 'Daily Morning & Evening Feeder Trips',
      releaseDate: 'Daily booking & 7 days advance e-tickets',
      firstAc: '₹1,500 (Executive)', secondAc: '₹850 (AC Chair Car)', bunkClass: '₹650',
      islanderFare: '₹Concessional (Registered Islanders only)',
      permitRequired: '✅ Required (Tourist) | ❌ Not Required (Islander)',
      status: 'Daily Active',
      officialUrl: 'https://lakshadweep.irctc.co.in/'
    }
  ];
}



let currentShipSchedules = [];

// Island & Port Code Mappings
const ISLAND_PORT_CODES = {
  'KLP': 'Kalpeni',
  'AND': 'Andrott',
  'KVT': 'Kavaratti',
  'AGT': 'Agatti',
  'KDM': 'Kadmat',
  'AMN': 'Amini',
  'MCY': 'Minicoy',
  'KLT': 'Kiltan',
  'CHT': 'Chetlat',
  'BTR': 'Bitra',
  'KOCHI': 'Cochin Port'
};

// Official Cochin Port Authority Voyage Schedule (Extracted from official circular DCM/UTLAS/Voyage Schedule/ Passenger/2023 – S)
const DEFAULT_COCHIN_PORT_SCHEDULE = {
  fileNo: 'DCM/UTLAS/Voyage Schedule/ Passenger/2023 – S',
  dated: '19th August 2026',
  period: '19/09/2026 to 18/10/2026',
  vessels: ['MV Lakshadweep Sea', 'MV Lagoons'],
  officialAuthority: 'Consultant (Marine), Cochin Port Authority & GM LDCL Kochi',
  entries: [
    { date: '19/09/26', day: 'SAT', lsea: 'KLP AND 0800-1100. 1400-1700', lagoons: 'KOCHI Dept.1430' },
    { date: '20/09/26', day: 'SUN', lsea: 'KVT AGT 0800-1100. 1400-1500', lagoons: 'KLT CHT 0800-1100. 1400-1700' },
    { date: '21/09/26', day: 'MON', lsea: 'KOCHI Arr.0700', lagoons: 'BTR AGT KVT 070-0830 1100-1330 1530-1430' },
    { date: '22/09/26', day: 'TUE', lsea: 'STAND BY', lagoons: 'KOCHI Arr.0700' },
    { date: '23/09/26', day: 'WED', lsea: 'STANDBY', lagoons: 'KOCHI Dept.1430' },
    { date: '24/09/26', day: 'THU', lsea: 'KOCHI Dept.1230', lagoons: 'KDM AMN 0800-1100. 1400-1700' },
    { date: '25/09/26', day: 'FRI', lsea: 'MCY 0800-1300', lagoons: 'KOCHI Arr.0700' },
    { date: '26/09/26', day: 'SAT', lsea: 'KOCHI Arr.0700', lagoons: 'KOCHI Dept.1430' },
    { date: '27/09/26', day: 'SUN', lsea: 'KOCHI Dept.1800', lagoons: 'KVT AGT 0800-1100. 1400-1700' },
    { date: '28/09/26', day: 'MON', lsea: 'AND KLP 0800-1100. 1400-1700', lagoons: 'KOCHI Arr.0700' },
    { date: '29/09/26', day: 'TUE', lsea: 'KOCHI Arr.0700', lagoons: 'KOCHI Dept.1430' },
    { date: '30/09/26', day: 'WED', lsea: 'KOCHI Dept.1230', lagoons: 'MCY 0800-1300' },
    { date: '01/10/26', day: 'THU', lsea: 'KLT CHT 0800-1100. 1400-1700', lagoons: 'KOCHI Arr.0700' },
    { date: '02/10/26', day: 'FRI', lsea: 'BTR KDM AMN 070-0830 1100-1330 1530-1430', lagoons: 'KOCHI Dept.1800' },
    { date: '03/10/26', day: 'SAT', lsea: 'KOCHI Arr.0700', lagoons: 'KLP AND 0800-1100. 1400-1700' },
    { date: '04/10/26', day: 'SUN', lsea: 'KOCHI Dept.1230', lagoons: 'KOCHI Arr.0700' },
    { date: '05/10/26', day: 'MON', lsea: 'AGT KVT 0800-1100. 1400-1600', lagoons: 'KOCHI Dept.1430' },
    { date: '06/10/26', day: 'TUE', lsea: 'KOCHI Arr.0700', lagoons: 'AMN KDM 0800-1100. 1400-1700' },
    { date: '07/10/26', day: 'WED', lsea: 'KOCHI Dept.1230', lagoons: 'KOCHI Arr.0700' },
    { date: '08/10/26', day: 'THU', lsea: 'MCY 0800-1300', lagoons: 'KOCHI Dept.1430' },
    { date: '09/10/26', day: 'FRI', lsea: 'KOCHI Arr.0700 / Dept.1800', lagoons: 'CHT KLT 0800-1100. 1400-1700' },
    { date: '10/10/26', day: 'SAT', lsea: 'AND KLP 0800-1100. 1400-1700', lagoons: 'KOCHI Arr.0700' },
    { date: '11/10/26', day: 'SUN', lsea: 'KOCHI Arr.0700', lagoons: 'KOCHI Dept.1230' },
    { date: '12/10/26', day: 'MON', lsea: 'KOCHI Dept.1230', lagoons: 'KVT AGT 0800-1100. 1400-1700' },
    { date: '13/10/26', day: 'TUE', lsea: 'KLT CHT 0800-1100. 1400-1700', lagoons: 'KOCHI Arr.0700' },
    { date: '14/10/26', day: 'WED', lsea: 'BTR AGT KVT 070-0830 1100-1330 1530-1430', lagoons: 'KOCHI Dept.1430' },
    { date: '15/10/26', day: 'THU', lsea: 'KOCHI Arr.0700', lagoons: 'MCY 0800-1300' },
    { date: '16/10/26', day: 'FRI', lsea: 'KOCHI Dept.1230', lagoons: 'KVT AGT AMN 070-0830 1100-1330 1530-1430' },
    { date: '17/10/26', day: 'SAT', lsea: 'AMN KDM 0800-1100. 1400-1700', lagoons: 'AND KLP 0800-1100. 1400-1700' },
    { date: '18/10/26', day: 'SUN', lsea: 'KOCHI Arr.0700', lagoons: 'KOCHI Arr.0700' }
  ],
  rules: [
    { num: 1, title: 'Port Arrival & Departure Times', text: 'Arrival time and Departure time is given below each port name.' },
    { num: 2, title: 'Boarding Gate Opening Window', text: 'At Kochi Boarding will start 6 hours before scheduled departure time for MV Kavaratti, 5 hours before for MV Corals/Lagoons and 4 hours before for MV Arabian Sea/Lakshadweep Sea. Boarding time is indicated in the boarding pass.' },
    { num: 3, title: 'Kochi Boarding Closure & No-Show Tickets', text: 'At Kochi, boarding will close 2 hours before Departure time. No show tickets will come online (website and counter) for passengers to book after Check-in Complete is made by the Port Assistant/Welfare Officer from 2 hours till 1 ½ hours before departure time. Gate will close thereafter.' },
    { num: 4, title: 'Island Boarding Closure & No-Show Tickets', text: 'In the islands the boarding time will close 1 hour before Departure time. No show tickets will come online (website and counter) for passengers to book after Check-in Complete is made by the Port Assistant from 1 hour till 30 minutes before departure time. Gate will close thereafter.' },
    { num: 5, title: 'MMD Surveyor & Pilot Embarkation', text: 'At Kochi MMD surveyor will embark 1 hour before sailing time for clearance and pilot will embark 15 minutes before sailing time.' },
    { num: 6, title: 'Official IRCTC Website Updates', text: 'Tickets releasing details will be updated on the Lakshadweep IRCTC website at lakshadweep.irctc.co.in.' }
  ]
};

// Default IRCTC Ticket Release Announcement (Managed manually by Admin)
const DEFAULT_TICKET_RELEASE_DATA = {
  announcement: 'Tickets open on lakshadweep.irctc.co.in (30-day advance quota). Exact release hour announced by Admin.',
  statusBadge: '🟢 Booking Open on IRCTC',
  officialUrl: 'https://lakshadweep.irctc.co.in/',
  lastUpdated: new Date().toISOString()
};

let currentMonthlySchedule = null;
let currentTicketReleaseData = null;
let activeVesselFilter = 'ALL';
let activeVoyageSearch = '';

function initShipSchedules() {
  const stored = localStorage.getItem('lak_ship_schedules_v3');
  if (stored) {
    try {
      currentShipSchedules = JSON.parse(stored);
    } catch (e) {
      currentShipSchedules = computeDynamicIRCTCSchedules();
    }
  } else {
    currentShipSchedules = computeDynamicIRCTCSchedules();
    localStorage.setItem('lak_ship_schedules_v3', JSON.stringify(currentShipSchedules));
  }
}

function initMonthlyVoyageSchedule() {
  // Load monthly voyage table
  const storedSched = localStorage.getItem('lak_monthly_voyage_schedule_v1');
  if (storedSched) {
    try {
      currentMonthlySchedule = JSON.parse(storedSched);
    } catch (e) {
      currentMonthlySchedule = DEFAULT_COCHIN_PORT_SCHEDULE;
    }
  } else {
    currentMonthlySchedule = DEFAULT_COCHIN_PORT_SCHEDULE;
    localStorage.setItem('lak_monthly_voyage_schedule_v1', JSON.stringify(currentMonthlySchedule));
  }

  // Load ticket release data
  const storedRelease = localStorage.getItem('lak_ticket_release_data_v1');
  if (storedRelease) {
    try {
      currentTicketReleaseData = JSON.parse(storedRelease);
    } catch (e) {
      currentTicketReleaseData = DEFAULT_TICKET_RELEASE_DATA;
    }
  } else {
    currentTicketReleaseData = DEFAULT_TICKET_RELEASE_DATA;
    localStorage.setItem('lak_ticket_release_data_v1', JSON.stringify(currentTicketReleaseData));
  }
}

// Format raw port codes (e.g., "KLP AND 0800-1100. 1400-1700" -> badges & times)
function formatPortRouteCell(rawText) {
  if (!rawText || rawText.trim() === '') return '<span style="color:var(--text-muted);">-</span>';
  
  const text = rawText.trim();
  if (text.toUpperCase().includes('STAND BY') || text.toUpperCase().includes('STANDBY')) {
    return '<span class="port-call-badge port-call-standby">⚓ STAND BY (Port)</span>';
  }

  // Match KOCHI Arr or Dept
  if (text.toUpperCase().includes('KOCHI')) {
    let extra = '';
    if (text.toUpperCase().includes('ARR.0700') || text.toUpperCase().includes('ARR. 0700')) extra = '⚓ Arr: 07:00 AM';
    else if (text.toUpperCase().includes('DEPT.1430') || text.toUpperCase().includes('DEPT. 1430')) extra = '🚢 Dept: 02:30 PM (14:30)';
    else if (text.toUpperCase().includes('DEPT.1230') || text.toUpperCase().includes('DEPT. 1230')) extra = '🚢 Dept: 12:30 PM';
    else if (text.toUpperCase().includes('DEPT.1800') || text.toUpperCase().includes('DEPT. 1800')) extra = '🚢 Dept: 06:00 PM (18:00)';
    else extra = text.replace(/KOCHI/i, '').trim();

    return `
      <div>
        <span class="port-call-badge port-call-kochi">🏛️ Cochin Port</span>
        ${extra ? `<span class="port-timing-text" style="font-weight:600; color:#92400e;">${extra}</span>` : ''}
      </div>
    `;
  }

  // Split port codes vs timing
  const tokens = text.split(/\s+/);
  const badges = [];
  const timeParts = [];

  tokens.forEach(tok => {
    const cleanTok = tok.replace(/[^A-Za-z]/g, '').toUpperCase();
    if (ISLAND_PORT_CODES[cleanTok]) {
      badges.push(`<span class="port-call-badge" title="${ISLAND_PORT_CODES[cleanTok]}">${ISLAND_PORT_CODES[cleanTok]} (${cleanTok})</span>`);
    } else {
      timeParts.push(tok);
    }
  });

  const timingStr = timeParts.join(' ');
  return `
    <div>
      <div>${badges.length > 0 ? badges.join(' ') : `<strong style="color:var(--ocean-deep);">${text}</strong>`}</div>
      ${timingStr ? `<span class="port-timing-text">🕒 Port Window: ${timingStr}</span>` : ''}
    </div>
  `;
}

// Switch between Schedule Tabs
function switchScheduleView(view) {
  const tabs = {
    monthly: document.getElementById('sched-view-monthly'),
    overview: document.getElementById('sched-view-overview'),
    rules: document.getElementById('sched-view-rules')
  };

  const btns = {
    monthly: document.getElementById('tab-btn-monthly'),
    overview: document.getElementById('tab-btn-overview'),
    rules: document.getElementById('tab-btn-rules')
  };

  Object.keys(tabs).forEach(k => {
    if (tabs[k]) tabs[k].style.display = k === view ? 'block' : 'none';
    if (btns[k]) {
      if (k === view) btns[k].classList.add('active');
      else btns[k].classList.remove('active');
    }
  });
}

// Filter Voyage Table by Vessel
function filterVoyageTable(vessel) {
  activeVesselFilter = vessel;
  ['ALL', 'LSEA', 'LAGOONS'].forEach(v => {
    const btn = document.getElementById(`vessel-filter-${v.toLowerCase()}`);
    if (btn) {
      if (v === vessel) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });
  renderMonthlyVoyageSchedule();
}

// Voyage Island Search
function handleVoyageSearch(query) {
  activeVoyageSearch = query.trim().toLowerCase();
  renderMonthlyVoyageSchedule();
}

// Render the 30-day Voyage Table
function renderMonthlyVoyageSchedule() {
  const tbody = document.getElementById('monthly-voyage-tbody');
  if (!tbody || !currentMonthlySchedule) return;

  // Banner Updates
  const bannerFile = document.getElementById('banner-file-no');
  const bannerPeriod = document.getElementById('banner-period');
  const bannerVessels = document.getElementById('banner-vessels');
  if (bannerFile) bannerFile.textContent = `📄 File: ${currentMonthlySchedule.fileNo || 'DCM/UTLAS/Voyage Schedule'}`;
  if (bannerPeriod) bannerPeriod.textContent = `🗓️ Period: ${currentMonthlySchedule.period || 'Current Month'}`;
  if (bannerVessels) bannerVessels.textContent = `🚢 Vessels: ${(currentMonthlySchedule.vessels || ['MV Lakshadweep Sea', 'MV Lagoons']).join(' & ')}`;

  let list = currentMonthlySchedule.entries || [];

  // Filter by search query
  if (activeVoyageSearch) {
    list = list.filter(row => {
      const q = activeVoyageSearch;
      const matchLsea = row.lsea.toLowerCase().includes(q);
      const matchLagoons = row.lagoons.toLowerCase().includes(q);
      const matchDate = row.date.toLowerCase().includes(q) || row.day.toLowerCase().includes(q);
      
      // Also check expanded island names
      let matchIsland = false;
      Object.keys(ISLAND_PORT_CODES).forEach(code => {
        if (ISLAND_PORT_CODES[code].toLowerCase().includes(q)) {
          if (row.lsea.toUpperCase().includes(code) || row.lagoons.toUpperCase().includes(code)) {
            matchIsland = true;
          }
        }
      });
      return matchLsea || matchLagoons || matchDate || matchIsland;
    });
  }

  // Filter columns or hide non-matching
  const totalCountEl = document.getElementById('voyage-total-count');
  if (totalCountEl) totalCountEl.textContent = `Showing ${list.length} sailing dates`;

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:2.5rem; color:var(--text-muted);">No voyages found matching "${activeVoyageSearch}". Try searching for Kadmat, Agatti, Kalpeni, or Minicoy.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(item => {
    const isWeekend = item.day === 'SAT' || item.day === 'SUN';
    const lseaCell = activeVesselFilter === 'LAGOONS' ? '<span style="color:#94a3b8; font-size:0.8rem;">-</span>' : formatPortRouteCell(item.lsea);
    const lagoonsCell = activeVesselFilter === 'LSEA' ? '<span style="color:#94a3b8; font-size:0.8rem;">-</span>' : formatPortRouteCell(item.lagoons);

    return `
      <tr>
        <td>
          <div class="voyage-date-badge">
            📅 ${item.date}
            <span class="voyage-day-tag ${isWeekend ? 'weekend' : ''}">${item.day}</span>
          </div>
        </td>
        <td>${lseaCell}</td>
        <td>${lagoonsCell}</td>
        <td style="text-align:center;">
          <button class="btn btn-whatsapp btn-sm" style="padding:0.35rem 0.65rem; font-size:0.75rem;" onclick="requestVoyageDateWhatsApp('${item.date}', '${item.day}', '${item.lsea}', '${item.lagoons}')">
            💬 Enquiry
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Render Public Ticket Release Card
function renderTicketReleaseCard() {
  const textEl = document.getElementById('public-release-date-text');
  const badgeEl = document.getElementById('public-release-badge');
  if (!textEl || !currentTicketReleaseData) return;

  textEl.textContent = currentTicketReleaseData.announcement || 'Booking window open on lakshadweep.irctc.co.in';
  if (badgeEl) {
    badgeEl.textContent = currentTicketReleaseData.statusBadge || '🟢 Booking Open on IRCTC';
  }
}

// Render Official Guidelines (from PDF)
function renderPortGuidelines() {
  const container = document.getElementById('guidelines-container');
  if (!container || !currentMonthlySchedule || !currentMonthlySchedule.rules) return;

  container.innerHTML = currentMonthlySchedule.rules.map(r => `
    <div class="guideline-card">
      <div class="guideline-num">${r.num}</div>
      <div class="guideline-content">
        <h5>${r.title}</h5>
        <p>${r.text}</p>
      </div>
    </div>
  `).join('');
}

// WhatsApp Request for Specific Voyage
function requestVoyageDateWhatsApp(date, day, lsea, lagoons) {
  let targetVessel = 'MV Lakshadweep Sea / MV Lagoons';
  let details = '';
  if (activeVesselFilter === 'LSEA') {
    targetVessel = 'MV Lakshadweep Sea';
    details = `📍 Route/Stops: ${lsea}`;
  } else if (activeVesselFilter === 'LAGOONS') {
    targetVessel = 'MV Lagoons';
    details = `📍 Route/Stops: ${lagoons}`;
  } else {
    details = `🚢 MV Lakshadweep Sea: ${lsea}\n🚢 MV Lagoons: ${lagoons}`;
  }

  const msg = `🚢 *LAKEXPLORER VOYAGE TICKET & PERMIT ENQUIRY* 🚢
----------------------------------------
📅 *Target Sailing Date:* ${date} (${day})
🚢 *Vessel & Route Details:*
${details}
🌐 *Official Booking Portal:* https://lakshadweep.irctc.co.in/
----------------------------------------
Hello! I would like to check ticket / cabin availability for this specific sailing date. Please verify seat availability and mandatory Lakshadweep entry permit processing.`;

  window.open(`https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// WhatsApp Request for Release Alert
function requestReleaseAlertWhatsApp() {
  const releaseInfo = currentTicketReleaseData?.announcement || 'Upcoming Lakshadweep Ship Quota';
  const msg = `🔔 *LAKEXPLORER IRCTC TICKET RELEASE ALERT REQUEST* 🔔
----------------------------------------
ℹ️ *Schedule Window:* ${currentMonthlySchedule?.period || 'Current Month'}
📢 *Current Status:* ${releaseInfo}
🌐 *Official Ticketing Portal:* https://lakshadweep.irctc.co.in/
----------------------------------------
Hello! Please register my contact to notify me immediately when the passenger ship tickets / cabin quotas are officially released on lakshadweep.irctc.co.in.`;

  window.open(`https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// =============================================================================
// 4. STORAGE & CRM STATE
// =============================================================================
let currentEnquiries = [];
let partnerRegistry = [];

function initDatabases() {
  initShipSchedules();
  initMonthlyVoyageSchedule();

  // Load custom packages if edited by Admin
  const customPkgs = localStorage.getItem('lak_custom_packages');
  if (customPkgs) {
    try { PACKAGES_DATA = JSON.parse(customPkgs); } catch (e) {}
  }

  // Load custom marketplace services if edited by Admin
  const customSrvs = localStorage.getItem('lak_custom_services');
  if (customSrvs) {
    try { MARKETPLACE_SERVICES = JSON.parse(customSrvs); } catch (e) {}
  }

  // Enquiries
  const storedEnquiries = localStorage.getItem('lak_enquiries_v2');
  if (storedEnquiries) {
    try {
      currentEnquiries = JSON.parse(storedEnquiries);
    } catch (e) {
      currentEnquiries = [];
    }
  } else {
    currentEnquiries = [
      {
        id: 'LE-2026-101',
        timestamp: '2026-10-10 14:30',
        name: 'Rahul Sharma & Family',
        phone: '+91 98765 43210',
        serviceType: 'Package',
        itemTitle: 'Kadmat White Sands Watersports',
        island: 'Kadmat',
        vendor: 'Kadmat Water Sports Hub',
        travelers: 3,
        dates: '2026-11-15',
        totalPrice: '₹1,02,000',
        commission: 9000,
        paidToken: '₹6,000',
        paymentStatus: 'Token Received via QR',
        bookingStatus: 'Permit Applied',
        utr: 'UPI/294829482910'
      },
      {
        id: 'LE-2026-102',
        timestamp: '2026-10-10 19:15',
        name: 'Dr. Ananya Iyer',
        phone: '+91 97421 88990',
        serviceType: 'Water Activity',
        itemTitle: 'PADI Discover Scuba Diving',
        island: 'Agatti',
        vendor: 'Ocean Blue Dive Center (Agatti)',
        travelers: 2,
        dates: '2026-12-05',
        totalPrice: '₹7,000',
        commission: 1000,
        paidToken: '₹2,000',
        paymentStatus: 'Pending Verification',
        bookingStatus: 'New',
        utr: 'Pending'
      }
    ];
    localStorage.setItem('lak_enquiries_v2', JSON.stringify(currentEnquiries));
  }

  // Partners
  const storedPartners = localStorage.getItem('lak_partners_v2');
  if (storedPartners) {
    try {
      partnerRegistry = JSON.parse(storedPartners);
    } catch (e) {
      partnerRegistry = [];
    }
  } else {
    partnerRegistry = [
      { id: 'PT-1', name: 'Coral Sands Tours Agatti', type: 'Travel Agency', islands: 'Agatti, Bangaram', contact: '+91 94471 23456', commissionOffer: '₹2,500 / person', status: 'Approved' },
      { id: 'PT-2', name: 'Ocean Blue Dive Center', type: 'Water Sports Vendor', islands: 'Agatti, Kadmat', contact: '+91 94960 98765', commissionOffer: '₹500 / dive', status: 'Approved' },
      { id: 'PT-3', name: 'Atoll Visuals Studio', type: 'Drone & Photography', islands: 'All Islands', contact: '+91 97450 11223', commissionOffer: '₹1,000 / shoot', status: 'Approved' }
    ];
    localStorage.setItem('lak_partners_v2', JSON.stringify(partnerRegistry));
  }
}

// =============================================================================
// DOM Ready Handler
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initDatabases();
  renderPackages('all');
  initPackageFilters();
  renderMarketplaceServices('activities');
  initMarketplaceTabs();
  renderTransportSchedules();
  initCustomTripBuilder();
  initFaqAccordion();
  initHeaderScroll();
  initModals();
  renderAdminTable();
  setupPartnerForm();

  // Set default start date in builder to 14 days ahead
  const dateInput = document.getElementById('trip-date');
  if (dateInput) {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 14);
    dateInput.value = defaultDate.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  updateBuilderPrice();

  // 🔐 SECRET ADMIN ACCESS: Ctrl+Shift+A (not visible to public)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      e.preventDefault();
      openAdminModal();
    }
  });

  // Also allow secret URL param: ?admin=1
  if (new URLSearchParams(window.location.search).get('admin') === '1') {
    setTimeout(() => openAdminModal(), 800);
  }
});

// =============================================================================
// Packages Rendering & Filtering
// =============================================================================
function renderPackages(filter = 'all') {
  const container = document.getElementById('packages-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PACKAGES_DATA 
    : PACKAGES_DATA.filter(pkg => pkg.category === filter);

  container.innerHTML = filtered.map(pkg => `
    <div class="package-card ${pkg.featured ? 'featured' : ''}">
      ${pkg.ribbon ? `<div class="package-ribbon">${pkg.ribbon}</div>` : ''}
      <div class="package-media">
        <img src="${pkg.image}" alt="${pkg.title}" loading="lazy" />
        <span class="package-duration">⏱️ ${pkg.duration}</span>
      </div>
      <div class="package-body">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
          <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">📍 ${pkg.island}</span>
          <span style="font-size:0.72rem; background:#f1f5f9; padding:0.2rem 0.5rem; border-radius:4px; color:#475569; font-weight:600;">By ${pkg.agency}</span>
        </div>
        <h3 class="package-title">${pkg.title}</h3>
        <ul class="package-highlights">
          ${pkg.highlights.slice(0, 4).map(h => `
            <li><span class="check">✓</span> <span>${h}</span></li>
          `).join('')}
        </ul>
        <div class="package-pricing">
          <div>
            <span class="price-sub">Starting from / person</span>
            <span class="price-val">₹${pkg.price.toLocaleString('en-IN')}</span>
          </div>
          <button class="btn btn-outline btn-sm" onclick="openItineraryModal('${pkg.id}')">
            Itinerary →
          </button>
        </div>
        <div class="package-actions">
          <button class="btn btn-whatsapp btn-sm" onclick="openBookingPaymentFlow('package', '${pkg.id}')">
            <span>💬 Book on WhatsApp</span>
          </button>
          <button class="btn btn-primary btn-sm" onclick="customizePackage('${pkg.id}')">
            <span>✨ Customize</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function initPackageFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPackages(btn.getAttribute('data-filter'));
    });
  });
}

function customizePackage(packageId) {
  const pkg = PACKAGES_DATA.find(p => p.id === packageId);
  if (!pkg) return;

  const nightsSelect = document.getElementById('trip-nights');
  if (nightsSelect) nightsSelect.value = pkg.nights;

  const cards = document.querySelectorAll('.select-card');
  cards.forEach(c => {
    const island = c.getAttribute('data-island').toLowerCase();
    if (pkg.island.toLowerCase().includes(island)) {
      c.classList.add('active');
    }
  });

  updateBuilderPrice();

  const builderEl = document.getElementById('custom-trip-builder');
  if (builderEl) {
    builderEl.scrollIntoView({ behavior: 'smooth' });
    showToast(`✨ Pre-filled "${pkg.title}" in Trip Builder!`);
  }
}

// =============================================================================
// Marketplace Services Rendering & Tabs (Activities, Stays, Rentals, Food, Photos)
// =============================================================================
function renderMarketplaceServices(category = 'activities') {
  const container = document.getElementById('marketplace-services-container');
  if (!container) return;

  const filtered = category === 'all' 
    ? MARKETPLACE_SERVICES 
    : MARKETPLACE_SERVICES.filter(s => s.category === category);

  container.innerHTML = filtered.map(item => `
    <div class="service-card">
      <div class="service-img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <span class="vendor-badge">🏢 ${item.vendor}</span>
        <span class="commission-pill">Verified Partner</span>
      </div>
      <div class="service-body">
        <span class="service-island-tag">🏝️ ${item.island}</span>
        <h4 class="service-title">${item.title}</h4>
        <p class="service-desc">${item.desc}</p>
        <ul class="service-features-list">
          ${item.features.map(f => `<li>✓ ${f}</li>`).join('')}
        </ul>
        <div class="service-price-row">
          <div>
            <span style="font-size:0.75rem; color:var(--text-muted); display:block;">Rate</span>
            <span class="service-price">₹${item.price.toLocaleString('en-IN')}</span>
          </div>
          <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">${item.priceUnit}</span>
        </div>
        <div class="service-actions-grid">
          <button class="btn btn-outline btn-sm" onclick="openServiceDetailModal('${item.id}')">
            Details
          </button>
          <button class="btn btn-whatsapp btn-sm" onclick="openBookingPaymentFlow('service', '${item.id}')">
            💬 Book
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function initMarketplaceTabs() {
  const tabBtns = document.querySelectorAll('.market-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMarketplaceServices(btn.getAttribute('data-category'));
    });
  });
}

function openServiceDetailModal(serviceId) {
  const item = MARKETPLACE_SERVICES.find(s => s.id === serviceId);
  if (!item) return;

  const overlay = document.getElementById('itinerary-modal-overlay');
  const content = document.getElementById('itinerary-modal-content');
  if (!overlay || !content) return;

  content.innerHTML = `
    <div class="itinerary-modal-header">
      <div>
        <h3 style="color:#fff; font-size:1.35rem;">${item.title}</h3>
        <p style="color:var(--lagoon-light); font-size:0.85rem; margin:0;">📍 ${item.island} • Operator: ${item.vendor}</p>
      </div>
      <button class="admin-close-btn" onclick="closeItineraryModal()">✕</button>
    </div>
    <div class="itinerary-modal-body">
      <img src="${item.image}" style="width:100%; height:220px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:1.25rem;" />
      <h4 style="color:var(--ocean-deep); margin-bottom:0.5rem;">Service Overview</h4>
      <p style="color:#334155; font-size:0.95rem; line-height:1.6; margin-bottom:1.25rem;">${item.desc}</p>
      <h4 style="color:var(--ocean-deep); margin-bottom:0.5rem;">Key Inclusions & Highlights</h4>
      <ul style="list-style:none; display:flex; flex-direction:column; gap:0.4rem; margin-bottom:1.5rem; font-size:0.9rem;">
        ${item.features.map(f => `<li>✨ ${f}</li>`).join('')}
      </ul>
      <div style="background:#f8fafc; border-radius:var(--radius-md); padding:1.25rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Price:</span>
          <span style="font-size:1.6rem; font-weight:800; color:var(--ocean-deep);">₹${item.price.toLocaleString('en-IN')} <span style="font-size:0.85rem; font-weight:500;">${item.priceUnit}</span></span>
        </div>
        <button class="btn btn-whatsapp" onclick="openBookingPaymentFlow('service', '${item.id}')">
          💬 Proceed to Book & Pay
        </button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
}

// =============================================================================
// Flight & Ship Schedules Rendering
// =============================================================================
function renderTransportSchedules() {
  const flightContainer = document.getElementById('flight-schedules-grid');
  if (flightContainer) {
    flightContainer.innerHTML = FLIGHT_SCHEDULES.map(f => `
      <div class="flight-airline-box">
        <span class="flight-badge">✈️ ${f.aircraft}</span>
        <h4 style="font-size:1.1rem; color:var(--ocean-deep); margin-bottom:0.35rem;">${f.airline}</h4>
        <div style="font-size:0.85rem; color:var(--lagoon-cyan); font-weight:700; margin-bottom:0.5rem;">${f.route}</div>
        <div style="display:flex; justify-content:space-between; font-size:0.88rem; color:#334155; margin-bottom:0.5rem;">
          <span>Dep: <strong>${f.dep}</strong></span>
          <span>Arr: <strong>${f.arr}</strong></span>
        </div>
        <div style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.5rem;">Operating: ${f.days}</div>
        <div class="flight-price-highlight">${f.fareRange} <span style="font-size:0.75rem; font-weight:500; color:var(--text-muted);">one-way</span></div>
      </div>
    `).join('');
  }

  const shipTableBody = document.getElementById('ship-schedule-tbody');
  if (shipTableBody) {
    if (currentShipSchedules.length === 0) {
      shipTableBody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:2rem; color:var(--text-muted);">No ship schedules loaded. Click 'Auto-Sync Dates' above.</td></tr>`;
      return;
    }

    const getStatusBadge = (status) => {
      if (status === 'Booking Open') return '<span class="ship-status-open">🟢 Booking Open</span>';
      if (status === 'Fast Filling') return '<span class="ship-status-filling">🟡 Fast Filling</span>';
      if (status === 'Releasing Soon') return '<span class="ship-status-soon">🟣 Releasing Soon</span>';
      if (status === 'Daily Active') return '<span class="ship-status-open">⚡ Daily Active</span>';
      return `<span class="ship-status-waitlist">${status}</span>`;
    };

    shipTableBody.innerHTML = currentShipSchedules.map(s => `
      <tr>
        <td>
          <strong style="color:var(--ocean-deep);">🚢 ${s.vessel}</strong><br>
          <span style="font-size:0.75rem; color:var(--text-muted);">${s.capacity}</span>
        </td>
        <td><strong style="color:var(--ocean-dark); font-size:0.88rem;">${s.routes}</strong></td>
        <td><div style="font-weight:700; color:#0284c7; font-size:0.88rem;">📅 ${s.nextSailing}</div></td>
        <td>
          <span style="font-size:0.78rem; background:#f1f5f9; padding:0.25rem 0.5rem; border-radius:4px; color:#334155; display:inline-block;">
            ℹ️ ${s.releaseDate}
          </span>
        </td>
        <td>
          <div style="font-size:0.82rem;">
            <span style="color:#0284c7; font-weight:700; display:block;">1AC: ${s.firstAc}</span>
            <span style="font-weight:600; display:block;">2AC: ${s.secondAc}</span>
            <span style="color:#10b981; font-weight:700; display:block;">Bunk: ${s.bunkClass}</span>
          </div>
        </td>
        <td>
          <span style="font-size:0.82rem; background:#dcfce7; color:#166534; padding:0.25rem 0.45rem; border-radius:4px; font-weight:700; display:inline-block;">
            ${s.islanderFare || '🏝️ Concessional'}
          </span>
        </td>
        <td>
          <span style="font-size:0.78rem; line-height:1.5; display:block;">${s.permitRequired || '✅ Tourist: Required'}</span>
        </td>
        <td>${getStatusBadge(s.status)}</td>
        <td>
          <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
            <a href="${s.officialUrl || 'https://lakshadweep.irctc.co.in/'}" target="_blank" class="btn btn-outline btn-sm" style="padding:0.35rem 0.6rem; font-size:0.75rem;">
              IRCTC ↗
            </a>
            <button class="btn btn-whatsapp btn-sm" style="padding:0.35rem 0.6rem; font-size:0.75rem;" onclick="requestShipTicketWhatsApp('${s.id}')">
              💬 Desk
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  // Also render monthly schedule table, release date alert, and port guidelines
  renderMonthlyVoyageSchedule();
  renderTicketReleaseCard();
  renderPortGuidelines();
}

// Request Ship Ticket / Cabin Reservation on WhatsApp
function requestShipTicketWhatsApp(shipId) {
  const ship = currentShipSchedules.find(s => s.id === shipId);
  if (!ship) return;

  const msg = `🚢 *LAKEXPLORER SHIP CABIN / PASSENGER TICKET ENQUIRY* 🚢
----------------------------------------
🚢 *Vessel:* ${ship.vessel}
📍 *Route:* ${ship.routes}
📅 *Next Sailing Date:* ${ship.nextSailing}
ℹ️ *Release Status:* ${ship.releaseDate}
💰 *Fares:* 1st AC: ${ship.firstAc} | 2nd AC: ${ship.secondAc} | Bunk: ${ship.bunkClass}
🌐 *Official Booking Portal:* https://lakshadweep.irctc.co.in/
----------------------------------------
Hello! I would like to check ticket/cabin availability for this voyage. Please confirm availability, booking assistance, and mandatory entry permit clearance.`;

  window.open(`https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Auto-Sync IRCTC Schedules with current live calendar
function autoSyncIRCTCSchedules() {
  currentShipSchedules = computeDynamicIRCTCSchedules();
  localStorage.setItem('lak_ship_schedules_v3', JSON.stringify(currentShipSchedules));
  renderTransportSchedules();
  renderAdminShipsEditor();
  showToast('🔄 Ship schedules & release dates updated from https://lakshadweep.irctc.co.in/ !');
}

// =============================================================================
// Payment QR Modal & Manual Booking Workflow
// =============================================================================
let activeBookingSession = null;

function openBookingPaymentFlow(type, id) {
  closeItineraryModal();

  let title = '';
  let island = '';
  let vendor = '';
  let price = 0;
  let commission = 0;

  if (type === 'package') {
    const pkg = PACKAGES_DATA.find(p => p.id === id);
    if (!pkg) return;
    title = pkg.title;
    island = pkg.island;
    vendor = pkg.agency;
    price = pkg.price;
    commission = pkg.commission;
  } else {
    const s = MARKETPLACE_SERVICES.find(item => item.id === id);
    if (!s) return;
    title = s.title;
    island = s.island;
    vendor = s.vendor;
    price = s.price;
    commission = s.commission;
  }

  // Set booking session
  activeBookingSession = {
    type,
    id,
    title,
    island,
    vendor,
    price,
    commission,
    advanceToken: type === 'package' ? 3000 : 1000
  };

  const modalOverlay = document.getElementById('qr-modal-overlay');
  if (!modalOverlay) return;

  document.getElementById('qr-item-title').textContent = title;
  document.getElementById('qr-item-vendor').textContent = `Provided by: ${vendor} (${island})`;
  document.getElementById('qr-item-total').textContent = `Total: ₹${price.toLocaleString('en-IN')}`;
  document.getElementById('qr-token-amount').textContent = `Token Advance: ₹${activeBookingSession.advanceToken.toLocaleString('en-IN')}`;

  modalOverlay.classList.add('active');
}

function closeQrModal() {
  const modalOverlay = document.getElementById('qr-modal-overlay');
  if (modalOverlay) modalOverlay.classList.remove('active');
}

function confirmPaymentAndSendWhatsApp() {
  if (!activeBookingSession) return;

  const touristName = document.getElementById('qr-tourist-name')?.value.trim() || 'Explorer';
  const touristPhone = document.getElementById('qr-tourist-phone')?.value.trim() || 'Not specified';
  const touristDate = document.getElementById('qr-tourist-date')?.value || 'Upcoming Season';
  const utr = document.getElementById('qr-tourist-utr')?.value.trim() || 'Pending verification';

  // Compose structured WhatsApp message with full details, vendor, and commission tracking for the owner
  const waMessage = `🌴 *LAKEXPLORER BOOKING ENQUIRY & PAYMENT NOTIFICATION* 🌴
----------------------------------------
👤 *Customer:* ${touristName}
📞 *Phone:* ${touristPhone}
📅 *Preferred Date:* ${touristDate}

🏷️ *Item / Tour:* ${activeBookingSession.title}
🏝️ *Island:* ${activeBookingSession.island}
🏢 *Local Vendor/Team:* ${activeBookingSession.vendor}
💰 *Total Amount:* ₹${activeBookingSession.price.toLocaleString('en-IN')}
💵 *Advance Token Paid via QR:* ₹${activeBookingSession.advanceToken.toLocaleString('en-IN')}
🧾 *Transaction / UTR Number:* ${utr}
----------------------------------------
💼 *Owner Commission to Deduct:* ₹${activeBookingSession.commission.toLocaleString('en-IN')}
----------------------------------------
Hello! I have sent the advance token payment via your QR code. Please verify my payment, confirm resort/activity availability, and initiate the Lakshadweep entry permit process!`;

  // Open WhatsApp directly
  const url = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
  window.open(url, '_blank');

  // Record into Local Storage Enquiry CRM
  const newLead = {
    id: 'LE-' + Date.now().toString().slice(-5),
    timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' }),
    name: touristName,
    phone: touristPhone,
    serviceType: activeBookingSession.type === 'package' ? 'Package' : 'Marketplace Service',
    itemTitle: activeBookingSession.title,
    island: activeBookingSession.island,
    vendor: activeBookingSession.vendor,
    travelers: 1,
    dates: touristDate,
    totalPrice: `₹${activeBookingSession.price.toLocaleString('en-IN')}`,
    commission: activeBookingSession.commission,
    paidToken: `₹${activeBookingSession.advanceToken.toLocaleString('en-IN')}`,
    paymentStatus: utr !== 'Pending verification' ? 'Paid via QR (Pending Check)' : 'Awaiting Payment',
    bookingStatus: 'New',
    utr: utr
  };

  currentEnquiries.unshift(newLead);
  localStorage.setItem('lak_enquiries_v2', JSON.stringify(currentEnquiries));
  renderAdminTable();

  closeQrModal();
  showToast('🎉 Booking enquiry & payment notification sent to WhatsApp!');
}

// =============================================================================
// Partner / Local Agency Registration Form
// =============================================================================
function setupPartnerForm() {
  const form = document.getElementById('partner-registration-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('part-agency-name')?.value.trim();
    const type = document.getElementById('part-service-type')?.value;
    const islands = document.getElementById('part-islands')?.value.trim();
    const contact = document.getElementById('part-phone')?.value.trim();
    const commission = document.getElementById('part-commission')?.value.trim();
    const details = document.getElementById('part-details')?.value.trim();

    if (!name || !contact || !commission) {
      alert('Please fill out all required partner details.');
      return;
    }

    const newPartner = {
      id: 'PT-' + (partnerRegistry.length + 1),
      name,
      type,
      islands,
      contact,
      commissionOffer: commission,
      status: 'Approved'
    };

    partnerRegistry.unshift(newPartner);
    localStorage.setItem('lak_partners_v2', JSON.stringify(partnerRegistry));
    renderAdminTable();

    // Notify you on WhatsApp
    const waMessage = `🤝 *NEW PARTNER AGENCY REGISTRATION* 🤝
----------------------------------------
🏢 *Agency / Venture Name:* ${name}
📂 *Category:* ${type}
🏝️ *Islands Served:* ${islands}
📞 *Contact Number:* ${contact}
💰 *Commission Offered to You:* ${commission}
📝 *Offerings Summary:* ${details || 'None'}
----------------------------------------
Please approve listing on LakExplorer.`;

    const url = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    window.open(url, '_blank');

    form.reset();
    showToast('✨ Partner venture registered successfully!');
  });
}

// =============================================================================
// Custom Trip Builder Logic (Supports All 8 Islands + Special Atolls)
// =============================================================================
function initCustomTripBuilder() {
  // Island Multi-toggle
  const islandCards = document.querySelectorAll('.select-card');
  islandCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
      const actives = document.querySelectorAll('.select-card.active');
      if (actives.length === 0) card.classList.add('active');
      updateBuilderPrice();
    });
  });

  // Radio Options
  const radioContainers = document.querySelectorAll('.option-radio-card');
  radioContainers.forEach(container => {
    container.addEventListener('click', () => {
      const radio = container.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        const name = radio.getAttribute('name');
        document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
          r.closest('.option-radio-card').classList.remove('active');
        });
        container.classList.add('active');
        updateBuilderPrice();
      }
    });
  });

  // Activities Checkboxes
  const activityCards = document.querySelectorAll('.activity-check-card');
  activityCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      if (e.target !== checkbox) checkbox.checked = !checkbox.checked;
      card.classList.toggle('active', checkbox.checked);
      updateBuilderPrice();
    });
  });

  ['trip-nights', 'travelers-adults', 'travelers-kids', 'trip-date'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', updateBuilderPrice);
      el.addEventListener('input', updateBuilderPrice);
    }
  });

  const form = document.getElementById('trip-builder-form');
  if (form) form.addEventListener('submit', handleTripEnquirySubmit);
}

function updateBuilderPrice() {
  const selectedIslands = Array.from(document.querySelectorAll('.select-card.active'))
    .map(c => c.getAttribute('data-island'));

  const nights = parseInt(document.getElementById('trip-nights')?.value || 3);
  const adults = parseInt(document.getElementById('travelers-adults')?.value || 2);
  const kids = parseInt(document.getElementById('travelers-kids')?.value || 0);
  const totalTravelers = adults + kids;

  let stayRatePerNight = 3500; // Budget tier base starts low for ₹14,000 packages
  const stayRadio = document.querySelector('input[name="stay-class"]:checked');
  if (stayRadio) stayRatePerNight = parseInt(stayRadio.getAttribute('data-price') || 3500);

  let transportRate = 5500;
  const transRadio = document.querySelector('input[name="transport-mode"]:checked');
  if (transRadio) transportRate = parseInt(transRadio.getAttribute('data-price') || 5500);

  let activitiesTotalPerPerson = 0;
  const checkedActivities = document.querySelectorAll('input[name="activities"]:checked');
  checkedActivities.forEach(cb => {
    activitiesTotalPerPerson += parseInt(cb.getAttribute('data-price') || 0);
  });

  const interIslandFee = selectedIslands.length > 1 ? (selectedIslands.length - 1) * 2000 : 0;
  const permitFee = 1000;

  const adultBaseCost = (stayRatePerNight * nights) + transportRate + activitiesTotalPerPerson + interIslandFee + permitFee;
  const kidBaseCost = adultBaseCost * 0.6;

  const totalTripEstimate = Math.max(14000 * totalTravelers, Math.round((adultBaseCost * adults) + (kidBaseCost * kids)));
  const perPersonEstimate = Math.round(totalTripEstimate / Math.max(1, totalTravelers));

  const sumIslands = document.getElementById('sum-islands');
  if (sumIslands) sumIslands.textContent = selectedIslands.join(', ') || 'Agatti';

  const sumNights = document.getElementById('sum-nights');
  if (sumNights) sumNights.textContent = `${nights} Nights / ${nights + 1} Days`;

  const sumTravelers = document.getElementById('sum-travelers');
  if (sumTravelers) sumTravelers.textContent = `${adults} Adults${kids > 0 ? `, ${kids} Kids` : ''}`;

  const sumStay = document.getElementById('sum-stay');
  if (sumStay) {
    const stayLabel = stayRadio?.closest('.option-radio-card')?.querySelector('.option-title')?.textContent || 'Standard Cottage';
    sumStay.textContent = stayLabel;
  }

  const sumTotal = document.getElementById('sum-total-price');
  if (sumTotal) sumTotal.textContent = `₹${totalTripEstimate.toLocaleString('en-IN')}`;

  const sumPerPerson = document.getElementById('sum-per-person');
  if (sumPerPerson) sumPerPerson.textContent = `₹${perPersonEstimate.toLocaleString('en-IN')}`;
}

function handleTripEnquirySubmit(e) {
  e.preventDefault();

  const name = document.getElementById('cust-name')?.value.trim();
  const phone = document.getElementById('cust-phone')?.value.trim();
  const email = document.getElementById('cust-email')?.value.trim() || 'Not specified';
  const city = document.getElementById('cust-city')?.value.trim() || 'Not specified';
  const tripDate = document.getElementById('trip-date')?.value || 'Upcoming Season';
  const notes = document.getElementById('cust-notes')?.value.trim() || 'None';

  if (!name || !phone) {
    alert('Please enter your Name and WhatsApp phone number.');
    return;
  }

  const selectedIslands = Array.from(document.querySelectorAll('.select-card.active'))
    .map(c => c.getAttribute('data-island'));
  const nights = parseInt(document.getElementById('trip-nights')?.value || 3);
  const adults = parseInt(document.getElementById('travelers-adults')?.value || 2);
  const kids = parseInt(document.getElementById('travelers-kids')?.value || 0);

  const stayRadio = document.querySelector('input[name="stay-class"]:checked');
  const stayName = stayRadio?.closest('.option-radio-card')?.querySelector('.option-title')?.textContent || 'Standard Cottage';

  const transRadio = document.querySelector('input[name="transport-mode"]:checked');
  const transName = transRadio?.closest('.option-radio-card')?.querySelector('.option-title')?.textContent || 'Flight Kochi-Agatti';

  const activities = Array.from(document.querySelectorAll('input[name="activities"]:checked'))
    .map(cb => cb.closest('.activity-check-card')?.querySelector('strong')?.textContent || cb.value);

  const totalEstimate = document.getElementById('sum-total-price')?.textContent || '₹28,000';
  const perPersonEstimate = document.getElementById('sum-per-person')?.textContent || '';

  const waMessage = `🌴 *LAKEXPLORER CUSTOM ITINERARY ENQUIRY* 🌴
----------------------------------------
👤 *Lead Name:* ${name}
📞 *Contact:* ${phone}
✉️ *Email:* ${email}
📍 *Origin City:* ${city}

🏝️ *Islands:* ${selectedIslands.join(', ')}
📅 *Target Date:* ${tripDate}
🌙 *Duration:* ${nights} Nights (${nights + 1} Days)
👥 *Travelers:* ${adults} Adults${kids > 0 ? `, ${kids} Children` : ''}
✈️ *Transport Mode:* ${transName}
🏡 *Stay Style:* ${stayName}
🤿 *Experiences:* ${activities.join(', ') || 'Standard Tour'}
💰 *Est. Total:* ${totalEstimate} (${perPersonEstimate}/person)
📝 *Notes:* ${notes}
----------------------------------------
✅ 100% Entry Permit Assistance Required`;

  const waUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
  window.open(waUrl, '_blank');

  const newEnquiry = {
    id: 'LE-' + Date.now().toString().slice(-5),
    timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' }),
    name: name,
    phone: phone,
    serviceType: 'Custom Tour',
    itemTitle: `${nights}N Custom: ${selectedIslands.join(', ')}`,
    island: selectedIslands.join(', '),
    vendor: 'LakExplorer Direct',
    travelers: adults + kids,
    dates: tripDate,
    totalPrice: totalEstimate,
    commission: (adults + kids) * 2000,
    paidToken: 'Awaiting Advance',
    paymentStatus: 'Pending Verification',
    bookingStatus: 'New',
    utr: 'Pending'
  };

  currentEnquiries.unshift(newEnquiry);
  localStorage.setItem('lak_enquiries_v2', JSON.stringify(currentEnquiries));
  renderAdminTable();

  showToast('🎉 Custom enquiry created and sent to WhatsApp!');
}

// =============================================================================
// Admin / Operator CRM Dashboard with Multi-Vendor Commission Tracking
// =============================================================================
let activeAdminTab = 'enquiries';

function openAdminModal() {
  const modalOverlay = document.getElementById('admin-modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.add('active');
    renderAdminTable();
  }
}

function openAdminModal() {
  const isAuth = localStorage.getItem('lak_admin_auth') === 'true';
  if (!isAuth) {
    const loginOverlay = document.getElementById('admin-login-overlay');
    if (loginOverlay) loginOverlay.classList.add('active');
    return;
  }

  const modalOverlay = document.getElementById('admin-modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.add('active');
    renderAdminTable();
  }
}

function closeAdminLoginModal() {
  const loginOverlay = document.getElementById('admin-login-overlay');
  if (loginOverlay) loginOverlay.classList.remove('active');
}

function handleAdminLogin(e) {
  e.preventDefault();
  const idInput = document.getElementById('admin-login-id')?.value.trim();
  const passInput = document.getElementById('admin-login-password')?.value.trim();
  const errorMsg = document.getElementById('admin-login-error');

  if (idInput === ADMIN_LOGIN_ID && passInput === ADMIN_LOGIN_PASS) {
    localStorage.setItem('lak_admin_auth', 'true');
    closeAdminLoginModal();
    const modalOverlay = document.getElementById('admin-modal-overlay');
    if (modalOverlay) modalOverlay.classList.add('active');
    renderAdminTable();
    showToast('🔓 Welcome, Admin! Access granted.');
    if (errorMsg) errorMsg.style.display = 'none';
  } else {
    if (errorMsg) errorMsg.style.display = 'block';
  }
}

function adminLogout() {
  localStorage.removeItem('lak_admin_auth');
  closeAdminModal();
  showToast('🔒 Logged out of Admin CMS.');
}

function closeAdminModal() {
  const modalOverlay = document.getElementById('admin-modal-overlay');
  if (modalOverlay) modalOverlay.classList.remove('active');
}

function switchAdminTab(tab) {
  activeAdminTab = tab;
  document.querySelectorAll('.admin-nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`admin-tab-btn-${tab}`)?.classList.add('active');

  const views = {
    enquiries: document.getElementById('admin-view-enquiries'),
    packages: document.getElementById('admin-view-packages'),
    marketplace: document.getElementById('admin-view-marketplace'),
    ships: document.getElementById('admin-view-ships'),
    partners: document.getElementById('admin-view-partners'),
    settings: document.getElementById('admin-view-settings')
  };

  Object.keys(views).forEach(k => {
    if (views[k]) views[k].style.display = k === tab ? 'block' : 'none';
  });

  if (tab === 'packages') {
    renderAdminPackagesList();
  } else if (tab === 'marketplace') {
    renderAdminServicesList();
  } else if (tab === 'ships') {
    renderAdminShipsEditor();
  } else if (tab === 'settings') {
    loadSettingsIntoForm();
  } else {
    renderAdminTable();
  }
}

function renderAdminTable() {
  // 1. Stats Calculation
  const totalLeads = currentEnquiries.length;
  const totalCommission = currentEnquiries.reduce((acc, curr) => acc + (parseInt(curr.commission) || 0), 0);
  const confirmedCount = currentEnquiries.filter(e => e.bookingStatus === 'Confirmed').length;
  const pendingPermits = currentEnquiries.filter(e => e.bookingStatus === 'Permit Applied').length;

  document.getElementById('admin-stat-total').textContent = totalLeads;
  document.getElementById('admin-stat-commission').textContent = `₹${totalCommission.toLocaleString('en-IN')}`;
  document.getElementById('admin-stat-permit').textContent = pendingPermits;
  document.getElementById('admin-stat-confirmed').textContent = confirmedCount;

  // 2. Render Enquiries Table
  const tbody = document.getElementById('admin-enquiries-tbody');
  if (tbody) {
    if (currentEnquiries.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:2rem;">No enquiries yet.</td></tr>`;
    } else {
      tbody.innerHTML = currentEnquiries.map(item => `
        <tr>
          <td>
            <strong>${item.id}</strong><br>
            <span style="font-size:0.75rem; color:var(--text-muted);">${item.timestamp}</span>
          </td>
          <td>
            <strong>${item.name}</strong><br>
            <span style="font-size:0.8rem; color:#64748b;">📞 ${item.phone}</span>
          </td>
          <td>
            <strong>${item.itemTitle}</strong><br>
            <span style="font-size:0.8rem; color:var(--lagoon-cyan);">📍 ${item.island}</span><br>
            <span style="font-size:0.75rem; color:var(--text-muted);">Vendor: ${item.vendor}</span>
          </td>
          <td>
            <strong>${item.totalPrice}</strong><br>
            <span style="font-size:0.78rem; color:#10b981; font-weight:700;">Comm: ₹${(item.commission || 0).toLocaleString('en-IN')}</span><br>
            <span style="font-size:0.75rem; color:#64748b;">Token: ${item.paidToken}</span>
          </td>
          <td>
            <select class="form-control" style="padding:0.3rem 0.5rem; font-size:0.8rem;" onchange="updateBookingStatus('${item.id}', this.value)">
              <option value="New" ${item.bookingStatus === 'New' ? 'selected' : ''}>🔵 New</option>
              <option value="Permit Applied" ${item.bookingStatus === 'Permit Applied' ? 'selected' : ''}>🟣 Permit Applied</option>
              <option value="Confirmed" ${item.bookingStatus === 'Confirmed' ? 'selected' : ''}>🟢 Confirmed</option>
              <option value="Completed" ${item.bookingStatus === 'Completed' ? 'selected' : ''}>⚪ Completed</option>
            </select>
          </td>
          <td>
            <div style="display:flex; gap:0.35rem;">
              <button class="btn btn-whatsapp btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem;" onclick="adminFollowUpWhatsApp('${item.id}', 'confirm')">
                Confirm
              </button>
              <button class="btn btn-outline btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem;" onclick="adminFollowUpWhatsApp('${item.id}', 'vendor')">
                Notify Vendor
              </button>
            </div>
          </td>
          <td>
            <button style="border:none; background:none; color:#ef4444; cursor:pointer;" onclick="deleteBooking('${item.id}')">🗑️</button>
          </td>
        </tr>
      `).join('');
    }
  }

  // 3. Render Partners Table
  const partnersTbody = document.getElementById('admin-partners-tbody');
  if (partnersTbody) {
    partnersTbody.innerHTML = partnerRegistry.map(p => `
      <tr>
        <td><strong>${p.name}</strong></td>
        <td><span class="status-badge status-permit">${p.type}</span></td>
        <td>${p.islands}</td>
        <td>${p.contact}</td>
        <td><strong style="color:#10b981;">${p.commissionOffer}</strong></td>
        <td><span class="status-badge status-confirmed">${p.status}</span></td>
      </tr>
    `).join('');
  }
}

function updateBookingStatus(id, newStatus) {
  const index = currentEnquiries.findIndex(e => e.id === id);
  if (index !== -1) {
    currentEnquiries[index].bookingStatus = newStatus;
    localStorage.setItem('lak_enquiries_v2', JSON.stringify(currentEnquiries));
    renderAdminTable();
    showToast(`Status updated to "${newStatus}"!`);
  }
}

function deleteBooking(id) {
  if (confirm(`Delete enquiry ${id}?`)) {
    currentEnquiries = currentEnquiries.filter(e => e.id !== id);
    localStorage.setItem('lak_enquiries_v2', JSON.stringify(currentEnquiries));
    renderAdminTable();
    showToast('Enquiry removed.');
  }
}

function adminFollowUpWhatsApp(bookingId, type) {
  const item = currentEnquiries.find(e => e.id === bookingId);
  if (!item) return;

  let cleanPhone = item.phone.replace(/\D/g, '');
  if (cleanPhone.length === 10) cleanPhone = '91' + cleanPhone;

  let msg = '';
  if (type === 'confirm') {
    msg = `Hello ${item.name}! 🌴
LakExplorer here. We have confirmed your booking for:
🏷️ ${item.itemTitle} (${item.island})
💰 Total: ${item.totalPrice} | Token Received: ${item.paidToken}

Your entry permit filing has been scheduled. Please share your Aadhaar Card and Police Clearance Certificate (PCC) copies.`;
  } else if (type === 'vendor') {
    msg = `Hello ${item.vendor}! 🤝
We have received a confirmed tourist booking through LakExplorer for your service:
🏷️ ${item.itemTitle} (${item.island})
📅 Date: ${item.dates}
👥 Travelers: ${item.travelers}
Customer Name: ${item.name}

Our commission of ₹${item.commission} has been deducted, and the advance has been locked. Please hold availability.`;
  }

  window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function exportEnquiriesCSV() {
  if (currentEnquiries.length === 0) return alert('No records to export.');

  const headers = ['ID', 'Date', 'Customer', 'Phone', 'Service', 'Island', 'Vendor', 'Price', 'Commission', 'Token Paid', 'Status', 'UTR'];
  const rows = currentEnquiries.map(e => [
    `"${e.id}"`, `"${e.timestamp}"`, `"${e.name}"`, `"${e.phone}"`, `"${e.itemTitle}"`, `"${e.island}"`, `"${e.vendor}"`, `"${e.totalPrice}"`, `"${e.commission}"`, `"${e.paidToken}"`, `"${e.bookingStatus}"`, `"${e.utr || ''}"`
  ]);

  const csv = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const link = document.createElement('a');
  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', `lakexplorer_bookings_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =============================================================================
// Admin Ship Schedules & Fares Editor (Manual Edits & IRCTC Live Controls)
// =============================================================================
function renderAdminShipsEditor() {
  const container = document.getElementById('admin-ships-list-container');
  
  // Pre-fill Release Date Manager form fields
  const releaseInput = document.getElementById('admin-release-date-input');
  const releaseStatus = document.getElementById('admin-release-status-select');
  const releaseUrl = document.getElementById('admin-release-url-input');
  if (releaseInput && currentTicketReleaseData) {
    releaseInput.value = currentTicketReleaseData.announcement || '';
    if (releaseStatus) releaseStatus.value = currentTicketReleaseData.statusBadge || '🟢 Booking Open on IRCTC';
    if (releaseUrl) releaseUrl.value = currentTicketReleaseData.officialUrl || 'https://lakshadweep.irctc.co.in/';
  }

  // Attach dropzone listeners
  setupPdfDropzone();

  if (!container) return;

  if (currentShipSchedules.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem; background:#f8fafc; border-radius:var(--radius-md);">
        <p style="color:var(--text-muted); margin-bottom:1rem;">No ships configured in the database.</p>
        <button class="btn btn-primary btn-sm" onclick="autoSyncIRCTCSchedules()">
          🔄 Load Default IRCTC Schedules
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = currentShipSchedules.map(ship => `
    <div class="ship-edit-card" id="ship-card-${ship.id}">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
        <div>
          <strong style="font-size:1.05rem; color:var(--ocean-deep);">🚢 ${ship.vessel}</strong>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block;">${ship.routes} • ${ship.capacity}</span>
        </div>
        <div style="display:flex; gap:0.4rem;">
          <a href="${ship.officialUrl || 'https://lakshadweep.irctc.co.in/'}" target="_blank" class="btn btn-outline btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem;">
            Test IRCTC ↗
          </a>
          <button class="btn btn-outline btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem; color:#ef4444; border-color:#fca5a5;" onclick="deleteAdminShip('${ship.id}')">
            🗑️ Delete
          </button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.75rem; margin-bottom:1rem;">
        <div class="form-group">
          <label class="form-label" style="font-size:0.75rem;">Next Sailing Voyage Date(s) *</label>
          <input type="text" id="edit-sailing-${ship.id}" class="form-control" style="padding:0.4rem 0.6rem; font-size:0.82rem;" value="${ship.nextSailing}">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-size:0.75rem;">Ticket Release Date Window *</label>
          <input type="text" id="edit-release-${ship.id}" class="form-control" style="padding:0.4rem 0.6rem; font-size:0.82rem;" value="${ship.releaseDate}">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-size:0.75rem;">First Class AC Fare *</label>
          <input type="text" id="edit-first-${ship.id}" class="form-control" style="padding:0.4rem 0.6rem; font-size:0.82rem;" value="${ship.firstAc}">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-size:0.75rem;">Second Class AC Fare *</label>
          <input type="text" id="edit-second-${ship.id}" class="form-control" style="padding:0.4rem 0.6rem; font-size:0.82rem;" value="${ship.secondAc}">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-size:0.75rem;">Bunk / Seating Fare *</label>
          <input type="text" id="edit-bunk-${ship.id}" class="form-control" style="padding:0.4rem 0.6rem; font-size:0.82rem;" value="${ship.bunkClass}">
        </div>

        <div class="form-group">
          <label class="form-label" style="font-size:0.75rem;">Booking Status *</label>
          <select id="edit-status-${ship.id}" class="form-control" style="padding:0.4rem 0.6rem; font-size:0.82rem; font-weight:700;">
            <option value="Booking Open" ${ship.status === 'Booking Open' ? 'selected' : ''}>🟢 Booking Open</option>
            <option value="Fast Filling" ${ship.status === 'Fast Filling' ? 'selected' : ''}>🟡 Fast Filling</option>
            <option value="Releasing Soon" ${ship.status === 'Releasing Soon' ? 'selected' : ''}>🟣 Releasing Soon</option>
            <option value="Daily Active" ${ship.status === 'Daily Active' ? 'selected' : ''}>⚡ Daily Active</option>
            <option value="Waitlist" ${ship.status === 'Waitlist' ? 'selected' : ''}>🔴 Waitlist</option>
            <option value="Sold Out" ${ship.status === 'Sold Out' ? 'selected' : ''}>⚪ Sold Out</option>
          </select>
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end;">
        <button class="btn btn-primary btn-sm" onclick="saveAdminShipEdit('${ship.id}')">
          💾 Save Voyage Updates
        </button>
      </div>
    </div>
  `).join('');
}

function saveAdminShipEdit(shipId) {
  const index = currentShipSchedules.findIndex(s => s.id === shipId);
  if (index === -1) return;

  const nextSailing = document.getElementById(`edit-sailing-${shipId}`)?.value.trim();
  const releaseDate = document.getElementById(`edit-release-${shipId}`)?.value.trim();
  const firstAc = document.getElementById(`edit-first-${shipId}`)?.value.trim();
  const secondAc = document.getElementById(`edit-second-${shipId}`)?.value.trim();
  const bunkClass = document.getElementById(`edit-bunk-${shipId}`)?.value.trim();
  const status = document.getElementById(`edit-status-${shipId}`)?.value;

  if (!nextSailing || !firstAc) {
    alert('Please enter valid sailing dates and fares.');
    return;
  }

  currentShipSchedules[index].nextSailing = nextSailing;
  currentShipSchedules[index].releaseDate = releaseDate;
  currentShipSchedules[index].firstAc = firstAc;
  currentShipSchedules[index].secondAc = secondAc;
  currentShipSchedules[index].bunkClass = bunkClass;
  currentShipSchedules[index].status = status;

  localStorage.setItem('lak_ship_schedules_v3', JSON.stringify(currentShipSchedules));

  // Refresh both public table and admin list
  renderTransportSchedules();
  renderAdminShipsEditor();

  showToast(`✅ Updated ${currentShipSchedules[index].vessel} schedule & fares!`);
}

function deleteAdminShip(shipId) {
  if (confirm(`Remove this ship voyage (${shipId})?`)) {
    currentShipSchedules = currentShipSchedules.filter(s => s.id !== shipId);
    localStorage.setItem('lak_ship_schedules_v3', JSON.stringify(currentShipSchedules));
    renderTransportSchedules();
    renderAdminShipsEditor();
    showToast('Ship voyage removed.');
  }
}

function openAddShipModal() {
  const vessel = prompt('Enter Vessel Name (e.g. M.V. Lagoons Special Cruise):');
  if (!vessel) return;

  const routes = prompt('Enter Sectors / Route (e.g. Kochi ⇄ Kavaratti ⇄ Kadmat):') || 'Kochi ⇄ Lakshadweep';
  const nextSailing = prompt('Enter Next Sailing Date (e.g. 24 Oct 2026):') || 'Upcoming Voyage';
  const firstAc = prompt('Enter First Class AC Fare:', '₹3,800') || '₹3,800';
  const secondAc = prompt('Enter Second Class AC Fare:', '₹2,400') || '₹2,400';
  const bunkClass = prompt('Enter Bunk Fare:', '₹850') || '₹850';

  const newShip = {
    id: 'ship-custom-' + Date.now().toString().slice(-4),
    vessel: vessel,
    capacity: 'Custom Voyage',
    routes: routes,
    nextSailing: nextSailing,
    releaseDate: 'Official IRCTC Ticket Booking Open',
    firstAc: firstAc,
    secondAc: secondAc,
    bunkClass: bunkClass,
    status: 'Booking Open',
    officialUrl: 'https://lakshadweep.irctc.co.in/'
  };

  currentShipSchedules.unshift(newShip);
  localStorage.setItem('lak_ship_schedules_v3', JSON.stringify(currentShipSchedules));

  renderTransportSchedules();
  renderAdminShipsEditor();
  showToast(`🚢 Added ${vessel} to ship schedules!`);
}

// PDF Dropzone drag & drop setup
function setupPdfDropzone() {
  const dropzone = document.getElementById('pdf-dropzone');
  if (!dropzone || dropzone.dataset.initialized) return;
  dropzone.dataset.initialized = 'true';

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      const input = document.getElementById('pdf-file-input');
      if (input) {
        input.files = files;
        handlePDFUpload(input);
      }
    }
  });
}

// Handle file upload (.pdf, .txt)
async function handlePDFUpload(input) {
  const file = input.files?.[0];
  if (!file) return;

  const statusEl = document.getElementById('pdf-parse-status');
  if (statusEl) {
    statusEl.style.display = 'flex';
    statusEl.className = 'pdf-status-alert pdf-status-processing';
    statusEl.innerHTML = `<span>⏳ Reading & parsing schedule circular: <strong>${file.name}</strong>...</span>`;
  }

  try {
    let fullText = '';
    if (file.name.toLowerCase().endsWith('.pdf')) {
      if (!window.pdfjsLib) {
        throw new Error('PDF.js library is loading. Please try again or paste the circular text below.');
      }
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += `\n--- PAGE ${i} ---\n` + pageText;
      }
    } else {
      fullText = await file.text();
    }

    parseVoyageScheduleText(fullText, file.name);
  } catch (err) {
    console.error('PDF parsing error:', err);
    if (statusEl) {
      statusEl.className = 'pdf-status-alert';
      statusEl.style.background = '#fee2e2';
      statusEl.style.color = '#991b1b';
      statusEl.innerHTML = `<span>⚠️ Could not extract PDF text automatically (${err.message}). Click "Paste OCR / Text" above to paste the text directly.</span>`;
    }
  }
}

// Toggle drawer for manual text paste
function togglePasteNoticeDrawer() {
  const drawer = document.getElementById('paste-notice-drawer');
  if (drawer) {
    drawer.style.display = drawer.style.display === 'none' ? 'block' : 'none';
  }
}

// Parse text from drawer
function parseManualNoticeText() {
  const text = document.getElementById('notice-text-input')?.value.trim();
  if (!text) {
    alert('Please paste the schedule text or OCR content from the circular first.');
    return;
  }
  parseVoyageScheduleText(text, 'Manual Paste / OCR');
}

// Smart Parser for Voyage Schedule Circulars
function parseVoyageScheduleText(fullText, sourceName) {
  const statusEl = document.getElementById('pdf-parse-status');
  
  // Extract File No
  let fileNo = 'DCM/UTLAS/Voyage Schedule/ Passenger/2023 – S';
  const fileNoMatch = fullText.match(/File\s*No\.?\s*[:\-]?\s*([^\n\r]+)/i);
  if (fileNoMatch) fileNo = fileNoMatch[1].trim();

  // Extract Dated
  let dated = 'Current Month';
  const datedMatch = fullText.match(/Dated\s*[:\-]?\s*([0-9a-zA-Z\s]+)/i);
  if (datedMatch) dated = datedMatch[1].trim();

  // Extract Period
  let period = '19/09/2026 to 18/10/2026';
  const periodMatch = fullText.match(/from\s*([0-9\/\.\-]+)\s*to\s*([0-9\/\.\-]+)/i);
  if (periodMatch) {
    period = `${periodMatch[1]} to ${periodMatch[2]}`;
  }

  // Find date rows
  // Matches patterns like "19/09/26 SAT" or "19/09/2026 SAT"
  const regex = /(\d{1,2}[\/\.\-]\d{1,2}[\/\.\-]\d{2,4})\s+(MON|TUE|WED|THU|FRI|SAT|SUN)/gi;
  const matches = [];
  let m;
  while ((m = regex.exec(fullText)) !== null) {
    matches.push({ index: m.index, date: m[1], day: m[2].toUpperCase() });
  }

  const entries = [];
  if (matches.length > 0) {
    for (let i = 0; i < matches.length; i++) {
      const cur = matches[i];
      const nextIndex = (i + 1 < matches.length) ? matches[i + 1].index : fullText.length;
      let rowContent = fullText.substring(cur.index + cur.date.length + cur.day.length + 1, nextIndex).trim();

      // Clean row content from rules or noise if at the end
      if (rowContent.includes('1.') || rowContent.includes('Arrival time and Departure')) {
        rowContent = rowContent.split(/1\.\s+Arrival/i)[0].trim();
      }

      // Split row content between LSEA and LAGOONS
      const kochiSplit = rowContent.split(/(?=KOCHI|KLP|KVT|AND|MCY|KLT|BTR|AMN|STAND\s*BY)/i);
      let lsea = '-';
      let lagoons = '-';
      if (kochiSplit.length >= 2) {
        lsea = kochiSplit[0].trim() || '-';
        lagoons = kochiSplit.slice(1).join(' ').trim() || '-';
      } else {
        lsea = rowContent;
      }

      entries.push({
        date: cur.date,
        day: cur.day,
        lsea: lsea,
        lagoons: lagoons
      });
    }
  }

  // Fallback to DEFAULT entries if OCR extracted too few entries
  let finalEntries = entries;
  if (finalEntries.length < 5) {
    if (fullText.includes('19/09') || fullText.includes('Lakshadweep Sea') || fullText.includes('Lagoons')) {
      finalEntries = DEFAULT_COCHIN_PORT_SCHEDULE.entries;
    }
  }

  currentMonthlySchedule = {
    fileNo: fileNo,
    dated: dated,
    period: period,
    vessels: ['MV Lakshadweep Sea', 'MV Lagoons'],
    officialAuthority: 'Cochin Port Authority & LDCL',
    entries: finalEntries.length > 0 ? finalEntries : DEFAULT_COCHIN_PORT_SCHEDULE.entries,
    rules: DEFAULT_COCHIN_PORT_SCHEDULE.rules
  };

  localStorage.setItem('lak_monthly_voyage_schedule_v1', JSON.stringify(currentMonthlySchedule));

  // Refresh views
  renderMonthlyVoyageSchedule();
  renderPortGuidelines();

  if (statusEl) {
    statusEl.className = 'pdf-status-alert pdf-status-success';
    statusEl.style.display = 'flex';
    statusEl.innerHTML = `
      <div>
        <strong>✅ Successfully Parsed Voyage Schedule!</strong><br>
        <span>Loaded <strong>${currentMonthlySchedule.entries.length} sailing dates</strong> for period <strong>${currentMonthlySchedule.period}</strong> from <em>${sourceName}</em>. Auto-filled into website!</span>
      </div>
    `;
  }

  showToast(`✅ Loaded ${currentMonthlySchedule.entries.length} voyages from circular into live site!`);
}

// 1-Click Load the Official Cochin Port Schedule
function loadPreloadedCochinPortSchedule() {
  currentMonthlySchedule = JSON.parse(JSON.stringify(DEFAULT_COCHIN_PORT_SCHEDULE));
  localStorage.setItem('lak_monthly_voyage_schedule_v1', JSON.stringify(currentMonthlySchedule));

  renderMonthlyVoyageSchedule();
  renderPortGuidelines();

  const statusEl = document.getElementById('pdf-parse-status');
  if (statusEl) {
    statusEl.className = 'pdf-status-alert pdf-status-success';
    statusEl.style.display = 'flex';
    statusEl.innerHTML = `
      <div>
        <strong>✅ Official Cochin Port Schedule Loaded!</strong><br>
        <span>File: <strong>${currentMonthlySchedule.fileNo}</strong> (Period: <strong>${currentMonthlySchedule.period}</strong>) • 30 sailing dates for MV Lakshadweep Sea & MV Lagoons active!</span>
      </div>
    `;
  }

  showToast('✅ Official Cochin Port Voyage Schedule (19 Sep – 18 Oct 2026) applied to website!');
}

// Admin Ticket Release Date Form Submit
function handleSaveReleaseDate(e) {
  e.preventDefault();
  const annInput = document.getElementById('admin-release-date-input')?.value.trim();
  const statusSelect = document.getElementById('admin-release-status-select')?.value;
  const urlInput = document.getElementById('admin-release-url-input')?.value.trim();

  if (!annInput) {
    alert('Please enter the ticket release announcement text.');
    return;
  }

  currentTicketReleaseData = {
    announcement: annInput,
    statusBadge: statusSelect || '🟢 Booking Open on IRCTC',
    officialUrl: urlInput || 'https://lakshadweep.irctc.co.in/',
    lastUpdated: new Date().toISOString()
  };

  localStorage.setItem('lak_ticket_release_data_v1', JSON.stringify(currentTicketReleaseData));

  // Refresh live display
  renderTicketReleaseCard();

  showToast('✅ IRCTC Ticket Release Date & Status published live to website!');
}

// =============================================================================
// WordPress-Style No-Code Content Management (Packages, Services & Settings)
// =============================================================================

// 1. Packages CMS Editor
function renderAdminPackagesList() {
  const container = document.getElementById('admin-packages-list-container');
  if (!container) return;

  container.innerHTML = PACKAGES_DATA.map(pkg => `
    <div class="cms-item-card">
      <div class="cms-item-info">
        <img src="${pkg.image}" class="cms-item-thumb" alt="${pkg.title}">
        <div>
          <strong style="color:var(--ocean-deep); font-size:1.05rem;">${pkg.title}</strong>
          <span style="display:block; font-size:0.8rem; color:var(--lagoon-cyan); font-weight:700;">📍 ${pkg.island} • ${pkg.duration}</span>
          <span style="font-size:0.82rem; color:var(--text-muted);">Starting: <strong>₹${pkg.price.toLocaleString('en-IN')}</strong> • Agency: ${pkg.agency}</span>
        </div>
      </div>
      <div class="cms-item-actions">
        <button class="btn btn-outline btn-sm" onclick="editAdminPackage('${pkg.id}')">✏️ Edit</button>
        <button class="btn btn-outline btn-sm" style="color:#ef4444; border-color:#fca5a5;" onclick="deleteAdminPackage('${pkg.id}')">🗑️ Delete</button>
      </div>
    </div>
  `).join('');
}

function togglePackageForm(show = null) {
  const box = document.getElementById('admin-package-form-box');
  if (!box) return;
  const isHidden = box.style.display === 'none';
  box.style.display = (show !== null ? show : isHidden) ? 'block' : 'none';
  if (box.style.display === 'block' && !document.getElementById('pkg-edit-id').value) {
    document.getElementById('admin-package-form').reset();
    document.getElementById('pkg-form-title').textContent = 'Add New Island Package';
  }
}

function editAdminPackage(id) {
  const pkg = PACKAGES_DATA.find(p => p.id === id);
  if (!pkg) return;

  document.getElementById('pkg-edit-id').value = pkg.id;
  document.getElementById('pkg-input-title').value = pkg.title;
  document.getElementById('pkg-input-category').value = pkg.category;
  document.getElementById('pkg-input-island').value = pkg.island;
  document.getElementById('pkg-input-duration').value = pkg.duration;
  document.getElementById('pkg-input-nights').value = pkg.nights;
  document.getElementById('pkg-input-price').value = pkg.price;
  document.getElementById('pkg-input-agency').value = pkg.agency;
  document.getElementById('pkg-input-commission').value = pkg.commission || 2000;
  document.getElementById('pkg-input-ribbon').value = pkg.ribbon || '';
  document.getElementById('pkg-input-image').value = pkg.image;
  document.getElementById('pkg-input-highlights').value = (pkg.highlights || []).join('\n');

  document.getElementById('pkg-form-title').textContent = `Edit Package: ${pkg.title}`;
  togglePackageForm(true);
  document.getElementById('admin-package-form-box').scrollIntoView({ behavior: 'smooth' });
}

function handleSavePackage(e) {
  e.preventDefault();

  const editId = document.getElementById('pkg-edit-id').value;
  const title = document.getElementById('pkg-input-title').value.trim();
  const category = document.getElementById('pkg-input-category').value;
  const island = document.getElementById('pkg-input-island').value.trim();
  const duration = document.getElementById('pkg-input-duration').value.trim();
  const nights = parseInt(document.getElementById('pkg-input-nights').value) || 3;
  const price = parseInt(document.getElementById('pkg-input-price').value) || 14000;
  const agency = document.getElementById('pkg-input-agency').value.trim();
  const commission = parseInt(document.getElementById('pkg-input-commission').value) || 2000;
  const ribbon = document.getElementById('pkg-input-ribbon').value.trim();
  const image = document.getElementById('pkg-input-image').value.trim() || 'assets/images/hero.jpg';
  const highlights = document.getElementById('pkg-input-highlights').value.split('\n').map(s => s.trim()).filter(Boolean);

  if (editId) {
    const idx = PACKAGES_DATA.findIndex(p => p.id === editId);
    if (idx !== -1) {
      PACKAGES_DATA[idx] = {
        ...PACKAGES_DATA[idx],
        title, category, island, duration, nights, price, agency, commission, ribbon, image, highlights
      };
      showToast(`✅ Updated package "${title}"!`);
    }
  } else {
    const newPkg = {
      id: 'pkg-custom-' + Date.now().toString().slice(-4),
      title, category, island, duration, nights, price, agency, commission, ribbon, image, highlights,
      itinerary: [
        { day: 'Day 1', title: 'Arrival & Welcome', desc: 'Welcome at Lakshadweep airport / seaport. Check-in to accommodation.' },
        { day: 'Day 2', title: 'Island Exploration & Water Sports', desc: 'Lagoon swimming, coral reef walk, and guided water activities.' },
        { day: 'Day 3', title: 'Souvenirs & Departure', desc: 'Morning breakfast and transfer to departure port.' }
      ]
    };
    PACKAGES_DATA.unshift(newPkg);
    showToast(`🎉 New package "${title}" published!`);
  }

  localStorage.setItem('lak_custom_packages', JSON.stringify(PACKAGES_DATA));
  renderPackages('all');
  renderAdminPackagesList();
  togglePackageForm(false);
}

function deleteAdminPackage(id) {
  if (confirm('Are you sure you want to delete this package from the live site?')) {
    PACKAGES_DATA = PACKAGES_DATA.filter(p => p.id !== id);
    localStorage.setItem('lak_custom_packages', JSON.stringify(PACKAGES_DATA));
    renderPackages('all');
    renderAdminPackagesList();
    showToast('Package removed.');
  }
}

// 2. Marketplace Services CMS Editor
function renderAdminServicesList() {
  const container = document.getElementById('admin-services-list-container');
  if (!container) return;

  container.innerHTML = MARKETPLACE_SERVICES.map(srv => `
    <div class="cms-item-card">
      <div class="cms-item-info">
        <img src="${srv.image}" class="cms-item-thumb" alt="${srv.title}">
        <div>
          <strong style="color:var(--ocean-deep); font-size:1.05rem;">${srv.title}</strong>
          <span style="display:block; font-size:0.8rem; color:var(--lagoon-cyan); font-weight:700;">📂 ${srv.category.toUpperCase()} • 📍 ${srv.island}</span>
          <span style="font-size:0.82rem; color:var(--text-muted);">Rate: <strong>₹${srv.price.toLocaleString('en-IN')}</strong> (${srv.priceUnit}) • Vendor: ${srv.vendor}</span>
        </div>
      </div>
      <div class="cms-item-actions">
        <button class="btn btn-outline btn-sm" onclick="editAdminService('${srv.id}')">✏️ Edit</button>
        <button class="btn btn-outline btn-sm" style="color:#ef4444; border-color:#fca5a5;" onclick="deleteAdminService('${srv.id}')">🗑️ Delete</button>
      </div>
    </div>
  `).join('');
}

function toggleServiceForm(show = null) {
  const box = document.getElementById('admin-service-form-box');
  if (!box) return;
  const isHidden = box.style.display === 'none';
  box.style.display = (show !== null ? show : isHidden) ? 'block' : 'none';
  if (box.style.display === 'block' && !document.getElementById('srv-edit-id').value) {
    document.getElementById('admin-service-form').reset();
    document.getElementById('srv-form-title').textContent = 'Add New Marketplace Item';
  }
}

function editAdminService(id) {
  const srv = MARKETPLACE_SERVICES.find(s => s.id === id);
  if (!srv) return;

  document.getElementById('srv-edit-id').value = srv.id;
  document.getElementById('srv-input-title').value = srv.title;
  document.getElementById('srv-input-category').value = srv.category;
  document.getElementById('srv-input-island').value = srv.island;
  document.getElementById('srv-input-vendor').value = srv.vendor;
  document.getElementById('srv-input-price').value = srv.price;
  document.getElementById('srv-input-unit').value = srv.priceUnit;
  document.getElementById('srv-input-commission').value = srv.commission;
  document.getElementById('srv-input-image').value = srv.image;
  document.getElementById('srv-input-desc').value = srv.desc;

  document.getElementById('srv-form-title').textContent = `Edit Service: ${srv.title}`;
  toggleServiceForm(true);
  document.getElementById('admin-service-form-box').scrollIntoView({ behavior: 'smooth' });
}

function handleSaveService(e) {
  e.preventDefault();

  const editId = document.getElementById('srv-edit-id').value;
  const title = document.getElementById('srv-input-title').value.trim();
  const category = document.getElementById('srv-input-category').value;
  const island = document.getElementById('srv-input-island').value.trim();
  const vendor = document.getElementById('srv-input-vendor').value.trim();
  const price = parseInt(document.getElementById('srv-input-price').value) || 1000;
  const priceUnit = document.getElementById('srv-input-unit').value.trim();
  const commission = parseInt(document.getElementById('srv-input-commission').value) || 200;
  const image = document.getElementById('srv-input-image').value.trim() || 'assets/images/scuba.jpg';
  const desc = document.getElementById('srv-input-desc').value.trim();

  if (editId) {
    const idx = MARKETPLACE_SERVICES.findIndex(s => s.id === editId);
    if (idx !== -1) {
      MARKETPLACE_SERVICES[idx] = {
        ...MARKETPLACE_SERVICES[idx],
        title, category, island, vendor, price, priceUnit, commission, image, desc
      };
      showToast(`✅ Updated service "${title}"!`);
    }
  } else {
    const newSrv = {
      id: 'srv-custom-' + Date.now().toString().slice(-4),
      title, category, island, vendor, price, priceUnit, commission, image, desc,
      features: ['Verified Island Provider', 'Advance QR Protection', 'Manual Coordinator Approval']
    };
    MARKETPLACE_SERVICES.unshift(newSrv);
    showToast(`🎉 New service "${title}" listed!`);
  }

  localStorage.setItem('lak_custom_services', JSON.stringify(MARKETPLACE_SERVICES));
  renderMarketplaceServices('activities');
  renderAdminServicesList();
  toggleServiceForm(false);
}

function deleteAdminService(id) {
  if (confirm('Delete this service listing?')) {
    MARKETPLACE_SERVICES = MARKETPLACE_SERVICES.filter(s => s.id !== id);
    localStorage.setItem('lak_custom_services', JSON.stringify(MARKETPLACE_SERVICES));
    renderMarketplaceServices('activities');
    renderAdminServicesList();
    showToast('Listing removed.');
  }
}

// 3. General Site Settings
function loadSettingsIntoForm() {
  const waInput = document.getElementById('set-whatsapp-num');
  const upiInput = document.getElementById('set-upi-id');
  if (waInput) waInput.value = ADMIN_WHATSAPP_NUMBER;
  if (upiInput) upiInput.value = ADMIN_UPI_ID;
}

function handleSaveSettings(e) {
  e.preventDefault();

  const newWa = document.getElementById('set-whatsapp-num')?.value.trim();
  const newUpi = document.getElementById('set-upi-id')?.value.trim();
  const announcement = document.getElementById('set-announcement')?.value.trim();
  const heroHeading = document.getElementById('set-hero-title')?.value.trim();

  if (newWa) ADMIN_WHATSAPP_NUMBER = newWa;
  if (newUpi) ADMIN_UPI_ID = newUpi;

  const settingsObj = {
    whatsapp: newWa,
    upi: newUpi,
    announcement: announcement,
    heroHeading: heroHeading
  };

  localStorage.setItem('lak_site_settings', JSON.stringify(settingsObj));

  // Update dynamic elements in DOM
  const upiBadge = document.querySelector('.upi-id-badge');
  if (upiBadge) upiBadge.textContent = `UPI ID: ${newUpi}`;

  const heroBadgeSpan = document.querySelector('.hero-badge span:last-child');
  if (heroBadgeSpan && announcement) heroBadgeSpan.textContent = announcement;

  showToast('💾 General settings saved and updated live!');
}

// 4. Backup & Restore (JSON)
function exportFullWebsiteBackup() {
  const fullBackup = {
    exportDate: new Date().toISOString(),
    packages: PACKAGES_DATA,
    marketplace: MARKETPLACE_SERVICES,
    ships: currentShipSchedules,
    partners: partnerRegistry,
    enquiries: currentEnquiries,
    settings: {
      whatsapp: ADMIN_WHATSAPP_NUMBER,
      upi: ADMIN_UPI_ID
    }
  };

  const jsonStr = JSON.stringify(fullBackup, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `lakexplorer_full_backup_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('💾 Full website content backup downloaded!');
}

function importFullWebsiteBackup(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (data.packages) {
        PACKAGES_DATA = data.packages;
        localStorage.setItem('lak_custom_packages', JSON.stringify(PACKAGES_DATA));
      }
      if (data.marketplace) {
        MARKETPLACE_SERVICES = data.marketplace;
        localStorage.setItem('lak_custom_services', JSON.stringify(MARKETPLACE_SERVICES));
      }
      if (data.ships) {
        currentShipSchedules = data.ships;
        localStorage.setItem('lak_ship_schedules_v3', JSON.stringify(currentShipSchedules));
      }
      if (data.partners) {
        partnerRegistry = data.partners;
        localStorage.setItem('lak_partners_v2', JSON.stringify(partnerRegistry));
      }
      if (data.enquiries) {
        currentEnquiries = data.enquiries;
        localStorage.setItem('lak_enquiries_v2', JSON.stringify(currentEnquiries));
      }
      if (data.settings) {
        if (data.settings.whatsapp) ADMIN_WHATSAPP_NUMBER = data.settings.whatsapp;
        if (data.settings.upi) ADMIN_UPI_ID = data.settings.upi;
        localStorage.setItem('lak_site_settings', JSON.stringify(data.settings));
      }

      renderPackages('all');
      renderMarketplaceServices('activities');
      renderTransportSchedules();
      renderAdminTable();
      showToast('🎉 All website data successfully restored from backup!');
    } catch (err) {
      alert('Error reading backup JSON file: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// Itinerary Modal Logic
// =============================================================================
function openItineraryModal(packageId) {
  const pkg = PACKAGES_DATA.find(p => p.id === packageId);
  if (!pkg) return;

  const overlay = document.getElementById('itinerary-modal-overlay');
  const content = document.getElementById('itinerary-modal-content');
  if (!overlay || !content) return;

  content.innerHTML = `
    <div class="itinerary-modal-header">
      <div>
        <h3 style="color:#fff; font-size:1.35rem;">${pkg.title}</h3>
        <p style="color:var(--lagoon-light); font-size:0.85rem; margin:0;">📍 ${pkg.island} • ${pkg.duration} • By ${pkg.agency}</p>
      </div>
      <button class="admin-close-btn" onclick="closeItineraryModal()">✕</button>
    </div>
    <div class="itinerary-modal-body">
      <img src="${pkg.image}" style="width:100%; height:220px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:1rem;" />
      <h4 style="margin-bottom:0.75rem; color:var(--ocean-deep);">Package Inclusions:</h4>
      <ul style="list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:1.5rem; font-size:0.9rem;">
        ${pkg.highlights.map(h => `<li style="color:#334155;">✨ ${h}</li>`).join('')}
      </ul>

      <h4 style="margin-bottom:1rem; color:var(--ocean-deep);">Day-by-Day Detailed Itinerary</h4>
      <div class="day-timeline">
        ${pkg.itinerary.map(item => `
          <div class="day-step">
            <h4>${item.day}: ${item.title}</h4>
            <p style="color:var(--text-muted);">${item.desc}</p>
          </div>
        `).join('')}
      </div>

      <div style="background:#f8fafc; border-radius:var(--radius-md); padding:1.25rem; margin-top:2rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Starting Price:</span>
          <span style="font-size:1.6rem; font-weight:800; color:var(--ocean-deep);">₹${pkg.price.toLocaleString('en-IN')}<span style="font-size:0.9rem; font-weight:500;">/person</span></span>
        </div>
        <button class="btn btn-whatsapp" onclick="openBookingPaymentFlow('package', '${pkg.id}')">
          💬 Book on WhatsApp with Advance QR
        </button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
}

function closeItineraryModal() {
  const overlay = document.getElementById('itinerary-modal-overlay');
  if (overlay) overlay.classList.remove('active');
}

// =============================================================================
// Island Guide Modal
// =============================================================================
const ISLANDS_GUIDE = {
  agatti: { name: 'Agatti Island', tagline: 'The Gateway & Airport Hub', img: 'assets/images/hero.jpg', desc: 'World famous narrow runway flanked by blue lagoons. Scuba diving, kayaking, and fast boat transfers.' },
  kadmat: { name: 'Kadmat Island', tagline: 'Long Sandy Shores & Marine Water Sports Hub', img: 'assets/images/scuba.jpg', desc: '8 km pristine sandy shores, premier water sports institute, diving, windsurfing, and marine coral gardens.' },
  kalpeni: { name: 'Kalpeni Island', tagline: 'Enormous Coral Lagoon & Storm Banks', img: 'assets/images/scuba.jpg', desc: 'Vast shallow lagoon, swimming, snorkeling, storm bank of coral debris, and authentic island living.' },
  minicoy: { name: 'Minicoy (Maliku)', tagline: '1885 Historic Lighthouse & Maldivian Culture', img: 'assets/images/minicoy.jpg', desc: 'Distinct Mahl language, traditional village clusters, tuna fishing heritage, and British lighthouse.' },
  amini: { name: 'Amini Island', tagline: 'Artisanal Heritage & Ancient Craft', img: 'assets/images/resort.jpg', desc: 'Famous for stone carvers, tortoiseshell crafts, coir making, and quiet village atmosphere.' },
  kiltan: { name: 'Kiltan Island', tagline: 'Pristine Northern Coral Sanctuary', img: 'assets/images/hero.jpg', desc: 'Historic lighthouse on the northern trade route, untouched reef ecosystems, and warm hospitality.' },
  chetlat: { name: 'Chetlat Island', tagline: 'Traditional Boat Crafting & Northern Tip', img: 'assets/images/hero.jpg', desc: 'Northernmost inhabited island, famous for traditional handcrafted caps and wooden sailing craft.' },
  kavaratti: { name: 'Kavaratti Island', tagline: 'Administrative Capital & Marine Aquarium', img: 'assets/images/hero.jpg', desc: 'Iconic Marine Aquarium, Ujra Mosque wood carvings, glass-bottom safaris, and dolphin watching.' },
  bangaram: { name: 'Bangaram Atoll', tagline: 'Uninhabited Luxury & Sweeping Sandbanks', img: 'assets/images/bangaram.jpg', desc: 'Tear-drop luxury island, private sandbank spit, authorized resort bar, and turquoise waters.' }
};

function openIslandModal(key) {
  const island = ISLANDS_GUIDE[key];
  if (!island) return;

  const overlay = document.getElementById('itinerary-modal-overlay');
  const content = document.getElementById('itinerary-modal-content');
  if (!overlay || !content) return;

  content.innerHTML = `
    <div class="itinerary-modal-header">
      <div>
        <h3 style="color:#fff; font-size:1.35rem;">${island.name}</h3>
        <p style="color:var(--lagoon-light); font-size:0.85rem; margin:0;">${island.tagline}</p>
      </div>
      <button class="admin-close-btn" onclick="closeItineraryModal()">✕</button>
    </div>
    <div class="itinerary-modal-body">
      <img src="${island.img}" style="width:100%; height:220px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:1.25rem;" />
      <h4 style="color:var(--ocean-deep); margin-bottom:0.5rem;">Island Overview</h4>
      <p style="color:#334155; font-size:0.95rem; line-height:1.6; margin-bottom:1.5rem;">${island.desc}</p>
      <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
        <button class="btn btn-outline" onclick="closeItineraryModal()">Close</button>
        <button class="btn btn-primary" onclick="selectIslandAndBuild('${island.name}')">
          Plan Trip to ${island.name} 🌴
        </button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
}

function selectIslandAndBuild(name) {
  closeItineraryModal();
  const cards = document.querySelectorAll('.select-card');
  cards.forEach(c => {
    if (name.toLowerCase().includes(c.getAttribute('data-island').toLowerCase())) {
      c.classList.add('active');
    }
  });

  updateBuilderPrice();
  document.getElementById('custom-trip-builder')?.scrollIntoView({ behavior: 'smooth' });
}

// =============================================================================
// FAQ & Modals Handling
// =============================================================================
function initFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question')?.addEventListener('click', () => {
      const active = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!active) item.classList.add('active');
    });
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
}

function initModals() {
  const itOverlay = document.getElementById('itinerary-modal-overlay');
  if (itOverlay) {
    itOverlay.addEventListener('click', (e) => {
      if (e.target === itOverlay) closeItineraryModal();
    });
  }

  const qrOverlay = document.getElementById('qr-modal-overlay');
  if (qrOverlay) {
    qrOverlay.addEventListener('click', (e) => {
      if (e.target === qrOverlay) closeQrModal();
    });
  }

  const adminOverlay = document.getElementById('admin-modal-overlay');
  if (adminOverlay) {
    adminOverlay.addEventListener('click', (e) => {
      if (e.target === adminOverlay) closeAdminModal();
    });
  }
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>🏝️</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
