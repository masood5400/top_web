'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/asset/fonts/iransans/IRANSansMobile(FaNum).ttf": "7053ef9b87586e56bb37ca6c11eae47f",
"assets/asset/fonts/iransans/IRANSansMobile(FaNum)_Black.ttf": "b5e9092bc82a7b48d4a19fa6eb82bd6d",
"assets/asset/fonts/iransans/IRANSansMobile(FaNum)_Bold.ttf": "4bac6b68236f494a59b54c44a1ed529f",
"assets/asset/fonts/iransans/IRANSansMobile(FaNum)_Light.ttf": "3d18be052a4de0da6d0f2aaef74bbae5",
"assets/asset/fonts/iransans/IRANSansMobile(FaNum)_Medium.ttf": "c37aafe885d7245042a5731e96a2acd2",
"assets/asset/fonts/iransans/IRANSansMobile(FaNum)_UltraLight.ttf": "35b822df0e8d7af2f66c3f3c9c4940f0",
"assets/asset/images/announcement/trash_bucket_icon.svg": "3135d0472e5e7ccf407976d8b3ef915c",
"assets/asset/images/authentication/auth.svg": "92295b7084030cb023277f293a4f08e8",
"assets/asset/images/authentication/Authentication_Vector.svg": "ab61078bdde6661ca7be129bbcee8705",
"assets/asset/images/authentication/Code_SMS_Vector.svg": "f4f72a471a3d74309d00877b9babfc68",
"assets/asset/images/authentication/dark_theme.svg": "3e8bf81146857d56931c88de27d11229",
"assets/asset/images/authentication/Light_Template_Vector.svg": "d1a62743296cdcd8fa5b21fefd2b6037",
"assets/asset/images/authentication/light_theme.svg": "1d8fc4a3038fe6b028d649176d81f3e2",
"assets/asset/images/authentication/password.svg": "58360d1fc39a89af1b193ae60019fc31",
"assets/asset/images/authentication/sensor_authentication.svg": "40e5f575c2088a204de5e3c604e01a85",
"assets/asset/images/authentication/Welcom_Vector.svg": "91417aa4631f77bc824e1f654b51b770",
"assets/asset/images/bill/logos/car_fine.svg": "50220946536e8fd1ce6076e90479fdb3",
"assets/asset/images/car/iran_plate.svg": "433640a80dc23323a05925ac038d292b",
"assets/asset/images/car/plate_logo.svg": "b3ee5bd27a3efb16159c332d178ddd69",
"assets/asset/images/card_to_card/leftbanner.svg": "d2a5fd559a08ab5cacb32aa6317d5f7d",
"assets/asset/images/card_to_card/receipt.svg": "5719b9da78b03213dc85d757db2d9230",
"assets/asset/images/card_to_card/receipt_d.svg": "008cccb3d7129205161d9b55dc1e6969",
"assets/asset/images/card_to_card/rightbanner.svg": "33f4636d91bc394206cb86faad1d58a2",
"assets/asset/images/codepardaz/scanner_icon.svg": "ab4a4974068baceddd77c15f551a28ad",
"assets/asset/images/home/Advertise_Vector.png": "938c5dbfa81fc2cfc4647563aed12277",
"assets/asset/images/home/bazarMaliSarmaie.svg": "2abfbb1fbf0459cec1be9e663f5cb4e7",
"assets/asset/images/home/Bill_Vector_dark.svg": "175bb097d600e19fa6b5a98f542249ee",
"assets/asset/images/home/Bill_Vector_light.svg": "7208adc885b248d36af452b2e37a169f",
"assets/asset/images/home/hgb_title.svg": "af2c7d0a5abe69812f9d0e22817e5a32",
"assets/asset/images/home/khadamate%2520khodro.svg": "c6a0d40258ca3e430837c36d4ae4166d",
"assets/asset/images/home/wallet_to_wallet_dark.svg": "1a644076a3d6c22999e6364cd1eafeb6",
"assets/asset/images/home/wallet_to_wallet_light.svg": "51abf6fe35fb4fe6c10464da20c79550",
"assets/asset/images/icons/code_processor_dark.svg": "053d6b922a700c8d182915f15c993708",
"assets/asset/images/icons/code_processor_light.svg": "50e86bf6df541a033a81b19bf716a883",
"assets/asset/images/icons/destination_to_card__vector_dark.svg": "047823c7df2c83ca2cecae31d0fc67ea",
"assets/asset/images/icons/destination_to_card__vector_light.svg": "5a47c357537292e1b7abf51fd056cd50",
"assets/asset/images/icons/keyboard.svg": "e2d31ee4622ee31b51bad4b3368740f8",
"assets/asset/images/icons/more.svg": "f80ef1a40242528b2d2c8965ddb1a4f3",
"assets/asset/images/icons/numberKeyboard.svg": "9b54991defba593bdf364c93b5dac811",
"assets/asset/images/icons/origin_card_vector_dark.svg": "062afff7b9f190439f708bd4439db5bc",
"assets/asset/images/icons/origin_card_vector_light.svg": "fffc415355fabee8ef33ef9be5d9dc66",
"assets/asset/images/icons/Search_Icon_dark.svg": "dc0749e3ff2b9104f46ca219b4c238b5",
"assets/asset/images/icons/Search_Icon_light.svg": "19744665d40b0ff97c4e6b9dc419cc81",
"assets/asset/images/icons/support_dark.svg": "a38d9e687132818fc80a3be1296f1868",
"assets/asset/images/icons/support_light.svg": "21aec5f72e0c297ba59fcae16b1cf178",
"assets/asset/images/icons/tick_icon.svg": "aba547dc0e3fb91bc828a9c72edabc17",
"assets/asset/images/icons/transaction_down.svg": "da0fc90220489aac44b0928773a680ac",
"assets/asset/images/icons/transaction_up.svg": "7ae250baeb3f129b4a4fd406c682430b",
"assets/asset/images/icons/update_icon.svg": "0ce228322d8901304ff4f68b3465149b",
"assets/asset/images/icons/warning_icon.svg": "a9a8068d3bed3062a93e14604e44af78",
"assets/asset/images/internet_package/sim_card_dark.svg": "2b07927b9e51be60c7084acf0668a7a1",
"assets/asset/images/internet_package/sim_card_light.svg": "9164c0004c540f3233305228e62485b6",
"assets/asset/images/logos/aparat_logo.png": "8e614988a130e8192727311e76a0d894",
"assets/asset/images/logos/centerbank_dark.svg": "e9129d1ceb3508a81b35add9dc667795",
"assets/asset/images/logos/centerbank_light.svg": "e516ec36026923bbbfbac00d99003dea",
"assets/asset/images/logos/igap_logo.png": "66e9c9402bc5184a9af574b1d4d3004d",
"assets/asset/images/logos/instagram_logo.png": "7f0814866e14a35357634676c927c10b",
"assets/asset/images/logos/notification_icon.png": "c424c8754f69637dd630cf542b164f6e",
"assets/asset/images/logos/shaparak_logo_dark.svg": "90b1ee23bab78ac687c85ee353d983e2",
"assets/asset/images/logos/shaparak_logo_light.svg": "e425f3763dca7ef08b6db853b8d815b4",
"assets/asset/images/logos/telegram_logo.png": "df56fc31b68b9fd15bc9d9bc2b6eb8b8",
"assets/asset/images/logos/top_logo.svg": "e82dbcdce109a376884070e3230cc206",
"assets/asset/images/logos/top_logo_type.svg": "539b71e4b1338a6b74593ead9f3683a4",
"assets/asset/images/mobile_bank/shetab_icon.svg": "75836e11424b69e52ce75424655a33e2",
"assets/asset/images/operator_mobile/logos/mtn.png": "19d3b0ca7037855bb40baa11d796cbb1",
"assets/asset/images/operator_mobile/logos/rightel.png": "9ba509ef26bfc5959b7160c9c5c2961f",
"assets/asset/images/parsi_card/parsi_card_turn_over_icon.svg": "a9fa0f68cc92f2a7bf66a259b491c7e3",
"assets/asset/images/transactions/save_image_icon.svg": "f0add2f45dcf6d91a39ae57a18cb27e8",
"assets/asset/images/transactions/share_image_icon.svg": "ec165c73b477ea5a4c79fed1e2bcae64",
"assets/asset/images/transactions/share_text_icon.svg": "b624c7d7c1025690ee359e0956f19881",
"assets/asset/images/transactions/zigzag.svg": "752a98ab49b457b0678001a5fc92675e",
"assets/AssetManifest.json": "1dd66da81bd9e52d0699195c01d92d9f",
"assets/FontManifest.json": "41c4b461e78d8f2944304bf147f2e56e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1761fe6b00c4cfac9f24ae643dd6d2e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"content/Banners/banner1-1.png": "993a1c9664be4a01fc4724c8678cb4f7",
"content/Banners/banner1.png": "502594b39b4682cf5d291a3967628cd1",
"content/Banners/banner2-1.png": "0acb0a81c655fdf755b1db1e85bf67ac",
"content/Banners/banner2.png": "3bc70e096ec5aa9d41b80bc535bd946a",
"content/Banners/banner3-1.png": "0c2096cb2a752833a07863dc5709d73e",
"content/Banners/banner3.png": "acdaa10371ede90b5082c766ffc43e01",
"content/Banners/banner59.jpeg": "b558b734cbafa1074a97ecb02d7d4426",
"content/Banners/crown_dark.svg": "eb18c5699d3e2acf8bf558fcd9e9be04",
"content/Banners/crown_light.svg": "eb18c5699d3e2acf8bf558fcd9e9be04",
"content/Banners/kadona_banner.svg": "911e9865a9510ea243a0e957ea325099",
"content/Banners/parsian_card_bg.svg": "64b178073a6661ea979d18fca07113e0",
"content/Icons/about_parsi_dark.svg": "ee58e92658f03ff57ece40ae727e4387",
"content/Icons/about_parsi_light.svg": "7cdfce690b729e07dff327bf5d1c4ddb",
"content/Icons/Add_Friends_dark.svg": "9ba7a87ac960b3316310270a551888f5",
"content/Icons/Add_Friends_light.svg": "28146db19afd253ebf5a7c6ad91a7109",
"content/Icons/Airplane_Vector_dark.svg": "f68742a859fe4766c2e22ab5f618c5b2",
"content/Icons/Airplane_Vector_light.svg": "eec8026d564b62f32cded16c8663a102",
"content/Icons/ansar.png": "ccc73dabaadb76eb4fcae3e71100d23b",
"content/Icons/ayandeh.png": "d1722675fe8e959b2d9cac2c9f9b7df8",
"content/Icons/balance_parsi_dark.svg": "788ff2212565b6d0c08f59502888229a",
"content/Icons/balance_parsi_light.svg": "7e559b02659da4b9d723a176e2969954",
"content/Icons/Bill_new_dark.svg": "6a7e05bd6c178a7827257e44ac075a13",
"content/Icons/Bill_new_light.svg": "37aecf4bc75e90310c8245e22d4167bb",
"content/Icons/Bus_Vector_dark.svg": "4475925ef66851f51d2bb0bab33d1c29",
"content/Icons/Bus_Vector_light.svg": "0a816c9fa347212fcb18b10f06886d06",
"content/Icons/Card_Blocking_parsi_dark.svg": "b64890dcddd555572216cc74cc7129e3",
"content/Icons/Card_Blocking_parsi_light.svg": "1bef72871b80446dd07d1164532bbb77",
"content/Icons/card_to_card_transfer_dark.svg": "bf2fec1da5fd79dd11b6a366cd1ab280",
"content/Icons/card_to_card_transfer_light.svg": "cc702ec6062d7ee9cd0798b0531027bb",
"content/Icons/car_fine_dark.svg": "3310a07539ff7aad7eff9819b8e150c0",
"content/Icons/car_fine_light.svg": "234c2a8d673ff77b23432258e43f5cd9",
"content/Icons/Car_Vector_dark.svg": "ed7223b6593155fff439d21ee7847736",
"content/Icons/Car_Vector_light.svg": "970eda6749929f85cc1708a9ef243a4e",
"content/Icons/Change_Second_Password_parsi_dark.svg": "92afb43aa7257d4544807b4486a21944",
"content/Icons/Change_Second_Password_parsi_light.svg": "718e7932474c37afa57791633351f141",
"content/Icons/charge_parsi_dark.svg": "4b97afcc012cbf4d81a89403e4a94637",
"content/Icons/charge_parsi_light.svg": "9b750b1a71cea7af282c032aeffbf52a",
"content/Icons/Charity_dark.svg": "9f63515e76053727a963634d48f606e6",
"content/Icons/Charity_light.svg": "c22f3eb71c62e4957a0ff399fbb65c1b",
"content/Icons/checkout%20Wallet%20Dark.svg": "bd32ff5f82ef1c97946aa5f86d3b3994",
"content/Icons/checkout%20Wallet.svg": "518dff8fc50d8df12ac588504bd54bca",
"content/Icons/checkout_Wallet_dark.svg": "eeebd4da1cf570d73a8b44276d3bd93f",
"content/Icons/checkout_Wallet_light.svg": "f1d30ed07b3b04e5e3af4cb2c3b6cd6f",
"content/Icons/Coder-Vector_dark.svg": "bb62d76598f24556aa117844da138df4",
"content/Icons/Coder-Vector_light.svg": "b2606ed67293606a8f168014ef5e98fe",
"content/Icons/Comfort_Vector.png": "e26d7723fc8f485e4e269063765add0f",
"content/Icons/dey.png": "36f33883b190ee46cfdcdb34f0000c1b",
"content/Icons/eghtesadNovin.png": "1d4c0bb686f6c70bbbde4d96f385ae64",
"content/Icons/Extensive_Services_Vector.png": "96b26b041b0dad0f7f0b0eae04098fc4",
"content/Icons/Forbidden_exit_inquiry_dark.svg": "dfc1e2b1efe7aaedca33a1ca3acc3692",
"content/Icons/Forbidden_exit_inquiry_light.svg": "734794ee78be499100388894c38b83ef",
"content/Icons/Freeway_Complications_Vector_dark.svg": "d8a6e24c972c9d30506e49e4b0a93766",
"content/Icons/Freeway_Complications_Vector_light.svg": "abe047703ce26c0693465c290177493e",
"content/Icons/Freeway_Insurance_Vector_dark.svg": "81b98be9a7ff11a72f69723b06f734f1",
"content/Icons/Freeway_Insurance_Vector_light.svg": "894e140e6cb3f5f006726eec22194e4a",
"content/Icons/gardeshgari.png": "1592e351cfff2a9402018560579da6d2",
"content/Icons/gas.svg": "33434c0bba13d10f21a871b1d8c5004b",
"content/Icons/ghavamin.png": "b2add2699d03e9c8f622d048ef98e3c2",
"content/Icons/hekmat.png": "c479b47747775a6d321e1836d9fd123b",
"content/Icons/iban_number_parsi_dark.svg": "54f133ff150613725a978d3de423194a",
"content/Icons/iban_number_parsi_light.svg": "940e1021ca33a82ebbccc20057f0c726",
"content/Icons/Inquire_negative_score_driving_license_dark.svg": "5924f21eee1bfbc5787f092db304d756",
"content/Icons/Inquire_negative_score_driving_license_light.svg": "970799971969a0e356cbe05a72e12a47",
"content/Icons/inquire_status_passport_dark.svg": "41b241cff77d70abbdfb576dccf81390",
"content/Icons/inquire_status_passport_light.svg": "e6f5b6aab12b1917a30dbe6c0669dfa1",
"content/Icons/Inquiry_about_status_certificate_dark.svg": "76450c4fd500d87ec68b4190aa12a82f",
"content/Icons/Inquiry_about_status_certificate_light.svg": "f4218e226939cd1c0f6b91f74559c77f",
"content/Icons/Inquiry_active_plates_persons_dark.svg": "dec0b122d7fe943bf749bf4e52b3ff31",
"content/Icons/Inquiry_active_plates_persons_light.svg": "7ae25b53883a09188b7d6fc12b07865e",
"content/Icons/Internet_Package_Vector_dark.svg": "d57319f59294affb38eb36ee773af01b",
"content/Icons/Internet_Package_Vector_light.svg": "4e6501e0dca14095fa777bc5ae77ee46",
"content/Icons/Inventory_Vector_dark.svg": "d1dcaa76203c173b61745f14599defcd",
"content/Icons/Inventory_Vector_light.svg": "694bc038920dbd14b23693355e3f87b0",
"content/Icons/iranzamin.png": "3f948d19bc628aa8e73c70a430d5dbf5",
"content/Icons/kadona_Gift_card_Recharge_dark.svg": "54a557dab3ac07f380041b3054ba1131",
"content/Icons/kadona_Gift_card_Recharge_light.svg": "9e09946c737783a49f2baf581b835560",
"content/Icons/kadona_icon_dark.svg": "6784b4a5bea5288fdb7e5c659e36dde1",
"content/Icons/kadona_icon_light.svg": "e80ac67b8d5fba9c0d958488724a0aa6",
"content/Icons/karafarin.png": "7b6cf2f4f60bb8292fe0bdd0fb33d30e",
"content/Icons/keshavarzi.png": "6ebf7bb12fd384e654b03da2f74b4aaa",
"content/Icons/khavaremiane.png": "07e91e0657d26fb892e8256960fe7fea",
"content/Icons/kosar.png": "45857963f3535b71690db297bcc9eeab",
"content/Icons/Marginal_Park_Vector_dark.svg": "650a21d23cf901a905510b0ddc6b78b6",
"content/Icons/Marginal_Park_Vector_light.svg": "40dec66dde6c1af01da6bf86953621f3",
"content/Icons/maskan.png": "92845e0580b088a1efde6ee684b265e1",
"content/Icons/mci.svg": "45ba938022bbcdddee295f12a4eebc72",
"content/Icons/mehr.png": "4f2f9bee6bfac4160109eb98c111bd50",
"content/Icons/melal.png": "e30ff03369a23a93b2e1792c58fef09e",
"content/Icons/meli.png": "f9d9ec6462735dd7bf3e2cea0d036dc9",
"content/Icons/mellat.png": "c949b454783f90ea0f973820fb491cda",
"content/Icons/mtn.svg": "ada4bf6f3563072e146d8ee59b98965c",
"content/Icons/noor.png": "6449f0784547f712b51ff591971fa7f2",
"content/Icons/online_purchase_Gift_card_dark.svg": "bbd25006c9b881caf280ea8172d7c8c1",
"content/Icons/online_purchase_Gift_card_light.svg": "91719f2691ce22a5c274f28885ba1311",
"content/Icons/origin_card_vector_dark.svg": "062afff7b9f190439f708bd4439db5bc",
"content/Icons/origin_card_vector_light.svg": "81ba001d17e15cffd71694977327def4",
"content/Icons/otp_parsi_dark.svg": "7e62663d85f74bfd7719c334718671c5",
"content/Icons/otp_parsi_light.svg": "1e4860f22ddce695eca2005e281e97a8",
"content/Icons/parsian_bank_dark.svg": "c277b5e75e5dcc06e5ed1cce38fc5086",
"content/Icons/parsian_bank_light.svg": "b65122689a5a63f49672293a22bdec5f",
"content/Icons/parsian_dark.svg": "8c03836abad7c7bf13e5239c53425cc1",
"content/Icons/Parsian_deposit_interest_information_dark.svg": "bce7b3adf276cdd57a5b55901bce4e8b",
"content/Icons/parsian_light.svg": "f49a6637c9d6244a510a5ea4ad03b33a",
"content/Icons/pasargad.png": "e237f351176fc83f99ad81fecd160f33",
"content/Icons/postbank.png": "77febabd94f43b465d98aac820dc0f26",
"content/Icons/power_department.svg": "726450072d99a5eb0f57cfd27b4446b9",
"content/Icons/purchase_Gift_card_dark.svg": "eaf0aa70edf40523a57468f73097f7f3",
"content/Icons/purchase_Gift_card_light.svg": "84000e0d8f67a36166b8ebd0a365cda8",
"content/Icons/refah.png": "a53d1d4e1922f9204f675c316b36d126",
"content/Icons/resalat.png": "168818f697a583a3b07bc67ab60bae82",
"content/Icons/rightel.svg": "9db1bb403721f63b066357f693d03d0b",
"content/Icons/saderat.png": "2deafb2431ce05a632a8daa59a11c1dc",
"content/Icons/saman.png": "4e0fca0adf548934aa9e99d1247f0bfb",
"content/Icons/sanat.png": "b83c33df4fc4c41d2fe3d68476f83f79",
"content/Icons/sarmayeh.png": "13a0d6fd1312fbcfc5ba99fec95334f4",
"content/Icons/Save_Image_dark.svg": "f1b0ca9951190df0afd9e599471b498a",
"content/Icons/Save_Image_light.svg": "05be80c345ccffe848ca51475db5a6f1",
"content/Icons/sepah.png": "23ea6a34d9f7c02395b4dda80a56a6bf",
"content/Icons/shahr.png": "04f4763baf64f4e12be1858389a82e6c",
"content/Icons/Share_Image_dark.svg": "767ea7c97787394380e52e14839e9e40",
"content/Icons/Share_Image_light.svg": "d5c6acaf17375873f8c6b5a20d6cb04a",
"content/Icons/Share_Text_dark.svg": "283350254d23fca6421874864e2f1d1b",
"content/Icons/Share_Text_light.svg": "308cf95fc530c2c2831cc9bce82d1726",
"content/Icons/Simcard_Charge_dark.svg": "767b584996e90b6871f14268cd1556e6",
"content/Icons/Simcard_Charge_light.svg": "e8e86091da8dbab42d399691fbacb810",
"content/Icons/sina.png": "4116c7f9801e6f6a91b8c87d1273a52e",
"content/Icons/Stock_Supply_Vector_dark.svg": "6a6a6bba212fedde2c3c8f8aa3587397",
"content/Icons/Stock_Supply_Vector_light.svg": "d7e800b8d50f180f723f07f0991c3534",
"content/Icons/tab_news.png": "94aa18904a76d6fb38b099856bcd9b62",
"content/Icons/Taypa_Logo_dark.svg": "ac396e026ea2e75d520e8830c2541185",
"content/Icons/Taypa_Logo_light.svg": "ef702b83be7f88c19af9793e7af58f68",
"content/Icons/tejarat.png": "dd005e3a9242b9026a7f1fcb5145523a",
"content/Icons/telephone_dark.svg": "c4bcf716fa7ee31b44da410b33c75b19",
"content/Icons/telephone_light.svg": "b5e425992cee41fd4bc15d2b3b2794d9",
"content/Icons/tosee-taavon.png": "954f1d8016db3e9d1739863334ebe1ee",
"content/Icons/tosee.png": "aa6575af15049ce528ce1b50ff206be8",
"content/Icons/toseeSaderat.png": "17502e0566ea8a838155b8d63beec556",
"content/Icons/Traffic_Plan_Vector_dark.svg": "43b6b5e09f2235d979761287f93ff2de",
"content/Icons/Traffic_Plan_Vector_light.svg": "e78f92e3137f353787382a7af162ff37",
"content/Icons/Train_Vector_dark.svg": "147e4226b12bc0f694b62de5b70d57ea",
"content/Icons/Train_Vector_light.svg": "948ef294b9b46cdeed94f8d4edf8991f",
"content/Icons/Transactions_Vector_dark.svg": "c56b001949aa8b9b98a0aa66c5fa3d66",
"content/Icons/Transactions_Vector_light.svg": "564348ed9aaa91c31671c17f152cef2c",
"content/Icons/Transaction_Vector.png": "5af7fb742d1371d180b34cc25a7427fd",
"content/Icons/truck_dark.svg": "ed24bfa2b39643464befbbb5c7ca9397",
"content/Icons/truck_light.svg": "cbeb0f549340202ff33d73e495f6163a",
"content/Icons/turnover_parsi_dark.svg": "150404383f55cc054343f64854ba9f24",
"content/Icons/turnover_parsi_light.svg": "c19b14bed98b6c2bf1680f98698a725f",
"content/Icons/Turn_Rating_dark.svg": "c136779efd42ead0648ab27315fb8f6e",
"content/Icons/Turn_Rating_light.svg": "b20ca3baae294925d33bc8763091c92e",
"content/Icons/Validation_Vector_dark.svg": "f8f2547defcccf360ac15b38636ec260",
"content/Icons/Validation_Vector_light.svg": "856c4c1d657d1d8a8498149bd4ed8c80",
"content/Icons/Violation_&_Penalty_dark.svg": "3310a07539ff7aad7eff9819b8e150c0",
"content/Icons/Violation_&_Penalty_light.svg": "234c2a8d673ff77b23432258e43f5cd9",
"content/Icons/wallet_increase_inventory_dark.svg": "28129c767c133b4f7db4b5fdcbb9f6f1",
"content/Icons/wallet_increase_inventory_light.svg": "104b210468125e88aef99f1d07d3bb53",
"content/Icons/wallet_services_dark.svg": "ba85a2f3184696cd72927822f51abd57",
"content/Icons/wallet_services_light.svg": "073bf8d157794b55f1d50d8a717500e1",
"content/Icons/wallet_turnover_dark.svg": "1dd780f969ee153fc51fc405f4ccc7e7",
"content/Icons/wallet_turnover_light.svg": "880d0d16bdfc5d87866664686532b35b",
"content/Icons/wallet_withdraw_dark.svg": "771d92edb267984cdab3e240be8d413e",
"content/Icons/wallet_withdraw_light.svg": "2f9bfbca70cfddf22a7c80df8633895d",
"content/Icons/water.svg": "1297a3218b9fa9736e9b2845fa072bfb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "7d39465afd80678f1090a4012fade46d",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/apple-touch-icon.png": "1a6aa37ab4e2d351ce031db4e24f32da",
"icons/favicon-16x16.png": "5c5cd67b3b484147fac5551296407e95",
"icons/favicon-32x32.png": "61928e1ff8b5b292dfac4eb6e06e8cfb",
"icons/favicon.ico": "20e3191032f202e0ed24643d78bb7bb9",
"icons/icon-128x128.png": "a061883b3f11f13c2baa30aac08f3fc9",
"icons/icon-144x144.png": "b45eff947a471d80654537d3a3cfbcb6",
"icons/icon-152x152.png": "920567d9891dd56c389ed7838aef687f",
"icons/icon-192x192.png": "df241a43c026f6d2862ddaef57b4b087",
"icons/icon-384x384.png": "f84f3bfd56c992e746334fa1610ade88",
"icons/icon-512x512.png": "5cb1a43bd7f1a73b4f4082a74be0fba9",
"icons/icon-72x72.png": "1ab04f66928cdbd2004b06b1aac15ac4",
"icons/icon-96x96.png": "4b0c158c661300e9b44f5a62529b7441",
"icons/safari-pinned-tab.svg": "684c717817e0436f0d4e490d3c5f9fe9",
"index.html": "6d6cd7d89f260bc644cb9f949844e8a9",
"/": "6d6cd7d89f260bc644cb9f949844e8a9",
"main.dart.js": "69b1b410dc5bcf965a4c7d01d89b67d3",
"manifest.json": "aec34fef93874964b6c4b13a3552c0f1",
"splash_style.css": "0be488bcba16e79f23900cba1b657cc1",
"version.json": "2f479b760f4c0a06e4b72336fbbf7f6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
