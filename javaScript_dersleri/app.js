// ! EKRANA YAZDIRMA KONUTLARI

//? Write ve writeln

// document.write("emre <br>");
// document.write("emre");


//? Console log ile consola yazdırma 

// console.log("hello world");




//? Alert ile kullanıcıya mesaj verme

// alert("emre")

// var degisken=5 , a=100

// console.log("iki sayinin toplami="+(degisken+a))
// document.writeln(degisken+a);


// var ile tanımladığımız  herşey function scope oluyor


//?  VERİ TİPLERİ

//* 1- String

// let isim="emre";

// console.log(typeof(isim))

//* Number

// todo NOT: number da float double yok hepsi number içinde 

// let sayi1= 5.6;
// let sayi2= 7.2;
// let sayi3= 10;

// console.log(sayi1);
// console.log("sayi1'in veri tipi:"+typeof(sayi1));



// console.log(sayi2);
// console.log("sayi2'in veri tipi:"+typeof(sayi2));




// console.log(sayi3);
// console.log("sayi3'in veri tipi:"+typeof(sayi3));


// console.log("TOPLAMLARI:\n"+(sayi1+sayi2+sayi3))


//*  boolean veri tipi

// console.log(10>15);


//* null veri tipi

// let sayi=null;
// console.log(sayi)



//* undefined : (tanınlanmamış) veri tipi 

// let a;



//* object veri tipi

// let bilgiler={
//     isim:"emre",
//     soyisim:"küçük",
//     yas:16 
// }
// console.log(bilgiler)
// console.log(typeof bilgiler)



//*function veri tipi

// let yazdir= function(){
//     console.log("Emre Çok Yakışıklı.")
// }
// yazdir()
// console.log(typeof yazdir)


//! DİALOG KUTULARI

//?Alert
//? Confirm
//? Prompt


// alert("Bu bir uyarı Mesajıdır.")
// confirm("Yinede Devam etmek istiyor Musunuz.")
// let isim=prompt("O zaman isminizi Girin.")

// console.log("İsminiz:"+isim);





//?KOŞUL YAPILARI



// let yas= Number(prompt("Lütfen Yaşınızı Girin"))


// if(yas>18){
//     console.log("Ehliyet Alabilirsiniz")
// }
// else{
//     console.log("ehliyet Alamazsınız.")
// }


// let kullanici_adi= confirm("kullanici adiniz Admin mi?")


// if(kullanici_adi==true){
//     let sifre=Number(prompt ("şifrenizi girin."))
//     if(sifre=="1234"){
//         console.log("Hoşgeldiniz Admin.")
//     }
//     else{
//         console.log("Şifreyi Tekrar deneyin")
//     }
// }
// else{
//     console.log("Lütfen Tekrar Deneyin")
// }


//* SORU : DERS ORTALAMASI BULMA


// let not1=Number(prompt("1. Notunuzu Girin"));
// let not2=Number(prompt("2. Notunuzu Girin"));
// let sonuc=(not1+not2)/2;

// if(sonuc>=50){
//     alert("Tebrikler Sınavı Geçtiniz.")
// }
// else{
//     alert("Malesef Sınavı Geçemediniz.")
// }

//? SORU:  isim boş geçilemez TCKN 11 karakter olmak zorunda!!!


// let isim= prompt("İsminizi Girin");
// let tckn= prompt("TC nizi girin.");

// if(isim!==""){
//     if(tckn.length==11){
//         console.log("TC niz ve İsminiz Doğru.")
//     }
//     else{
//         console.log("tc niz 11 Karakter değil")
//     }
// }
// else{
//     console.log("İsminiz Boş geçilemez.")
// }



//! MANTIKSAL OPARATÖRLER

//? And(ve)  ===   &&
//? Or(veya) ===   ||


// let altS = "\n";

// alert("Günlerden Birini Seçin seçin" + altS + altS +
//     "1-Pzt" + altS +
//     "2-Salı" + altS +
//     "3-Carsamba" + altS +
//     "4-persembe" + altS +
//     "5-cuma" + altS +
//     "6-cumartesi" + altS +
//     "7-pazar" + altS
// )

// let gun = Number(prompt("Bir gün seçin"));
// switch (gun) {
//     case 1:
//         console.log("GÜN1 seçtiniz.");
//         break;
//     case 2:
//         console.log("GÜN2 seçtiniz.");
//         break;
//     case 3:
//         console.log("GÜN3 seçtiniz.");
//         break;
//     case 4:
//         console.log("GÜN4 seçtiniz");
//         break;
//     case 5:
//         console.log("GÜN5 seçtiniz.");
//         break;
//     case 6:
//         console.log("GÜN6 seçtiniz.");
//         break;
//     case 7:
//         console.log("GÜN7 seçtiniz.");
//         break;
//     default:
//         console.log("Geçerli Bir gün seçiniz...")
// }


// console.log("Toplam İzlemen gereken Video 88");

// console.log("Hergün en az 3 video");
// console.log("video Sayısı:"+30*3)


