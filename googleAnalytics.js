key = ""
const jaj = ["RA|I|I|I","Ijaz2036","MZ|I|I|I","IH|I|I|I","SH|I|I|I","IQ|I|I|I","TahseensBalls"]
function verify(){
    const aja = prompt("Revision Time! Say YAY")
    for (let i = 0; i < jaj.length; i++) {;
        if (aja == "YAY") {
            window.location.href = "https://smartrevise.online/student/home/Index";
            break;
        }
        if (aja === jaj[i]) {
            return aja
        } else if (aja === "MASTERKEY"){
            document.getElementById("hiddenLinks").style.visibility = "visible";
            return aja
        } else {
            if (i === jaj.length - 1)
            window.location.href = "https://smartrevise.online/student/home/Index";
        }
    }
}
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]
function rot13(str) {
  let strArray = str.split("")
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].toUpperCase();
  }
  console.log(strArray.join(""))
  for (let i = 0; i < strArray.length;i++){
    for (let a = 0;a < alphabet.length;a++){
      if (strArray[i] == alphabet[a] ){
        let abc = a + 13
        if (abc > 35){
          let rem = abc % 36
          abc = rem
        }
        strArray[i] = alphabet[abc]
        break;
      }
    }
  }
  return strArray.join("");
}
