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


    $('#demo8').typeahead({
        source: [
            { id: 1, name: 'Toronto', country: 'CANADA' },
            { id: 2, name: 'Montreal', country: 'CANADA' },
            { id: 3, name: 'New York', country: 'USA' },
            { id: 4, name: 'Buffalo', country: 'USA' },
            { id: 5, name: 'Boston', country: 'USA' },
            { id: 6, name: 'Columbus', country: 'USA' },
            { id: 7, name: 'Dallas', country: 'USA' },
            { id: 8, name: 'Vancouver', country: 'USA' },
            { id: 9, name: 'Seattle', country: 'USA' },
            { id: 10, name: 'Los Angeles', country: 'USA' }],
        type: 'multiple',
        resultId: '#demo8-container',
        matched: 'country'
    });

});