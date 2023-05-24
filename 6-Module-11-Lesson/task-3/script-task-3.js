/**
 * Create list of 3 random images
 * List should be enumerated
 */

const images = [
  'https://picsum.photos/200/200',
  'https://placekitten.com/200/200',
  'https://source.unsplash.com/random/100*100 ',
];

// const ol = document.createElement('ol');
// images.forEach(im => {
//   const li = document.createElement('li');
//   const imageTag = document.createElement('img');

//   li.append(imageTag);
//   ol.append(li);

//   imageTag.setAttribute('src', im);
//   imageTag.setAttribute('alt', 'random image');
// });

// document.body.append(ol);

// ==========================

const ol = document.createElement('ol');
images.forEach(im => {
  const li = document.createElement('li');
  const imageTag = document.createElement('img');

  li.append(imageTag);
  ol.append(li);

  imageTag.setAttribute('src', im);
  imageTag.setAttribute('alt', 'random image');
});

document.body.append(ol);
