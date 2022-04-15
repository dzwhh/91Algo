/**
 * 821.Shortest Distance to a Character 「字符的最短距离」
 * 输入：s = "loveleetcode", c = "e"
 * 输出：[3,2,1,0,1,0,0,1,2,2,1,0]
 */
const shortestToChar = (s, c) => {
	let res = [];
	let dist = [];

	for (let i = 0; i < s.length; i++) {
		if(s[i] === c)
			res.push(i);
	}

	for(let j = 0; j < s.length; j++){
		dist[j] = res.reduce((acc, val) => {
			return Math.min(Math.abs(j - val), acc);
		},10000)
	}
	return dist;
}
// Example
console.log(shortestToChar('loveleetcode','e'));
  