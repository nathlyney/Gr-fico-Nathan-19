const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart (Grafico, {
type: "pie",
data: {
    labels: [
        "Instagram",
        "WhatsApp",
        "Facebook",
        "WeChat",
        "TikTok",
        "DouYin",
        "Twitter",
        "Telegram",
        "FB",
        "Messenger",
        "LINE"
    ],
    datasets:[{
        data:[
            16.5,
            16.1,
            12.8,
            12.8,
            7.4,
            6.6,
            3.2,
            2.4,
            2.3,
            1.7
        ]
    }]
}
}
)
