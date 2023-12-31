function hitung(){
    //Mendapatkan nilai dari inputan
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    
    // Memeriksa apakah ada input yang kosong
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Semua input harus diisi!');
        return;
    }

    //menghitung rumus x1, x2, dan nilai diskriminan
    x1 = (-b + Math.sqrt(Math.pow(b,2)-4*a*c)) / 2*a;
    x2 = (-b - Math.sqrt(Math.pow(b,2)-4*a*c)) / 2*a;
    diskri = Math.pow(b,2) - 4*a*c;

    if (diskri > 0)
    {
        document.getElementById('keterangan').textContent=
        "Persamaan kuadrat mempunyai dua akar real yang berbeda"
    }
    else if(diskri == 0){
        document.getElementById('keterangan').textContent=
        "Persamaan kuadrat mempunyai akar kembar (sama)"
    }
    else{
        document.getElementById('keterangan').textContent=
        "Persamaan kuadrat mempunyai akar yang tidak real (imajiner)"  
    }

    //menampilkan hasil dari x1,x2 dan diskriminan.
    /*menggunakan document.querySelector() untuk memilih elemen dengan class "output" dan ID "x2".
    Kemudian, kita mengatur nilai dari input tersebut dengan x2.toFixed(2), yang akan menampilkan hasil
    ke dalam elemen dengan dua angka desimal.
    */
    document.getElementById('x1').textContent = x1.toFixed(2);
    document.getElementById('x2').textContent = x2.toFixed(2);
    document.getElementById('diskriminan').textContent = diskri.toFixed(2);
   

}


function hapus() {
    // Menghapus nilai input
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';

    // Menghapus nilai output
    document.getElementById('x1').textContent = '';
    document.getElementById('x2').textContent = '';
    document.getElementById('diskriminan').textContent = '';
    document.getElementById('keterangan').textContent="";
}
