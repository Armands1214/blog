// Vienkāršs skripts, lai pievienotu testēšanas ziņojumu
document.addEventListener("DOMContentLoaded", function () {
    const postContainer = document.getElementById("post-container");

    const samplePost = document.createElement("div");
    samplePost.innerHTML = "<h3>Pirmais bloga ieraksts</h3><p>Šis ir mans pirmais ieraksts GitHub blogā. Sekojiet līdzi jaunumiem!</p>";

    postContainer.appendChild(samplePost);
});
