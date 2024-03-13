const backButton = document.querySelector("#back");
const blogContainer = document.querySelector("#blog-wrapper");
const blogKey = "blogPost";
const footerEl = document.querySelector("footer-txt");
let blogs = JSON.parse(localStorage.getItem(blogKey))


//Function for the back button to return to form input page
backButton.addEventListener("click", (e) => {
  window.location.href = "index.html"
});


//Create the individual blog posts based on local storage data
blogs.map(blog => {
  //create the empty elements
  const blogWrapper = document.createElement("div");
  const title = document.createElement("h4");
  const content = document.createElement("p")
  content.className = "content"
  const user = document.createElement("p")
  user.className = "user"

  //assign text to the inner elements
  title.innerHTML = blog.title;
  content.innerHTML = blog.content;
  user.innerHTML = `Posted by: ${blog.username}`;

  //Append the inner elements to it's wrapper and add into the main container
  blogWrapper.append(title, content, user);
  blogContainer.appendChild(blogWrapper)

})

const year = new Date().getFullYear();
console.log(year)