/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const res = [];
  candidates.sort((a, b) => a - b);
  dfs(candidates, target, 0, [], res);
  return res;
};

const dfs = (candidates, target, start, path, res) => {
  if (target < 0) return;
  if (target === 0) {
    res.push([...path]);
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    path.push(candidates[i]);
    dfs(candidates, target - candidates[i], i, path, res);
    path.pop();
  }
};
