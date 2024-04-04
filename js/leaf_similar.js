const leafSimilar = (root1, root2) => {
  const output1 = []
  const output2 = []

  const dfs = (node, output) => {
    if(!node) return
    if(!node.left && !node.right) {
      output.push(node.val)
      return
    }
    if(node.left) dfs(node.left, output)
    if(node.right) dfs(node.right, output)
  };

  dfs(root1, output1);
  dfs(root2, output2);

  return (output1.length == output2.length &&
          output1.every((val, index) => val === output2[index]));
};

console.log(leafSimilar([3,5,1,6,2,9,8,null,null,7,4], [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8])); // true
console.log(leafSimilar([1,2,3], [1,3,2])); // false
