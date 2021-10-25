// Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti. 
// Gli attributi minimi del modello di un post: id, contenuto, immagine, autore (nome, avatar), numero di likes, data creazione.

let posts = [
    {
        id: "1001",
        contenuto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus molestiae odio pariatur voluptatem a dolore dolorem similique perspiciatis nobis, quae cum, sapiente repudiandae provident possimus ducimus enim eligendi dolormagni",
        immagine: "https://i.picsum.photos/id/403/536/354.jpg?hmac=Cg78SPqGbiGuHfV34a5FcODRJKcDZ6BJu_xkudFYCrE",
        name: "Phil Mangione",
        avatar: "https://i.picsum.photos/id/705/536/354.jpg?hmac=xC8kX1EPq9v2dAITb83FeXpOyySrCYFY6JOEZ9E5qY0",
        dataCreazione: "4 mesi fa",
        howManyLikes: 80
    },
    {
        id: "1002",
        contenuto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus molestiae odio pariatur voluptatem a dolore dolorem similique perspiciatis nobis, quae cum, sapiente repudiandae provident possimus ducimus enim eligendi dolormagni",
        immagine: "https://i.picsum.photos/id/195/536/354.jpg?hmac=8JxyDR_BWRmceDkbJHlE2tw93E2AQ96jI-Qpv40-ZXc",
        name: "Travis George",
        avatar: "https://i.picsum.photos/id/406/536/354.jpg?hmac=eXfLU8DQZA5JkwIPrZ3hvXFwQ7-hIDT4-GzBRfpH2y8",
        dataCreazione: "2 mesi fa",
        howManyLikes: "70"
    },
    {
        id: "1003",
        contenuto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus molestiae odio pariatur voluptatem a dolore dolorem similique perspiciatis nobis, quae cum, sapiente repudiandae provident possimus ducimus enim eligendi dolormagni",
        immagine: "https://i.picsum.photos/id/594/536/354.jpg?hmac=51jzctSPRfmg0VV_LXPN_3Wgin9y6XMUA0NsnB7Yegw",
        name: "Roman Morris",
        avatar: "https://i.picsum.photos/id/500/536/354.jpg?hmac=aKRIiVLWoa1f5LnnykiaUzTOPvhxK2WuaiA-F2m2LO0",
        dataCreazione: "1 mesi fa",
        howManyLikes: "10"
    },
]


let like = ["1001", "1002"]

for (let index = 0; index < posts.length; index++) {
    const singlePost = posts[index];

    const element = `
    <div class="card p-3 mb-3 bg-white">
    <div class="intestazione d-flex">
        <img
            src="${singlePost.avatar}"
            alt="" class="rounded-circle me-4">
        <div class="d-flex flex-column
            justify-content-center">
            <p class="author mb-0"><strong>${singlePost.name}</strong></p>
            <p class="date mb-0">${singlePost.dataCreazione}</p>
        </div>
    </div>
    <p class="card-text pt-3">${singlePost.contenuto}</p>
    <img
        src="${singlePost.immagine}"
        class="card-img-top pb-3" alt="">
    <div class="card-body d-flex align-items-center">
        <div id="btn-like" class="col-6 text-center">
            <span><i class="fas fa-thumbs-up"></i>
                <a class="text-like" href="">Mi Piace</a></span>
        </div>
        <div class="col-6 text-center">
            <span>Piace a <strong>${singlePost.howManyLikes}</strong> persone</span>
        </div>
    </div>
</div>`
    document.querySelector(".col-4").insertAdjacentHTML("beforeend", element)

    let liked = ""

    if (liked.includes(singlePost.id)) {
        document.querySelector(".fa-thumbs-up").style.color = "green";
        document.querySelector(".text-like").style.color = "green";
    }


}

