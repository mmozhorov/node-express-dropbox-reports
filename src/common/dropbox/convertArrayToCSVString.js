module.exports = function(csv){
    let csvContent = "";
    csv.forEach(function(obj){
        const rows = [ obj["name"], obj["lastName"], obj["profession"], obj["photo"], obj["join_date"] ];
        const dataString = rows.join(",");
        csvContent += dataString + "\n";
    });
    return csvContent;
};