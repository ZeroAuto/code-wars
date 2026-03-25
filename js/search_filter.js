/**
 * CHALLENGE: Expedia Search Filter & Normalization
 * * INSTRUCTIONS:
 * 1. Create a function `standardizeHotelData` that accepts an array of objects.
 * 2. The input data is "dirty" (different keys for ID, Name, Price, and Rating).
 * 3. FILTER: Remove any hotel with a rating (score/stars) strictly below 4.0.
 * 4. NORMALIZE: Map all objects to a consistent schema: { id, name, price, rating }.
 * - Use 'hotel_id', 'id', or 'hotel_code' for `id`.
 * - Use 'title', 'name', or 'label' for `name`.
 * - Use 'nightly_rate', 'cost', 'price_per_night', or 'price' for `price`.
 * - Use 'stars', 'rating', or 'score' for `rating`.
 * 5. SORT: Return the final array sorted by `price` in ascending order.
 */

// Your implementation here...

/**
 * Standardizes and filters hotel data from inconsistent API sources.
 */
function standardizeHotelData(data) {
  // 1. Define key mappings
  const idKeys = ['hotel_id', 'id', 'hotel_code'];
  const nameKeys = ['title', 'name', 'label'];
  const priceKeys = ['nightly_rate', 'cost', 'price_per_night', 'price'];
  const ratingKeys = ['stars', 'rating', 'score'];

  return data
    // 2. Map to a consistent schema
    .map(hotel => {
      return {
        id: hotel[idKeys.find(key => key in hotel)],
        name: hotel[nameKeys.find(key => key in hotel)],
        price: hotel[priceKeys.find(key => key in hotel)],
        rating: hotel[ratingKeys.find(key => key in hotel)]
      };
    })
    // 3. Filter by rating (must be 4.0 or higher)
    .filter(hotel => hotel.rating >= 4.0)
    // 4. Sort by price ascending
    .sort((a, b) => a.price - b.price);
}

// --- Test Execution ---
const rawApiData = [
  { hotel_id: "H1", title: "Grand Plaza", nightly_rate: 200, stars: 4.5 },
  { id: "H2", name: "Budget Inn", cost: 80, rating: 3.2 },
  { hotel_code: "H3", label: "Ocean View", price_per_night: 350, score: 4.8 },
  { id: "H4", name: "Mountain Lodge", price: 150, rating: 4.2 }
];

const results = standardizeHotelData(rawApiData);
console.log(results);

/* Expected Output:
[
  { id: 'H4', name: 'Mountain Lodge', price: 150, rating: 4.2 },
  { id: 'H1', name: 'Grand Plaza', price: 200, rating: 4.5 },
  { id: 'H3', name: 'Ocean View', price: 350, rating: 4.8 }
]
*/
