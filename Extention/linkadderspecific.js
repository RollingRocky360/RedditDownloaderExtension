doc = document;


window.onload = () => {
    const prefix = "http://localhost:5000/download?url=";

    
    const url = encodeURIComponent(window.location.href);
    const space = doc.querySelector('._21pmAV9gWG6F_UKVe7YIE0');
    space.insertAdjacentHTML("beforeend", 
        `
            <a target="download" class="inner-link" href=${prefix+url} style="height: 98%;">
            <span class="material-symbols-outlined">download_for_offline</span>
            Download
            </a>
        `
    );
}
