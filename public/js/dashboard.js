const newPostForm = async (event) => {
    event.preventDefault();
    
    const title = document.querySelector('#post-name').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if(name && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

    if(response.ok) {
        document.location.replace('/posts');
    } else {
        alert('Failed to create post');
        }
    }
};

const updateButtonHandler = async (event) => {
    if(event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'UPDATE',
        });

        if (response.ok) {
            document.location.replace('/posts');
        } else {
            alert('Failed to update post');
        }
    }
};

document
.querySelector('.new-post-form')
.addEventListener('submit', newPostForm);

document
.querySelector('.post-list')
.addEventListener('submit', updateButtonHandler);