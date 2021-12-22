var tanya = true;
while(tanya){
    // * nyawa 
    var nyawa = 3;
    // *inputan user
    var inputan = parseInt(prompt('Masukan Angka 1 - 10\n'+'Kesempatan Anda '+nyawa));

    // *inputan compture 1 - 10
    var min = 1;
    var max = 11;
    var comp = Math.floor(Math.random() * (max - min) ) + min;

    // *hasil
    var hasil = ''
    for(nyawa = 2;nyawa >= 1;nyawa--){
        if(inputan == comp){
            hasil = 'Andar benar';
            alert('Jawaban '+hasil);
        }else if(inputan < comp){
            hasil = 'terlalu rendah';
            inputan = parseInt(prompt('Tebakan anda '+hasil +'kesempetan anda '+nyawa));
        }else{
            hasil = 'terlalu tinggi';
            inputan = parseInt(prompt('Tebakan anda '+hasil +'kesempetan anda '+nyawa));
        }
    }
    if (nyawa == 0 ){
        alert("Kesempatan Anda sudah habis! \nAngka yang dicari adalah " + comp);
    }
    tanya = confirm('Apakah Masih ingin bermain lagi '); 
}
alert('Terima Kasih ')