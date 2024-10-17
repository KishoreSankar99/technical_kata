function add(numbers) {
  let delimiter = /,|\n/;

  if (numbers === "") return 0;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0][2]);
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map((num) => parseInt(num));
  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}

module.exports = add;
