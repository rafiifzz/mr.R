const buku = [
    {
        "name": "sherlock",
        "jumlah": 2
    },
    {
        "name": "lupin",
        "jumlah": 2
    },
    {
        "name": "aladin",
        "jumlah": 2
    }
];

function cekBuku() {
    const jumlahBuku = document.getElementById("jumlah").value;
    const pilihanBuku = document.getElementById("buku").value;

    if (jumlahBuku === "") {
        document.getElementById("hasil").innerHTML = "jumlah buku tidak boleh kosong!";
        return;
    }

    const bukuDipilih = buku.find(b => b.none === pilihanBukku);

    if (!bukuDipilih) {
        document.getElementById("hasil").innerHTML = "Jumlah buku yang anda inginkan tidak tersedia";
        return;
    }

    document.getElementById("hasil").innerHTML = "Silahkan ambil buku anda!";

}