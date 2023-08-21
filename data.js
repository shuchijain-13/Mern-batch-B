const data = [
    {
        id: 1,
        img: "hhttps://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/997px-Gucci_logo.svg.png",
        desc: "Gucci is an Italian luxury fashion house based in Florence, Italy. Its product lines include handbags, ready-to-wear, footwear, accessories, and home decoration",
        title: "Gucci"
    },
    {
        id: 2,
        img: "https://www.prada.com/etc/designs/pradanux/clientlib-bundle-assets/resources/images/logo-black.png",
        desc: "Prada is an Italian luxury fashion house. It specializes in leather handbags, travel accessories, shoes, ready-to-wear, and other fashion accessories ",
        title: "Prada"
    },
    {
        id: 3,
        img: "https://api-fashion.dior.com/couture/var/dior/storage/images/horizon/logo-dior/25334685-1-fre-FR/logo-dior_mobile_share.jpg",
        desc: "Dior has a strong online presence, with its products available for purchase through its official website and various e-commerce platforms.",
        title: "Dior"
    },
    {
        id: 4,
        img: "http://t3.gstatic.com/images?q=tbn:ANd9GcTGhlaQJRU3LYaDNvVHWP7ua9L9FaZCZHMbbz86HwWjFit2F5RU",
        desc: "It currently designs and distributes ready to wear, including trench coats, leather accessories, and footwear.",
        title: "Burberry"
    },
    {
        id: 5,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQx7EMtJzXd-dYJChrNQgbFh9Cp-8is0WhFFM6LuISIwRYcvqpj",
        desc: "One of the most expensive brands in the world, Versace was set up in 1978.",
        title: "Versace"
    },
    {
        id: 6,
        img: "https://www.dolcegabbana.com/on/demandware.static/-/Library-Sites-Dolcegabbana/default/dw75195c6f/DG-LOGO_400x112.jpg",
        desc: " The house specializes in ready-to-wear, handbags, accessories, and cosmetics and licenses its name and branding to Luxottica for eyewear.",
        title: "Dolce & Gabbana"
    },
    {
        id: 7,
        img: "https://1000logos.net/wp-content/uploads/2020/07/Balenciaga-logo.jpg",
        desc: "Balenciaga produces ready-to-wear footwear, handbags, and accessories, and licenses its name and branding to Coty for fragrances.",
        title: "Balenciaga"
    },
    {
        id: 8,
        img: "https://t3.gstatic.com/images?q=tbn:ANd9GcTD1rn4hc4teOn8xTymZkW0PJI5HfjtzEUgoCvTgU5bO8BaW4nt",
        desc: "Chanel in 1909 is famous for its luxury women's clothing – particularly its boucle wool suits, elegant perfumes ",
        title: "Chanel"
    },
    {
        id: 9,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png",
        desc: "India's most popular clothing brands.Zara has made a name for itself by emulating the marketing of luxury brands, and its Instagram feed is no exception.",
        title: "Zara"
    },
    {
        id: 10,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/800px-Louis_Vuitton_logo_and_wordmark.svg.png",
        desc: "Louis Vuitton is very well known for its use of leather, excellent tailoring of trench coats, ready to wear dresses, shoes, accessories, watches",
        title: "Louis Vuitton"
    },
    {
        id: 11,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CK_Calvin_Klein_logo.svg/1200px-CK_Calvin_Klein_logo.svg.png",
        desc: "Calvin Klein may be best known for its provocative branding and cool boxer shorts",
        title: "Calvin Klein"
    },
    {
        id: 12,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA",
        desc: "It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment",
        title: "Nike"
    },
    {
        id: 13,
        img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1490573842/ggfrunsgnffiuhcvqmt6.png",
        desc: "Levi Strauss & Co. is an American clothing company known worldwide for its Levi's brand of denim jeans.",
        title: "Levi's"
    },
    {
        id: 14,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Valentino_logo.svg/220px-Valentino_logo.svg.png",
        desc: "Valentino is a well-known Italian designer brand that has been around since 1962.",
        title: "Valentino"
    },
    {
        id: 15,
        img: "https://www2.hm.com/hm-logo.png",
        desc: "H&M comes to mind whenever we think of a budget-friendly, unique, and high-quality garment. H&M is a Swedish apparel retailer",
        title: "H&M"
    },
    {
        id: 16,
        img: "https://www.hermes.com/sites/all/themes/custom/hermes/img/hermes-logo.svg",
        desc: "It specializes in leather goods, lifestyle accessories, home furnishings, perfumery, jewelry, watches and ready-to-wear.",
        title: "Hermes"
    },
    {
        id: 17,
        img: "https://www.fendi.com/it-en/ck-static/fendi-logo.jpg",
        desc: "Fendi is an Italian luxury fashion house producing fur, ready-to-wear, leather goods, shoes, fragrances, eyewear, timepieces and accessories.",
        title: "Fendi"
    },
    {
        id: 18,
        img: "https://i.etsystatic.com/29238636/r/il/53b632/3945487162/il_fullxfull.3945487162_jlwi.jpg",
        desc: "Armani which designs, manufactures, distributes and retails haute couture, ready-to-wear, leather goods, shoes, accessories, and home interiors.",
        title: "Armani"
    },
    {
        id: 19,
        img: "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
        desc: "Adidas has grown to become one of the most well-known names in sportswear. The largest sportswear manufacturer in Europe and the second-largest in the world",
        title: "Adidas"
    },
    {
        id: 20,
        img: "https://t0.gstatic.com/images?q=tbn:ANd9GcQgkEeXMCZ284tAOe8Ixqn4HChp7C8R7qS_505KY7csGbI5Hiu9",
        desc: "Tommy Hilfiger is an American fashion brand founded by Tommy Hilfiger in the year 1985. The company specializes in apparel, footwear, fragrances",
        title: "Tommy Hilfiger"
    }


]
data.map((brands) => {
    console.log((`ID:${brands.id}`));
    console.log((`IMG:${brands.img}`));
    console.log((`Desc:${brands.desc}`));
    console.log((`Title:${brands.title}`));
    console.log("--------------------");

});

















