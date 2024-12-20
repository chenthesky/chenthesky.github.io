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
        url: 'https://music.163.com/song/media/outer/url?id=1433338551.mp3',
        cover: 'https://p2.music.126.net/xpLjGFEOzWFhs_-4iMsnNw==/109951165112858259.jpg?param=130y130',	
        },
        {
            name: "Take me Hand",
            artist: 'Cécile Corbel',
            url: 'https://nf-sycdn.kuwo.cn/ed71a65635c5bd2180e7b6bb12b2aff2/66e01887/resource/n2/31/83/2354335626.mp3?bitrate$128&from=vip',
            cover: 'https://img1.kuwo.cn/star/albumcover/500/21/99/3057700581.jpg',	
        },
        {
            name: "去年夏天",
            artist: '王大毛',
            url: 'https://sp-sycdn.kuwo.cn/8d5041bc845eb4e632ec311d0b51b266/66e023c2/resource/n3/42/78/300290220.mp3?bitrate$128&from=vip',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003eyd0o3lYmxM_1.jpg?max_age=2592000',	
        },
        {
            name: "世界那么大还是遇见你",
            artist: '程响',
            url: 'https://cl-sycdn.kuwo.cn/e7dfdc3e1a27459e3e784486c0dd4af8/66e01ad0/resource/n1/64/17/332703764.mp3?bitrate$128&from=vip',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003Ls5Jo4EFBIH_3.jpg?max_age=2592000',	
        },
        {
            name: "一个人挺好",
            artist: '孟颖',
            url: 'https://eb-sycdn.kuwo.cn/6b5d9dc14cdf7ee4b23ec496bbde7a03/66e02b82/resource/n3/92/87/2582455809.mp3?bitrate$128&from=vip',  //https://eb-sycdn.kuwo.cn/ee8768772362e44f99aebb503604fee5/65ce146b/resource/n3/92/87/2582455809.mp3?from=vip
            cover: 'https://imgessl.kugou.com/stdmusic/20191224/20191224170717617635.jpg',	
        }
    ]
});