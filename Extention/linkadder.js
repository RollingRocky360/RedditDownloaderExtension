doc = document;

const prefix = "http://localhost:5000/download?url=";

const loadLinks = () => {
    const posts = document.querySelectorAll('div [data-testid=post-container]');
    console.log(posts.length);
    for (let post of posts) {
        const url = encodeURIComponent(post.querySelector('[data-click-id=comments]').href);
        const space = post.querySelector('._21pmAV9gWG6F_UKVe7YIE0');
        if (space.innerHTML !== '') { continue; }
        space.innerHTML = `
        <a target="download" class="inner-link" href=${prefix+url}>
        <span class="material-symbols-outlined">download</span>
        Download
        </a>
        `;
    }
}

document.addEventListener('DOMContentLoaded', loadLinks);
document.querySelector('body').onscroll = loadLinks;