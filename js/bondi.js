let switcher = document.querySelectorAll(".Portfolio-section ul li");
let showWork = document.querySelectorAll(".Portfolio-section .row div .box");

// loop through each list item in the switcher
switcher.forEach((li) => {
  // attach a click event listener to each list item
  li.addEventListener("click", (e) => {
    // remove the active class from all list items
    e.target.parentElement.querySelectorAll(".active").forEach((elem) => {
      elem.classList.remove("active");
    });

    // add the active class to the clicked list item
    e.target.classList.add("active");
    let Toshow = e.target.innerHTML;

    // loop through each work element
    showWork.forEach((work) => {
      // get the value of the data-application attribute of each work element
      let dataApp = work.dataset.application;

      // if the value of the data-application attribute matches the text of the clicked list item, display the work element, otherwise hide it
      if (Toshow == "all" || Toshow == dataApp) {
        work.style.display = "block";
      } else {
        work.style.display = "none";
      }
    });
  });
});
