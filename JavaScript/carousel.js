// declaring and selecting the elements that we use
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const imgCarousel = document.querySelector('.carousel-img');
const indicators = document.querySelectorAll('.indicators > span');
// images variable holds the relative paths of our images
const images = ['/Images/liv-bruce-M0oVPGsWk1E-unsplash.jpg', '/Images/pexels-george-jr-kamau-2781219.jpg', '/Images/mateus-campos-felipe-o6h1TJOlkw0-unsplash.jpg'];
// helper functions
// 1-setting and getting respectively the attribute of the element we want
const setAttr = (el, attr, value) => el.setAttribute(attr, value);
const getAttr = (el, attr) => el.getAttribute(attr);
// 2-getting the index of the image
const getImageIndex = (image) => images.indexOf(image)
// 3-get the image source here & call the getImageIndex function & return the result
const getCurrentImageIndex = () => {
  const currentImage = getAttr(imgCarousel, 'src');
  return getImageIndex(currentImage);
};
// 4-used for clicking the left and right arrow 
const getArrowLeftImageIndex = (currentIndex) => {
  return currentIndex === 0 ? 2 : currentIndex - 1;
};
const getArrowRightImageIndex = (currentIndex) => {
  return currentIndex === 2 ? 0 : currentIndex + 1;
};
// 5-used for updating the correct indicator's class
const activateIndicator = (index) => {
  indicators.forEach((el, i) => {
    if (el.classList.contains('active')) {
      el.classList.remove('active')
    };
    if (index === i) el.classList.add('active');
  })
};
// used for sliding functionality of our carousel
// returns the interval that we're gonna use inside our click events
const intervalSlider = (direction, delay = 3000) => {
    let callback = null, getNewIndexFunc = null;
    // function calculates the image index when clicking left or right arrow
    if (direction === 'left') {
      getNewIndexFunc = () => getArrowLeftImageIndex(getCurrentImageIndex());
  
    } else {
      getNewIndexFunc = () => getArrowRightImageIndex(getCurrentImageIndex());
    }
//   callback function:-
//   - calculates the new index of the previous image 
//   - updates the correct indicator and 
//   - corrects image based on the newIndex
    callback = () => {
      let newIndex = getNewIndexFunc();
      activateIndicator(newIndex);
      setAttr(imgCarousel, 'src', images[newIndex]);
    }
  
    return () => setInterval(callback, delay);
  }
// declare the functions that returns the interval 
const leftInterval = intervalSlider('left');
const rightInterval = intervalSlider('right');
// variables to hold the interval for click events
let left = null, right = null;
// we get the previous index of the current index
arrowLeft.addEventListener('click', (e) => {
  const newIndex = getArrowLeftImageIndex(getCurrentImageIndex());
// we call the activateIndicator function passing the newIndex
  activateIndicator(newIndex);
// if we have an interval value for the right value, we're gonna clear that interval using the clearInterval function
  right && clearInterval(right);
//  if our left variable does not have a value, we're gonna start the interval using the leftInterval
  if (!left) {
    left = leftInterval()
  }
//  update the image
  setAttr(imgCarousel, 'src', images[newIndex]);
});
//  we get the next index of the current index 
arrowRight.addEventListener('click', (e) => {
  const newIndex = getArrowRightImageIndex(getCurrentImageIndex());
  activateIndicator(newIndex);
  left && clearInterval(left);
  if (!right) {
    right = rightInterval();
  }
  setAttr(imgCarousel, 'src', images[newIndex]);
});