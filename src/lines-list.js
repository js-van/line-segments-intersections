class LinesList {
  constructor(comparator) {
    this.lines = [];
    this.comparator = comparator;
  }

  getLine(position) {
    if (0 <= position && position <= this.lines.length)
      return this.lines[position];
    else
      return false;
  }

  add(line) {
    let comparator = this.comparator;
    let lines = this.lines;
    let pos = 0;

    while (pos < lines.length) {
      let cur = lines[pos];
      if (comparator(line, cur) > 0)
        pos++;
      else
        break;
    }

    lines.splice(pos, 0, line);

    return pos;
  }

  remove(line) {
    let lines = this.lines;
    let pos = this.search(line);

    lines.splice(pos, 1);

    return pos;
  }

  swap(lineA, lineB) {
    let lines = this.lines;
    let posA = this.search(lineA);
    let posB = this.search(lineB);

    lines[posA] = lineB;
    lines[posB] = lineA;

    return [posA, posB];
  }

  search(searchedLine) {
    return this.lines.indexOf(searchedLine)
  }
}

module.exports = LinesList;
