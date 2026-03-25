const bookings = [
  { id: 1, type: 'Flight A', start: 9, end: 11 },
  { id: 2, type: 'Hotel Check-in', start: 10, end: 14 },
  { id: 3, type: 'Lunch Meeting', start: 13, end: 15 },
  { id: 4, type: 'City Tour', start: 16, end: 18 },
  { id: 5, type: 'Dinner', start: 17, end: 20 }
];

function findConflicts(bookings) {
  const sortedFlights = [...bookings].sort((a, b) => a.start - b.state);
  // console.table(sortedFlights);
  const result = [];

  for (let i = 1; i < sortedFlights.length; i++) {
    const prevFlight = sortedFlights[i - 1];
    const currentFlight = sortedFlights[i];
    if (currentFlight.start <= prevFlight.end) {
      result.push([prevFlight.id, currentFlight.id]);
    }
  };

  return result;
};

console.log(findConflicts(bookings));

// Expected Output: [[1,2], [3,4]]
