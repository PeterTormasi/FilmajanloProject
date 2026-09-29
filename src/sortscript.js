const movieList = document.querySelectorAll('.movie-opt')
const sortList = document.querySelectorAll('.sortTag')

categoriesNow = [];

function sort(categories) {
    if (categories.length > 0) {
        i = 0
        movieList.forEach(element => {
            element.classList.remove("selected")
            void element.offsetWidth
            const tags = new Set(element.dataset.tags.split(" "))
            const hastags = categories.every(category => tags.has(category))
            element.classList.toggle("selected", hastags)
        });
    }
    else {
        movieList.forEach(element => {
            element.classList.remove("selected")
            void element.offsetWidth
            element.classList.add("selected")
        });
    }
}

sort(categoriesNow)

sortList.forEach(btn => btn.addEventListener("input", () => {
    if (btn.checked) {
        categoriesNow.push(btn.dataset.sort)
    }
    else {
        categoriesNow.splice(btn.dataset.sort)
    }
    sort(categoriesNow)
}))
