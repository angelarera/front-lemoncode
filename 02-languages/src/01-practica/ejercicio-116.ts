console.log("************** PRACTICE 116 *********************");

// ZZCrypt
// Descifra el siguiente secreto:
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  return secret
    .split("")
    .map((char) => {
      const index = cipher.indexOf(char);
      return index !== -1 ? plain[index] : char;
    })
    .join("");
}

console.log(decrypt(secret));
