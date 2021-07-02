(function() {
    const url = new URLSearchParams(document.location.search);
    document.getElementById('name').innerText = url.get('name');
})();