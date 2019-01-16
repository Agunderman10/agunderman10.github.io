var myVar;

function loader() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader-mobile").style.display = "none";
  document.getElementById("loaderPageContent").style.display = "block";
}