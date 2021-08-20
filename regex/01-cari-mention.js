/* 
    Kamu diminta untuk membuat function yang akan melakukan pengecekan secara otomatis terhadap suatu string yang didapat dari postingan social media instagram.
    function ini akan mengecek apakah dalam postingan tersebut melakukan mention atau tidak. serta menggunakan hastag atau tidak.
    jika melakukan mention, function ini juga harus bisa mengembalikan list akun yang di mention dalam bentuk array.
    jika melakukan hastag, function ini juga harus bisa mengembalikan list hastag yang digunakan dalam bentuk array.


    NOTE : Wajib menggunakan RegExp (Regular Expression)
*/

function checkInstagramPost(post) {
  // Your code here

  //regex
  const cekhastag = [...new Set(post.match(/#[\w_]+/g))];
  const cekmention = [...new Set(post.match(/@[\w_\.]+/g))];

  let hasil = {};

  if (cekmention.length !== null) {
    hasil.mention = { status: true, cekmention };
  } else {
    hasil.mention = { status: false };
  }

  if (cekhastag.length !== null) {
    hasil.hastag = { status: true, cekhastag };
  } else {
    hasil.hastag = { status: false };
  }

  console.log(hasil);

  return hasil;
}

// checkInstagramPost(`Perbedaan error dan bug pada pemrograman

// Lebih susah error atau bug ni ?

// #coding #programming #pemrograman #python #c++ #java #teknologi`);

/* 
    Output :
    {
        mention: {
            status: false
        },
        hastag: {
            status: true
            hastags: ["#coding", "#programming", "#pemrograman", "#python", "#c++", "#java", "#teknologi"]
        }
    }

*/

checkInstagramPost(`Terima Kasih untuk 1,104 pendaftar program Kampus Merdeka Skilvul #Tech4Impact: Digital Product Innovation & Coding Bootcamp dan 2,056 pendaftar program Skilvul Virtual Internship: UI/UX Challenge

Seleksi dan pengumuman penerimaan masih berlangsung sampai 7 Agustus 2021

Selamat bagi peserta yang sudah berhasil lolos dan menerima penawaran Program Studi Independen Skilvul #Tech4Impact: Digital Product Innovation & Coding Bootcamp dan Program Magang Bersertifikat Sklivlu Virtual Internship: UI/UX Challenge

Cek email kamu secara berkala ya, untuk informasi tahap berikutnya!
Jangan lupa cek juga di folder Inbox - Spam - Promosi

@kemdikbud.ri @ditjen.dikti @kampusmerdeka.ri @magangmerdeka
#MSIB #KampusMerdeka #MagangMerdeka #MerdekakanPeluang #MerdekaBelajar #MagangBersertifikat #StudiIndependenBersertifikat`);

//
/* 
    Output :
    {
        mention: {
            status: true,
            mentions: ["@kemdikbud.ri", "@ditjen.dikti", "@kampusmerdeka.ri", "@magangmerdeka"]
        },
        hastag: {
            status: true
            hastags: ["#Tech4Impact", "#MSIB", "#KampusMerdeka", "#MagangMerdeka", "#MerdekakanPeluang", "#MerdekaBelajar", "#MagangBersertifikat", "#StudiIndependenBersertifikat"]
        }
    } 

*/
