// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  const ramenDetail = document.getElementById('ramen-detail')
  const rating = document.getElementById('rating-display')
  const comment = document.getElementById('comment-display')

  ramenDetail.querySelector('img').src = ramen.image
  ramenDetail.querySelector('img').alt = ramen.name
  ramenDetail.querySelector('h2').textContent = ramen.name
  ramenDetail.querySelector('h3').textContent = ramen.restaurant

  rating.textContent = ramen.rating
  comment.textContent = ramen.comment
};

const addSubmitListener = () => {
  // Add code
  const newRamenForm = document.getElementById('new-ramen')
  const ramenMenu = document.getElementById('ramen-menu')
  newRamenForm.addEventListener('submit', function(event){
    event.preventDefault()
    let ramen = {
      'image': newRamenForm.querySelector('#new-image').value,
      'name': newRamenForm.querySelector("#new-name").value,
      'restaurant': newRamenForm.querySelector("#new-restaurant").value,
      'rating' : newRamenForm.querySelector("#new-rating").value,
      'comment' : newRamenForm.querySelector("#new-comment").value,
    }

    let div = document.createElement('div')
    let image = document.createElement('img')
    image.src = ramen.image
    image.addEventListener('click', () => handleClick(ramen))
    let name = document.createElement('h2')
    name.innerText = ramen.name
    let restaurant = document.createElement('h3')
    restaurant.innerText = ramen.restaurant
    div.append(image, name, restaurant)
    ramenMenu.append(div)
  })
}

const displayRamens = () => {
  // Add code
  const ramenMenu = document.getElementById('ramen-menu')

  fetch('http://localhost:3000/ramens')
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    data.forEach(function(ramen){
      let image = document.createElement('img')
      image.src = ramen.image
      ramenMenu.append(image)

      image.addEventListener('click', () => handleClick(ramen))
    })
  })
};

const main = () => {
  // Invoke displayRamens here
  displayRamens()
  // Invoke addSubmitListener here
  addSubmitListener()
}

document.addEventListener('DOMContentLoaded', () => main())

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
