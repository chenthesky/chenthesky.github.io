const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    fixed: true,
    audio: [
        {
        name: "MOM",
        artist: '是二智呀',
        url: 'http://music.163.com/song/media/outer/url?id=1433338551.mp3',
        cover: 'https://p2.music.126.net/xpLjGFEOzWFhs_-4iMsnNw==/109951165112858259.jpg?param=130y130',	
        },
        {
            name: "Take me Hand",
            artist: 'Cécile Corbel',
            url: 'https://nf-sycdn.kuwo.cn/161f4edbf309527a7284755fb8c31f1c/65b317df/resource/n2/31/83/2354335626.mp3',
            cover: 'https://img1.kuwo.cn/star/albumcover/500/21/99/3057700581.jpg',	
        },
        {
            name: "去年夏天",
            artist: '王大毛',
            url: 'https://sp-sycdn.kuwo.cn/888039be5cb37fde0b1d20a048af616f/65b5116d/resource/n3/42/78/300290220.mp3',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003eyd0o3lYmxM_1.jpg?max_age=2592000',	
        },
        {
            name: "世界那么大还是遇见你",
            artist: '程响',
            url: 'https://cl-sycdn.kuwo.cn/a658f936b3a8b4dc9521e81700d3092f/65b512e6/resource/n1/64/17/332703764.mp3',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003Ls5Jo4EFBIH_3.jpg?max_age=2592000',	
        },
        {
            name: "一个人挺好",
            artist: '孟颖',
            url: 'https://www.shiyinren.com/server/1/176186706.mp3',
            cover: 'https://imgessl.kugou.com/stdmusic/20191224/20191224170717617635.jpg',	
        }
    ]
});