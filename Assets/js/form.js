const usernameEl = document.querySelector("#username");
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");
const submitButton = document.querySelector("#submit");
const blogKey = "blogPost";

//Function to loop through the blog object and check if the inputs are valid. Will display text if not.
const validateInputs = (obj) => {
  for (const item in obj) {
    const error = document.querySelector(`#invalid-${item}`);
    //If input is empty, show the text
    if (!obj[item]) {
      error.classList.remove("hidden");
      error.classList.add("visible");
    }
    //if input was previously empty and text is showing - hide the text and set aria-invalid to false
    else if (obj[item] && error.classList.contains("visible")) {
      error.classList.remove("visible");
      error.classList.add("hidden");
      document.querySelector(`#${item}`).setAttribute("aria-invalid", false);
    }
    //If imput isn't empty, set aria-invalid to true.
    else {
      document.querySelector(`#${item}`).setAttribute("aria-invalid", false);
    }
  }
  //Checks that all 3 inputs are valid and returns true if correct
  if (
    usernameEl.getAttribute("aria-invalid") === "false" &&
    titleEl.getAttribute("aria-invalid") === "false" &&
    contentEl.getAttribute("aria-invalid") === "false"
  ) {
    return true;
  } else {
    return false;
  }
};

//Function to retrieve the array of blog posts from local storage to add to it
const addToStorageArray = (key, data) => {
  let blogArr = JSON.parse(localStorage.getItem(key));
  //Find out if local storage is empty
  if (blogArr === null) {
    localStorage.setItem(blogKey, JSON.stringify([data]));
  } else if (Array.isArray(blogArr)){
    blogArr.push(data)
    localStorage.setItem(blogKey, JSON.stringify(blogArr));
}
};

//The submit button function
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  //Put all the inputs into an object - to be able to store in local
  const blog = {
    username: usernameEl.value,
    title: titleEl.value,
    content: contentEl.value,
  };

  //Checks the result of validate input function
  const validate = validateInputs(blog);

  //If valid - calls storage function to add the data and change page
  if (validate) {
    addToStorageArray(blogKey, blog);
    window.location.href = "blog.html";
  }
});
