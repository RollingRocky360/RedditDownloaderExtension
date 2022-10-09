const prefix = "http://localhost:5000/download?url=";

console.log('hello from adder');
const loadLinks = (e) => {
    const posts = document.querySelectorAll('div[data-testid=post-container]');
    if (!posts) return;
    console.log(posts.length);
    for (let post of posts) {
        const url = encodeURIComponent(post.querySelector('a[data-click-id=comments]').href);
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

window.addEventListener('load', loadLinks);
document.querySelector('body').addEventListener('scroll', loadLinks);