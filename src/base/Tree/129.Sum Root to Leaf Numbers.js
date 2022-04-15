/**
 * 【Day 15】129.Sum Root to Leaf Numbers 「求根到叶子节点数字之和」
 * DFS
 * k * 10 + k= 节点值
 */

 const dfs = (root,prevSum) => {
  if(root === null)
    return 0;

  const sum = prevSum * 10 + root.val;

  if(root.left === null && root.right === null)
    return sum;
  else
    return dfs(root.left, sum) + dfs(root.right, sum);
};

const sumNumbers = root =>{
 
return dfs(root, 0)

};