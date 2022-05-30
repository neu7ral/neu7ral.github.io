// (--->    HOME indexPage   <---)
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
        window.location.href="https://www.instagram.com/_robl3s_/?hl=en";
    };
    function gitButton() {
        window.location.href="https://github.com/neu7ral";
    };
    function twButton() {
        window.location.href="https://twitter.com/RocsSebastian";
    };
    // (--->    top menu right-part   <---)
    let menuRightDate =()=>{
        let dateDiv = new Date()
        let month = dateDiv.getMonth()
        let day = dateDiv.getDate()
        let year = dateDiv.getFullYear()

        let spanMonth = document.getElementById("menuMonth")
        let spanDay = document.getElementById("menuDay")
        let spanYear = document.getElementById("menuYear");

        let mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        spanMonth.textContent = mon[month];
        spanDay.textContent = day;
        spanYear.textContent = year;


    };
    menuRightDate();
// (--->    END indexPage   <---)
// (--->    Work workPage   <---)
    function jsProjects() {
        window.location.href="/html/jsProjects.html";
    };
    function pyProjects() {
        window.location.href="/html/pyProjects.html";
    };
    function iaProjects() {
        window.location.href="/html/iaProjects.html";
    };
// (--->    Work workPage   <---)