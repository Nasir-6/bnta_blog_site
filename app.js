darkModeButton = document.getElementById("dark-mode-button")

handleButtonClick = function () {

    if(darkModeButton.innerText === "Dark Mode"){
        // It is not in dark mode so set it all to dark mode
        console.log("Setting to dark mode");
        darkModeButton.innerText = "Light Mode"
        
    }else{
        console.log("Setting to light mode")
    }
    
    console.log("Button Clicked")
    // change the background colour and text
    // body = document.body

    // body.style.backgroundColor = "#091d1e"
    // body.style.color = "#aaaaaa"
    // body.classList.toggle
    body = document.body
    body.classList.toggle("darkMode")

    // change the border of the title

    title = document.getElementById("title-section")
    // title.style.border = "1px solid #aaaaaa"
    title.classList.toggle("darkMode");


    // change the border and headings on the posts

    // posts = document.getElementsByClassName("post")
    // for (post of posts){
        // post.style.border = "1px solid #aaaaaa"
    // }

    // postHeadings = document.getElementsByTagName("h3")
    // for (heading of postHeadings){
        // heading.style.color = "#466876"
    // }

        posts = document.getElementsByClassName("post")
        for (post of posts){
            post.classList.toggle("darkMode");
        }


        postHeadings = document.getElementsByTagName("h3")
        for (heading of postHeadings){
            heading.classList.toggle("darkMode");
        }
}

darkModeButton.addEventListener("click", handleButtonClick)
