/* 
    [Description]

    sebuah fungsi showContactByGroup akan memproses data inputan sehingga bisa mengeluarkan output berupa array of string yang berisikan string nama.

    Nama yang tampil di dalam output adalah nama yang ada di dalam sebuah group.
    Detail lebih lengkap bisa dilihat dari skeleton code yang sudah di sediakan.

    [Rules]
    1. Tidak boleh menggunakan built in function .filter(), .map(), .reduce(), .includes(), .indexOf() dan semua function ES6 lainnya
    2. Hanya boleh diselesaikan dengan looping, conditional, .push() atau .unshift()
*/

const contacts = [
  {
    Id: 1,
    name: "Andi",
    gender: "male",
    group_ids: [1, 2, 3],
  },
  {
    Id: 2,
    name: "Budi",
    gender: "male",
    group_ids: [1, 2],
  },
  {
    Id: 3,
    name: "Cindy",
    gender: "male",
    group_ids: [1],
  },
  {
    Id: 4,
    name: "David",
    gender: "male",
    group_ids: [1, 2],
  },
  {
    Id: 5,
    name: "Emily",
    gender: "male",
    group_ids: [1, 2, 3],
  },
];

const groups = [
  {
    id: 1,
    name: "Teman SMP",
  },
  {
    id: 2,
    name: "Teman SMA",
  },
  {
    id: 3,
    name: "Teman Kuliah",
  },
];

function showContactByGroup(group_name) {
  //your code here...
  let idfind = null; //kenapa idfind value null... bisa juga si undefined, karena kalo di kasih 0 takutnya nanti bentrok sama index 0
  const hasil = [];

  // function bantuan cekId(input) dan cekId(kontak), jika group_ids sama dengan idfind... kembalikan nilai true, selanjutnya balik lagi ke looping dan eksekusi kondisi true jika benar.
  function cekId(groups) {
    let kembalikan;
    for (let i = 0; i < groups.length; i++) {
      groups[i] === idfind ? (kembalikan = true) : (kembalikan = false);
    }
    return kembalikan;
  }

  // looping untuk cek apakah inputan sama dengan data yang ada, jika ada
  for (let i = 0; i < groups.length; i++) {
    groups[i].name === group_name ? (idfind = groups[i].id) : "";
  }

  //   loopng untuk semua kontak, dan mendapatkan id dari setiap kontak
  for (let i = 0; i < contacts.length; i++) {
    cekId(contacts[i].group_ids) ? hasil.push(contacts[i].name) : "";
  }
  return hasil;
}
console.log(showContactByGroup("Teman Kuliah")); //result yang diharapkan : ["Andi", "Emily"]
// showContactByGroup('Teman SMA') //result yang diharapkan : ["Andi", "Budi", "David", "Emily"]
// showContactByGroup('Teman SMP') //result yang diharapkan : ["Andi", "Budi", "Cindy", "David", "Emily"]
