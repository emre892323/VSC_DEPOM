document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

   
    const users = [
        { username: 'admin', password: '3435' },
        { username: 'furkan', password: '2145' },
        { username: 'musa', password: '3973' },
        { username: 'ibrahim', password: '6974' },
        { username: 'utku', password: '7923' },
        { username: 'misafir', password: '2548' },

    ];

    loginBtn.addEventListener('click', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Dizideki kullanıcıları kontrol et
        const foundUser = users.find(user =>
            user.username === username && user.password === password
        );

        if (foundUser) {
            // Giriş başarılı
            alert('Giriş başarılı! Hoş geldin ' + foundUser.username + '!');

            // Koşullu yönlendirme: Admin ise proje.html'e, değilse bakım.html'e
            if (foundUser.username === 'admin') {
                window.location.href = 'proje_alan_secimi.html?login=true'; // Admin projelere gitsin
            } else {
                window.location.href = 'proje.html?login=true'; // Diğerleri bakıma gitsin
            }

        } else {
            // Giriş başarısız
            alert('Kullanıcı adı veya şifre yanlış. Lütfen tekrar dene.');
        }
    });
});

































