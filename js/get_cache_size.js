let data = [[105321, 183], [105334, 34], [105198, 543]]
let queries = [105338, 105410];

function getCacheSize(data, queries) {
    const timeline = [];
    let originalPosition = 0;
    [...data, ...queries].forEach((item, idx) => {
      if (idx < data.length) {
        const timeObj1 = {
          timestamp: item[0],
          type: 'entry',
        };

        const timeObj2 = {
          timestamp: item[0] + item[1],
          type: 'exit',
        };

        timeline.push(timeObj1);
        timeline.push(timeObj2);
      } else {
        timeline.push({
          timestamp: item,
          type: 'query',
          originalPosition: originalPosition,
        });
        originalPosition++;
      }
    });

    const sortTimestamps = (a,b) => {
      const timestampDiff = a.timestamp - b.timestamp;
      
      if (timestampDiff !== 0) {
        return timestampDiff;
      }
      
      if (a.type === 'query' && b.type !== 'query') return -1;
      if (a.type !== 'query' && b.type === 'query') return 1;
  
      return 0; // If both have the same type, keep the order
    };

    console.table(timeline.sort(sortTimestamps));
    
    let count = 0;
    
    let result = [];
    
    timeline.sort(sortTimestamps).forEach(time => {
      if (time.type === 'entry') count ++;
      if (time.type === 'exit') count--;
      if (time.type === 'query') {
        console.log(`count: ${count}`)
        console.log(`original position: ${time.originalPosition}`)
        result[time.originalPosition] = count;
      }
    });
    
    return result;
}

console.log(getCacheSize(data, queries)); // 3,2
data = [[5310825, 300], [5311081, 101], [5299871, 5239], [5310025, 1081]];
queries = [5311088, 5299890];
console.log(getCacheSize(data, queries)); // 3,1
data = [[128353, 5467], [133289, 4791], [128859, 5195], [124926, 3006], [132408, 3673]];
queries = [129366, 134172, 126789];
console.log(getCacheSize(data, queries)); // 2,2,2
