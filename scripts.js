document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'The Weekend', image: './img/artista-theweek.jpg' },
        { name: 'Imagine Dragons', image: './img/artista-imagine.jpg' },
        { name: 'The Neighbourhood', image: './img/artista-theneigh.jpeg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' }
    ];
    
    const albumsData = [
        { name: 'Starboy' , artist: 'The Weekend', image: './img/album-theweed.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)' , artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
        { name: 'HIT ME HARD AND SOFT' , artist: 'Billie Elish', image: './img/album-hit-me.jpg' },
        { name: 'Escândalo Íntimo' , artist: 'Luísa Sonza', image: './img/album-escandalo.jpg' },
        { name: 'Evolve' , artist: 'Imagine Dragons', image: './img/album-imagine-dragons.jpeg' },
        { name: 'Parachutes' , artist: 'Coldplay', image: './img/album-coldplay.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src = "${artist.image}" alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `

        artistGrid.appendChild(artistCard)
        
    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src = "${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `

        albumsGrid.appendChild(albumCard)
        
    })

} )




