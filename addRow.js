$("table.order-list").on("click", ".addrow", function () {
    var newRow = $('<tr>');
    var cols = "";
    cols += '<td><input type="text" class="form-control text-center" placeholder="Scope"/></td>';
    cols += '<td><input type="text" class="form-control text-center" placeholder="Use Case"/></td>';
    cols += '<td><input type="text" class="form-control text-center" placeholder="Location"/></td>';
    cols += '<td><input type="text" class="form-control text-center" placeholder="EC"/></td>';
    cols += '<td><input type="text" class="form-control text-center" placeholder="EA"/></td>';
    cols += '<td><input type="text" class="form-control text-center" placeholder="EL"/></td>';
    cols += '<td><input type="text" class="form-control text-left" placeholder="Comment"/></td>';
    cols += '<td style="white-space: nowrap"><input type="button" style="margin-right: 3px; " class="addrow btn btn-md btn-primary" value="Add Row"><input type="button" class="ibtnDel btn btn-md btn-danger" value="Delete"></td></tr>';
    newRow.append(cols);
    $(this).closest("tr").after(newRow);
    //$('newrow).insertAfter(jQuery(this).closest('tr'));
});
$("table.order-list").on("click", ".ibtnDel", function (event) {
    $(this).closest("tr").remove();       
});