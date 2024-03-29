const backButton = document.querySelector("#back");
const blogContainer = document.querySelector("#blog-wrapper");
const blogKey = "blogPost";
const footerEl = document.querySelector("footer-txt");
let blogs = JSON.parse(localStorage.getItem("blogPost"));

//Function for the back button to return to form input page
backButton.addEventListener("click", (e) => {
  window.location.href = "index.html";
});

const createBlogs = (data) => {
  const blogWrapper = document.createElement("div");
  const title = document.createElement("h4");
  const content = document.createElement("p");
  content.className = "content";
  const user = document.createElement("p");
  user.className = "user";

  //assign text to the inner elements
  title.innerHTML = data.title;
  content.innerHTML = data.content;
  user.innerHTML = `Posted by: ${data.username}`;

  //Append the inner elements to it's wrapper and add into the main container
  blogWrapper.append(title, content, user);
  blogContainer.appendChild(blogWrapper);
};

//When first item saves to local storage, its only an object. Find out if object or array
if (Array.isArray(blogs)) {
  blogs.map((blog) => {
    createBlogs(blog);
  });
}

