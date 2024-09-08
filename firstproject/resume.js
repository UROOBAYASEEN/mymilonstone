document.getElementById('toggleButton').addEventListener('click', function() {
    var section = document.getElementById('hiddenSection');
    if (section.style.display === 'none') {
        section.style.display = 'block';
        this.textContent = 'show less';
    } else {
        section.style.display = 'none';
        this.textContent = 'show acedmic qualification';
    }
});
document.getElementById('myid').addEventListener('click', function() {
    var section = document.getElementById('hiddenskill');
    if (section.style.display === 'none') {
        section.style.display = 'block';
        this.textContent = 'show less';
    } else {
        section.style.display = 'none';
        this.textContent = 'show skills';
    }
});


