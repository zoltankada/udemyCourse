import $ from 'jquery';
import MobileMenu from "./modules/mobileMenu";
import RevealOnScroll from "./modules/revealOnScroll";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");