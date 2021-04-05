const addPost = async (e) => {
    e.preventDefault();
    const postContent = document.querySelector('#comment').value.trim();
    const postID = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    if (postContent) {
        const response = await fetch ('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_content: postContent, post_id: postID}),
            headers: {
                "Content-tyle": "application/json"
            }
        }) 
        if (response.ok) {
            document.replaceChild('/profile');
        } else {
            alert('Failed to post comment');
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', addPost);