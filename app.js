darkModeButton = document.getElementById("dark-mode-button")

handleButtonClick = function () {

    if(darkModeButton.innerText === "Dark Mode"){
        // It is not in dark mode so set it all to dark mode
        console.log("Setting to dark mode");
        darkModeButton.innerText = "Light Mode"
        
    }else{
        console.log("Setting to light mode")
        darkModeButton.innerText = "Dark Mode"
    }

    body = document.body
    body.classList.toggle("darkMode")

    // change the border of the title
    title = document.getElementById("title-section")
    title.classList.toggle("darkMode");


    // change the border and headings on the posts
    posts = document.getElementsByClassName("post");
    for (post of posts) {
        post.classList.toggle("darkMode");
    }

    postHeadings = document.getElementsByTagName("h3")
    for (heading of postHeadings){
        heading.classList.toggle("darkMode");
    }
}

darkModeButton.addEventListener("click", handleButtonClick)




//Creating new posts with form
const form = document.getElementById('newPost');
form.addEventListener('submit', (event) => {

    // stop form submission
    event.preventDefault();

    const container = document.querySelector('#post-container');

    const post = document.createElement('section');
    post.classList.add('post');
    
    const postTitle = document.createElement('h3');
    postTitle.innerText = form.elements['postTitle'].value
    post.appendChild(postTitle)
    
    const postDate = document.createElement('h4');
    postDate.innerText = `Date: ${form.elements['postDate'].value}`
    post.appendChild(postDate)

    const postText = document.createElement('p');
    postText.innerText = form.elements['postText'].value
    post.appendChild(postText)

    container.appendChild(post);

    form.elements['postTitle'].value = ""
    form.elements['postDate'].value = ""
    form.elements['postText'].value = ""

    
});



// Star toggle
const starIconList = document.getElementsByClassName("fa-star");

const addStarToggle = function(starIcon){
    starIcon.addEventListener('click', () => {
        console.log("clicked on star")
        starIcon.classList.toggle("fa-regular");
        starIcon.classList.toggle("fa-solid");
    })
}


for(let i =0; i < starIconList.length; i++){
    addStarToggle(starIconList[i])
}
