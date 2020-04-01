const commentPlus = document.getElementsByClassName("commentPlus")[0];
const commentBtn = document.getElementById("commentBtn");

commentBtn.onclick = uploadComment;

function uploadComment() {
    const mkSpan = document.createElement("span");
    const mkSpan2 = document.createElement("span");
    const mkDiv = document.createElement("div");
    const input = document.querySelector("input").value;

    mkSpan2.innerHTML = "soncl_0206 ";
    mkSpan2.className = "commentUser";
    mkDiv.appendChild(mkSpan2);
    commentPlus.appendChild(mkDiv);

    mkSpan.innerHTML = input;
    mkDiv.appendChild(mkSpan);
    commentPlus.appendChild(mkDiv);
};