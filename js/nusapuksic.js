function infoFillEn() {
  $("#intro").text("Welcome.");
  $("#who").text("Who am I.");
  $("#phd").text("// PhD in nanosciences and nanotechnologies");
  $("#what").text("What I do.");
  $("#science").text("Science");
  $("#latest").text("// Latest "); 
  $("#showcase h2").text("Showcase.");
}

$("#en").click(function() {
 infoFillEn();
});


$("#sl").click(function() {
  $("#intro").text("Dobrodošli.");
  $("#who").text("Kdo sem.");
  $("#phd").text("// Dr nanoznanosti in nanotehnologij");
  $("#what").text("Moje delo.");
  $("#science").text("Znanost");
  $("#latest").text("// Zadnje "); 
  $("#showcase h2").text("Razglednica.");
});

$( document ).ready(function() {
    infoFillEn();
});
