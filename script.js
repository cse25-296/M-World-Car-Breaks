// Update these details before publishing. Add a country code to the WhatsApp number (digits only).
		const BUSINESS = {
			name: "M-World Auto Parts",
			phone: "+267 74 429 920",
			whatsapp: "+267 74 429 920",
			address: "Mogoditshane Block 5, Gaborone, Botswana",
			hours: "08:30 - 17:30 Mon-Sun"
		};

		// Mazda Demio listings and prices.
		const VEHICLES = [
			{ id: "mazda-demio", name: "Mazda Demio" }
		];

		const PART_TYPES = [
			{ category: "Rear axle", title: "Rear Axle", price: 2500, description: "Rear axle for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Fender", title: "Fender", price: 650, description: "Price is per fender.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=750&q=80" },
			{ category: "Side mirror", title: "Side Mirror", price: 800, description: "Price is per mirror.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=750&q=80" },
			{ category: "Bonnet", title: "Bonnet", price: 1400, description: "Bonnet panel for this model.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=750&q=80" },
			{ category: "Bumper normal", title: "Bumper (Normal)", price: 1300, description: "Normal front bumper for this model.", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=750&q=80" },
			{ category: "Bumper sport", title: "Bumper (Sport)", price: 1600, description: "Sport front bumper for this model.", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=750&q=80" },
			{ category: "Rear bumper", title: "Rear Bumper", price: 650, description: "Rear bumper for this model.", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=750&q=80" },
			{ category: "Headlamp normal", title: "Headlamp (Normal)", price: 1200, description: "Normal headlamp for this model.", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=750&q=80" },
			{ category: "Headlamp xenon", title: "Headlamp (Xenon)", price: 1300, description: "Xenon headlamp for this model.", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=750&q=80" },
			{ category: "Boot complete", title: "Boot Complete", price: 1400, description: "Complete boot for this model.", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=750&q=80" },
			{ category: "Complete shaft", title: "Complete Shaft", price: 800, description: "Complete shaft for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Brake disc", title: "Brake Disc", price: 200, description: "Brake disc for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Sub axle", title: "Sub Axle", price: 250, description: "Sub axle for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Window glass", title: "Window Glass", price: 350, description: "Price is per window glass.", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=750&q=80" },
			{ category: "Window motor", title: "Window Motor", price: 250, description: "Window motor for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Main window switch", title: "Window Switch (Main)", price: 500, description: "Main window switch for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Window switch", title: "Window Switch", price: 200, description: "Window switch for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Coolant bottle", title: "Coolant Bottle", price: 200, description: "Coolant bottle for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Complete door", title: "Complete Door", price: 1400, description: "Complete door for this model.", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=750&q=80" },
			{ category: "Door shell", title: "Door Shell", price: 700, description: "Door shell for this model.", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=750&q=80" },
			{ category: "Starter", title: "Starter", price: 350, description: "Starter motor for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Alternator", title: "Alternator", price: 600, description: "Alternator for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Crank sensor", title: "Crank Sensor", price: 200, description: "Crank sensor for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "ABS sensor", title: "ABS Sensor", price: 150, description: "Price is per sensor.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Creddle", title: "Creddle", price: 700, description: "Creddle for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Radiator", title: "Radiator", price: 1000, description: "Radiator for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Front seats", title: "Car Seats (Front)", price: 500, description: "Price is per front seat.", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=750&q=80" },
			{ category: "Rear seats", title: "Car Seats (Rear)", price: 600, description: "Rear seat set for this model.", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=750&q=80" },
			{ category: "Radio bracket", title: "Radio Bracket", price: 500, description: "Radio bracket without radio.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Radio bracket with radio", title: "Radio Bracket with Radio", price: 1000, description: "Radio bracket supplied with radio.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Seat belt", title: "Seat Belt", price: 250, description: "Price is per seat belt.", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=750&q=80" },
			{ category: "AC compressor", title: "AC Compressor", price: 450, description: "AC compressor for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Engine slim", title: "Engine (Slim)", price: 4000, description: "Slim engine for this model.", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=750&q=80" },
			{ category: "Engine complete", title: "Engine (Complete)", price: 5500, description: "Complete engine for this model.", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=750&q=80" },
			{ category: "Gearbox", title: "Gearbox", price: 4000, description: "Gearbox for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Door panel", title: "Door Panel", price: 150, description: "Price is per door panel.", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=750&q=80" },
			{ category: "AC controller", title: "AC Controller", price: 450, description: "AC controller for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Tyres", title: "Tyres", price: 250, priceLabel: "P250-P300", description: "Price ranges from P250 to P300 per tyre.", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=750&q=80" },
			{ category: "Standard black rim", title: "Standard Black Rim", price: 150, description: "Price is per rim.", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=750&q=80" }
		];

		const PARTS = VEHICLES.flatMap((vehicle) => PART_TYPES.map((part) => ({
			id: `${vehicle.id}-${part.category.toLocaleLowerCase().replace(/\s+/g, "-")}`,
			vehicle: vehicle.name,
			category: part.category,
			name: `${vehicle.name} ${part.title}`,
			description: part.description.replace("this model", vehicle.name),
			price: part.price,
			priceLabel: part.priceLabel,
			image: part.image
		})));

		const currency = new Intl.NumberFormat("en-BW", { maximumFractionDigits: 0 });
		const money = (amount) => `P${currency.format(amount)}`;
		const partPrice = (part) => part.priceLabel || money(part.price);
		const safeImage = (image, alt) => `<img src="${image}" alt="${alt}" loading="lazy" onerror="this.style.display='none'">`;
		const catalogGroups = document.querySelector("#catalog-groups");
		const searchInput = document.querySelector("#search-input");
		const clearSearch = document.querySelector("#clear-search");
		const emptyState = document.querySelector("#empty-state");
		const resultCount = document.querySelector("#results-count");
		const dialog = document.querySelector("#part-dialog");
		const contactDialog = document.querySelector("#contact-dialog");

		catalogGroups.innerHTML = VEHICLES.map((vehicle) => `
			<section class="vehicle-section" id="${vehicle.id}" aria-labelledby="heading-${vehicle.id}">
				<div class="model-heading"><h3 id="heading-${vehicle.id}">${vehicle.name}</h3><span data-model-count="${vehicle.id}"></span></div>
				<div class="parts-grid" data-model-grid="${vehicle.id}"></div>
			</section>`).join("");

		function renderPart(part) {
			return `<article class="part-card" data-part-id="${part.id}">
				<div class="part-image">${safeImage(part.image, `${part.name} part photo`)}</div>
				<div class="part-info"><span class="part-model">${part.vehicle} · ${part.category}</span><h4>${part.name}</h4><p>${part.description}</p>
					<div class="part-bottom"><span class="part-price">${partPrice(part)}</span><button class="button button--outline" type="button" data-view-part="${part.id}">View part</button></div>
				</div>
			</article>`;
		}

		function filterParts(query = "") {
			const normalized = query.trim().toLocaleLowerCase();
			const terms = normalized.split(/\s+/).filter(Boolean);
			let visibleTotal = 0;
			VEHICLES.forEach((vehicle) => {
				const matches = PARTS.filter((part) => {
					const searchable = `${part.name} ${part.vehicle} ${part.category} ${part.description}`.toLocaleLowerCase();
					return part.vehicle === vehicle.name && terms.every((term) => searchable.includes(term));
				});
				const section = document.querySelector(`#${vehicle.id}`);
				const grid = document.querySelector(`[data-model-grid="${vehicle.id}"]`);
				section.hidden = matches.length === 0;
				grid.innerHTML = matches.map(renderPart).join("");
				document.querySelector(`[data-model-count="${vehicle.id}"]`).textContent = `${matches.length} ${matches.length === 1 ? "part" : "parts"}`;
				visibleTotal += matches.length;
			});
			resultCount.textContent = normalized ? `${visibleTotal} matching ${visibleTotal === 1 ? "part" : "parts"}` : `${PARTS.length} available parts for ${VEHICLES.length} ${VEHICLES.length === 1 ? "vehicle" : "vehicles"}`;
			clearSearch.classList.toggle("is-visible", Boolean(normalized));
			emptyState.classList.toggle("is-visible", visibleTotal === 0);
		}

		function setBusinessDetails() {
			document.querySelector("#business-name").textContent = BUSINESS.name;
			document.querySelector("#business-address").textContent = BUSINESS.address;
			document.querySelector("#location-dialog-address").textContent = BUSINESS.address;
			document.querySelector("#business-hours").textContent = BUSINESS.hours;
			document.querySelector("#business-phone").textContent = BUSINESS.phone;
			document.querySelector("#dialog-business-phone").textContent = BUSINESS.phone;
			document.querySelector("#dialog-business-whatsapp").textContent = BUSINESS.whatsapp || "Add your WhatsApp number";
			document.querySelector("#year").textContent = new Date().getFullYear();
			const digits = BUSINESS.whatsapp.replace(/\D/g, "");
			const whatsappButton = document.querySelector("#whatsapp-button");
			const dialogWhatsappButton = document.querySelector("#dialog-whatsapp-button");
			if (digits.length >= 8) {
				whatsappButton.href = `https://wa.me/${digits}`;
				whatsappButton.target = "_blank";
				whatsappButton.rel = "noopener noreferrer";
				dialogWhatsappButton.href = `https://wa.me/${digits}`;
				dialogWhatsappButton.target = "_blank";
				dialogWhatsappButton.rel = "noopener noreferrer";
			}
			const phoneDigits = BUSINESS.phone.replace(/\D/g, "");
			const phoneButton = document.querySelector("#phone-button");
			const dialogPhoneButton = document.querySelector("#dialog-phone-button");
			if (phoneDigits.length >= 8) {
				const phoneLink = `tel:${BUSINESS.phone.replace(/[^+\d]/g, "")}`;
				phoneButton.href = phoneLink;
				dialogPhoneButton.href = phoneLink;
			}
		}

		function openPart(id) {
			const part = PARTS.find((item) => item.id === id);
			if (!part) return;
			document.querySelector("#dialog-image").src = part.image;
			document.querySelector("#dialog-image").alt = `${part.name} part photo`;
			document.querySelector("#dialog-title").textContent = part.name;
			document.querySelector("#dialog-description").textContent = part.description;
			document.querySelector("#dialog-vehicle").textContent = `Vehicle: ${part.vehicle}`;
			document.querySelector("#dialog-price").textContent = partPrice(part);
			document.querySelector("#dialog-contact").onclick = (event) => {
				event.preventDefault();
				dialog.close();
				contactDialog.showModal();
			};
			dialog.showModal();
		}

		document.querySelector("#search-form").addEventListener("submit", (event) => {
			event.preventDefault();
			filterParts(searchInput.value);
			document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
		});
		searchInput.addEventListener("input", () => filterParts(searchInput.value));
		clearSearch.addEventListener("click", () => { searchInput.value = ""; filterParts(); searchInput.focus(); });
		catalogGroups.addEventListener("click", (event) => {
			const button = event.target.closest("[data-view-part]");
			if (button) openPart(button.dataset.viewPart);
		});
		document.querySelector(".modal-close").addEventListener("click", () => dialog.close());
		dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
		document.querySelectorAll("#nav-contact, #nav-contact-link").forEach((button) => button.addEventListener("click", () => contactDialog.showModal()));
		contactDialog.querySelector(".modal-close").addEventListener("click", () => contactDialog.close());
		contactDialog.addEventListener("click", (event) => { if (event.target === contactDialog) contactDialog.close(); });
		const locationDialog = document.querySelector("#location-dialog");
		document.querySelector("#nav-location").addEventListener("click", () => locationDialog.showModal());
		locationDialog.querySelector(".modal-close").addEventListener("click", () => locationDialog.close());
		locationDialog.addEventListener("click", (event) => { if (event.target === locationDialog) locationDialog.close(); });
		document.querySelectorAll("#whatsapp-button, #phone-button, #dialog-whatsapp-button, #dialog-phone-button").forEach((button) => button.addEventListener("click", (event) => {
			const configured = button.id.includes("whatsapp") ? BUSINESS.whatsapp.replace(/\D/g, "").length >= 8 : BUSINESS.phone.replace(/\D/g, "").length >= 8;
			if (!configured) {
				event.preventDefault();
				alert("Add your real phone and WhatsApp numbers in the BUSINESS settings at the top of script.js before publishing.");
			}
		}));

		setBusinessDetails();
		filterParts();