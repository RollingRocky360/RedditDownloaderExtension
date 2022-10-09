window.addEventListener('load', () => {
    const prefix = "http://localhost:5000/download?url=";
    console.log('hello from specific');
    
    const url = encodeURIComponent(window.location.href);
    const space = document.querySelector('._21pmAV9gWG6F_UKVe7YIE0');
    space.innerHTML = 
        `
            <a target="download" class="inner-link" href=${prefix+url} style="height: 98%;">
            <span class="material-symbols-outlined">download</span>
            Download
            </a>
        `;
});
