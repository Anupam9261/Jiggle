//Import SDR <START>

document.getElementById("importSDR").addEventListener("change", function() {
    var file_to_read = document.getElementById("importSDR").files[0];
    var fileread = new FileReader();
    fileread.onload = function(e) {
        var content = e.target.result;
        //Array of Json
        var jsonSDR = JSON.parse(content);
        for(var i=1;i<jsonSDR.length;i++){
            var newRow = $('<tr>');
            var cols = "";
            cols += '<td><input type="text" value="'+ jsonSDR[i][0] +'" class="form-control text-center" placeholder="Scope" /></td>';
            cols += '<td><input type="text" value="'+ jsonSDR[i][1] +'" class="form-control text-center" placeholder="Use Case"/></td>';
            cols += '<td><input type="text" value="'+ jsonSDR[i][2] +'" class="form-control text-center" placeholder="Location"/></td>';
            cols += '<td><input type="text" value="'+ jsonSDR[i][3] +'" class="form-control text-center" placeholder="EC"/></td>';
            cols += '<td><input type="text" value="'+ jsonSDR[i][4] +'" class="form-control text-center" placeholder="EA"/></td>';
            cols += '<td><input type="text" value="'+ jsonSDR[i][5] +'" class="form-control text-center" placeholder="EL"/></td>';
            cols += '<td><input type="text" value="'+ jsonSDR[i][6] +'" class="form-control text-left" placeholder="Comment"/></td>';
            cols += '<td style="white-space: nowrap"><input type="button" style="margin-right: 3px; " class="addrow btn btn-md btn-primary" value="Add Row"><input type="button" class="ibtnDel btn btn-md btn-danger" value="Delete"></td></tr>';
            newRow.append(cols);
            $("#tbody").append(newRow);
        }
    };
    fileread.readAsText(file_to_read);
    $("#import-switch").remove();
    var previewSDR = "<Button id='myBtn' class='btn btn-block btn-dark'>Preview SDR</Button>";
    $("#main").append(previewSDR);
});

//Import SDR <END>