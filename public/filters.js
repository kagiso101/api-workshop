const colorsDrop = document.querySelector(".colorsDrop")
const colorsDropList = document.querySelector(".colorsDropList")
const colorDropDown = document.querySelector(".colorDropDown").innerHTML
const colorsDropHandlebars = Handlebars.compile(colorDropDown)


const brandsDrop = document.querySelector(".brandsDrop")
const brandsDropList = document.querySelector(".brandsDropList")
const brandsDropDown = document.querySelector(".brandsDropDown").innerHTML
const brandsDropHandlebars = Handlebars.compile(brandsDropDown)


const button = document.querySelector(".btn")


const filteredElem = document.querySelector(".filtered");
const filteredList = document.querySelector(".filteredList");
const filteredHandlebarElem = document.querySelector(".filteredHandlebar").innerHTML;
const filteredHandlebar = Handlebars.compile(filteredHandlebarElem);



axios
    .get("http://api-tutor.herokuapp.com/v1/colors")
    .then(function (result) {
        // console.log(result)
        colorsDropList.innerHTML = colorsDropHandlebars({
            colorDrop: result.data
        })
    })


axios
    .get("http://api-tutor.herokuapp.com/v1/makes")
    .then(function (result) {
        console.log(result)
        brandsDropList.innerHTML = brandsDropHandlebars({
            brandsDrop: result.data
        })
    })

button.addEventListener("click", function () {

    const colors = colorsDropList.value
    const brands = brandsDropList.value
    if (colors && brands) {
        axios
            .get("http://api-tutor.herokuapp.com/v1/cars/make/" + brands + "/color/" + colors)
            .then(function (result) {
                console.log(result);
                filteredList.innerHTML = filteredHandlebar({
                    filtered: result.data
                })
            })

    } else if (colors) {
        axios
            .get("http://api-tutor.herokuapp.com/v1/cars/color/" + colors)
            .then(function (result) {
                filteredList.innerHTML = filteredHandlebar({
                    filtered: result.data
                })
            })
    }
    else {

        axios
            .get("http://api-tutor.herokuapp.com/v1/cars/make/" + brands)
            .then(function (result) {
                filteredList.innerHTML = filteredHandlebar({
                    filtered: result.data
                })

            })
    }

});