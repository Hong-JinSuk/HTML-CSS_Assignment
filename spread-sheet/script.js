const spreadSheetContainer = document.querySelector("#spreadsheet-container");

const exportBtn = document.querySelector("#export-btn");

const rows = 10;
const cols = 10;
const spreadsheet = []; // 내용

const colAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
];

// button click 시 엑셀 내보내기
exportBtn.onclick = function (e) {
  console.log(spreadsheet);

  let csv = "";
  for (let i = 0; i < spreadsheet.length; i++) {
    if (i == 0) continue;
    csv += spreadsheet[i]
      .filter((item) => !item.isHeader)
      .map((item) => item.data)
      .join("," + "\r\n");
  }

  const csvObj = new Blob([csv]);
  const csvUrl = URL.createObjectURL(csvObj);

  const a = document.createElement("a");
  a.href = csvUrl;
  a.download = "SpreadSheet File.csv";
  a.click();
};

// Cell
class Cell {
  constructor(
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active
  ) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
    this.active = active;
  }
}

// 스프레드 시트에 Cell을 넣음
function initSpreadsheet() {
  for (let y = 0; y < cols; y++) {
    let spreadsheetCol = [];
    for (let x = 0; x < rows; x++) {
      let cellData = "";
      let isHeader = false;
      let disabled = false;

      if (x == 0 && y > 0) {
        cellData = y;
        isHeader = true;
        disabled = true;
      } else if (y == 0 && x > 0) {
        cellData = colAlphabet[x - 1];
        isHeader = true;
        disabled = true;
      } else if (x == 0 && y == 0) {
        isHeader = true;
        disabled = true;
        cellData = "\\";
      }
      const rowName = y;
      const columnName = colAlphabet[x - 1];
      const cell = new Cell(
        isHeader,
        disabled,
        cellData,
        x,
        y,
        rowName,
        columnName,
        false
      );
      spreadsheetCol.push(cell);
    }
    spreadsheet.push(spreadsheetCol);
  }
  // 시트에 넣어줌
  drawSheet();
}

// cell 구조를 토대로 sheet에 넣을 양식
function createCellEl(cell) {
  const cellEl = document.createElement("input");
  cellEl.className = "cell";
  cellEl.id = "cell_" + cell.column + cell.row;
  cellEl.value = cell.data;
  cellEl.disabled = cell.disabled;

  if (cell.isHeader) {
    cellEl.classList.add("header");
  }

  cellEl.onclick = () => cellClicked(cell);
  cellEl.onchange = (e) => onChange(e.target.value, cell);

  return cellEl;
}

// cell에 data 입력시 data=""에 넣어주기
function onChange(data, cell) {
  cell.data = data;
}

function cellClicked(cell) {
  clearHeaderActiveStates();
  console.log("clicked cell", cell);
  const columnHeader = spreadsheet[0][cell.column];
  const rowHeader = spreadsheet[cell.row][0];

  const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);

  const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);

  columnHeaderEl.classList.add("active");
  rowHeaderEl.classList.add("active");
}

function getElFromRowCol(row, col) {
  return document.querySelector("#cell_" + row + col);
}

function clearHeaderActiveStates() {
  const headers = document.querySelectorAll(".header");

  headers.forEach((header) => {
    header.classList.remove("active");
  });
}

// 시트에 create한 cell을 추가
function drawSheet() {
  for (let y = 0; y < spreadsheet.length; y++) {
    const rowConatinerEl = document.createElement("div");
    rowConatinerEl.className = "cell-row";
    for (let x = 0; x < spreadsheet[y].length; x++) {
      rowConatinerEl.append(createCellEl(spreadsheet[y][x]));
      spreadSheetContainer.append(rowConatinerEl);
    }
  }
}

initSpreadsheet();
console.log(spreadsheet);
