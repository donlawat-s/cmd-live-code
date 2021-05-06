const char = "*";
const space = " ";

const generateLine = (cursor, num) => {
  let line = "";
  const reflection = num + 1 - cursor;
  for (let i = 1; i <= num; i++) {
    switch (i) {
      case cursor:
      case reflection:
        line += char;
        break;
      default:
        line += space;
        break;
    }
  }
  return line;
};

const generateCross = (num) => {
  let solutions = [];
  for (let j = 1; j <= num; j++) {
    solutions.push(generateLine(j, num));
  }
  return solutions.join("\n");
};

console.log(generateCross(39));
