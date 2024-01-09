export const setupDrawer = () => {
    const hamburgerMenu = document.createElement("div");
    hamburgerMenu.innerHTML = `
      <div></div>
      <div></div>
      <div></div>
    `;
    hamburgerMenu.classList.add("hamburger-menu");
    document.querySelector(".nav").appendChild(hamburgerMenu);
  
    const drawer = document.querySelector(".drawer");
  
    hamburgerMenu.addEventListener("click", () => {
      drawer.classList.toggle("show-drawer");
    });

    const closeDrawer = () => {
      drawer.classList.remove('show-drawer');
      document.removeEventListener('click', handleOutsideClick);
    };
  
    const handleOutsideClick = (event) => {
      if (!drawer.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        closeDrawer();
      }
    };
  
    hamburgerMenu.addEventListener('click', () => {
      drawer.classList.toggle('show-drawer');
      document.addEventListener('click', handleOutsideClick);
    });
  };