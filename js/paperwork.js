const paperwork = (n,m) => {
  const classmates = n > 0 ? n : 0;
  const pages = m > 0 ? m : 0;
  return classmates * pages;
};

const paperworkMath = (n,m) => Math.max(0, n) * Math.max(0, m);
