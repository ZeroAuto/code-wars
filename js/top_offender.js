/**
 * PROBLEM: Find the IP address with the highest number of 401 errors.
 * * INPUT: A raw string of logs.
 * OUTPUT: A string in the format "IP: COUNT" (e.g., "192.168.1.1: 3")
 */

const rawLogs = `
[2026-03-15 10:01:22] ERROR 192.168.1.1 "/login" 401
[2026-03-15 10:01:25] SUCCESS 192.168.1.5 "/dashboard" 200
[2026-03-15 10:02:10] ERROR 192.168.1.1 "/login" 401
[2026-03-15 10:03:45] ERROR 172.16.0.45 "/api/v1/user" 500
[2026-03-15 10:05:00] ERROR 192.168.1.1 "/login" 401
[2026-03-15 10:06:12] ERROR 172.16.0.45 "/login" 401
`;




function findTopOffender(logs) {
  const lines = logs.split(/\r?\n/);

  const occurenceMap = new Map();

  lines.forEach(line => {
    if (line.includes('401')) {
      const lineArr = line.split(' ');
      const ip = lineArr[3];
      // console.log(ip);
      if (occurenceMap.has(ip)) {
        occurenceMap.set(ip, occurenceMap.get(ip) + 1)
      } else {
        occurenceMap.set(ip, 1);
      }
    }
    // line.split(' ');
    // if 
  })


  return getMax(occurenceMap);
  // return occurenceMap
  // return lines;
}

function getMax(occurenceMap) {
  let maxCount = 0;
  let topIp = '';


  for (const [ip, count] of occurenceMap) {
    if (count > maxCount) {
      maxCount = count;
      topIp = ip;
    }
  }

  return topIp;
};

// TEST
console.log("Top Offender:", findTopOffender(rawLogs));
// Expected Output: "192.168.1.1: 3"
