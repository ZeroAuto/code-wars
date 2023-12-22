const bouncingBall = (h, bounce, height) => {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || height >= h) { return -1 };
  let count = 1;
  let bounceHeight = h * bounce;
  while (bounceHeight > height) {
    count += 2;
    bounceHeight = bounceHeight * bounce;
  };
  return count;
};

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(3.0, 1.0, 1.5));
console.log(bouncingBall(2, 0.5, 1));
