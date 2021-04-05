const { response } = require("express");

const createPost = async (e) => {
    e.preventDefault();

    const name = document.querySelector('#post-name').value.trim();
    const postBody = document.querySelector('#post-body').value.trim();

    if (name && postBody) {
        const respnse = await fetch('/api/post', {
            method: "POST",
            body: JSON.stringify({ post_title: name, post_content: postBody }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create post');
        }
    }
};

const deletePost = async (e) => {
    if (e.target.hasAttribute=('data-id')) {
        const id = e.target.getAttribute('data-id');

        const response = await fetch('/api/post/$(id)', {
            method: "DELETE",
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert("Failed to Delete");
        }
    }
};

document.querySelector('.new-post-form').addEventListener('submit', createPost);
document.querySelector('.post-list').addEventListener('submit', deletePost);