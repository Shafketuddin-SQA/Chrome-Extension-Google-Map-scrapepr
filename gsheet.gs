function jsonToSheet() {
  // Sample JSON data (replace with your actual JSON data or a file input)
  var jsonData =[

];
  
  // Get the active sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Set headers in the first row
  var headers = ["name", "businessTypeAndAddress", "website", "phone"];
  sheet.appendRow(headers);
  
  // Loop through the JSON data and append each row
  jsonData.forEach(function(entry) {
    var row = [
      entry.name,
      entry.businessTypeAndAddress,
      entry.website,
      entry.phone
    ];
    sheet.appendRow(row);
  });
}
