document.addEventListener("DOMContentLoaded", function () {
    const postContainer = document.getElementById("post-container");

    const samplePost = document.createElement("article");
    samplePost.innerHTML = `
        <h3>Piedzīvojums Garmišā – kad kalni pārspēj gravitāciju</h3>
        <p><strong>Datums:</strong> 2025. gada februāris</p>
        <p>Pagājušajā nedēļā devos uz Garmiš-Partenkirheni Vācijā, lai izbaudītu ziemas brīnumus...</p>
    `;

    postContainer.appendChild(samplePost);
});
