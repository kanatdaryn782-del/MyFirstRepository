// Экрандарды ауыстыру функциялары
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Батырмалар мен карточкалар арқылы экранды басқару
document.getElementById('btn-get-started').addEventListener('click', () => {
    showScreen('screen-home');
});

function goToHome() {
    showScreen('screen-home');
}

function goToDetail() {
    showScreen('screen-detail');
}

function goToOrder() {
    showScreen('screen-order');
}

function goToDelivery() {
    showScreen('screen-delivery');
}