function displayResult(item, val, text) {
    console.log(item);
    $('.alert').show().html('You selected <strong>' + val + '</strong>: <strong>' + text + '</strong>');
}

$(function () {

  $.mockjax({
        url: '/cities/new',
        responseText: "<div class='modal'><form action='/cities'><label>demo</label><input type=text></input><button>Save</button></form></div>"
    });

  $.mockjax({
        url: '/cities',
        status: 500,
        responseText: {id:5, name:'demo', country:'USA', continent: 'America'}
    });

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
        resultRemove: function(a,b){console.log('after remove')},
        suggestedList: [
            { id: 11, name: 'San Francisco' },
            { id: 12, name: 'Oakland' }]
    });

    $('#demo8').typeahead({
        ajax: {
            url: "https://api.github.com/users/gregorym",
            dataType: "jsonp",
            preProcess: function(data) {
                console.log(data);
                return [{ id: 1, name: 'Toronto', country: 'CANADA', continent: 'America' }];
            }
        },
        type: 'multiple',
        resultId: '#demo8-container',
        matched: 'country',
        extra: 'continent',
        modalUrl: '/cities/new'
    });

});