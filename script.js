document.querySelectorAll("#navbar a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Modal video functionality (optional, if you have video popups)
const videoModal = document.getElementById("video-modal");
const closeBtn = document.querySelector(".close-btn");
const videoIframe = document.getElementById("video-iframe");

// Open video modal (example)
document.querySelector("#projects .project-card:nth-child(1)").addEventListener("click", function() {
    videoModal.style.display = "block";
    videoIframe.src = "https://www.youtube.com/embed/YOUR_VIDEO_ID"; // Replace with your video ID
});

// Close video modal
closeBtn.onclick = function() {
    videoModal.style.display = "none";
    videoIframe.src = "";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == videoModal) {
        videoModal.style.display = "none";
        videoIframe.src = "";
    }
}