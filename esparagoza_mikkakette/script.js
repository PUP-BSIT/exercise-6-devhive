function buttonEnabler() {
    let nameInput = document.getElementById("commenter-name");
    let commentText = document.getElementById("commenter-comment");
    let commentButton = document.getElementById("comment-button");

    if(nameInput.value.trim() !== '' && commentText.value.trim() !== '') {
        commentButton.disabled = false;
    } else {
        commentButton.disabled = true;
    }
    
    nameInput.addEventListener('input', buttonEnabler);
    commentText.addEventListener('input', buttonEnabler);
}

document.addEventListener('DOMContentLoaded', buttonEnabler);