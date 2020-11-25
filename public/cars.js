const brandsElem = document.querySelector(".brands");
const brandsListElem = document.querySelector(".brandList");
const brandsHandlebarElem = document.querySelector(".brandsHandlebar").innerHTML;
const brandsHandlebar = Handlebars.compile(brandsHandlebarElem);

const carsElem = document.querySelector(".cars");
const carsList = document.querySelector(".carsList");
const carsHandlebarElem = document.querySelector(".carsHandlebar").innerHTML;
const carsHandlebar = Handlebars.compile(carsHandlebarElem);

const color = document.querySelector(".colors")
const colorList = document.querySelector(".colorList")
const colorHandlebars = document.querySelector(".colorHandlebars").innerHTML
const colorsHandlebars = Handlebars.compile(colorHandlebars)







axios
    .get("http://api-tutor.herokuapp.com/v1/makes")
    .then(function (result) {
        // console.log(result);
        //displays the list of cars on screen asing a template
        brandsListElem.innerHTML = brandsHandlebar({
            brands: result.data
        })
    });
axios
    .get("http://api-tutor.herokuapp.com/v1/colors")
    .then(function (results) {
        // console.log(results)
        colorList.innerHTML = colorsHandlebars({
            color: results.data
        })
    });
axios
    .get("http://api-tutor.herokuapp.com/v1/cars")
    .then(function (final) {
        // console.log(final)
        carsList.innerHTML = carsHandlebar({
            cars: final.data
        })
    })

    

