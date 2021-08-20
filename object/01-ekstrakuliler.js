/* 
  Pada sebuah sekolah, terdapat banyak club ekstrakurikuler. Setiap siswa wajib untuk mengikuti minimal 1 club ekstrakulikuler tersebut.
  Sekolah ini membutuhkan sebuah aplikasi yang dapat mengelompokan data berdasarkan nama club yang di ikuti oleh siswa beserta kelasnya.

  [instruction]
  1. Buatlah sebuah fungsi untuk memproses data sehingga bisa mengeluarkan output seperti dengan sample. Untuk fungsi pertama ini hanya boleh menggunakan looping for, dilarang menggunakan build in function javascript (.filter(), .map(), .reduce(), .includes(), .indexOf() . forEach, dan semua function ES6 lainnya)
  2. Hanya boleh diselesaikan dengan looping, conditional, .push() atau .unshift()
*/
function ekstrakurikuler(data) {
  //your code here!
  let cetak = {};
  for (let i = 0; i < data.length; i++) {
    //buat variabel untuk menyimpan nama dan kelas, agar mempermudah
    let nama = data[i].name;
    let kelas = data[i].class;

    for (let j = 0; j < data[i].club.length; j++) {
      let eskul = data[i].club[j];
      //cek apakah didalam objek hasil memiliki properti eskul. jika tidak, buat properti eskul dan nilainya barupa objek
      if (!cetak[eskul]) {
        cetak[eskul] = {};
      }

      //cek apakah didalam eskul memilki properti kelas, jika tidak buat properti kelas dan nilainya berupa array
      if (!cetak[eskul][kelas]) {
        cetak[eskul][kelas] = [];
      }

      //masukan nama kedalam value kelas
      cetak[eskul][kelas].push(nama);
    }
  }
  return cetak;
}

const data = [
  {
    name: "Adi",
    class: "Mawar",
    club: ["Bola", "Bulutangkis"],
  },
  {
    name: "Cinthya",
    class: "Melati",
    club: ["Membaca", "Bulutangkis"],
  },
  {
    name: "Andika",
    class: "Mawar",
    club: ["Bulutangkis", "Membaca"],
  },
  {
    name: "Daniel",
    class: "Mawar",
    club: ["Bola", "Renang"],
  },
];
console.log(ekstrakurikuler(data));

/* example output:
{
  Bola: {
    Mawar: ['Adi', 'Daniel']
  },
  Bulutangkis: {
    Mawar: ['Adi', 'Andika'],
    Melati: ['Cinthya']
  },
  Membaca: {
    Melati: ['Cinthya'],
    Mawar: ['Andika']
  },
  Renang: {
    Mawar: ['Daniel']
  }
} */
