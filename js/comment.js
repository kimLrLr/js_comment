(function () {
  const formEl = document.querySelector("form");
  const commentWrapEl = document.querySelector(".comment_wrap");

  const handlerSubmit = (e) => {
    e.preventDefault();

    const inputEl = document.querySelector("input");
    const inputValue = inputEl.value;

    const commentEl = document.createElement("div");
    commentEl.classList.add("comment");

    commentEl.innerText = inputValue;

    commentWrapEl.appendChild(commentEl);
    inputEl.value = "";
  };

  formEl.addEventListener("submit", handlerSubmit);
})(); //end
