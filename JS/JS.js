// (--->    HOME indexPage   <---)
    // (--->    top menu left-part   <---)
    let sbButton = document.getElementById("sbButton");
    let wkButton = document.getElementById("wkButton");
    let abButton = document.getElementById("abButton");
    let ctbutton = document.getElementById("ctButton");
    
    sbButton.onclick = function(){
        location.href="/index.html"
    };
    wkButton.onclick = function(){
        location.href="/work.html";
    };
    abButton.onclick = function(){
        location.href="/about.html";
    };
    ctButton.onclick = function(){
        location.href="/contact.html";
    };

    let sbButtonFooter = document.getElementById("sbButtonFooter");
    let wkButtonFooter = document.getElementById("wkButtonFooter");
    let abButtonFooter = document.getElementById("abButtonFooter");
    let ctButtonFooter = document.getElementById("ctButtonFooter");
    
    sbButtonFooter.onclick = function(){
        location.href="/index.html";
    };
    wkButtonFooter.onclick = function(){
        location.href="/work.html";
    };
    abButtonFooter.onclick = function(){
        location.href="/about.html";
    };
    ctButtonFooter.onclick =function(){
        location.href="/contact.html";
    }

    // (--->    top menu center-part   <---)
    let igButton = document.getElementById("igButton");
    let gitButton = document.getElementById("gitButton");
    let twButton = document.getElementById("twButton");

    igButton.onclick = function(){
        location.href="https://www.instagram.com/_robl3s_/?hl=en";
    };
    gitButton.onclick = function(){
        location.href="https://github.com/neu7ral";
    };
    twButton.onclick = function(){
        location.href="https://twitter.com/RocsSebastian";
    };

    let igButtonFooter = document.getElementById("igButtonFooter");
    let gitButtonFooter = document.getElementById("gitButtonFooter");
    let twButtonFooter = document.getElementById("twButtonFooter");

    igButtonFooter.onclick = function(){
        location.href="https://www.instagram.com/_robl3s_/?hl=en";
    };
    gitButtonFooter.onclick = function(){
        location.href="https://github.com/neu7ral";
    };
    twButtonFooter.onclick = function(){
        location.href="https://twitter.com/RocsSebastian";
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
let jsButtonWork = document.getElementById("jsWork");
let piButtonWork = document.getElementById("pyWork");
let iaButtonWork = document.getElementById("iaWork");

jsButtonWork.onclick =function(){
    location.href="/html/jsPrograms.html";
}
piButtonWork.onclick = function(){
    location.href="/html/pyPrograms.html";
};
iaButtonWork.onclick = function(){
    location.href="/html/iaPrograms.html";
};
// (--->    Work workPage   <---)