'use strict'

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}
const imgContainer = document.querySelector('.images')

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img')
    img.src = imgPath
    img.addEventListener('load', function () {
      imgContainer.appendChild(img)
      resolve(img)
    })
    img.addEventListener('error', function () {
      reject(new Error('Image not found!'))
    })
  })
}
// let currentImg
// createImage('./images/img-1.jpg')
//   .then((img) => {
//     currentImg = img
//     return wait(2)
//   })
//   .then(() => {
//     currentImg.style.display = 'none'
//     return createImage('./images/img-2.jpg')
//   })
//   .then((img) => {
//     currentImg = img
//     return wait(2)
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch((err) => console.log(err))

const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('./images/img-1.jpg')
    await wait(2)
    img.style.display = 'none'

    // Load image 1
    img = await createImage('./images/img-2.jpg')
    await wait(2)
    img.style.display = 'none'
  } catch (err) {
    console.error(err)
  }
}
//loadNPause()

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img))
    console.log(imgs)
    const imgsEl = await Promise.all(imgs)
    console.log(imgsEl)
    imgsEl.forEach((img) => img.classList.add('parallel'))
  } catch (err) {
    console.error(err)
  }
}
loadAll(['./images/img-1.jpg', './images/img-2.jpg', './images/img-3.jpg'])
