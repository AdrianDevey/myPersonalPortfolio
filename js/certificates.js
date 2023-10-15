var fullImgBox = document.getElementById("fullImgBoxCert");
var fullImg = document.getElementById("fullImgCert");

function openFullImgCert(pic){
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImgCert(){
  fullImgBox.style.display = "none";
}


