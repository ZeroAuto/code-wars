from typing import List, Tuple

def merge_video_clips(intervals: List[Tuple[int, int]]) -> List[Tuple[int, int]]:
    """
    Takes an unsorted list of closed time intervals (start_time, end_time) 
    representing video clips and merges all overlapping or touching intervals.

    Returns a sorted list of non-overlapping intervals.
    """
    sorted_intervals = sorted(intervals, key=lambda x: x[0])
    current_index = 0
    result = []
    for x, y in sorted_intervals:
        # if list is empty append the first tuple 
        if len(result) == 0:
            result.append((x, y))
        else:
            right, left = result[current_index]
            # if x is less than or equal to left then we update the tuple
            # at current index with y
            if x <= left:
                result[current_index] = (right, max(y, left))
            else:
                # if x is greater than left then we append the tuple to the list
                result.append((x, y))
                current_index += 1
    # pass
    return result  # Placeholder return; implement merging logic here


# ==========================================
# TEST CASES
# ==========================================

def test_merge_video_clips_overlapping():
    intervals = [(1, 3), (2, 6), (8, 10), (15, 18)]
    expected = [(1, 6), (8, 10), (15, 18)]
    assert merge_video_clips(intervals) == expected

def test_merge_video_clips_touching_and_unsorted():
    # Clips touching at boundaries (e.g. 4 to 7 and 7 to 9) should merge into (4, 9)
    intervals = [(7, 9), (1, 3), (4, 7), (2, 4)]
    expected_correct = [(1, 9)]
    assert merge_video_clips(intervals) == expected_correct

def test_merge_video_clips_single_and_empty():
    assert merge_video_clips([]) == []
    assert merge_video_clips([(5, 10)]) == [(5, 10)]

test_merge_video_clips_overlapping()
test_merge_video_clips_touching_and_unsorted()
test_merge_video_clips_single_and_empty()