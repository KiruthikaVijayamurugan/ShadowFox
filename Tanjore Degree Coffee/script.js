let sections = document.querySelectorAll('section');
let navbar_links = document.getElementsByClassName('nav-link');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            Array.from(navbar_links).forEach(link => {
                link.classList.remove('navactive');
            });
            document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('navactive');
        }
    });
};

function validateForm() {
    let username = document.getElementById("username").value;
    let mobno = document.getElementById("mobileno").value;
    let mailid = document.getElementById("mailid").value;
    let yourmessage = document.getElementById("yourmessage").value;
    let alertbox = document.getElementById("alertbox");
    if (username == "") {
        alertbox.innerText="Name must be filled out";
        alertbox.classList.add("display");
        alertbox.classList.remove("nodisplay");
        return false;
    }
    if (mobno == "") {
        alertbox.innerText="Mobile Number must be filled out";
        alertbox.classList.add("display");
        alertbox.classList.remove("nodisplay");
        return false;
    }
    if (mailid == "") {
        alertbox.innerText="Email must be filled out";
        alertbox.classList.add("display");
        alertbox.classList.remove("nodisplay");
        return false;
    } else {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(mailid)) {
            alertbox.innerText="Invalid email format";
            alertbox.classList.add("display");
            alertbox.classList.remove("nodisplay");
            return false;
        }
    }
    if (yourmessage == "") {
        alertbox.innerText="Message must be filled out";
        alertbox.classList.add("display");
        alertbox.classList.remove("nodisplay");
        return false;
    }
    else{
        alertbox.innerText="Thank you! Your response is noted";
        alertbox.classList.add("display");
        alertbox.classList.remove("nodisplay");
        alertbox.style.backgroundColor="green"
        return true;
    }
    
}