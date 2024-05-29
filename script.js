// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//     const propertiesList = document.getElementById('properties-list');
//     const searchForm = document.getElementById('search-form');
    
//     const properties = [
//         {
//             id: 1,
//             name: 'Cozy Apartment',
//             location: 'New York',
//             price: 120,
//             amenities: ['Wi-Fi', 'Kitchen', 'Heating'],
//             image: 'assets/apt1.jpg'
//         },
//         {
//             id: 2,
//             name: 'Modern Studio',
//             location: 'San Francisco',
//             price: 150,
//             amenities: ['Wi-Fi', 'Pool', 'Air Conditioning'],
//             image: 'assets/apt2.jpg'
//         }
//         // Add more properties as needed
//     ];
    
//     function displayProperties(filteredProperties) {
//         propertiesList.innerHTML = '';
//         filteredProperties.forEach(property => {
//             const propertyCard = document.createElement('div');
//             propertyCard.className = 'property-card';
            
//             propertyCard.innerHTML = `
//                 <img src="${property.image}" alt="${property.name}">
//                 <div class="property-details">
//                     <h2>${property.name}</h2>
//                     <p>${property.location}</p>
//                     <p>$${property.price} per night</p>
//                     <p>Amenities: ${property.amenities.join(', ')}</p>
//                 </div>
//                 <div class="property-actions">
//                     <button class="like" data-id="${property.id}">Like</button>
//                     <button class="book" data-id="${property.id}">Book</button>
//                 </div>
//             `;
            
//             propertiesList.appendChild(propertyCard);
//         });
//     }
    
//     searchForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const location = document.getElementById('search-location').value.toLowerCase();
//         const minPrice = parseInt(document.getElementById('search-price-min').value) || 0;
//         const maxPrice = parseInt(document.getElementById('search-price-max').value) || Infinity;
        
//         const filteredProperties = properties.filter(property => {
//             return property.location.toLowerCase().includes(location) &&
//                    property.price >= minPrice &&
//                    property.price <= maxPrice;
//         });
        
//         displayProperties(filteredProperties);
//     });
    
//     propertiesList.addEventListener('click', function (e) {
//         if (e.target.classList.contains('like')) {
//             const propertyId = e.target.getAttribute('data-id');
//             // Implement like functionality
//             alert(`Liked property with ID: ${propertyId}`);
//         }
        
//         if (e.target.classList.contains('book')) {
//             const propertyId = e.target.getAttribute('data-id');
//             // Implement booking functionality
//             alert(`Booking property with ID: ${propertyId}`);
//         }
//     });
    
//     // Initial display of properties
//     displayProperties(properties);
// });

// // Advanced functionality for booking modal and liking properties
// const bookingModal = document.createElement('div');
// bookingModal.id = 'booking-modal';
// bookingModal.className = 'hidden';
// bookingModal.innerHTML = `
//     <div class="modal-content">
//         <h2>Book Property</h2>
//         <form id="booking-form">
//             <input type="date" id="booking-date" required>
//             <input type="number" id="booking-guests" placeholder="Number of Guests" required>
//             <button type="submit">Confirm Booking</button>
//             <button type="button" id="close-modal">Cancel</button>
//         </form>
//     </div>
// `;
// document.body.appendChild(bookingModal);

// const likedProperties = JSON.parse(localStorage.getItem('likedProperties')) || [];

// function updateLikedProperties(propertyId) {
//     if (likedProperties.includes(propertyId)) {
//         likedProperties.splice(likedProperties.indexOf(propertyId), 1);
//     } else {
//         likedProperties.push(propertyId);
//     }
//     localStorage.setItem('likedProperties', JSON.stringify(likedProperties));
// }

// document.getElementById('close-modal').addEventListener('click', function () {
//     bookingModal.classList.add('hidden');
// });

// document.getElementById('booking-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const bookingDate = document.getElementById('booking-date').value;
//     const bookingGuests = document.getElementById('booking-guests').value;
//     alert(`Booked for ${bookingGuests} guests on ${bookingDate}`);
//     bookingModal.classList.add('hidden');
// });

// propertiesList.addEventListener('click', function (e) {
//     if (e.target.classList.contains('like')) {
//         const propertyId = e.target.getAttribute('data-id');
//         updateLikedProperties(propertyId);
//         alert(`Toggled like for property with ID: ${propertyId}`);
//     }
    
//     if (e.target.classList.contains('book')) {
//         const propertyId = e.target.getAttribute('data-id');
//         bookingModal.classList.remove('hidden');
//     }
// });

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const propertiesList = document.getElementById('properties-list');
    const searchForm = document.getElementById('search-form');
    const sortSelect = document.getElementById('sort');
    const amenitiesSelect = document.getElementById('amenities');
    const bookingModal = document.getElementById('booking-modal');
    const closeModalButton = document.getElementById('close-modal');

    const properties = [
        {
            id: 1,
            name: 'Cozy Apartment',
            location: 'New York',
            price: 120,
            amenities: ['Wi-Fi', 'Kitchen', 'Heating'],
            image: 'https://source.unsplash.com/300x200/?apartment',
            likes: 10
        },
        {
            id: 2,
            name: 'Modern Studio',
            location: 'San Francisco',
            price: 150,
            amenities: ['Wi-Fi', 'Pool', 'Air Conditioning'],
            image: 'https://source.unsplash.com/300x200/?studio',
            likes: 20
        },
        {
            id: 3,
            name: 'Luxury Villa',
            location: 'Los Angeles',
            price: 300,
            amenities: ['Wi-Fi', 'Pool', 'Kitchen'],
            image: 'https://source.unsplash.com/300x200/?villa',
            likes: 30
        },
        {
            id: 4,
            name: 'Beach House',
            location: 'Miami',
            price: 250,
            amenities: ['Wi-Fi', 'Pool', 'Kitchen', 'Air Conditioning'],
            image: 'https://source.unsplash.com/300x200/?beachhouse',
            likes: 40
        },
        {
            id: 5,
            name: 'Mountain Cabin',
            location: 'Denver',
            price: 200,
            amenities: ['Wi-Fi', 'Kitchen', 'Heating'],
            image: 'https://source.unsplash.com/300x200/?cabin',
            likes: 50
        }
    ];

    function renderProperties(properties) {
        propertiesList.innerHTML = '';
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.name}">
                <div class="property-details">
                    <h2>${property.name}</h2>
                    <p>${property.location}</p>
                    <p>$${property.price} per night</p>
                    <p>Amenities: ${property.amenities.join(', ')}</p>
                </div>
                <div class="property-actions">
                    <button class="like" data-id="${property.id}"><i class="fas fa-heart"></i> Like (${property.likes})</button>
                    <button class="book" data-id="${property.id}"><i class="fas fa-calendar-alt"></i> Book</button>
                </div>
            `;
            propertiesList.appendChild(propertyCard);
        });
    }

    function filterProperties() {
        const searchLocation = document.getElementById('search-location').value.toLowerCase();
        const searchPriceMin = parseInt(document.getElementById('search-price-min').value, 10) || 0;
        const searchPriceMax = parseInt(document.getElementById('search-price-max').value, 10) || Infinity;
        const selectedAmenities = Array.from(amenitiesSelect.selectedOptions).map(option => option.value);
        const sortedProperties = properties
            .filter(property => property.location.toLowerCase().includes(searchLocation))
            .filter(property => property.price >= searchPriceMin && property.price <= searchPriceMax)
            .filter(property => selectedAmenities.every(amenity => property.amenities.includes(amenity)));

        const sortOption = sortSelect.value;
        if (sortOption === 'price-asc') {
            sortedProperties.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            sortedProperties.sort((a, b) => b.price - a.price);
        }

        renderProperties(sortedProperties);
    }

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        filterProperties();
    });

    sortSelect.addEventListener('change', filterProperties);
    amenitiesSelect.addEventListener('change', filterProperties);

    propertiesList.addEventListener('click', function (event) {
        if (event.target.classList.contains('like')) {
            const propertyId = event.target.dataset.id;
            const property = properties.find(property => property.id === parseInt(propertyId, 10));
            property.likes += 1;
            filterProperties();
        } else if (event.target.classList.contains('book')) {
            bookingModal.classList.remove('hidden');
        }
    });

    closeModalButton.addEventListener('click', function () {
        bookingModal.classList.add('hidden');
    });

    renderProperties(properties);
});

