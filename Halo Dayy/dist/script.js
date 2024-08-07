document.getElementById('envelope').addEventListener('click', function () {
        document.querySelector('.flap').style.transform = 'rotateX(180deg)';
        document.getElementById('letter').style.transform = 'translateY(0)';
});