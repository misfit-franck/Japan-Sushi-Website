import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100
});

const headerMobileIcon = document.querySelector(".header__menu-mobile");
const trendingDiscoverBtn = document.getElementById("trending__discover");
const subsEmailAddress = document.getElementById("subscription__form-email-address");
const getStartedBtn = document.getElementById("getstarted");
const footerPageLogo = document.querySelector(".footer__logo");

footerPageLogo.addEventListener("click", function () {
  window.location.reload();
});

headerMobileIcon.addEventListener("click", function () {
  // by you ui design header mobile ~ toggle view menu here
  console.log("toggle menu");
});

trendingDiscoverBtn.addEventListener("click", function() {
  console.log("discover button");
});

getStartedBtn.addEventListener("click", function() {
  if (subsEmailAddress.value === "") {
    console.error("User shoulds provide a email address");
  } else {
    let usrEmailAddress = subsEmailAddress.value;
    console.log(`${usrEmailAddress} ~ has been provided`);
  }
});
