// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript

const chooseBestSum = (t, k, ls) => {
    const findCombinations = (start, count, currentSum) => {
        // Base Case: If we have picked k towns, return the sum
        if (count === k) {
            return currentSum <= t ? currentSum : -1;
        }

        let best = -1;
        // Explore remaining elements
        for (let i = start; i < ls.length; i++) {
            const newSum = currentSum + ls[i];

            // Only recurse if the sum doesn't exceed t
            if (newSum <= t) {
                const res = findCombinations(i + 1, count + 1, newSum);
                // Keep track of the maximum valid sum found so far
                if (res > best) {
                    best = res;
                }
            }
        }
        return best;
    };

    const result = findCombinations(0, 0, 0);
    return result !== -1 ? result : null;
};
