const button = document.getElementById('randomButton');
const message = document.getElementById('message');

const randomMessages = [
    "İşte bir şaka: Neden bilgisayarlar asla iyi futbolcular olmaz? Çünkü her zaman 'kick' (ayak) hatası yaparlar!",
    "Birinci dünya savaşında ne oluyordu? Tıkla ve öğren!",
    "Hadi biraz renk değişsin...",
    "Belki de her şey bir ilüzyon!"
];

const randomColors = [
    "#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#FF33FF"
];

button.addEventListener('click', () => {
    // Rastgele mesaj
    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    message.textContent = randomMessage;

    // Rastgele arka plan rengi
    document.body.style.backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];
});