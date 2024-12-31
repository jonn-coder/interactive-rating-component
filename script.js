let rating = document.querySelector(".rating-container")
let thankYou = document.querySelector(".thank-you-container")
let ratingNums = document.querySelectorAll(".rating-num li")
let submitBtn = document.querySelector(".submit")

let rateNum = Number()
let selected = false
document.addEventListener("click", (e) => {
  let target = e.target
  rateNum = Number(target.textContent)
  if (isNaN(rateNum)) {
    if (!target.classList.contains('submit')) {
    ratingNums.forEach((num) => {
      num.style.backgroundColor = ""
      num.style.color = ""
    })
    return
}
    else {
        return
    }
  }

  rateNum = target.textContent
  selected = true;
  ratingNums.forEach((num) => {
    num.style.backgroundColor = ""
    num.style.color = ""
  })
  ratingNums[rateNum-1].style.backgroundColor = "hsl(0, 0%, 100%)"
  ratingNums[rateNum-1].style.color = "hsl(213, 19%, 18%)"
})

submitBtn.addEventListener("click", () => {
  if (!selected) return
  rating.classList.add("fade-out")
  rating.addEventListener("animationend", () => {
    rating.style.display = "none"
    thankYou.style.display = "block"
    thankYou.classList.add("fade-in")
    thankYou.addEventListener("animationend", () => {
      thankYou.style.display = "block"
    })
  })
})
