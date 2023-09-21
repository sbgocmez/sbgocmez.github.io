const XLSX = require('xlsx');

// Create an array of data (each element represents a row)
const data = [
  ['Header 1', 'Header 2', 'Header 3'],
  ['Data 1', 'Data 2', 'Data 3'],
  ['More Data 1', 'More Data 2', 'More Data 3'],
  // Add more rows as needed
];

// Create a new workbook and add a worksheet
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.aoa_to_sheet(data); // Use aoa_to_sheet for an array of arrays

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Create a blob from the workbook
const blob = XLSX.write(workbook, { bookType: 'xlsx', type: 'blob' });

// Create a URL for the blob
const url = URL.createObjectURL(blob);

// Create a link to download the file
const a = document.createElement('a');
a.href = url;
a.download = 'data.xlsx';

// Trigger a click event to start the download
a.click();

// Clean up the URL and remove the link
URL.revokeObjectURL(url);
