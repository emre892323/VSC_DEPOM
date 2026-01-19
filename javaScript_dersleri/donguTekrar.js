//?Bir oyunda, kullanıcının kaç denemede gizli bir sayıyı bulduğunu takip etmek isteyelim. Bu alıştırmada,
// ? gizli sayıyı bulana kadar döngünün devam etmesini sağlayacaksınız.
//? gizli sayi = 9

let gizliSaYi = 9;
let denemeHakki = 0;

let mesaj = Number(prompt("Lütfen 1 ile 10 arasında bir sayi giriniz\n" + "deneme Hakkınız:" + denemeHakki))
while (mesaj!=gizliSaYi) {
    
    mesaj= Number(prompt("Tahminizi Yazın\n"+ "deneme Hakkınız:" + denemeHakki));
   
    denemeHakki += 1;
    
 

}
