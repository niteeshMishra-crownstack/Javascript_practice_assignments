const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if (id) {
        //remove active from other buttons
        btns.forEach(function(btn) {
                btn.classList.remove("active"); //removing active class from all other buttons
                e.target.classList.add("active") //adding active class to the button which has been clicked

            })
            //hide other articles
        articles.forEach(function(article) {
            article.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active')
    }

})