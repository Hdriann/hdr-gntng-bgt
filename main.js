let nama = prompt("Masukkan nama anda")
let tahunlahir = prompt("Masukkan tahun lahir anda")
let tahunsekarang = new Date().getFullYear()
let umur = tahunsekarang - tahunlahir;
let tinggi = prompt("Masukkan tinggi badan anda (gausah pake cm)")
if (tinggi < 160) {
    alert ("Halo " + nama + " umur anda sekarang adalah " + umur + " tahun, tinggi badan anda " + tinggi + " cm, vario aja 160 aowkwkwkwk")
} else if (tinggi > 179) {
    alert ("Halo " + nama + " umur anda sekarang adalah " + umur + " tahun, tinggi badan anda " + tinggi + " cm, tower telkomsel jir")
} else {
    alert ("Halo " + nama + " umur anda sekarang adalah " + umur + " tahun, tinggi badan anda " + tinggi + " cm, tinggi pas mabar")
}