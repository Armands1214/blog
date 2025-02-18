document.addEventListener("DOMContentLoaded", function () {
    const postContainer = document.getElementById("post-container");

    const samplePost = document.createElement("article");
    samplePost.innerHTML = `
        <h3>Piedzīvojums Garmišā – kad kalni pārspēj gravitāciju</h3>
        <p><strong>Datums:</strong> 2025. gada februāris</p>
        <p>Pagājušajā nedēļā devos uz Garmiš-Partenkirheni Vācijā, lai izbaudītu ziemas brīnumus. Pēc dažiem stundu kāpieniem uz Zugspitze, mani draugi un es nolēmām izmēģināt kaut ko jaunu – ragaviņas. 
        Viss sākās nevainīgi, līdz kāds no mums pazaudēja kontroli un, gluži kā filmās, sāka šļūkt lejā pa nogāzi, ieraujot pārējos sniega haosā.</p>
        <p>Es atrados sniega kaudzē, smējāmies, kamēr kalnu gidi mēģināja saprast, kas par troksni. Mēs bijām kā improvizēts kamanu sacensību čempionāts bez noteikumiem! Vakars beidzās ar karstu šokolādi un solījumu atgriezties nākamgad – bet ar mazliet vairāk plānošanas!</p>
    `;

    postContainer.appendChild(samplePost);
});

