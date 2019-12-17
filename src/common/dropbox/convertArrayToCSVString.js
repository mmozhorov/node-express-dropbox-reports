module.exports = function(csv){
    let csvContent = "";
    csv.forEach(function(rows){
        const dataString = rows.join(",");
        csvContent += dataString + "\n";
    });
    return csvContent;
};