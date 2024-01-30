document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const subscribeModal = document.getElementById('subscribeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const overlay = document.querySelector('.overlay');

    subscribeBtn.addEventListener('click', function () {
        subscribeModal.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        subscribeModal.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function () {
        subscribeModal.style.display = 'none';
        overlay.style.display = 'none';
    });
});
