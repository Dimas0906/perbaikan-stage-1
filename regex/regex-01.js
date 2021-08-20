// tugas 1 Regex.
// let regex = new RegExp("[A-Z]+");

// function cek(str) {
//   return regex.test(str)
//     ? "Huruf pertama adalah huruf besar"
//     : "Huruf pertama adalah huruf kecil";
// }

// console.log(cek("Dimas"));

// tugas 2 regex
let regex = /^[\d]{10,12}$/;

function ceknomor(nomor) {
  if (regex.test(nomor)) {
    return cekprovider(nomor);
  } else {
    return `Error, silahkan masukan nomor HP anda minimal 10 digit`;
  }
}

function cekprovider(nomor) {
  let telkomsel = /^(0811|0812|0852|0821|0823|0813|0822)/g;

  let indosat = /^(0815|0816|0856|0855|0857|0858)/g;

  let xl = /^(0819|0818|0878)/g;

  if (telkomsel.test(nomor)) {
    return `${nomor} adalah Telkomsel`;
  } else if (indosat.test(nomor)) {
    return `${nomor} adalah Indosat`;
  } else if (xl.test(nomor)) {
    return `${nomor} adalah Xl`;
  }
}

console.log(ceknomor("081534567890"));
