let buttonCap1 = ()=> {
    window.location.href="/work/js/cap1/cap1.html";
};
let buttonCap2 = ()=> {
    location.href="/work/js/cap2/cap2.html";
};
let buttonCap3 = ()=> {
    location.href="/work/js/cap3/cap3.html";
};
let buttonCap4 = ()=> {
    window.location.href="/work/js/cap4/cap4.html"
}
let backHome = ()=> {
    window.location.href="/work/js/jsProjects.html";
};
// cosas que programe mientras veia el curs0
// si ingresa la contrasena correcta accede a la img de Atenea.
function strings() {
    let adminPass = "12345.%";
    let password = prompt("Ingresa la contrasena")
    
    acessForPrivateIg = adminPass.startsWith(password);
    
    directPrivIg(acessForPrivateIg);

    function directPrivIg() {
        if (acessForPrivateIg == true) {
            let p = document.getElementById("pDiv1");
            p.textContent = "Te voy revelar un secreto...";
            window.location.href="https://www.instagram.com/p/CZaG0GoPzcF/?utm_source=ig_web_copy_link";
        } else {
            alert("Lo siento no puedes saber que pasa.");
        };
    };
};