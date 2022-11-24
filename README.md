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
		"provider": "Amazon",
		"products": [
			{
				"name": "Apple iPhone 13 (128 GB) - Gece Yarısı",
				"price": "25.623,35 TL",
				"url": "https://www.amazon.com.tr/Yeni-Apple-iPhone-128-GB-Gece-Yar%C4%B1s%C4%B1/dp/B09G9RQTP3/ref=sr_1_5?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-5",
				"image": "https://m.media-amazon.com/images/I/61Z2+N8dQKL._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 12 (128 GB) - Siyah",
				"price": "23.475,49 TL",
				"url": "https://www.amazon.com.tr/Apple-Kulakl%C4%B1k-Adapt%C3%B6r-T%C3%BCrkiye-Garantili/dp/B08NVTT7ZV/ref=sr_1_6?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-6",
				"image": "https://m.media-amazon.com/images/I/71eTwPQolnL._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 14 (128 GB) - (PRODUCT) RED",
				"price": "29.969,00 TL",
				"url": "https://www.amazon.com.tr/Apple-iPhone-14-128-GB/dp/B0BDJ7LSTT/ref=sr_1_7?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-7",
				"image": "https://m.media-amazon.com/images/I/611mRs-imxL._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 13 mini (256 GB) - Pembe",
				"price": "25.964,01 TL",
				"url": "https://www.amazon.com.tr/Yeni-Apple-iPhone-mini-256-GB/dp/B09G9PRPZ9/ref=sr_1_8?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-8",
				"image": "https://m.media-amazon.com/images/I/61vWI7-ODhL._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 13 Pro (512 GB) - Grafit",
				"price": "39.468,57 TL",
				"url": "https://www.amazon.com.tr/Yeni-Apple-iPhone-Pro-512-GB/dp/B09G9RCWL3/ref=sr_1_9?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-9",
				"image": "https://m.media-amazon.com/images/I/61WXuQ0Y17L._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 14 Plus (128 GB) - (PRODUCT) RED",
				"price": "32.566,40 TL",
				"url": "https://www.amazon.com.tr/Apple-iPhone-14-Plus-128/dp/B0BDJ3FJ5M/ref=sr_1_10?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-10",
				"image": "https://m.media-amazon.com/images/I/71pL8YGcoyL._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 13 Pro Max (1 TB) - Sierra Mavisi",
				"price": "45.827,55 TL",
				"url": "https://www.amazon.com.tr/Yeni-Apple-iPhone-Pro-Sierra-Mavisi/dp/B09G9SXPT8/ref=sr_1_11?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-11",
				"image": "https://m.media-amazon.com/images/I/61yXH4ISYNL._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 12 mini, 128 GB, Mor, Kulaklık ve Adaptör Hariç (Apple Türkiye Garantili)",
				"price": "21.268,70 TL",
				"url": "https://www.amazon.com.tr/iPhone-12-Mini-128-Purple/dp/B09BJJ6DDH/ref=sr_1_12?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-12",
				"image": "https://m.media-amazon.com/images/I/71R1w6Y9kXS._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 14 Pro (1 TB) - Uzay Siyahı",
				"price": "51.017,71 TL",
				"url": "https://www.amazon.com.tr/Apple-iPhone-14-Pro-TB/dp/B0BDHWZ9R6/ref=sr_1_13?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-13",
				"image": "https://m.media-amazon.com/images/I/61XO4bORHUL._AC_UL320_.jpg"
			},
			{
				"name": "2022 Apple iPhone SE (128 GB) - Yıldız Işığı (3. nesil)",
				"price": "16.885,16 TL",
				"url": "https://www.amazon.com.tr/2022-Apple-iPhone-128-Y%C4%B1ld%C4%B1z-I%C5%9F%C4%B1%C4%9F%C4%B1/dp/B09V45QW34/ref=sr_1_14?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-14",
				"image": "https://m.media-amazon.com/images/I/61whX-AniBL._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 11 (128 GB) - Beyaz",
				"price": "16.399,00 TL",
				"url": "https://www.amazon.com.tr/Apple-Telefon-Kulakl%C4%B1k-Adapt%C3%B6r-Garantili/dp/B08PQ1278V/ref=sr_1_15?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-15",
				"image": "https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 14 / iPhone 13 Pro/iPhone 13 İçin Uruchi Ekran Koruyucu, HD Tam Kapsamlı Ekran Koruyucu Cam Filmi (6.1 İnç, Siyah)",
				"price": "42,50 TL",
				"url": "https://www.amazon.com.tr/Apple-iPhone-Uruchi-Koruyucu-Kapsaml%C4%B1/dp/B09TKJYBJ7/ref=sr_1_16?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-16",
				"image": "https://m.media-amazon.com/images/I/51PGib1hcSL._AC_UL320_.jpg"
			},
			{
				"name": "TAURI 5'i 1 arada Defender iPhone 13 Kılıfı 6,1 İnç için Tasarlandı, 2 Paket Temperli Cam Ekran Koruyucu + 2 Paket Kamera Lens Koruyucu [Askeri Sınıf Koruma] Darbeye Dayanıklı İnce - Yeşil",
				"price": "289,49 TL",
				"url": "https://www.amazon.com.tr/TAURI-iPhone-13-Tasarland%C4%B1-Dayan%C4%B1kl%C4%B1/dp/B09XJX91V1/ref=sr_1_17?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-17",
				"image": "https://m.media-amazon.com/images/I/61X6lntIzOL._AC_UL320_.jpg"
			},
			{
				"name": "İphone 13 (6.1) Renkli Tuşlu Business Kamera Korumalı TPU Kılıf (SİYAH)",
				"price": "49,90 TL",
				"url": "https://www.amazon.com.tr/%C4%B0phone-Renkli-Business-Kamera-Korumal%C4%B1/dp/B09V35DJZS/ref=sr_1_18?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-18",
				"image": "https://m.media-amazon.com/images/I/513qW7XkaCL._AC_UL320_.jpg"
			},
			{
				"name": "iPhone 13 Kılıf İnce Sıvı Silikon 3 Katmanlı Tam Kaplamalı Yumuşak Jel Kauçuk Kılıf Kapak Yeşil",
				"price": "49,90 TL",
				"url": "https://www.amazon.com.tr/iPhone-Silikon-Katmanl%C4%B1-Kaplamal%C4%B1-Yumu%C5%9Fak/dp/B0BC9SMFCK/ref=sr_1_19?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-19",
				"image": "https://m.media-amazon.com/images/I/61kx41bD5IL._AC_UL320_.jpg"
			},
			{
				"name": "BABİLDEN Apple Iphone için Tasarlanmış KOLAY KURULUM Uçtan Kenara Kapsama Tam Koruma Dayanıklı Temperli Cam (iPhone 13)",
				"price": "89,90 TL",
				"url": "https://www.amazon.com.tr/BAB%C4%B0LDEN-Tasarlanm%C4%B1%C5%9F-KURULUM-Dayan%C4%B1kl%C4%B1-Temperli/dp/B0B9T3PLHM/ref=sr_1_20?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-20",
				"image": "https://m.media-amazon.com/images/I/51M2SXrLO2L._AC_UL320_.jpg"
			},
			{
				"name": "BABİLDEN Apple Iphone 13 için Tasarlanmış Uçtan Kenara Kapsama Tam Koruma Dayanıklı Temperli Cam",
				"price": "49,90 TL",
				"url": "https://www.amazon.com.tr/BAB%C4%B0LDEN-Tasarlanm%C4%B1%C5%9F-Kapsama-Dayan%C4%B1kl%C4%B1-Temperli/dp/B09ZYRJFT5/ref=sr_1_21?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-21",
				"image": "https://m.media-amazon.com/images/I/61wJ-PLrRxL._AC_UL320_.jpg"
			},
			{
				"name": "JETech Tam Kaplayan Ekran Koruyucu için iPhone 13/13 Pro 6,1 Inç, Temperli Cam Folyo ile Kolay Kurulum Aleti, Kılıf-Dostu, HD Şeffaf, 3 Paket",
				"price": "99,00 TL",
				"url": "https://www.amazon.com.tr/JETech-Kaplayan-Koruyucu-Temperli-K%C4%B1l%C4%B1f-Dostu/dp/B0B2WBT9H4/ref=sr_1_22?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-22",
				"image": "https://m.media-amazon.com/images/I/71l3KDT5zRL._AC_UL320_.jpg"
			},
			{
				"name": "JETech Ekran Koruyucu için iPhone 13 6,1 Inç ile Kamera Lens Koruyucu (iPhone 13 Pro için Değil), Kolay Kurulum Aleti, Temperli Cam Folyo, 2 Paket Her",
				"price": "109,00 TL",
				"url": "https://www.amazon.com.tr/JETech-Koruyucu-iPhone-Kurulum-Temperli/dp/B09NR31XRP/ref=sr_1_23?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-23",
				"image": "https://m.media-amazon.com/images/I/61ux2N994bL._AC_UL320_.jpg"
			},
			{
				"name": "iPhone 13 İçin Uyumlu Darbe Koruyucu Kamera Korumalı Prm Smooth Window Lila",
				"price": "42,55 TL",
				"url": "https://www.amazon.com.tr/iPhone-Uyumlu-Koruyucu-Kamera-Korumal%C4%B1/dp/B09NL4RF6K/ref=sr_1_24?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-24",
				"image": "https://m.media-amazon.com/images/I/31IqIf4Nk2L._AC_UL320_.jpg"
			},
			{
				"name": "JETech Ekran Koruyucu iPhone 13/13 Pro 6,1 inç ile uyumludur, Temperli Cam Film, 3'lü Paket",
				"price": "99,00 TL",
				"url": "https://www.amazon.com.tr/JETech-iPhone-Temperli-Uyumlu-Koruyucu/dp/B09BNL9TGB/ref=sr_1_25?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-25",
				"image": "https://m.media-amazon.com/images/I/61pT9yMGhQL._AC_UL320_.jpg"
			},
			{
				"name": "Babilden Apple iPhone 13 Privacy Hayalet Cam Tam Ekran Temperli Koruyucu",
				"price": "49,90 TL",
				"url": "https://www.amazon.com.tr/Babilden-iPhone-13-Privacy-Temperli/dp/B09ZVLWQ8Q/ref=sr_1_26?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-26",
				"image": "https://m.media-amazon.com/images/I/61kx2uRDMdL._AC_UL320_.jpg"
			},
			{
				"name": "iPhone 13 / iPhone 13 Mini İçin Kamera Lens Koruyucu Kırılmaz Cam 9H Premium Temperli Apple iPhone 13 ve iPhone 13 Mini İçin Kamera Koruyucu (iPhone 13/13 Mini Uyumlu) (İthalatçı Garantili)",
				"price": "44,00 TL",
				"url": "https://www.amazon.com.tr/Koruyucu-K%C4%B1r%C4%B1lmaz-Temperli-%C4%B0thalat%C3%A7%C4%B1-Garantili/dp/B09ZPR9GKS/ref=sr_1_27?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-27",
				"image": "https://m.media-amazon.com/images/I/715O2AOK5GL._AC_UL320_.jpg"
			},
			{
				"name": "Apple iPhone 13 Kılıf 6.1 ile Uyumlu, Uruchi İnce Sıvı Silikon 3 Katmanlı Tam Kaplamalı Yumuşak Jel Kauçuk Kılıf Kapak (Lila, 6.1 inç)",
				"price": "39,90 TL",
				"url": "https://www.amazon.com.tr/iPhone-Silikon-Katmanl%C4%B1-Kaplamal%C4%B1-Yumu%C5%9Fak/dp/B09Z31VMKN/ref=sr_1_28?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-28",
				"image": "https://m.media-amazon.com/images/I/51nNbYECcgL._AC_UL320_.jpg"
			},
			{
				"name": "TAURI 5'i 1 arada iPhone 13 Kılıfı ve Sceen Koruyucu, 1 telefon kılıfı + 2 Ekran Koruyucu + 2 Kamera Koruyucu [Askeri Sınıf Koruma] Sararmaya Karşı Darbeye Dayanıklı 360 Koruyucu Kılıf İnce - Şeffaf",
				"price": "214,68 TL",
				"url": "https://www.amazon.com.tr/TAURI-iPhone-13-Sararmaya-Dayan%C4%B1kl%C4%B1/dp/B09C5RF4VN/ref=sr_1_29?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-29",
				"image": "https://m.media-amazon.com/images/I/717YD7shwTL._AC_UL320_.jpg"
			},
			{
				"name": "iPhone 13 Şeffaf Kılıf, Kamera Korumalı 13 (6.1'') Şeffaf Silikon Kılıf, Kamera Koruyuculu iPhone 13 Kılıfı",
				"price": "39,90 TL",
				"url": "https://www.amazon.com.tr/iPhone-%C5%9Eeffaf-Korumal%C4%B1-Silikon-Koruyuculu/dp/B09RHMW3PB/ref=sr_1_30?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-30",
				"image": "https://m.media-amazon.com/images/I/51A36o3JOyL._AC_UL320_.jpg"
			},
			{
				"name": "Reeder P13 Blue Plus 2022 4 GB RAM, 32 GB Hafıza, 4780 mAh Batarya, 6.5 İnç Ekran, 8 MP Kamera, Akıllı Cep Telefonu, Siyah (Reeder Türkiye Garantili)",
				"price": "1.879,00 TL",
				"url": "https://www.amazon.com.tr/Reeder-Blue-Siyah-T%C3%BCrkiye-Garantili/dp/B09V58J49Q/ref=sr_1_31?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-31",
				"image": "https://m.media-amazon.com/images/I/61Iu3inUe3L._AC_UL320_.jpg"
			},
			{
				"name": "General Mobile GM21 Plus New Edition Akıllı Telefon, 64 GB, 4 GB RAM, 6.53\" inç (Koyu Gri)",
				"price": "3.393,60 TL",
				"url": "https://www.amazon.com.tr/General-Mobile-GM21-Plus-Koyu/dp/B09W1MTYC5/ref=sr_1_32?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-32",
				"image": "https://m.media-amazon.com/images/I/618ldxbv9TL._AC_UL320_.jpg"
			},
			{
				"name": "JETech Silikon Kılıf iPhone 13 6.1 inç ile Uyumlu, İpeksi-Yumuşak Dokunuşlu Tam Gövde Koruyucu Kılıf, Mikrofiber Astarlı Darbeye Dayanıklı Kapak (Siyah)",
				"price": "89,00 TL",
				"url": "https://www.amazon.com.tr/JETech-%C4%B0peksi-Yumu%C5%9Fak-Dokunu%C5%9Flu-Mikrofiber-Dayan%C4%B1kl%C4%B1/dp/B09BVHH3F6/ref=sr_1_33?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-33",
				"image": "https://m.media-amazon.com/images/I/51RdsD4WKbL._AC_UL320_.jpg"
			},
			{
				"name": "Reeder P13 Blue Max Lite 2022 2 GB RAM, 32 GB Hafıza, 3950 mAh Batarya, 6.5 İnç Ekran, 8 MP Kamera, Akıllı Cep Telefonu, Yeşil (Reeder Türkiye Garantili)",
				"price": "1.847,15 TL",
				"url": "https://www.amazon.com.tr/Reeder-Blue-Ye%C5%9Fil-T%C3%BCrkiye-Garantili/dp/B09V57SM99/ref=sr_1_34?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-34",
				"image": "https://m.media-amazon.com/images/I/71AaVy5XmyL._AC_UL320_.jpg"
			},
			{
				"name": "Babilden Apple İPhone 13 Kamera Korumalı Şeffaf Silikon Kılıf",
				"price": "35,90 TL",
				"url": "https://www.amazon.com.tr/Babilden-%C4%B0Phone-13-Korumal%C4%B1-Silikon/dp/B0B5LWQ7HR/ref=sr_1_35?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-35",
				"image": "https://m.media-amazon.com/images/I/71+4hAueApL._AC_UL320_.jpg"
			},
			{
				"name": "Gahwa Sıvı Silikon Kılıf için iPhone 13 (6,1 inç), Tam Gövde Koruması (Ekran ve Kamera Koruması), Yumuşak Mikrofiber Astar Case, Mat Kaplama İnce TPU Kılıf - Koyu Yeşil",
				"price": "79,99 TL",
				"url": "https://www.amazon.com.tr/Gahwa-silikon-%C3%A7epe%C3%A7evre-telefonu-koruyucu/dp/B09JG3BQJ2/ref=sr_1_36?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-36",
				"image": "https://m.media-amazon.com/images/I/61ZhdsxieVL._AC_UL320_.jpg"
			},
			{
				"name": "İPHONE 13 UYUMLU KAMERA LENS KORUYUCU TEMPERLİ CAM,Yüksek Teknoloji ile Güçlendirilmiş,Esnek Tam Kaplayan Şeffaf Kavisli Parmak İzi ve Toz Tutmayan Temperli Kırılmaz Cam Kamera Koruyucu",
				"price": "29,90 TL",
				"url": "https://www.amazon.com.tr/KORUYUCU-TEMPERL%C4%B0-Teknoloji-G%C3%BC%C3%A7lendirilmi%C5%9F-Kaplayan/dp/B0B4F1Q4JB/ref=sr_1_37?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-37",
				"image": "https://m.media-amazon.com/images/I/11N4Muc7yfL._AC_UL320_.jpg"
			},
			{
				"name": "iPhone 13/13 Pro Ekran Koruyucu, 13/13 Pro 6.1'' Temperli Ekran Koruyucu Cam",
				"price": "34,95 TL",
				"url": "https://www.amazon.com.tr/iPhone-Pro-Ekran-Koruyucu-Temperli/dp/B09RWR7CSJ/ref=sr_1_38?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-38",
				"image": "https://m.media-amazon.com/images/I/41bVGpLS+NL._AC_UL320_.jpg"
			},
			{
				"name": "Coverzone iPhone 13 İçin Uyumlu Darbe Koruyucu Kamera Korumalı Prm Smooth Window Siyah",
				"price": "42,55 TL",
				"url": "https://www.amazon.com.tr/Coverzone-iPhone-Uyumlu-Koruyucu-Korumal%C4%B1/dp/B09NJNQMP9/ref=sr_1_39?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-39",
				"image": "https://m.media-amazon.com/images/I/31CsDvf7vmL._AC_UL320_.jpg"
			},
			{
				"name": "Samsung Galaxy M13 128 GB | 4 GB RAM Cep Telefonu, Bakır (Samsung Türkiye Garantili)",
				"price": "5.074,92 TL",
				"url": "https://www.amazon.com.tr/Samsung-Galaxy-Telefonu-T%C3%BCrkiye-Garantili/dp/B0B5ZXMPTF/ref=sr_1_41?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-41",
				"image": "https://m.media-amazon.com/images/I/71cEH8+lgsL._AC_UL320_.jpg"
			},
			{
				"name": "TOCOL 1+2+2 Paket iPhone 13 Kılıfı 6,1 İnç ile Uyumlu, 2 Paket Ekran Koruyucu ve 2 Paket Kamera lens Koruyucu, Ultra İnce Darbeye Dayanıklı Sert Manyetik Kapa - Gece Mavisi",
				"price": "304,07 TL",
				"url": "https://www.amazon.com.tr/TOCOL-iPhone-13-Koruyucu-Dayan%C4%B1kl%C4%B1/dp/B09XDBGD34/ref=sr_1_43?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-43",
				"image": "https://m.media-amazon.com/images/I/619lUyfay8L._AC_UL320_.jpg"
			},
			{
				"name": "Microsonic Apple iPhone 13 Kılıf Kamera Korumalı Siyah",
				"price": "55,00 TL",
				"url": "https://www.amazon.com.tr/Microsonic-Apple-iPhone-Kamera-Korumal%C4%B1/dp/B09LT4LPD8/ref=sr_1_44?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-44",
				"image": "https://m.media-amazon.com/images/I/51DQWrRHQhL._AC_UL320_.jpg"
			},
			{
				"name": "Reeder S19 Max 4 GB RAM, 128 GB Hafıza, 3950 mAh Batarya, 6.5 İnç Ekran, 13 MP Kamera, Akıllı Cep Telefonu, Mavi (Reeder Türkiye Garantili)",
				"price": "3.119,31 TL",
				"url": "https://www.amazon.com.tr/Reeder-Batarya-Telefonu-T%C3%BCrkiye-Garantili/dp/B0B5F7C29Z/ref=sr_1_45?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-45",
				"image": "https://m.media-amazon.com/images/I/61yVg+vVasL._AC_UL320_.jpg"
			},
			{
				"name": "iPhone 13 Ekran Koruyucu Nano Temperli Cam",
				"price": "59,90 TL",
				"url": "https://www.amazon.com.tr/iPhone-Ekran-Koruyucu-Nano-Temperli/dp/B09GPC5XTM/ref=sr_1_46?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-46",
				"image": "https://m.media-amazon.com/images/I/31XXYWZj8ML._AC_UL320_.jpg"
			},
			{
				"name": "Spigen Apple iPhone 13 Kılıf Crystal Slot Crystal Clear - ACS03534",
				"price": "270,90 TL",
				"url": "https://www.amazon.com.tr/Spigen-Apple-iPhone-K%C4%B1l%C4%B1f-Crystal/dp/B096HJ74RL/ref=sr_1_47?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-47",
				"image": "https://m.media-amazon.com/images/I/61QM5cJ0nXL._AC_UL320_.jpg"
			},
			{
				"name": "Spigen Apple iPhone 13 Kılıf Tough Armor Military Grade Mag (MagSafe Uyumlu) Black - ACS03542",
				"price": "566,90 TL",
				"url": "https://www.amazon.com.tr/Spigen-iPhone-Military-MagSafe-Uyumlu/dp/B096HKVSM9/ref=sr_1_48?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-48",
				"image": "https://m.media-amazon.com/images/I/61Q9+8KcVYL._AC_UL320_.jpg"
			},
			{
				"name": "Xiaomi Redmi Note 10 Pro 8 GB RAM 128 GB Onyx Gray",
				"price": "7.681,31 TL",
				"url": "https://www.amazon.com.tr/Xiaomi-Redmi-Note-Onyx-Gray/dp/B08Z7BXYDD/ref=sr_1_49?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-49",
				"image": "https://m.media-amazon.com/images/I/71SGIoCwLaL._AC_UL320_.jpg"
			},
			{
				"name": "Xiaomi Redmi Note 11 Pro, 6 GB RAM, 128 GB Hafıza, Gri (Xiaomi Türkiye Garantili)",
				"price": "8.070,92 TL",
				"url": "https://www.amazon.com.tr/Xiaomi-Redmi-Note-11-Pro/dp/B09WHTNX5Z/ref=sr_1_50?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-50",
				"image": "https://m.media-amazon.com/images/I/61cGPqgVLOL._AC_UL320_.jpg"
			},
			{
				"name": "Reeder P13 Blue Max Pro 256 GB Beyaz (Reeder Türkiye Garantili)",
				"price": "3.279,00 TL",
				"url": "https://www.amazon.com.tr/Reeder-Blue-Beyaz-T%C3%BCrkiye-Garantili/dp/B09V58T7DS/ref=sr_1_51?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-51",
				"image": "https://m.media-amazon.com/images/I/71BGuCEowrL._AC_UL320_.jpg"
			},
			{
				"name": "Samsung Galaxy S22 Ultra 5G 128 GB | 8 GB RAM Cep Telefonu, Beyaz (Samsung Türkiye Garantili)",
				"price": "28.336,64 TL",
				"url": "https://www.amazon.com.tr/Samsung-Galaxy-Telefonu-T%C3%BCrkiye-Garantili/dp/B09RQX2Q3Q/ref=sr_1_52?keywords=iphone+13&qid=1669314872&qu=eyJxc2MiOiI0LjgyIiwicXNhIjoiNC42OCIsInFzcCI6IjQuNDMifQ%3D%3D&sr=8-52",
				"image": "https://m.media-amazon.com/images/I/81ixVZeZHQL._AC_UL320_.jpg"
			}
		]
	},
	{
		"provider": "Trendyol",
		"products": [
			{
				"name": "iPhone 11 64 GB Beyaz Cep Telefonu Aksesuarsız Kutu (Apple Türkiye Garantili)",
				"price": "14.999 TL",
				"url": "https://www.trendyol.com/apple/iphone-11-64-gb-beyaz-cep-telefonu-aksesuarsiz-kutu-apple-turkiye-garantili-p-65149494?boutiqueId=614790&merchantId=968",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 11 128 GB Beyaz Cep Telefonu Aksesuarsız Kutu (Apple Türkiye Garantili)",
				"price": "16.499 TL",
				"url": "https://www.trendyol.com/apple/iphone-11-128-gb-beyaz-cep-telefonu-aksesuarsiz-kutu-apple-turkiye-garantili-p-64074794?boutiqueId=614790&merchantId=968",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 11 64 GB Siyah Cep Telefonu Aksesuarsız Kutu (Apple Türkiye Garantili)",
				"price": "14.999 TL",
				"url": "https://www.trendyol.com/apple/iphone-11-64-gb-siyah-cep-telefonu-aksesuarsiz-kutu-apple-turkiye-garantili-p-64074791?boutiqueId=614790&merchantId=968",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 11 128 GB Siyah Cep Telefonu Aksesuarsız Kutu (Apple Türkiye Garantili)",
				"price": "16.389 TL",
				"url": "https://www.trendyol.com/apple/iphone-11-128-gb-siyah-cep-telefonu-aksesuarsiz-kutu-apple-turkiye-garantili-p-64074797?boutiqueId=61&merchantId=275331",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 13 128 GB Mavi Cep Telefonu (Apple Türkiye Garantili)",
				"price": "25.549 TL",
				"url": "https://www.trendyol.com/apple/iphone-13-128-gb-mavi-cep-telefonu-apple-turkiye-garantili-p-150059501?boutiqueId=61&merchantId=105150",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 13 128 GB Gece Yarısı Cep Telefonu (Apple Türkiye Garantili)",
				"price": "26.274,49 TL",
				"url": "https://www.trendyol.com/apple/iphone-13-128-gb-gece-yarisi-cep-telefonu-apple-turkiye-garantili-p-150058735?boutiqueId=616918&merchantId=164784",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 13 128 GB Pembe Cep Telefonu (Apple Türkiye Garantili)",
				"price": "25.549 TL",
				"url": "https://www.trendyol.com/apple/iphone-13-128-gb-pembe-cep-telefonu-apple-turkiye-garantili-p-150059181?boutiqueId=61&merchantId=355135",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 12 64 GB Beyaz Cep Telefonu Aksesuarsız Kutu (Apple Türkiye Garantili)",
				"price": "20.699 TL",
				"url": "https://www.trendyol.com/apple/iphone-12-64-gb-beyaz-cep-telefonu-aksesuarsiz-kutu-apple-turkiye-garantili-p-54706466?boutiqueId=61&merchantId=179385",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 13 128 GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
				"price": "26.210,70 TL",
				"url": "https://www.trendyol.com/apple/iphone-13-128-gb-yildiz-isigi-cep-telefonu-apple-turkiye-garantili-p-150059024?boutiqueId=616918&merchantId=164784",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 13 128 GB Yeşil Cep Telefonu (Apple Türkiye Garantili)",
				"price": "25.921,79 TL",
				"url": "https://www.trendyol.com/apple/iphone-13-128-gb-yesil-cep-telefonu-apple-turkiye-garantili-p-266090694?boutiqueId=616918&merchantId=164784",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 14 128GB Gece Yarısı",
				"price": "29.350,90 TL",
				"url": "https://www.trendyol.com/apple/iphone-14-128gb-gece-yarisi-p-355707175?boutiqueId=616918&merchantId=107676",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 13 Pro Max 1TB Silver Cep Telefonu (Apple Türkiye Garantili)",
				"price": "44.999 TL",
				"url": "https://www.trendyol.com/apple/iphone-13-pro-max-1tb-silver-cep-telefonu-apple-turkiye-garantili-p-153162540?boutiqueId=616920&merchantId=339032",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 12 64 GB Siyah Cep Telefonu Aksesuarsız Kutu (Apple Türkiye Garantili)",
				"price": "21.630,51 TL",
				"url": "https://www.trendyol.com/apple/iphone-12-64-gb-siyah-cep-telefonu-aksesuarsiz-kutu-apple-turkiye-garantili-p-54706451?boutiqueId=616920&merchantId=454056",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 14 128GB Mavi",
				"price": "29.825,22 TL",
				"url": "https://www.trendyol.com/apple/iphone-14-128gb-mavi-p-355707135?boutiqueId=616920&merchantId=338941",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 11 128 GB Kırmızı Cep Telefonu Aksesuarsız Kutu (Apple Türkiye Garantili)",
				"price": "17.643,99 TL",
				"url": "https://www.trendyol.com/apple/iphone-11-128-gb-kirmizi-cep-telefonu-aksesuarsiz-kutu-apple-turkiye-garantili-p-64074786?boutiqueId=61&merchantId=154954",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 14 128GB Yıldız Işığı",
				"price": "29.340,20 TL",
				"url": "https://www.trendyol.com/apple/iphone-14-128gb-yildiz-isigi-p-355707118?boutiqueId=616920&merchantId=107676",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 14 Plus 128GB Mavi Cep Telefonu (Apple Türkiye Garantili)",
				"price": "32.259,55 TL",
				"url": "https://www.trendyol.com/apple/iphone-14-plus-128gb-mavi-cep-telefonu-apple-turkiye-garantili-p-355707174?boutiqueId=61&merchantId=105306",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 14 Pro 128GB Altın",
				"price": "42.679,03 TL",
				"url": "https://www.trendyol.com/apple/iphone-14-pro-128gb-altin-p-355707164?boutiqueId=61&merchantId=104872",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 12 Mini 64 GB Mavi Cep Telefonu (Apple Türkiye Garantili)",
				"price": "18.498,99 TL",
				"url": "https://www.trendyol.com/apple/iphone-12-mini-64-gb-mavi-cep-telefonu-apple-turkiye-garantili-p-65296228?boutiqueId=614790&merchantId=968",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 14 Pro Max 128GB Uzay Siyahı",
				"price": "46.991,40 TL",
				"url": "https://www.trendyol.com/apple/iphone-14-pro-max-128gb-uzay-siyahi-p-355644228?boutiqueId=61&merchantId=110032",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 14 Pro Max 256GB Derin Mor",
				"price": "50.900 TL",
				"url": "https://www.trendyol.com/apple/iphone-14-pro-max-256gb-derin-mor-p-355707159?boutiqueId=616918&merchantId=123425",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 14 Pro Max 256GB Uzay Siyahı",
				"price": "48.251,61 TL",
				"url": "https://www.trendyol.com/apple/iphone-14-pro-max-256gb-uzay-siyahi-p-355707123?boutiqueId=616918&merchantId=106299",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 12 Mini 128GB Siyah Cep Telefonu (Apple Türkiye Garantili)",
				"price": "19.498,99 TL",
				"url": "https://www.trendyol.com/apple/iphone-12-mini-128gb-siyah-cep-telefonu-apple-turkiye-garantili-p-65092380?boutiqueId=614790&merchantId=968",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			},
			{
				"name": "iPhone 13 128 GB Kırmızı Cep Telefonu (Apple Türkiye Garantili)",
				"price": "25.549 TL",
				"url": "https://www.trendyol.com/apple/iphone-13-128-gb-kirmizi-cep-telefonu-apple-turkiye-garantili-p-150059333?boutiqueId=61&merchantId=355135",
				"image": "https://www.trendyol.com/Content/images/defaultThumb.jpg"
			}
		]
	},
	{
		"provider": "Hepsiburada",
		"products": [
			{
				"name": "iPhone 13 128 GB",
				"price": "25.299,00 TL",
				"url": "https://www.hepsiburada.com/iphone-13-128-gb-p-HBCV00000ODHI3",
				"image": "https://productimages.hepsiburada.net/s/189/222-222/110000155170656.jpg"
			},
			{
				"name": "iPhone 13 128 GB",
				"price": "25.299,00 TL",
				"url": "https://www.hepsiburada.com/iphone-13-128-gb-p-HBCV00000ODHI3",
				"image": "https://productimages.hepsiburada.net/s/189/222-222/110000155170656.jpg"
			}
		]
	},
	{
		"provider": "N11",
		"products": [
			{
				"name": "Apple iPhone 13 Pro 128 GB (Apple Türkiye Garantili)",
				"price": "36.757,95 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-pro-128-gb-apple-turkiye-garantili-2141339?magaza=cephaneteknoloji",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-pro-128-gb-apple-turkiye-garantili__1544546099432627.jpg"
			},
			{
				"name": "Apple iPhone 13 Pro 256 GB (Apple Türkiye Garantili)",
				"price": "39.154,05 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-pro-256-gb-apple-turkiye-garantili-2141300?magaza=bittibitiyor",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-pro-256-gb-apple-turkiye-garantili__0408795674664735.jpg"
			},
			{
				"name": "Apple iPhone 13 Pro 512 GB (Apple Türkiye Garantili)",
				"price": "38.303,04 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-pro-512-gb-apple-turkiye-garantili-2141282?magaza=bittibitiyor",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-pro-512-gb-apple-turkiye-garantili__1544546099432627.jpg"
			},
			{
				"name": "Apple iPhone 13 Pro 1 TB (Apple Türkiye Garantili)",
				"price": "40.501,55 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-pro-1-tb-apple-turkiye-garantili-2150349?magaza=reyontek",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-pro-1-tb-apple-turkiye-garantili__1584725628235073.jpg"
			},
			{
				"name": "Apple iPhone 13 Pro Max 1 TB (Apple Türkiye Garantili)",
				"price": "44.184,00 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-pro-max-1-tb-apple-turkiye-garantili-2150368?magaza=cephaneteknoloji",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-pro-max-1-tb-apple-turkiye-garantili__0541602714992468.jpg"
			},
			{
				"name": "Apple iPhone 13 Pro Max 128 GB (Apple Türkiye Garantili)",
				"price": "45.598,94 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-pro-max-128-gb-apple-turkiye-garantili-2141316?magaza=selentelekom",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-pro-max-128-gb-apple-turkiye-garantili__0479650541650639.jpg"
			},
			{
				"name": "Apple iPhone 13 Pro Max 512 GB (Apple Türkiye Garantili)",
				"price": "43.488,79 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-pro-max-512-gb-apple-turkiye-garantili-2141344?magaza=cephaneteknoloji",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-pro-max-512-gb-apple-turkiye-garantili__0796793309834019.jpg"
			},
			{
				"name": "Apple iPhone 13 Pro Max 256 GB (Apple Türkiye Garantili)",
				"price": "44.059,73 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-pro-max-256-gb-apple-turkiye-garantili-2141343?magaza=aksarayiletisim",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-pro-max-256-gb-apple-turkiye-garantili__0541602714992468.jpg"
			},
			{
				"name": "Apple iPhone 13 128 GB (Apple Türkiye Garantili)",
				"price": "26.166,05 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-128-gb-apple-turkiye-garantili-2141312?magaza=cincin",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-128-gb-apple-turkiye-garantili__0890392443016252.jpg"
			},
			{
				"name": "Apple iPhone 13 256 GB (Apple Türkiye Garantili)",
				"price": "27.381,72 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-256-gb-apple-turkiye-garantili-2141314?magaza=cephaneteknoloji",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-256-gb-apple-turkiye-garantili__1148267101141060.jpg"
			},
			{
				"name": "Apple iPhone 13 512 GB (Apple Türkiye Garantili)",
				"price": "33.423,05 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-512-gb-apple-turkiye-garantili-2141345?magaza=cepekspress",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-512-gb-apple-turkiye-garantili__0953845763388821.jpg"
			},
			{
				"name": "Apple iPhone 13 Mini 512 GB (Apple Türkiye Garantili)",
				"price": "31.637,33 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-mini-512-gb-apple-turkiye-garantili-2141279?magaza=integrakurumsal",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-mini-512-gb-apple-turkiye-garantili__0138901328983330.jpg"
			},
			{
				"name": "Apple iPhone 13 Mini 256 GB (Apple Türkiye Garantili)",
				"price": "27.699,00 TL",
				"url": "https://www.n11.com/urun/apple-iphone-13-mini-256-gb-apple-turkiye-garantili-2141336?magaza=truvaplaystation",
				"image": "https://n11scdn.akamaized.net/a1/226_339/elektronik/cep-telefonu/apple-iphone-13-mini-256-gb-apple-turkiye-garantili__0138901328983330.jpg"
			}
		]
	}
]	
```
