//Preview SDR <START>

//Preview Modal
var modal = document.getElementById("myModal");
$( '#main' ).on( 'click', '#myBtn', function () {
    modal.style.display = "block";
    var sdr = document.getElementById("sdr-table").cloneNode(true);
    document.getElementById("sdr-preview").appendChild(sdr);
    $('#sdr-preview .modify').remove();
    $('#sdr-preview .addrow').closest('td').remove();
    $("#sdr-preview td").each(function(){
        $(this).html($(this).children()[0].value);
    });
});

//Close Modal
$( '#main' ).on( 'click', '#close', function () {
    modal.style.display = "none";
    $("#sdr-preview *").remove();
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $("#sdr-preview *").remove();
    }
}

//Preview SDR <END>