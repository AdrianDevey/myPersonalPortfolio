function personalInfo() {
  var btn = document.getElementById("personal-info");
  if (btn.style.display === "none") {
    btn.style.display = "block";

    // Hide Academic BG Button
    var btn2 = document.getElementById("academic-bg");
    btn2.style.display = "none";

    // Hide Contact Info Button
    var btn3 = document.getElementById("contact-info");
    btn3.style.display = "none";
    
  } else {
    btn.style.display = "none";
  }
}

function academicBG() {
  var btn = document.getElementById("academic-bg");
  if (btn.style.display === "none") {
    btn.style.display = "block";

    // Hide Personal Info Button
    var btn2 = document.getElementById("personal-info");
    btn2.style.display = "none";

    // Hide Contact Info Button
    var btn3 = document.getElementById("contact-info");
    btn3.style.display = "none";
    

  } else {
    btn.style.display = "none";

    
  }
}

function contactInfo() {
  var btn = document.getElementById("contact-info");
  if (btn.style.display === "none") {
    btn.style.display = "block";

    // Hide Personal Info Button
    var btn2 = document.getElementById("personal-info");
    btn2.style.display = "none";
    
    // Hide Academic BG Button
    var btn3 = document.getElementById("academic-bg");
    btn3.style.display = "none";

  } else {
    btn.style.display = "none";
  }
}






// Portfolio

// Show Web Dev Section
function webDev() {
  var btn = document.getElementById("website-section");
  if (btn.style.display === "none") {
    btn.style.display = "block";

    // Hide Photosho Section
    var btn2 = document.getElementById("photoshop-section");
    btn2.style.display = "none";
    
    // Hide Academic BG Button
    var btn3 = document.getElementById("sna-section");
    btn3.style.display = "none";

  } else {
    btn.style.display = "none";
  }
}


// Show Photoshop Section
function photoshop() {
  var btn = document.getElementById("photoshop-section");
  if (btn.style.display === "none") {
    btn.style.display = "block";

    // Hide Web Dev Section
    var btn2 = document.getElementById("website-section");
    btn2.style.display = "none";
    
    // Hide SNA Section
    var btn3 = document.getElementById("sna-section");
    btn3.style.display = "none";

  } else {
    btn.style.display = "none";
  }
}

// Show SNA Section
function sna() {
  var btn = document.getElementById("sna-section");
  if (btn.style.display === "none") {
    btn.style.display = "block";

    // Hide Photoshop Section
    var btn2 = document.getElementById("photoshop-section");
    btn2.style.display = "none";
    
    // Hide Website Section
    var btn3 = document.getElementById("website-section");
    btn3.style.display = "none";

  } else {
    btn.style.display = "none";
  }
}