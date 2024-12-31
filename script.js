// element vars
let rating = document.querySelector(".rating-container")
let thankYou = document.querySelector(".thank-you-container")
let ratingNums = document.querySelectorAll(".rating-num li")
let submitBtn = document.querySelector(".submit")
let selectedRate = document.querySelector(".rating-selected")

// assign id to all rate to be selected
ratingNums.forEach((num, index) => {
  num.setAttribute("id", index)
  num.setAttribute("class", "rateNum")
})

//other vars 
let rateNum = 0;
let selected = false
// select each rate on clicking
addEventListener
document.addEventListener("click", (e) => {
  let target = e.target
//   return if no rate was selected
  if (!target.classList.contains("rateNum")) {
    return
  }

//  rateNum should be set to number so as to be used on accesing other rating 
  rateNum = Number(target.id)
  selected = true

//  set white backgroung on focus/selected rating
  ratingNums.forEach((num) => {
    num.style.backgroundColor = ""
    num.style.color = ""
  })

  ratingNums[rateNum].style.backgroundColor = "hsl(0, 0%, 100%)"
  ratingNums[rateNum].style.color = "hsl(213, 19%, 18%)"
})

// listing for click event on submit button
submitBtn.addEventListener("click", () => {
  // return if no rating was selected
  if (!selected) return
  rating.classList.add("fade-out")
//thank you state to be display after rating state animated completed(fade out)
  rating.addEventListener("animationend", () => {
    rating.style.display = "none"
    thankYou.style.display = "block"
    selectedRate.innerHTML = `You selected ${rateNum + 1} out of ${ratingNums.length}`
    thankYou.classList.add("fade-in")
    thankYou.addEventListener("animationend", () => {
      thankYou.style.display = "block"
    })
  })
})
