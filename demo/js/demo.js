function displayResult(item, val, text) {
    console.log(item);
    $('.alert').show().html('You selected <strong>' + val + '</strong>: <strong>' + text + '</strong>');
}

$(function () {

    $('#demo6').typeahead({
        source: [
            { id: 1, name: 'Toronto' },
            { id: 2, name: 'Montreal' },
            { id: 3, name: 'New York' },
            { id: 4, name: 'Buffalo' },
            { id: 5, name: 'Boston' },
            { id: 6, name: 'Columbus' },
            { id: 7, name: 'Dallas' },
            { id: 8, name: 'Vancouver' },
            { id: 9, name: 'Seattle' },
            { id: 10, name: 'Los Angeles' }
        ],
        type: 'multiple',
        resultId: '#demo6-container',
        itemSelected: displayResult,
        resultAdd: function(a,b){console.log('after add')},
        resultRemove: function(a,b){console.log('after remove')}
    });

    $('#demo7').typeahead({
        source: [
            { id: 1, name: 'Toronto' },
            { id: 2, name: 'Montreal' },
            { id: 3, name: 'New York' },
            { id: 4, name: 'Buffalo' },
            { id: 5, name: 'Boston' },
            { id: 6, name: 'Columbus' },
            { id: 7, name: 'Dallas' },
            { id: 8, name: 'Vancouver' },
            { id: 9, name: 'Seattle' },
            { id: 10, name: 'Los Angeles' }
        ],
        type: 'single',
        resultId: '#demo7-container',
        resultItem: '<li><input type="hidden" name"user[city]" /></li>',
        itemSelected: displayResult,
        resultAdd: function(a,b){console.log('after add')},
        resultRemove: function(a,b){console.log('after remove')}
    });

});