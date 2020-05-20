import '../style/index.scss';

const apiMain = 'https://mainnet.api.neotube.io/api';

$(document).ready(function() {
    getData();
});

function getData() {
    $.ajax({
        type: 'GET',
        url: `${apiMain}/counter`,
        contentType: 'application/json'
    }).done(function(res) {
        if (res.code === 200) {
            $('#home .data .data-item.contract .value').text(formatNumber(res.result.cnt_sc));
            $('#home .data .data-item.tx .value').text(formatNumber(res.result.cnt_sc_tx));
        }
    });
}

function formatNumber(number) {
    var str = number.toString();
    var reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg, '$1,');
}
