let select = document.querySelector('.select');
select.addEventListener('click', function () {
    select.classList.toggle('monthly');
    select.classList.toggle('annually')
    if (select.classList.contains('monthly')) {
        document.querySelectorAll('.year').forEach(function (li) {
            li.classList.remove('active');
        })
        document.querySelectorAll('.month').forEach(function (li) {
            li.classList.add('active')
        });
    }
    else {
        document.querySelectorAll('.year').forEach(function (li) {
            li.classList.add('active');
        })
        document.querySelectorAll('.month').forEach(function (li) {
            li.classList.remove('active');
        })
    }
})