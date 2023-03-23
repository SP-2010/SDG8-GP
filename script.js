

function info(){
    document.getElementById("content").style.display="none";
    document.getElementById("main-info").style.display="block";
    document.getElementById("survey").style.display="none";
    document.getElementById("poster-content").style.display="none";
}
function heading(){
    document.getElementById("content").style.display="block";
    document.getElementById("main-info").style.display="none";
    document.getElementById("survey").style.display="none";
    document.getElementById("poster-content").style.display="none";
}
function survey(){
  document.getElementById("content").style.display="none";
  document.getElementById("main-info").style.display="none";
  document.getElementById("survey").style.display="block";
  document.getElementById("poster-content").style.display="none";

}
function poster(){
    document.getElementById("content").style.display="none";
    document.getElementById("main-info").style.display="none";
    document.getElementById("survey").style.display="none";
    document.getElementById("poster-content").style.display="block";
}
