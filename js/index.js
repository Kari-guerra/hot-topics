// Get the references to the active parts of your html
// - reference to buttons
// - reference to dynamic-content
// - set up the path to the initial content to be loaded
const container = document.querySelector('.dynamic-content');
const btns = document.querySelectorAll('.container-nav li a');
let url = './data/home.html';

// Create the function that will contain fetch function. This function will need to have a parameter for url.
const loadContent = (e) => {
    e.preventDefault();
    let t = e.target.textContent;

    if (t === "Portfolio") {
        let url = './data/portfolio.html';

        fetch(url).then(function(response) {
                return response.text();
            }).then(function(data) {
                container.innerHTML = data;
            })
            .catch(function(error) {
                console.log(error.message);
            });
    } else if (t === "Home") {
        fetch(url).then(function(response) {
                return response.text();
            }).then(function(data) {
                container.innerHTML = data;
            })
            .catch(function(error) {
                console.log(error.message);
            });
    }
}

// create event-handler that will run when click happens
const selectContent = () => {
    fetch(url).then(function(response) {
            return response.text();
        }).then(function(data) {
            container.innerHTML = data;
        })
        .catch(function(error) {
            console.log(error.message);
        });
}
for (let b of btns) {
    b.addEventListener("click", loadContent);
}

selectContent();