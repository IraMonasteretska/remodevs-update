$(document).ready(function () {

    // trusted us - slider
    $('.trusted-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2500,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        ]
    });

    $('.trusted-slider a').click(function (e) {
        e.preventDefault();
    });

    // header - add shadow

    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $('header.header').addClass('header__shadow');
        } else {
            $('header.header').removeClass('header__shadow')
        }
    });

    // menu mobile
    if ($(window).width() < 992) {
        $('.submenu').click(function () {
            $(this).find('ul').slideToggle();
        });
    }


    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.mobilemenu-wrapper').toggleClass('open');
    });

    // init select style
    if ($('select, input[type="file"]').length > 0) {
        $(function () {
            $('select, input[type="file"]').styler();
        });
    }



    $(".applybox .blue-btn").on("click", function (event) {
        var headerHeight = 93;
        // if ($(window).width() < 1651 && $(window).width() > 1024) {
        //     var headerHeight = 80;
        // }
        // else if ($(window).width() < 992 && $(window).width() > 575) {
        //     var headerHeight = 60;
        // } else if ($(window).width() < 576) {
        //     var headerHeight = 55;
        // }
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 40;
        $('body,html').animate({
            scrollTop: top - headerHeight
        }, 1000);
    });


    $('.knowledgebsse__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg width="52" height="14" viewBox="0 0 52 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.04904 13.0986L0.999348 7.04894M0.999348 7.04894L7.04904 0.999252M0.999348 7.04894L50.2773 7.04894" stroke="#1348A7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="52" height="14" viewBox="0 0 52 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.2283 1L50.278 7.04969M50.278 7.04969L44.2283 13.0994M50.278 7.04969H1" stroke="#1348A7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },

        ]
    });


    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.finished = false;
        this.tick();
    };

    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        if (!this.finished) {
            setTimeout(function () {
                that.tick();
            }, delta);
        }
        else {
            this.el.innerHTML = '<span class="wrap">' + fullTxt + '</span>';
        }
    };

    window.onload = setTimeout(function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                var instance = new TxtRotate(elements[i], JSON.parse(toRotate), period);
                instance.finished = true;
            }
        }
    }, 500);



    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
    });


















    var aboutStatistics = $('.about__statistics')
    function counter() {
        var statisticsCount = 0;

        $(window).scroll(function () {
            var oTop = $('.about__statistics').offset().top - window.innerHeight;
            if (statisticsCount == 0 && $(window).scrollTop() > oTop) {
                $('.count').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');

                    $({ countNum: $this.text() }).animate({
                        countNum: countTo
                    },

                        {
                            duration: 2000,
                            easing: 'linear',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }
                        });
                    statisticsCount = 1;
                });
            }

        })
    }
    if (aboutStatistics.length) {
        counter()
    }





    // local storage script
    $('.ebook__left-form').on('click', function () {
        localStorage.bookUrl = $(this).attr('data-url');
    });
    //  редірект на прайс------ //
    document.addEventListener('wpcf7mailsent', function (event) {
        if ('3348' == event.detail.contactFormId) {
            // location = localStorage.bookUrl;
            window.open(localStorage.bookUrl);
        } 
    }, false);





        // post category tabs -------- //
        /*
        $('.categories__tab').on('click', function () {
            var dataClass = $(this).attr('data-tab');
            $('.categories__window').removeClass('active-window').hide();
            $('.categories__tab').removeClass('active');
            $(this).addClass('active');
            $('.' + dataClass).addClass('active-window').fadeIn(500);
            return false;
        });
    */
    
    
        // POST NAV SCRIPT --------------------- //
        // $(".postnav ul").on("click", "a", function (event) {
        //     event.preventDefault();
        //     var id = $(this).attr('href'),
        //         top = $(id).offset().top;
        //     $('body,html').animate({ scrollTop: top - 105 }, 1500);
        // });
    
        // const links = document.querySelectorAll('.postnav li a');
        // window.addEventListener('scroll', () => {
        //     const anchors = document.querySelectorAll('article [id]');
        //     anchors.forEach(anchor => {
        //         if (anchor.closest('article')) {
        //             const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
        //             if (window.pageYOffset >= anchorTop - 110) {
        //                 links.forEach(link => {
        //                     const correspondingLink = document.querySelector(`.postnav li a[href="#${anchor.id}"]`);
        //                     if (correspondingLink) {
        //                         link.classList.remove('active');
        //                         correspondingLink.classList.add('active');
        //                     }
        //                 });
        //             }
        //         }
        //     });
        // });

        // Table of contents

    var $h2Elements = $('.center-col h2');
    var $contentsBlock = $('.article-contents ul');
    var isScrolling = false;

    $h2Elements.each(function (index) {
        var id = 'section-' + (index + 1);
        $(this).attr('id', id);
        $contentsBlock.append('<li><a href="#' + id + '">' + $(this).text() + '</a></li>');
    });

    $contentsBlock.on('click', 'a', function (event) {
        event.preventDefault();
        isScrolling = true;
        var targetId = $(this).attr('href');
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $('html, body').animate({
            scrollTop: $(targetId).offset().top - 100
        }, 500, function () {
            isScrolling = false;
        });
    });

    $(window).scroll(function () {
        if (!isScrolling) {
            $h2Elements.each(function () {
                if ($(window).scrollTop() + 200 >= $(this).offset().top) {
                    var targetId = $(this).attr('id');
                    var $targetLink = $contentsBlock.find('a[href="#' + targetId + '"]');
                    $targetLink.addClass('active');
                    $targetLink.parent().siblings().find('a').removeClass('active');
                }
            });
        }
    });


});




// video
if (document.querySelector('video')) {
    // const player = new Plyr('#player');
    document.addEventListener('DOMContentLoaded', () => {
        // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
        const controls = [
            'play-large', // The large play button in the center
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'fullscreen' // Toggle fullscreen
        ];

        // const player = new Plyr('#player', { controls });
        const players = Plyr.setup('.video__controls', {
            controls
        });

        // Expose
        window.players = players;

        // Bind event listener
        function on(selector, type, callback) {
            document.querySelector(selector).addEventListener(type, callback, false);
        }
    });
}

