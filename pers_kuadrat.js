function hitung() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        alert("Semua input harus diisi!");
        return;
    }

    var diskriminan = Math.pow(b,2) - 4 * a * c;
    var x1, x2;

    if (diskriminan > 0) {
        x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
        x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
    } else if (diskriminan === 0) {
        x1 = x2 = -b / (2 * a);
    } else {
        x1 = x2 = "Tidak memiliki akar real";
    }

    document.getElementById('x1').innerText = x1;
    document.getElementById('x2').innerText = x2;
    document.getElementById('diskriminan').innerText = diskriminan;

    document.getElementById('hasil').style.display = 'block';
}

function resetForm() {
    document.getElementById('hasil').style.display = 'none';
}
