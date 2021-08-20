/**
 * RAZIA GANJIL GENAP
 *
 * [Description]
 * Sebuah fungsi yang akan mengembalikan pemberitahuan kemungkinan tindak pelanggaran
 * jika pengemudi melalui rute-rute tertentu dengan plat ganjil-genap. Pelanggaran akan terjadi apabila
 * ada plat mobil yang melintas pada rute tertentu pada tanggal tertentu dengan nomor plat
 * yang tidak sama dengan aturan ganjil genap
 *
 * [Instructions]
 * 1. Function menerima parameter berupa tanggal, data kendaraan
 * 2. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut)
 * 3. Contoh membaca nomor plat kendaraan adalah misal B 444 XXX, berarti yang dilihat cukup
 * angka paling belakang dari 444 berarti 4, berati nomor plat mobil ini termasuk genap
 * 5. Berlaku hanya untuk MOBIL.
 * 6. Lokasi Ganjil Genap
 *   - Gajah Mada
 *   - Hayam Wuruk
 *   - Sisingamangaraja
 *   - Panglima Polim
 *   - Fatmawati
 *   - Tomang Raya
 *
 * [Rules]
 * 1. Tidak boleh menggunakan built in function .filter(), .map(), .reduce(), .includes(), .indexOf()
 * 2. Hanya boleh diselesaikan dengan looping, conditional, .push() atau .unshift()
 */
function kenaRazia(date, data) {
  var lokasiRazia = [
    "Gajah Mada",
    "Hayam Wuruk",
    "Sisingamangaraja",
    "Panglima Polim",
    "Fatmawati",
    "Tomang Raya",
  ];

  // Write your code here

  // vatiabel untuk di cetak nanti
  let ketilang = [];

  // ini adalah fungsi untuk cek tanggal
  function ganjilGenap(tanggal) {
    if (tanggal % 2 == 0) {
      return "genap";
    } else {
      return "ganjil";
    }
  }

  // looping terluar untuk mengecek berapa banyak data yang ada.
  for (let i = 0; i < data.length; i++) {
    // pengecekan tipe kendaraan
    if (data[i]["type"] === "Mobil") {
      // variable untuk menampung nomor terakhir kendaraan.
      let noTerakhirPlat;

      // looping untuk mengetahui nomor akhir dari kendaraan,
      // kalau sudah ketemu akan di tampung kedalama variabel diatas.
      for (let j = data[i]["plat"].length - 1; j >= 0; j--) {
        if (data[i]["plat"][j] === " ") {
          noTerakhirPlat = data[i]["plat"][j - 1];
          break;
        }
      }

      // ini adalah kondisi untuk pengecekan penilangan
      if (ganjilGenap(date) !== ganjilGenap(noTerakhirPlat)) {
        jumlahTilang = 0;

        // ini adalah looping untuk mengecek apakah rute melewati daerah yang termasuk
        // kedalam salah satu dareah terlarang.
        for (let j = 0; j < lokasiRazia.length; j++) {
          for (let k = 0; k < data[i]["rute"].length; k++) {
            if (lokasiRazia[j] === data[i]["rute"][k]) {
              jumlahTilang++;
            }
          }
        }

        // ini adalah proses pencetakan hasil tilang, kalau jumlah tilangnya 0
        // maka tidak akan di cetak dan di proses.
        if (jumlahTilang !== 0) {
          let ObTilang = {};
          ObTilang[data[i]["name"]] = jumlahTilang;
          ketilang.push(ObTilang);
        }
      }
    }
  }
  return ketilang;
}

console.log(
  kenaRazia(27, [
    {
      name: "Doni",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
      ],
    },
    {
      name: "Dina",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada",
      ],
    },
  ])
);
