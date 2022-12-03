// Welcome Section Video Slider
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false
});

// What Clients Say

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});
// Testimonial Section card Slick Slide 
$('.testimonial-cards').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 702,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                arrows: false,
                dots: true
            }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// News Section card Slick Slider 
$('.news-cards').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        arrows: false,
                        dots: true
                    }
                    
    },
//              {  breakpoint: 992,
//                    settings: {
//                        slidesToShow: 1,
//                        slidesToScroll: 1,
//                        autoplay: true,
//                        autoplaySpeed: 3000,
//                        arrows: false,
//                        dots: true
//                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });

        // Copyright Year
        const d = new Date();
        let year = d.getFullYear();

        let yr = document.getElementById('yr'); yr.innerHTML = year;

        // Gallery JS
        //$('.center').slick({
        //  centerMode: true,
        //  centerPadding: '60px',
        //  slidesToShow: 3,
        //  responsive: [
        //    {
        //      breakpoint: 768,
        //      settings: {
        //        arrows: false,
        //        centerMode: true,
        //        centerPadding: '40px',
        //        slidesToShow: 3
        //      }
        //    },
        //    {
        //      breakpoint: 480,
        //      settings: {
        //        arrows: false,
        //        centerMode: true,
        //        centerPadding: '40px',
        //        slidesToShow: 1
        //      }
        //    }
        //  ]
        //});


        //Gallery JS
        $('.center').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
        });
        // Parallax JS
        $('.contact-section').parallax({
            imageSrc: 'images/contact-bg-image.jpg'
        });


        //BMI Calculator
        var age = document.getElementById("age");
        var height = document.getElementById("heightf");
        var weight = document.getElementById("weight");
        var male = document.getElementById("m");
        var female = document.getElementById("f");
        var form = document.getElementById("form");

        function validateForm() {
            if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
                alert("All fields are required!");
                document.getElementById("submit").removeEventListener("click", countBmi);
            } else {
                countBmi();
            }
        }
        document.getElementById("submit").addEventListener("click", validateForm);

        function countBmi() {
            var p = [age.value, height.value, weight.value];
            if (male.checked) {
                p.push("male");
            } else if (female.checked) {
                p.push("female");
            }
            form.reset();
            var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

            var result = '';
            if (bmi < 18.5) {
                result = 'Underweight';
            } else if (18.5 <= bmi && bmi <= 24.9) {
                result = 'Healthy';
            } else if (25 <= bmi && bmi <= 29.9) {
                result = 'Overweight';
            } else if (30 <= bmi && bmi <= 34.9) {
                result = 'Obese';
            } else if (35 <= bmi) {
                result = 'Extremely obese';
            }

            var h1 = document.createElement("h1");
            var h2 = document.createElement("h2");

            var t = document.createTextNode(result);
            var b = document.createTextNode('BMI: ');
            var r = document.createTextNode(parseFloat(bmi).toFixed(2));

            h1.appendChild(t);
            h2.appendChild(b);
            h2.appendChild(r);

            document.body.appendChild(h1);
            document.body.appendChild(h2);
            document.getElementById("submit").removeEventListener("click", countBmi);
            document.getElementById("submit").removeEventListener("click", validateForm);
        }
        document.getElementById("submit").addEventListener("click", countBmi);


        //Mobile Menu

        let mmenu_trigger = document.getElementById('mmenu-trigger');
        let mobile_menu = document.getElementById('mobile-menu');
        let btn_close = document.getElementById('btn-close');


        mmenu_trigger.addEventListener('click', () => {
            mobile_menu.classList.add('slide-in');
        });

        btn_close.addEventListener('click', () => {
            mobile_menu.classList.remove('slide-in');
        });
