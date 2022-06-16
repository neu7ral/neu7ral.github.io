// (--->    HOME indexPage   <---)
// tittle buttos and more
const ig = document.querySelector(".fa-instagram");
ig.setAttribute("title","Instagram");
const gitHub = document.querySelector(".fa-github");
gitHub.setAttribute("title","Git Hub");
const twitter = document.querySelector(".fa-twitter");
twitter.setAttribute("title","Twitter");
let f1Car = document.querySelector("#f1car");
f1Car.setAttribute("title","Never give up by Checo Perez");
    // (--->    top menu left-part   <---)
    function sbButton() {
        window.location.href="/index.html";
    };
    function wkButton() {
        window.location.href="/work.html";
    };
    function abButton() {
        window.location.href="/about.html";
    };
    function ctButton() {
        window.location.href="/contact.html";
    };
    // (--->    top menu center-part   <---)
    function igButton() {
        window.location.href="https://www.instagram.com/rocs_soften/?hl=en";
    };
    function gitButton() {
        window.location.href="https://github.com/neu7ral";
    };
    function twButton() {
        window.location.href="https://twitter.com/RocsSebastian";
    };
    function lkButton() {
        window.location.href=""
    }
    // (--->    top menu right-part   <---)
    let menuRightDate =()=>{
        let dateDiv = new Date();
        let month = dateDiv.getMonth();
        let day = dateDiv.getDate();
        let year = dateDiv.getFullYear();

        let spanMonth = document.getElementById("menuMonth");
        let spanDay = document.getElementById("menuDay");
        let spanYear = document.getElementById("menuYear");

        let mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        spanMonth.textContent = mon[month];
        spanDay.textContent = day;
        spanYear.textContent = year;


    };
    menuRightDate();
// (--->    END indexPage   <---)
// (--->    Work workPage   <---)
//titulos tecnologias
const js = document.querySelector(".jsButtonWork");
js.setAttribute("title","javaScript");
const py = document.querySelector(".pythonButtonWork");
py.setAttribute("title","Python");
const ia = document.querySelector(".iaButtonWork");
ia.setAttribute("title","Artificial intelligence");
//funciones de bottones tecnologias
    function jsProjects() {
        window.location.href="/work/js/jsProjects.html";
    };
    function pyProjects() {
        window.location.href="/work/python/pyProjects.html";
    };
    function iaProjects() {
        window.location.href="/work/ia/iaProjects.html";
    };
// (--->    Work workPage   <---)
// (--->    Contact workPage   <---)
    
// (--->    Contact workPage   <---)
// (--->    Footer   <---)
