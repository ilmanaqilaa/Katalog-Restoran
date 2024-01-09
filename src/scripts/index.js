import 'regenerator-runtime';
import '../styles/main.css';
import { loadAllRestaurant } from "./view/app";

document.addEventListener("DOMContentLoaded", async function () {
  await loadAllRestaurant();
  
  const toggleButton = document.querySelector('.toggle-drawer');
  const appDrawer = document.querySelector('.app-drawer');
  const overlay = document.querySelector('.overlay');
  const drawerLinks = document.querySelectorAll('.app-drawer a');


  toggleButton.addEventListener('click', function () {
    appDrawer.classList.toggle('show-drawer');
  });

  overlay.addEventListener('click', function () {
    appDrawer.classList.remove('show-drawer');
  });

    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        appDrawer.classList.remove('show-drawer');
      });
    });
});