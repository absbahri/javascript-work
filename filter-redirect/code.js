(function() {
    if ($('#resources-filter').length) {

        var 
            formElem = document.getElementById('resources-filter'),
            submitElem = formElem.getElementsByTagName('button'),
            selectElem = formElem.getElementsByClassName('content-type'),
            doNotRedirect =['webinar,download,video','video','webinar','download'],
            inputFields = formElem.querySelectorAll('input:not(.do-not-compile)'),
            searchField = formElem.querySelectorAll('.search-field'),
            selectFields = formElem.querySelectorAll("select:not(.content-type)"),
            attribute;
        formElem.addEventListener('submit', function(event){
            for (var i = selectElem.length - 1; i >= 0; i--) {
                selectElem[i];
                var 
                    selectElemValue = selectElem[i].options[selectElem[i].selectedIndex].value,
                    completeURL = selectElem[i].options[selectElem[i].selectedIndex].value + '?';
                if(doNotRedirect.includes(selectElemValue) === false){
                    event.preventDefault();
                    for (var i = selectFields.length - 1; i >= 0; i--) {
                        attribute = selectFields[i].getAttribute('name');
                        completeURL += attribute + '=' + selectFields[i].options[selectFields[i].selectedIndex].value + '&';

                    }

                    for (var i = inputFields.length - 1; i >= 0; i--) {
                        attribute = inputFields[i].getAttribute('name');
                        completeURL +=  attribute + '=' + inputFields[i].value + '&';
                    }
                    window.location = completeURL;
                } 
            }
        })

        formElem.addEventListener('keypress', function(event){
            var 
                keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode === 13){
                event.preventDefault();
                alert('Please use the submit button.')
            }
        })
    }
})()