// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
const stockList = (listOfArt, listOfCat) => {
  if (!listOfArt.length) return '';
  const catObj = {};

  listOfArt.forEach((art) => {
    const item = art[0];
    const count = parseInt(art.split(' ')[1]);
    if (listOfCat.includes(item)) {
      if (item in catObj) {
        catObj[item] += count;
      } else {
        catObj[item] = count;
      }
    }
  });

  return listOfCat.map(cat => cat in catObj ? `(${cat} : ${catObj[cat]})` : `(${cat} : 0)`).join(' - ');
};

// more concise solution
const stockListConcise = (listOfArt, listOfCat) => {
  if (!listOfArt.length || !listOfCat.length) return ''
  return listOfCat.map(w => {
    const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
    return `(${w} : ${s})`
  }).join(' - ')
}

// there is a one line solution
const stockListOneLine = (listOfArt, listOfCat) =>
  listOfArt.length ? listOfCat.map(val => `(${val} : ${listOfArt.reduce((pre, v) => pre + (v[0] === val) * v.split(` `)[1], 0)})`).join(` - `) : ``;

console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ['A', 'B', 'C', 'D']));
