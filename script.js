const backgrounds = ["404-01-v01","404-02-v01","404-03-v01","404-04-v01","404-07-v01","404-08-v01","404-12-v01",
                     "404-01-v02","404-02-v02","404-03-v02","404-04-v02","404-06-v02","Ash Storm","Aurora",
                     "Black Beach","Forest","Purple Rain","Snowstorm"];

const colors = ["#7fffd4","#9580ff","#ff80aa","#eaff80"];

const nav_home = document.getElementById('nav_home');
const nav_work = document.getElementById('nav_work');
const nav_services = document.getElementById('nav_services');
const nav_about = document.getElementById('nav_about');
const nav_contact = document.getElementById('nav_contact');

const nav_elements = [nav_home, nav_work, nav_services, nav_about, nav_contact];

function getActive(nav_elements) {
  var active = null;
  nav_elements.forEach(nav_element => {
    if (nav_element.getAttribute("class") == "active") {
      active = nav_element;
    };
  });
  return active;
};

const scroll_more = document.getElementById('scroll_more');
const scrollSpyElement = document.querySelector('[data-bs-spy="scroll"]');

// scrollSpyElement.addEventListener('activate.bs.scrollspy', () => {
//   var active = getActive(nav_elements);
//   if (active == nav_home) {
//     scroll_more.href = "#work";
//     scroll_more.classList.remove('d-none');
//   } else if (active == nav_work) {
//     scroll_more.href = "#services";
//     scroll_more.classList.remove('d-none');
//   } else if (active == nav_services) {
//     scroll_more.href = "#about";
//     scroll_more.classList.remove('d-none');
//   } else if (active == nav_about) {
//     scroll_more.href = "#contact";
//     scroll_more.classList.remove('d-none');
//   } else if (active == nav_contact) {
//     scroll_more.classList.add('d-none');
//   };
// });

// const tooltipEl = document.getElementById('tooltip');
// const tooltip = new bootstrap.Tooltip(tooltipEl,{})

// tooltip.setContent({'.tooltip-inner': 'another title'});

window.addEventListener('load', () => {

  var {OverlayScrollbars, ClickScrollPlugin} = OverlayScrollbarsGlobal;
  OverlayScrollbars.plugin(ClickScrollPlugin);
  const osInstance = OverlayScrollbars(document.querySelector('body'), {
    paddingAbsolute: false,
    showNativeOverlaidScrollbars: false,
    update: {
      elementEvents: [['img', 'load']],
      debounce: {
        mutation: [0, 33],
        resize: null,
        event: [33, 99],
        env: [222, 666, true],
      },
      attributes: null,
      ignoreMutation: null,
      flowDirectionStyles: null,
    },
    overflow: {
      x: 'scroll',
      y: 'scroll',
    },
    scrollbars: {
      theme: 'os-theme-dark',
      visibility: 'auto',
      autoHide: 'scroll',
      autoHideDelay: 3000,
      autoHideSuspend: false,
      dragScroll: true,
      clickScroll: true,
      pointers: ['mouse', 'touch', 'pen'],
    },
  });

  const header = document.querySelector('header');
  const about = document.querySelector('#about');
  about.style.paddingTop = header.clientHeight + 'px';

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--hl-color', randomColor);

  const randomImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.documentElement.style.setProperty('--bg-image', 'url("/content/background/' + randomImage + '.webp")');

  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    var carouselObj = new bootstrap.Carousel(carousel, {
      interval: 2000,
      keyboard: false,
      pause: false,
    });
  });

  const gallery = document.querySelector('.gallery');
  var figures = null;
  if (gallery != null) {
    figures = gallery.querySelectorAll('figure')
    figures.forEach(figure => {
      var video = figure.querySelector('video');
      if (video != null) {
        figure.addEventListener('mouseenter', () => {
          video.play();
        });
        figure.addEventListener('mouseleave', () => {
          video.pause();
        });
      };
    });
  };
});
