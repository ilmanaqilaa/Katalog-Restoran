export const loadAllRestaurant = async () => {
  const displayModal = (restaurant) => {
    const modal = document.getElementById("restaurant-modal");
    const modalContent = modal.querySelector(".modal-content");
  
    modalContent.innerHTML = `
      <!-- Tampilkan informasi restoran di dalam modal -->
      <h2 tabindex="0">${restaurant.name}</h2>
      <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
      <p tabindex="0"><span class="city">City:</span> ${restaurant.city}</p>
      <p tabindex="0"><span class="rating">Rating:</span> ${restaurant.rating}</p>
      <p class="desc" tabindex="0">${restaurant.description}</p>
    `;
  
    modal.style.display = "block";
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    });
  };
  
  const restaurantList = document.getElementById("restaurant-list");

  try {
    const data = await fetch("data/data.json");
    const response = await data.json();

    response.restaurants.forEach((restaurant) => {
      const modal = document.getElementById("restaurant-modal");
      const restaurantDiv = document.createElement("div");
      restaurantDiv.classList.add("restaurant");
      restaurantDiv.setAttribute("tabindex", "0");

      restaurantDiv.innerHTML = `
                <div class="item__card">
                    <img loading="lazy" class="item__img" src="${restaurant.pictureId}" alt="${restaurant.name}" />
                    <div class="item__desc">                   
                        <h3 class="item__title">${restaurant.name}</h3>
                        <p class="item__city">${restaurant.city}</p>
                    </div>
                </div>
            `;

      restaurantDiv.addEventListener("click", () => {
        displayModal(restaurant);
        modal.focus();
      });

        restaurantDiv.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            displayModal(restaurant);
          }
        });
      
      restaurantList.appendChild(restaurantDiv);
    });
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data:", error);
  }
};