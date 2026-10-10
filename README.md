# 🏝️ LakExplorer — Multi-Vendor Lakshadweep Tourism & Booking Platform

**LakExplorer** is a modern, responsive, zero-hosting-cost web application for Lakshadweep tourism. It functions as both a direct booking portal and a **multi-vendor tourism marketplace** where local agencies, homestays, dive centers, photographers, and rental ventures can list their services while routing every booking and commission through you.

---

## 🌟 Key Upgrades & Features

### 1. 🔒 Privacy & Clean Presentation
- **Hidden Phone Digits:** Your phone number is no longer displayed as raw text anywhere on the website (preventing scraping and spam).
- **Direct WhatsApp Redirect:** All booking buttons, inquiry links, and floating chat widgets route seamlessly to `https://wa.me/919496924874` behind the scenes.

### 2. 🏝️ Complete Coverage of All 8 Islands + Special Atolls
Packages, itineraries, and custom trip builders are available for:
1. **Agatti** (The aviation gateway, airstrip & PADI scuba dive center)
2. **Kadmat** (8 km white sand beach & marine water sports haven)
3. **Kalpeni** (Enormous shallow coral lagoon & kayaking)
4. **Minicoy** (British 1885 lighthouse & distinct Maldivian Mahl culture)
5. **Amini** (Historic stone carving, tortoiseshell craft & coir)
6. **Kiltan** (Pristine northern coral sanctuary & trade lighthouse)
7. **Chetlat** (Northernmost tip with traditional boat craft)
8. **Kavaratti** (Administrative capital, Marine Aquarium & dolphin safaris)
*(Plus **Bangaram Atoll** luxury cottages & **Thinnakara** star glamping)*

### 3. 💰 Budget Packages Starting from ₹14,000/-
- Entry packages specifically tailored for budget backpackers and eco-explorers starting at **₹14,000/- per person** (e.g. *Agatti Backpacker Island Gateway 3D/2N*).

### 4. 🤿 Multi-Vendor Island Marketplace
Tourists can explore and book individual island experiences:
- **Water Activities:** PADI Scuba diving, Shipwreck & Turtle snorkel, Glass-bottom boat safari, Jet Ski & Parasailing combo.
- **Beach Stays:** Heritage AC homestays, Bangaram luxury beachfront cottages, Thinnakara glamping tents.
- **Rentals:** GoPro Hero 12 with 60m dive housing, Pro snorkel mask & fins sets, Automatic scooters, fat-tire beach cycles.
- **Local Food & Dining:** Island seafood platters & beach BBQ, Pure vegetarian & Jain meal passes.
- **Drone & Photography:** 4K Drone cinematic video reels, Honeymoon sunset couple beach photoshoots.

### 5. 🤝 Partner Agency Listing & Commission Model
- **"List Your Agency / Venture" Form:** Local travel agencies, boat captains, and rental shops can submit their business and offer a commission per person (e.g., ₹1,500 - ₹3,000 / person).
- **Owner As The Middleman:** When a tourist books a partner package or service:
  - The booking details arrive at **your WhatsApp**.
  - Includes: Customer name, Island, Partner name, Total price, and **Your Commission**.
  - You collect payment using your QR code, take your commission, and confirm with the partner manually!

### 6. 📱 Payment QR Code & Manual Confirmation Flow
- Built-in UPI QR Code modal with UPI ID `9496924874@upi` (supports Google Pay, PhonePe, Paytm, BHIM).
- Tourist enters name, travel date, pays the advance token (e.g., ₹2,000), and provides the UPI UTR/transaction ID.
- Automatically opens WhatsApp to send you the payment details.
- You verify the payment manually, lock the room/activity slot, and initiate the entry permit.

### 7. ✈️ Flight & 🚢 Ship Schedules Portal
- **Flight Route (Kochi COK ⇄ Agatti AGX):**
  - Daily flight schedules for Alliance Air (ATR 72-600) and IndiGo.
  - Live search buttons linking directly to:
    - Google Flights (COK ⇄ AGX)
    - Skyscanner Live Checker
    - MakeMyTrip Flight Search
    - Alliance Air Official Portal
- **Passenger Ship & Samudram Cruise Fares (Official IRCTC Portal):**
  - Synced with the official Lakshadweep ship ticketing site: [lakshadweep.irctc.co.in](https://lakshadweep.irctc.co.in/).
  - Real-time schedule details for **M.V. Kavaratti** (Samudram 5D/4N Cruise), **M.V. Arabian Sea / M.V. Lakshadweep Sea**, **M.V. Corals / M.V. Lagoons**, and **HSC Parali / Valiyapani** speed crafts.
  - Cabin fare chart: First Class AC (₹3,500 - ₹4,200), Second Class AC (₹2,200 - ₹2,600), Bunk Class (from ₹650 - ₹950).
  - Direct booking links to:
    - [lakshadweep.irctc.co.in](https://lakshadweep.irctc.co.in/) (Official IRCTC Ticketing)
    - [lakport.gov.in](https://lakport.gov.in) (Official Administration Transport Portal)

### 8. 📋 Admin CRM, Commission & Ship Fares Manager
Access via the **"Admin CRM"** button in the header or footer:
- **Tourist Bookings & Leads:** Real-time log of customer bookings, payment status, UTR numbers, and booking status (`New`, `Permit Applied`, `Confirmed`, `Completed`).
- **Commission Calculator:** Real-time summary of total commission earned.
- **Partner Registry:** Directory of all registered agencies, vendors, and their commission terms.
- **Ship Schedule & Fares Manager:**
  - Auto-Sync upcoming sailing dates from IRCTC timetable.
  - Manually edit sailing dates, ticket release windows, fares, and booking availability status per vessel.
  - Add custom holiday voyages or delete completed sailings.
- **1-Click WhatsApp Follow-up:** Quick buttons to confirm booking with tourists or notify local partners.
- **CSV Export:** Download all bookings to an Excel-friendly CSV.

---

## 🚀 Running & Hosting

1. **Local Server:**
   ```bash
   node server.js
   ```
   Open **`http://localhost:3000`** in any browser.

2. **100% Free Hosting Forever:**
   - **GitHub Pages:** Create a repository and enable Pages in Settings.
   - **Vercel or Netlify:** Drag and drop the `lak explorer` folder into [Netlify Drop](https://app.netlify.com/drop) or Vercel.
   - Zero server costs, free SSL certificate, and custom domain support!
