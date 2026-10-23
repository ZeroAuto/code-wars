# https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa


def choose_best_sum(t, k, ls):
    def find_combinations(start, count, current_sum):
        # Base Case: If we have picked k towns, return the sum
        if count == k:
            return current_sum if current_sum <= t else -1

        best = -1
        # Explore remaining elements
        for i in range(start, len(ls)):
            new_sum = current_sum + ls[i]

            # Only recurse if the sum doesn't exceed t
            if new_sum <= t:
                res = find_combinations(i + 1, count + 1, new_sum)
                # Keep track of the maximum valid sum found so far
                best = max(res, best)

        return best

    result = find_combinations(0, 0, 0)
    return result if result != -1 else None


# Example usage:
ls = [50, 55, 57, 58, 60]
print(choose_best_sum(174, 3, ls))  # Output: 173
