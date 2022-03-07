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
