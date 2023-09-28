const data = [
  {
    nama: "Kacang Kedelai",
    porsi: "100 gr",
    kalori: 471,
    img: "https://img.freepik.com/free-photo/soybean-sauce-soybean-wooden-floor-soy-sauce-food-nutrition-concept_1150-26321.jpg?w=740&t=st=1695922920~exp=1695923520~hmac=c178afcd8844ee0f0deae3e97ce7c98c6f9bf72086384b9695fedfb50566c570",
  },
  {
    nama: "Dada Ayam",
    porsi: "100 gr",
    kalori: 165,
    img: "https://img.freepik.com/free-photo/raw-board-breast-cutting-fresh_1203-5517.jpg?w=740&t=st=1695923194~exp=1695923794~hmac=e168daf2b73fdb1f7911b1c576ce8a808ab1df3108adaafc44921f5de78cfaad",
  },
  { nama: "Susu", porsi: "200 ml", kalori: 133, img: "https://img.freepik.com/free-photo/pouring-milk-out-glass_23-2148211452.jpg?w=740&t=st=1695923243~exp=1695923843~hmac=66663a9fc84a565da90ade8c072c1003e01b8da2ce7285416a41be9f4198d56c" },
  { nama: "Daging Sapi", porsi: "100 g", kalori: 288, img: "https://img.freepik.com/free-photo/raw-meat_144627-33845.jpg?w=740&t=st=1695923282~exp=1695923882~hmac=633a26dade838ab6db07265a437705777415721c942ef3a950ee181eef5062b4" },
  { nama: "Bubur Kacang Ijo", porsi: "120 g", kalori: 137, img: "https://www.sasa.co.id/medias/page_medias/Screen_Shot_2021-12-01_at_17_50_06.png" },
  {
    nama: "Brokoli",
    porsi: "100 g",
    kalori: 34,
    img: "https://img.freepik.com/free-photo/top-viewbroccoli-black-pan-pink-cloth-black-stone-surface_176474-503.jpg?w=740&t=st=1695923391~exp=1695923991~hmac=1b5cd8f5a3c492d1a8f31b8aff17edc53448ef7bd4158030c44db168f9c6921c",
  },
  {
    nama: "Telur",
    porsi: "100 g",
    kalori: 147,
    img: "https://img.freepik.com/free-photo/three-fresh-organic-raw-eggs-isolated-white-surface_114579-43677.jpg?w=740&t=st=1695923414~exp=1695924014~hmac=408b414004ee95e57bf338e2202a2d9a27e31ba2b2c45c9d3eb36723879c22b2",
  },
  {
    nama: "Sayur Kacang Buncis",
    porsi: "100 g",
    kalori: 35,
    img: "https://cdn0-production-images-kly.akamaized.net/KIDeGKT1Jl4Z9CLmZx0Gv7ndYoQ=/964x0:2932x2625/469x625/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2988556/original/078474000_1575619166-shutterstock_1520543147.jpg",
  },
  {
    nama: "Oatmeal",
    porsi: "1 cup",
    kalori: 300,
    img: "https://www.eatingwell.com/thmb/-UULlbERQCfJRQTnb5bwjoo9-UQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-hero-05-060861b81cb641cea272e068aba093fd.jpg",
  },
  {
    nama: "Nasi Merah",
    porsi: "45 g",
    kalori: 150,
    img: "https://img-cdn.medkomtek.com/sxBStDUlxOOVR54D6IN3pT6lPFE=/0x0/smart/filters:quality(100):strip_icc():format(webp)/article/6Z5hVUqEuI7sDz1yj2BCj/original/051009700_1597227596-Nasi-Merah-shutterstock_667742839.jpg",
  },
  { nama: "Kentang", porsi: "1 medium", kalori: 177, img: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/03/30033712/Tak-Hanya-Meningkatkan-Fungsi-Otak-Ini-11-Manfaat-kentang-untuk-Kesehatan.jpg" },
  { nama: "Seafood Salad", porsi: "1 cup", kalori: 318, img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/E92697DB-4461-4C5A-BAA4-055E25CB63E1/Derivates/B8C6586A-E0AF-4BE1-8F40-08AFF54EE9BB.jpg" },
  { nama: "Gado-Gado", porsi: "1 cup", kalori: 318, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Gado_gado_jakarta.jpg/800px-Gado_gado_jakarta.jpg" },
  { nama: "Chicken Burrito Bowl", porsi: "1 bowl", kalori: 573, img: "https://healthyfitnessmeals.com/wp-content/uploads/2018/08/Grilled-chicken-burrito-bowls-10.jpg" },
  { nama: "Soto Ayam", porsi: "1 bowl", kalori: 312, img: "https://assets.unileversolutions.com/recipes-v2/242798.jpg" },
  {
    nama: "Nasi Goreng",
    porsi: "350 g",
    kalori: 433,
    img: "https://cdn1-production-images-kly.akamaized.net/EjwV7j3Y4JrlqUFuavke4NtRWtM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg",
  },
  { nama: "Capcay", porsi: "1 plate", kalori: 207, img: "https://asset.kompas.com/crops/2sjLUUCqOhsi36M0pxYbbqz7vtM=/100x67:900x600/750x500/data/photo/2021/01/01/5fee5925f248d.jpg" },
  {
    nama: "Salad Buah",
    porsi: "1 cup",
    kalori: 108,
    img: "https://cdn0-production-images-kly.akamaized.net/L7gkS7iJEoy8HW92TrelBnHkh70=/0x351:800x802/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3969588/original/033281100_1647842147-shutterstock_1961071081__1_.jpg",
  },
];

export default data;
