// https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript

const getSize = (width, height, depth) => {
  return [
    (2 * depth * height) + (2 * height * width) + (2 * width * depth),
    width * height * depth,
  ];
};
