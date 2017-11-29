function prevent() {
    document.getElementById('cancel').addEventListener('click', function(e) {
        console.log('click')
        e.stopPropagation()
    })
}

prevent();

function cancel() {
    document.getElementsByClassName('redbox')[0].addEventListener('click', function() {
        console.log('here')
    })
}

cancel();