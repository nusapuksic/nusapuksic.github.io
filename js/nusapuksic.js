function infoFillEn() {
  $("#intro").text("Welcome.");
  $("#who").text("Who am I.");
  $("#phd").text("// PhD in nanosciences and nanotechnologies");
  $("#values").text("// I value happiness and curiosity.");
  $("#what").text("What I do.");
  $("#science").text("Science");
  $("#latest").text("// Latest "); 
  $("#extra").text("Extra");
  $("#spanish").text("Learning Spanish");
  $("#showcase h2").text("Showcase.");
}

$("#en").click(function() {
 infoFillEn();
});


$("#sl").click(function() {
  $("#intro").text("Dobrodošli.");
  $("#who").text("Kdo sem.");
  $("#phd").text("// Dr nanoznanosti in nanotehnologij");
  $("#values").text("// Moji vrednosti sta sreča in radovednost.");
  $("#what").text("Moje delo.");
  $("#science").text("Znanost");
  $("#latest").text("// Zadnje "); 
  $("#extra").text("Dodatno");
  $("#spanish").text("Učim se španščino");
  $("#showcase h2").text("Razglednica.");
});

$( document ).ready(function() {
    infoFillEn();
});
