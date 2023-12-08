from collections import deque


def tree_by_levels(root):
    if not root:
        return []

    result = []
    queue = deque()
    queue.append(root)

    while queue:
        current_node = queue.popleft()
        result.append(current_node.value)

        if current_node.left:
            queue.append(current_node.left)

        if current_node.right:
            queue.append(current_node.right)

    return result


class Node:
    def __init__(self, L, R, n):
        self.left = L
        self.right = R
        self.value = n


def level_order_traversal(root):
    def traverse(node, current_level, result):
        if not node:
            return

        if len(result) == current_level:
            result.append([])

        result[current_level].append(node.value)

        traverse(node.left, current_level + 1, result)
        traverse(node.right, current_level + 1, result)

    result = []
    traverse(root, 0, result)

    return [value for level in result for value in level]


# Example 1
tree1 = Node(Node(None, Node(None, None, 1), 8), Node(
    Node(None, None, 4), Node(None, None, 5), 9), 2)
result1 = level_order_traversal(tree1)
print(result1)  # Output: [2, 8, 9, 1, 3, 4, 5]

# Example 2
tree2 = Node(Node(None, Node(Node(None, None, 3), None, 8), 1),
             Node(None, Node(None, Node(None, None, 7), 5), 4), 1)
result2 = level_order_traversal(tree2)
print(result2)  # Output: [1, 8, 4, 3, 5, 7]
