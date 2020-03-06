//HTML to JSON <START>

//Download SDR
$( '#main' ).on( 'click', '#downloadSDR', function () {
    var jsonSDR = $('#sdr-preview tr').map(function(){
        return [
            $('td,th',this).map(function(){
                return $(this).text();
            }).get()
        ];
    }).get();
    var json = JSON.stringify(jsonSDR);
    console.log(jsonSDR);
    console.log(json);
    downloadObjectAsJson(jsonSDR, "SDR Table");
});

//Download Function
function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

//HTML to JSON <END>