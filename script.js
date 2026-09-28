// Update these details before publishing. Add a country code to the WhatsApp number (digits only).
		const BUSINESS = {
			name: "M-World Auto Parts",
			phone: "+267 74 429 920",
			whatsapp: "+267 74 429 920",
			address: "Mogoditshane Block 5, Gaborone, Botswana",
			hours: "08:30 - 17:30 Mon-Sun"
		};

		// Sample listings and prices: replace them with your actual parts, prices and photos.
		const VEHICLES = [
			{ id: "honda-fit", name: "Honda Fit" },
			{ id: "mazda-demio", name: "Mazda Demio" }
		];

		const PART_TYPES = [
			{ category: "Engine", title: "Engine", price: 4500, description: "Engine parts. Contact us with your model year.", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=750&q=80" },
			{ category: "Gearbox", title: "Gearbox", price: 3200, description: "Gearbox parts. Contact us to check compatibility.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Bonnet", title: "Bonnet", price: 1800, description: "Bonnet panel for this model.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=750&q=80" },
			{ category: "Front bumper", title: "Front Bumper", price: 1500, description: "Front bumper for this model.", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=750&q=80" },
			{ category: "Rear bumper", title: "Rear Bumper", price: 1400, description: "Rear bumper for this model.", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=750&q=80" },
			{ category: "Left front door", title: "Left Front Door", price: 1200, description: "Left front door for this model.", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=750&q=80" },
			{ category: "Right front door", title: "Right Front Door", price: 1200, description: "Right front door for this model.", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=750&q=80" },
			{ category: "Left rear door", title: "Left Rear Door", price: 1100, description: "Left rear door for this model.", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=750&q=80" },
			{ category: "Right rear door", title: "Right Rear Door", price: 1100, description: "Right rear door for this model.", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=750&q=80" },
			{ category: "Headlights", title: "Headlight", price: 650, description: "Headlight for this model. Ask us about the left or right side.", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=750&q=80" },
			{ category: "Tail lights", title: "Tail Light", price: 600, description: "Tail light for this model. Ask us about the left or right side.", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=750&q=80" },
			{ category: "Side mirrors", title: "Side Mirror", price: 450, description: "Side mirror for this model. Ask us about the left or right side.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=750&q=80" },
			{ category: "Seats", title: "Seats", price: 900, description: "Seats for this model. Contact us for details.", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=750&q=80" },
			{ category: "Dashboard", title: "Dashboard", price: 1300, description: "Dashboard for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Steering wheel", title: "Steering Wheel", price: 500, description: "Steering wheel for this model.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=750&q=80" },
			{ category: "Other parts", title: "Other Parts", price: 300, description: "Other parts for this model. Contact us with what you need.", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=750&q=80" }
		];

		const PARTS = VEHICLES.flatMap((vehicle) => PART_TYPES.map((part) => ({
			id: `${vehicle.id}-${part.category.toLocaleLowerCase().replace(/\s+/g, "-")}`,
			vehicle: vehicle.name,
			category: part.category,
			name: `${vehicle.name} ${part.title}`,
			description: part.description.replace("this model", vehicle.name),
			price: part.price,
			image: part.image
		})));

		const currency = new Intl.NumberFormat("en-BW", { maximumFractionDigits: 0 });
		const money = (amount) => `P${currency.format(amount)}`;
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
					<div class="part-bottom"><span class="part-price">${money(part.price)}</span><button class="button button--outline" type="button" data-view-part="${part.id}">View part</button></div>
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
			resultCount.textContent = normalized ? `${visibleTotal} matching ${visibleTotal === 1 ? "part" : "parts"}` : `${PARTS.length} sample parts across ${VEHICLES.length} vehicles`;
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
			document.querySelector("#dialog-price").textContent = money(part.price);
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