    document.addEventListener("DOMContentLoaded", function() {
        const nameInput = document.getElementById('commenter-name');
        const commentInput = document.getElementById('comment-text');
        const commentButton = document.getElementById('comment-btn');

        function toggleButton() {
            commentButton.disabled = !(nameInput.value.trim() && commentInput.value.trim());
        }

        nameInput.addEventListener('input', toggleButton);
        commentInput.addEventListener('input', toggleButton);
    });
