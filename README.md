# Price Searcher Api
Search price of product on hepsiburada.com and trendyol.com

## Run http server
```bash
deno task start	
```
## Run tests
```bash
deno task test
```
## Example Post Request Body
```json
{
	"search" : "iphone 13"
}	
```
## Expected response
```json
[
    {
        "provider": "Trendyol",
        "products": [
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "22.191 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-128gb-yildiz-isigi-cep-telefonu-apple-turkiye-garantili-p-150059024?boutiqueId=594867&merchantId=968",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "21.999 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-128gb-gece-yarisi-cep-telefonu-apple-turkiye-garantili-p-150058735?boutiqueId=61&merchantId=122689",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "22.320 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-128gb-kirmizi-cep-telefonu-apple-turkiye-garantili-p-150059333?boutiqueId=583350&merchantId=229241",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "11.203,96 TL",
                "url": "https://www.trendyol.com/apple/iphone-se-64gb-aksesuarsiz-kutu-siyah-cep-telefonu-apple-turkiye-garantili-p-65097529?boutiqueId=61&merchantId=137506",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "21.969 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-128gb-mavi-cep-telefonu-apple-turkiye-garantili-p-150059501?boutiqueId=61&merchantId=109449",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "28.848 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-pro-128gb-kursun-gri-cep-telefonu-apple-turkiye-garantili-p-155109396?boutiqueId=583350&merchantId=107676",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "19.300,74 TL",
                "url": "https://www.trendyol.com/apple/iphone-12-64gb-aksesuarsiz-kutu-beyaz-cep-telefonu-apple-turkiye-garantili-p-54706466?boutiqueId=61&merchantId=190810",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "23.702 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-256gb-pembe-cep-telefonu-apple-turkiye-garantili-p-153303313?boutiqueId=61&merchantId=107676",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "15.490 TL",
                "url": "https://www.trendyol.com/apple/iphone-11-128gb-aksesuarsiz-kutu-mor-cep-telefonu-apple-turkiye-garantili-p-64074658?boutiqueId=61&merchantId=115178",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "14.249 TL",
                "url": "https://www.trendyol.com/apple/iphone-11-64gb-aksesuarsiz-kutu-siyah-cep-telefonu-apple-turkiye-garantili-p-64074791?boutiqueId=61&merchantId=179385",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "14.289 TL",
                "url": "https://www.trendyol.com/apple/iphone-11-aksesuarsiz-kutu-64gb-mor-cep-telefonu-apple-turkiye-garantili-p-64074799?boutiqueId=61&merchantId=106203",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "15.180,29 TL",
                "url": "https://www.trendyol.com/apple/iphone-11-128gb-aksesuarsiz-kutu-siyah-cep-telefonu-apple-turkiye-garantili-p-64074797?boutiqueId=583350&merchantId=355135",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "15.294 TL",
                "url": "https://www.trendyol.com/apple/iphone-11-128gb-aksesuarsiz-kutu-beyaz-cep-telefonu-apple-turkiye-garantili-p-64074794?boutiqueId=583350&merchantId=355135",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "29.157,66 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-pro-128gb-mavi-cep-telefonu-apple-turkiye-garantili-p-156390432?boutiqueId=61&merchantId=107676",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "34.998 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-pro-max-256-gb-sierra-mavisi-cep-telefonu-apple-turkiye-garantili-p-212092229?boutiqueId=61&merchantId=107676",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "21.853,86 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-128gb-pembe-cep-telefonu-apple-turkiye-garantili-p-150059181?boutiqueId=61&merchantId=355135",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "14.343 TL",
                "url": "https://www.trendyol.com/apple/iphone-11-64gb-aksesuarsiz-kutu-yesil-cep-telefonu-apple-turkiye-garantili-p-65149621?boutiqueId=594867&merchantId=968",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "15.399 TL",
                "url": "https://www.trendyol.com/apple/iphone-11-128gb-aksesuarsiz-kutu-kirmizi-cep-telefonu-apple-turkiye-garantili-p-64074786?boutiqueId=61&merchantId=633583",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "14.281,08 TL",
                "url": "https://www.trendyol.com/apple/iphone-11-64gb-aksesuarsiz-kutu-kirmizi-cep-telefonu-apple-turkiye-garantili-p-65182164?boutiqueId=583350&merchantId=355135",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "23.244 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-256gb-mavi-cep-telefonu-apple-turkiye-garantili-p-153598278?boutiqueId=583350&merchantId=355135",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "15.676,54 TL",
                "url": "https://www.trendyol.com/apple/iphone-11-128gb-aksesuarsiz-kutu-yesil-cep-telefonu-apple-turkiye-garantili-p-65150195?boutiqueId=583350&merchantId=109358",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "33.075 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-pro-max-128-gb-yesil-cep-telefonu-apple-turkiye-garantili-p-266189456?boutiqueId=61&merchantId=106203",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "28.924 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-pro-128gb-gumus-cep-telefonu-apple-turkiye-garantili-p-156433320?boutiqueId=61&merchantId=107676",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            },
            {
                "name": "iPhone 13 128GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
                "price": "31.937,66 TL",
                "url": "https://www.trendyol.com/apple/iphone-13-pro-max-128gb-kursun-gri-cep-telefonu-apple-turkiye-garantili-p-153303051?boutiqueId=61&merchantId=243893",
                "image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
            }
        ]
    },
    {
        "provider": "Hepsiburada",
        "products": [
            {
                "name": "iPhone 13 256 GB",
                "price": "23.862,00 TL",
                "url": "https://www.hepsiburada.com/iphone-13-256-gb-p-HBCV00000ODHWC",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "22.284,54 TL",
                "url": "https://www.hepsiburada.com/iphone-13-128-gb-p-HBCV00000ODHHF",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "26.999,00 TL",
                "url": "https://www.hepsiburada.com/iphone-13-512-gb-p-HBCV00000ODHWX",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "29.316,70 TL",
                "url": "https://www.hepsiburada.com/iphone-13-pro-128-gb-p-HBCV00000ODIGX",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "31.039,03 TL",
                "url": "https://www.hepsiburada.com/iphone-13-pro-256-gb-p-HBCV00000ODIH7",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "34.599,00 TL",
                "url": "https://www.hepsiburada.com/iphone-13-pro-512-gb-p-HBCV00000ODIHU",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "37.999,00 TL",
                "url": "https://www.hepsiburada.com/iphone-13-pro-1-tb-p-HBCV00000OM9P3",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "32.599,00 TL",
                "url": "https://www.hepsiburada.com/iphone-13-pro-max-128-gb-p-HBCV00000ODIWI",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "34.199,00 TL",
                "url": "https://www.hepsiburada.com/iphone-13-pro-max-256-gb-p-HBCV00000ODIX7",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "40.298,99 TL",
                "url": "https://www.hepsiburada.com/iphone-13-pro-max-1-tb-p-HBCV00000OM9OV",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "37.587,50 TL",
                "url": "https://www.hepsiburada.com/iphone-13-pro-max-512-gb-p-HBCV00000ODIY0",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "21.499,00 TL",
                "url": "https://www.hepsiburada.com/iphone-13-mini-256-gb-p-HBCV00000ODHYL",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "20.999,00 TL",
                "url": "https://www.hepsiburada.com/iphone-13-mini-128-gb-p-HBCV00000ODHXQ",
                "image": "https://www.hepsiburada.comundefined"
            },
            {
                "name": "iPhone 13 256 GB",
                "price": "23.279,01 TL",
                "url": "https://www.hepsiburada.com/iphone-13-mini-512-gb-p-HBCV00000ODIGB",
                "image": "https://www.hepsiburada.comundefined"
            }
        ]
    }
]	
```
