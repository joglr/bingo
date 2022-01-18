function doStuff() {
  prettyPrint(makeBingoBoard());
  prettyPrint(makeBingoBoard());
  prettyPrint(makeBingoBoard());
}

export function makeBingoBoard() {
  const board = [...new Array(3)].map(() => {
    const row = [...new Array(9)].map((_, i) =>
      randomIntFromRange(10 * i + 1, 10 * (i + 1) - 1)
    );
    // const shuffledIndices =
    // shuffle(range(0,8))
    //for (let i = 0; i < 4; i++) {
    //  row[shuffledIndices[i]] = null
    //}
    return row;
  });

  return board;
}

function randomIntFromRange(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min));
}

function range(start: number, stop: number) {
  return [...new Array(stop - start + 1)].map((_, i) => start + i);
}

export function shuffle<T>(array: T[]) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function prettyPrint(board: number[][]) {
  console.log(`+${"-".repeat(28)}+`);
  for (const row of board) {
    let rowText = "| ";
    for (const i of row) {
      rowText += i == null ? "  " : `${i}${i < 10 ? " " : ""}`;
      rowText += " ";
    }
    rowText += "|";
    console.log(rowText);
  }
  console.log(`+${"-".repeat(28)}+`);
}

doStuff();
