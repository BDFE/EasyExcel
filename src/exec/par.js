import xlsx from 'node-xlsx';
// Or var xlsx = require('node-xlsx').default;

const path =`./input/file.xlsx`
// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(path));
// Parse a file
const workSheetsFromFile = xlsx.parse(path);

// console.log(workSheetsFromBuffer)