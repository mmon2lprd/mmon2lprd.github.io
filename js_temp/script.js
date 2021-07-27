/* ----------------------- Nav Bar Hidden Reponsive ---------------*/
$(document).ready(function(){
    // toggle menu/navbar script
   $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.home-text .btn').toggleClass("hidden");
        $('.menu-btn').toggleClass("active");
        $(window).scroll(function(){
            if(this.scrollY > 500){
                $('.navbar .menu').removeClass("active");
                $('.home-text .btn').removeClass("hidden");
                $('.menu-btn').removeClass("active");
            };
       });
    });
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // typing animation script
    var typed = new Typed(".typing-1",{
        strings: ["Student.", "Baby data Analyst.", "IT Support."],
        typeSpeed: 100,
        backSpped: 60,
        loop: true
    });

    // typing animation script
    var typed = new Typed(".typing-2",{
        strings: ["Student.", "Baby Data Analyst.", "Makeup Artist."],
        typeSpeed: 100,
        backSpped: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    })
});

/*---------------------- Education Tabs ---------------------------*/
const tabsContainer = document.querySelector(".education-tabs"),
educationSection = document.querySelector(".education-section");

tabsContainer.addEventListener("click",(e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        educationSection.querySelector(".tab-content.active").classList.remove("active");
        educationSection.querySelector(target).classList.add("active");
    }
});

/*--------------------------- Contact Section -----------------------*/
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var f_name = document.getElementById("name").value;
    var f_email = document.getElementById("email").value;
    var f_subject = document.getElementById("subject").value;
    var f_describe = document.getElementById("describe").value;

    var my_text = `Hi! Mon. ${f_name} is contact now:%0A - <b>Name:</b> <i>${f_name}</i> %0A - <b>E-mail:</b> <i>${f_email}</i> %0A - <b>Subject:</b> <i>${f_subject}</i> %0A - <b>Descript:</b> <i>${f_describe}</i>`;
    //Note! <br> == %0A
    var token = "1743315853:AAFM0TNxnYEbzfDmIS6bRlXysAThcVnyKYU";
    var chat_id = -562805177;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
    /*console.log(f_name,f_email,f_subject,f_describe)*/
    
    let api = new XMLHttpRequest();
    api.open("POST", url, true);
    api.send();
    console.log("Message Sended!")
    document.getElementById("form").reset();
})

/*-------------------------------Cert img----------------------- */
function toggle(){
    var blur = document.getElementById('education-section');
    blur.classList.toggle('active')
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
}

let img = document.querySelector('#cert');
let btn1 = document.querySelector('#microsoft-1');
let btn2 = document.querySelector('#microsoft-2');
let btn3 = document.querySelector('#google-data-analytics-1');
let btn4 = document.querySelector('#google-data-analytics-2');
let btn5 = document.querySelector('#google-data-analytics-3');
let btn6 = document.querySelector('#google-data-analytics-4');
let btn7 = document.querySelector('#google-data-analytics-5');
let btn8 = document.querySelector('#google-data-analytics-6');

btn1.addEventListener('click', () => {
    img.src = 'cert/microsoft.png'
})
btn2.addEventListener('click', () => {
    img.src = 'cert/microsoft.png'
})
btn3.addEventListener('click', () => {
    img.src = 'cert/google-data-analytics-1.png'
})
btn4.addEventListener('click', () => {
    img.src = 'cert/google-data-analytics-2.png'
})
btn5.addEventListener('click', () => {
    img.src = 'cert/google-data-analytics-3.png'
})
btn6.addEventListener('click', () => {
    img.src = 'cert/google-data-analytics-4.png'
})
btn7.addEventListener('click', () => {
    img.src = 'cert/google-data-analytics-5.png'
})
btn8.addEventListener('click', () => {
    img.src = 'cert/google-data-analytics-6.png'
})
