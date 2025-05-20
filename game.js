JSONString = `
{
    "lams": [
        {
            "id": 101,
            "name": "اسکولکس تنیا ساژیناتا",
            "image": "./parasites/101.jpg",
            "qWord": "اسکولکس",
            "qAnswer": "تنیا ساژیناتا",
            "choices": ["تنیا سولیوم", "هیمنولیپیس نانا", "دیفیلوبوتریوم لاتوم"],
            "group": ["سستود", "کرم", "اسکولکس"]
        },
        {
            "id": 102,
            "name": "بند بالغ تنیا ساژیناتا",
            "image": "./parasites/102.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [103, 106, 110, 111, 201, 204, 208, 209, 212, 303, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["سستود", "کرم"]
        },
        {
            "id": 103,
            "name": "بند بارور تنیا ساژیناتا",
            "image": "./parasites/103.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 106, 110, 111, 201, 204, 208, 209, 212, 303, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["سستود", "کرم"]
        },
        {
            "id": 104,
            "name": "اسکولکس تنیا سولیوم",
            "image": "./parasites/104.jpg",
            "qWord": "اسکولکس",
            "qAnswer": "تنیا سولیوم",
            "choices": ["تنیا ساژیناتا", "هیمنولیپیس نانا", "دیفیلوبوتریوم لاتوم"],
            "group": ["سستود", "کرم", "اسکولکس"]
        },
        {
            "id": 105,
            "name": "تخم تنیا",
            "image": "./parasites/105.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [107, 108, 112, 202, 203, 205, 207, 210, 213, 214, 301, 302, 305, 308, 311],
            "group": ["سستود", "تخم"]
        },
        {
            "id": 106,
            "name": "اکینوکوکوس گرانولوزوس",
            "image": "./parasites/106.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 110, 111, 201, 204, 208, 209, 212, 303, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["سستود", "کرم"]
        },
        {
            "id": 107,
            "name": "کیست هیداتیک",
            "image": "./parasites/107.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 108, 112, 202, 203, 205, 207, 210, 213, 214, 301, 302, 305, 308, 311],
            "group": ["سستود", "تخم"]
        },
        {
            "id": 108,
            "name": "شن هیداتید",
            "image": "./parasites/108.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 112, 202, 203, 205, 207, 210, 213, 214, 301, 302, 305, 308, 311],
            "group": ["سستود", "تخم"]
        },
        {
            "id": 109,
            "name": "اسکولکس هیمنولیپیس نانا",
            "image": "./parasites/109.jpg",
            "qWord": "اسکولکس",
            "qAnswer": "هیمنولیپیس نانا",
            "choices": ["تنیا ساژیناتا", "تنیا سولیوم", "دیفیلوبوتریوم لاتوم"],
            "group": ["سستود", "کرم", "اسکولکس"]
        },
        {
            "id": 110,
            "name": "بند بالغ هیمنولیپیس نانا",
            "image": "./parasites/110.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 111, 201, 204, 208, 209, 212, 303, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["سستود", "کرم"]
        },
        {
            "id": 111,
            "name": "بند بارور هیمنولیپیس نانا",
            "image": "./parasites/111.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 201, 204, 208, 209, 212, 303, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["سستود", "کرم"]
        },
        {
            "id": 112,
            "name": "تخم هیمنولیپیس نانا",
            "image": "./parasites/112.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 202, 203, 205, 207, 210, 213, 214, 301, 302, 305, 308, 311],
            "group": ["سستود", "تخم"]
        },
        {
            "id": 201,
            "name": "فاسیولا هپاتیکا",
            "image": "./parasites/201.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 204, 208, 209, 212, 303, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["ترماتود", "کرم"]
        },
        {
            "id": 202,
            "name": "تخم فاسیولا هپاتیکا",
            "image": "./parasites/202.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 203, 205, 207, 210, 213, 214, 301, 302, 305, 308, 311],
            "group": ["ترماتود", "تخم"]
        },
        {
            "id": 203,
            "name": "سرکر فاسیولا هپاتیکا",
            "image": "./parasites/203.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 205, 207, 210, 213, 214, 301, 302, 305, 308, 311],
            "group": ["ترماتود", "تخم"]
        },
        {
            "id": 204,
            "name": "دیکروسولیوم دندریتیکوم",
            "image": "./parasites/204.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 208, 209, 212, 303, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["ترماتود", "کرم"]
        },
        {
            "id": 205,
            "name": "تخم دیکروسولیوم دندریتیکوم",
            "image": "./parasites/205.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 203, 207, 210, 213, 214, 301, 302, 305, 308, 311],
            "group": ["ترماتود", "تخم"]
        },
        {
            "id": 206,
            "name": "شیستوزوما هماتوبیوم نر و ماده",
            "image": "./parasites/206.jpg",
            "qWord": "کرم‌های",
            "qAnswer": "",
            "choices": [211, 306, 312, 314],
            "group": ["ترماتود", "کرم"]
        },
        {
            "id": 207,
            "name": "تخم شیستوزوما هماتوبیوم",
            "image": "./parasites/207.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 203, 205, 210, 213, 214, 301, 302, 305, 308, 311],
            "group": ["ترماتود", "تخم"]
        },
        {
            "id": 208,
            "name": "شیستوزوما ژاپونیکوم نر",
            "image": "./parasites/208.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 209, 212, 303, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["ترماتود", "کرم"]
        },
        {
            "id": 209,
            "name": "شیستوزوما ژاپونیکوم ماده",
            "image": "./parasites/209.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 212, 303, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["ترماتود", "کرم"]
        },
        {
            "id": 210,
            "name": "تخم شیستوزوما ژاپونیکوم",
            "image": "./parasites/210.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 203, 205, 207, 213, 214, 301, 302, 305, 308, 311],
            "group": ["ترماتود", "تخم"]
        },
        {
            "id": 211,
            "name": "شیستوزوما مانسونی نر و ماده",
            "image": "./parasites/211.jpg",
            "qWord": "کرم‌های",
            "qAnswer": "",
            "choices": [206, 306, 312, 314],
            "group": ["ترماتود", "کرم"]
        },
        {
            "id": 212,
            "name": "شیستوزوما مانسونی ماده",
            "image": "./parasites/212.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 303, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["ترماتود", "کرم"]
        },
        {
            "id": 213,
            "name": "تخم شیستوزوما مانسونی",
            "image": "./parasites/213.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 203, 205, 207, 210, 214, 301, 302, 305, 308, 311],
            "group": ["ترماتود", "تخم"]
        },
        {
            "id": 214,
            "name": "سرکر شیستوزوما ها",
            "image": "./parasites/214.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 203, 205, 207, 210, 213, 301, 302, 305, 308, 311],
            "group": ["ترماتود", "تخم"]
        },
        {
            "id": 301,
            "name": "تخم بارور آسکاریس لومبریکوئیدس",
            "image": "./parasites/301.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 203, 205, 207, 210, 213, 214, 302, 305, 308, 311],
            "group": ["نماتود", "تخم"]
        },
        {
            "id": 302,
            "name": "تخم نابارور آسکاریس لومبریکوئیدس",
            "image": "./parasites/302.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 203, 205, 207, 210, 213, 214, 301, 305, 308, 311],
            "group": ["نماتود", "تخم"]
        },
        {
            "id": 303,
            "name": "انتروبیوس ورمیکولاریس نر",
            "image": "./parasites/303.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 212, 304, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["نماتود", "کرم"]
        },
        {
            "id": 304,
            "name": "انتروبیوس ورمیکولاریس ماده",
            "image": "./parasites/304.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 212, 303, 306, 307, 309, 310, 312, 313, 314, 315],
            "group": ["نماتود", "کرم"]
        },
        {
            "id": 305,
            "name": "تخم انتروبیوس ورمیکولاریس",
            "image": "./parasites/305.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 203, 205, 207, 210, 213, 214, 301, 302, 308, 311],
            "group": ["نماتود", "تخم"]
        },
        {
            "id": 306,
            "name": "تریکیوریس تریکیورا نر",
            "image": "./parasites/306.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 212, 303, 304, 307, 309, 310, 312, 313, 314, 315, 206, 211],
            "group": ["نماتود", "کرم"]
        },
        {
            "id": 307,
            "name": "تریکیوریس تریکیورا ماده",
            "image": "./parasites/307.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 212, 303, 304, 306, 309, 310, 312, 313, 314, 315],
            "group": ["نماتود", "کرم"]
        },
        {
            "id": 308,
            "name": "تخم تریکیوریس تریکیورا",
            "image": "./parasites/308.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 203, 205, 207, 210, 213, 214, 301, 302, 305, 311],
            "group": ["نماتود", "تخم"]
        },
        {
            "id": 309,
            "name": "لارو فیلاریفرم استرونژیلوئیدس استرکورالیس",
            "image": "./parasites/309.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 212, 303, 304, 306, 307, 310, 312, 313, 314, 315],
            "group": ["نماتود", "کرم"]
        },
        {
            "id": 310,
            "name": "لارو فیلاریفرم کرم‌های قلابدار",
            "image": "./parasites/310.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 212, 303, 304, 306, 307, 309, 312, 313, 314, 315],
            "group": ["نماتود", "کرم"]
        },
        {
            "id": 311,
            "name": "تخم کرم‌های قلابدار",
            "image": "./parasites/311.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [105, 107, 108, 112, 202, 203, 205, 207, 210, 213, 214, 301, 302, 305, 308],
            "group": ["نماتود", "تخم"]
        },
        {
            "id": 312,
            "name": "تریشینلا اسپیرالیس نر",
            "image": "./parasites/312.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 212, 303, 304, 306, 307, 309, 310, 313, 314, 315, 206, 211],
            "group": ["نماتود", "کرم"]
        },
        {
            "id": 313,
            "name": "تریشینلا اسپیرالیس ماده",
            "image": "./parasites/313.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 212, 303, 304, 306, 307, 309, 310, 312, 314, 315],
            "group": ["نماتود", "کرم"]
        },
        {
            "id": 314,
            "name": "لارو تریشینلا اسپیرالیس",
            "image": "./parasites/314.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 212, 303, 304, 306, 307, 309, 310, 312, 313, 315, 206, 211],
            "group": ["نماتود", "کرم"]
        },
        {
            "id": 315,
            "name": "لارو تریشینلا اسپیرالیس در عضله",
            "image": "./parasites/315.jpg",
            "qWord": "کرم",
            "qAnswer": "",
            "choices": [102, 103, 106, 110, 111, 201, 204, 208, 209, 212, 303, 304, 306, 307, 309, 310, 312, 313, 314],
            "group": ["نماتود", "کرم"]
        },
        {
            "id": 401,
            "name": "کیست انتامبا هیستولیتیکا",
            "image": "./parasites/401.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["آمیب", "تک‌یاخته"]
        },
        {
            "id": 402,
            "name": "کیست انتامبا کلی (۲ هسته‌ای)",
            "image": "./parasites/402.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["آمیب", "تک‌یاخته"]
        },
        {
            "id": 403,
            "name": "کیست انتامبا کلی (۸ هسته‌ای)",
            "image": "./parasites/403.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["آمیب", "تک‌یاخته"]
        },
        {
            "id": 404,
            "name": "تروفوزوئیت انتامبا کلی",
            "image": "./parasites/404.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["آمیب", "تک‌یاخته"]
        },
        {
            "id": 405,
            "name": "کیست بلاستوسیستیس هومینیس",
            "image": "./parasites/405.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["آمیب", "تک‌یاخته"]
        },
        {
            "id": 501,
            "name": "کیست ژیاردیا لامبلیا",
            "image": "./parasites/501.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["تاژک‌دار", "تک‌یاخته"]
        },
        {
            "id": 502,
            "name": "تروفوزوئیت ژیاردیا لامبلیا",
            "image": "./parasites/502.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["تاژک‌دار", "تک‌یاخته"]
        },
        {
            "id": 503,
            "name": "تروفوزوئیت دی آنتامبا فراژیلیس",
            "image": "./parasites/503.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["تاژک‌دار", "تک‌یاخته"]
        },
        {
            "id": 504,
            "name": "تروفوزوئیت تریکوموناس واژینالیس",
            "image": "./parasites/504.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["تاژک‌دار", "تک‌یاخته"]
        },
        {
            "id": 505,
            "name": "کیست بالانتیدیوم کلی",
            "image": "./parasites/505.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["تاژک‌دار", "تک‌یاخته"]
        },
        {
            "id": 506,
            "name": "تروفوزوئیت بالانتیدیوم کلی",
            "image": "./parasites/506.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["تاژک‌دار", "تک‌یاخته"]
        },
        {
            "id": 601,
            "name": "اووسیست ایزوسپرا بلی",
            "image": "./parasites/601.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["کوکسیدیا", "تک‌یاخته"]
        },
        {
            "id": 602,
            "name": "اووسیست کریپتوسپوریدیوم پاروم",
            "image": "./parasites/602.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["کوکسیدیا", "تک‌یاخته"]
        },
        {
            "id": 603,
            "name": "کیست نسجی توکسوپلاسما گوندی",
            "image": "./parasites/603.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["کوکسیدیا", "تک‌یاخته"]
        },
        {
            "id": 604,
            "name": "کیست کاذب توکسوپلاسما گوندی",
            "image": "./parasites/604.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["کوکسیدیا", "تک‌یاخته"]
        },
        {
            "id": 605,
            "name": "تاکی‌زوئیت توکسوپلاسما گوندی",
            "image": "./parasites/605.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["کوکسیدیا", "تک‌یاخته"]
        },
        {
            "id": 507,
            "name": "تریپانوزوما بروسئی گامبینس",
            "image": "./parasites/507.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["تاژک‌دار", "تک‌یاخته", "خون"]
        },
        {
            "id": 508,
            "name": "تریپانوزوما کروزی",
            "image": "./parasites/508.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["تاژک‌دار", "تک‌یاخته", "خون"]
        },
        {
            "id": 509,
            "name": "پروماستیگوت",
            "image": "./parasites/509.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["تاژک‌دار", "تک‌یاخته"]
        },
        {
            "id": 510,
            "name": "آماستیگوت",
            "image": "./parasites/510.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708],
            "group": ["تاژک‌دار", "تک‌یاخته"]
        },
        {
            "id": 701,
            "name": "اسپورزوئیت پلاسمودیوم",
            "image": "./parasites/701.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 702, 703, 704, 705, 706, 707, 708],
            "group": ["اسپوروزوا", "تک‌یاخته", "خون"]
        },
        {
            "id": 702,
            "name": "رینگ فرم پلاسمودیوم فالسیپاروم",
            "image": "./parasites/702.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 703, 704, 705, 706, 707, 708],
            "group": ["اسپوروزوا", "تک‌یاخته", "خون"]
        },
        {
            "id": 703,
            "name": "گامتوسیت پلاسمودیوم فالسیپاروم",
            "image": "./parasites/703.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 704, 705, 706, 707, 708],
            "group": ["اسپوروزوا", "تک‌یاخته", "خون"]
        },
        {
            "id": 704,
            "name": "گامتوسیت پلاسمودیوم ویواکس",
            "image": "./parasites/704.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 705, 706, 707, 708],
            "group": ["اسپوروزوا", "تک‌یاخته", "خون"]
        },
        {
            "id": 705,
            "name": "شیزونت نارس پلاسمودیوم ویواکس",
            "image": "./parasites/705.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 706, 707, 708],
            "group": ["اسپوروزوا", "تک‌یاخته", "خون"]
        },
        {
            "id": 706,
            "name": "تروفوزوئیت در حال رشد پلاسمودیوم ویواکس",
            "image": "./parasites/706.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 707, 708],
            "group": ["اسپوروزوا", "تک‌یاخته", "خون"]
        },
        {
            "id": 707,
            "name": "شیزونت رسیده پلاسمودیوم مالاریه",
            "image": "./parasites/707.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 708],
            "group": ["اسپوروزوا", "تک‌یاخته", "خون"]
        },
        {
            "id": 708,
            "name": "تروفوزوئیت پلاسمودیوم مالاریه",
            "image": "./parasites/708.jpg",
            "qWord": "",
            "qAnswer": "",
            "choices": [401, 402, 403, 404, 405, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707],
            "group": ["اسپوروزوا", "تک‌یاخته", "خون"]
        },
        {
            "id": 801,
            "name": "پولکس ایریتانس ماده",
            "image": "./parasites/801.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [802, 803, 804, 805, 806, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 802,
            "name": "کک نزوپسیلوس نر",
            "image": "./parasites/802.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 803, 804, 805, 806, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 803,
            "name": "گزنوپسیلا کئوپس ماده",
            "image": "./parasites/803.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 804, 805, 806, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 804,
            "name": "کتنوسفالیدس کنیس نر",
            "image": "./parasites/804.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 805, 806, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 805,
            "name": "پدیکولوس کاپیتیس نر",
            "image": "./parasites/805.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 806, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 806,
            "name": "پدیکولوس کاپیتیس ماده",
            "image": "./parasites/806.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 807,
            "name": "تخم پدیکولوس هومانوس",
            "image": "./parasites/807.jpg",
            "qWord": "تخم حشره",
            "qAnswer": "پدیکولوس هومانوس",
            "choices": ["پدیکولوس کاپیتیس", "فتیروس پوبیس", "آرگاس پرسیکوس", "سارکوپتس اسکابئی", "پولکس ایریتانس"],
            "group": ["حشره"]
        },
        {
            "id": 808,
            "name": "فتیروس پوبیس نر",
            "image": "./parasites/808.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 809, 810, 811, 812, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 809,
            "name": "فتیروس پوبیس ماده",
            "image": "./parasites/809.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 810, 811, 812, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 810,
            "name": "آرگاس پرسیکوس",
            "image": "./parasites/810.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 809, 811, 812, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 811,
            "name": "کنه درماسنتر اندرسونی نر",
            "image": "./parasites/811.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 809, 810, 812, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 812,
            "name": "کنه درماسنتر اندرسونی ماده",
            "image": "./parasites/812.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 809, 810, 811, 813, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 813,
            "name": "سارکوپتس اسکابئی نر",
            "image": "./parasites/813.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 809, 810, 811, 812, 814, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 814,
            "name": "سارکوپتس اسکابئی ماده",
            "image": "./parasites/814.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 809, 810, 811, 812, 813, 815, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 815,
            "name": "دمودکس فولیکولوروم",
            "image": "./parasites/815.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 809, 810, 811, 812, 813, 814, 816, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 816,
            "name": "سایمکس لکتولاریس نر",
            "image": "./parasites/816.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 809, 810, 811, 812, 813, 814, 815, 817, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 817,
            "name": "سایمکس لکتولاریس ماده",
            "image": "./parasites/817.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 809, 810, 811, 812, 813, 814, 815, 816, 822, 823],
            "group": ["حشره"]
        },
        {
            "id": 818,
            "name": "سر آنوفل نر",
            "image": "./parasites/818.jpg",
            "qWord": "سر پشه",
            "qAnswer": "آنوفل نر",
            "choices": ["آنوفل ماده", "کولکس نر", "کولکس ماده"],
            "group": ["حشره", "سر پشه"]
        },
        {
            "id": 819,
            "name": "سر آنوفل ماده",
            "image": "./parasites/819.jpg",
            "qWord": "سر پشه",
            "qAnswer": "آنوفل ماده",
            "choices": ["آنوفل نر", "کولکس نر", "کولکس ماده"],
            "group": ["حشره", "سر پشه"]
        },
        {
            "id": 820,
            "name": "سر کولکس نر",
            "image": "./parasites/820.jpg",
            "qWord": "سر پشه",
            "qAnswer": "کولکس نر",
            "choices": ["آنوفل نر", "آنوفل ماده", "کولکس ماده"],
            "group": ["حشره", "سر پشه"]
        },
        {
            "id": 821,
            "name": "سر کولکس ماده",
            "image": "./parasites/821.jpg",
            "qWord": "سر پشه",
            "qAnswer": "کولکس ماده",
            "choices": ["آنوفل نر", "آنوفل ماده", "کولکس نر"],
            "group": ["حشره", "سر پشه"]
        },
        {
            "id": 822,
            "name": "فلبوتوموس سرژانتی نر",
            "image": "./parasites/822.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 823],
            "group": ["حشره"]
        },
        {
            "id": 823,
            "name": "فلبوتوموس سرژانتی ماده",
            "image": "./parasites/823.jpg",
            "qWord": "حشره",
            "qAnswer": "",
            "choices": [801, 802, 803, 804, 805, 806, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 822],
            "group": ["حشره"]
        }
    ]
}
`;
const allLams = JSON.parse(JSONString).lams;

let currentQuestion = 0;
let selectedTopic = 'all'; // پیش‌فرض روی همه مباحث
let lams = []; // سوالاتی که بر اساس انتخاب کاربر فیلتر میشن
let score = 0;
let wrong = 0;
let timeLeft = 15;
let timerInterval;

// صداها (آدرس فایل‌ها را به مسیر صحیح تغییر بده)
// const clickSound = new Audio('/path_to_sounds/click.mp3');
// const wrongSound = new Audio('/path_to_sounds/wrong.mp3');
// const correctSound = new Audio('/path_to_sounds/correct.mp3');
// const timerEndSound = new Audio('/path_to_sounds/timer_end.mp3');

// شروع بازی
function startGame() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  updateScoreDisplay();

  // فیلتر سوالات بر اساس مبحث انتخاب‌شده
  if (selectedTopic === 'all') {
    lams = shuffleArray([...allLams]).slice(0, 35); // همه سوالات، رندوم
  } else {
    lams = shuffleArray(allLams.filter(q => q.group.includes(selectedTopic)));
  }

  console.log("Questions for this topic: ", lams);

  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('end-screen').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');
  loadQuestion();
  startTimer();
}

// تابع انتخاب مبحث و نمایش صفحه بازی
function selectTopic(topic) {
  selectedTopic = topic;
  startGame();
}

// بارگذاری سوال فعلی و گزینه‌ها
function loadQuestion() {
  const question = lams[currentQuestion];
  const imageBox = document.getElementById('question-image');
  imageBox.classList.add('fade-out');
  setTimeout(() => {
    if (question.qWord !== "") {
        qSentenceList = [
            "کدام %s در لام زیر مشاهده می‌شود؟",
            "تصویر زیر کدام %s را نشان می‌دهد؟",
            "در این تصویر، چه نوعی از %s دیده می‌شود؟",
            "لام زیر مربوط به کدام %s است؟",
            "کدام‌یک از گزینه‌ها مربوط به %s در لام زیر است؟"
        ];
        sentence = qSentenceList[Math.floor(Math.random() * qSentenceList.length)];
        sentence = sentence.replace("%s", question.qWord);
    } else {
        qSentenceList = [
            "در لام زیر چه مشاهده می‌شود؟",
            "تصویر زیر کدام یک از گزینه‌ها است؟",
            "در این تصویر چه دیده می‌شود؟",
            "کدام‌یک از موارد زیر با تصویر مطابقت دارد؟",
            "لام زیر متعلق به کدام گزینه است؟",
            "چه چیزی در لام زیر تشخیص داده می‌شود؟"
        ];
        sentence = qSentenceList[Math.floor(Math.random() * qSentenceList.length)];
    };
    
    document.getElementById('question-text').innerHTML = `<b>${currentQuestion + 1}.</b> ${sentence}`;
    document.getElementById('question-image').src = question.image;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    let options = question.choices.sort(() => 0.5 - Math.random()).slice(0, 3);
    (question.qAnswer == "") ? (options.push(question.name)) : (options.push(question.qAnswer));
    options = shuffleArray(options);

    // PRELOAD تصویر سوال بعدی
    if (currentQuestion + 1 < lams.length) {
      const preloadImage = new Image();
      preloadImage.src = lams[currentQuestion + 1].image;
    }

    // ساخت دکمه‌ها
    options.forEach((option, index) => {
      if (typeof option === "number") {
        console.log(option);
        var l = allLams.find(l => l.id === Number(option));
        console.log(l);
        var optionName = (l.qAnswer == "") ? (l.name) : (l.qAnswer);
      } else {
        optionName = option;
      };
      const button = document.createElement('button');
      button.className = 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all';
      button.textContent = optionName;
      button.onclick = () => selectOption(index);
      optionsContainer.appendChild(button);
    });

    // نوار پیشرفت را کامل کن
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '100%';

    imageBox.classList.remove('fade-out');
    imageBox.classList.add('fade-in');
  }, 300);
}


// شروع تایمر و کاهش تدریجی نوار پیشرفت از راست به چپ
function startTimer() {
  timeLeft = 15;
  const progressBar = document.getElementById('progress-bar');

  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft -= 0.05;
    let percentage = Math.max((timeLeft / 15) * 100, 0);
    progressBar.style.width = `${percentage}%`;
    progressBar.style.transformOrigin = 'right';

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // timerEndSound.play();
      revealCorrectAnswerAndNext();
    }
  }, 50);
}

// وقتی کاربر روی گزینه کلیک کرد
function selectOption(index) {
  // clickSound.play();

  clearInterval(timerInterval);

  const question = lams[currentQuestion];
  const buttons = document.querySelectorAll('#options-container button');

  const correctAnswerText = (question.qAnswer === "") ? question.name : question.qAnswer;

  let correctIndex = -1;
  buttons.forEach((btn, i) => {
    if (btn.textContent.trim() === correctAnswerText) {
      correctIndex = i;
    }
  });

  buttons.forEach((btn, i) => {
    btn.disabled = true;

    if (i === correctIndex) {
      btn.classList.add('bg-green-500');
    }

    if (i === index && i !== correctIndex) {
      btn.classList.add('bg-red-500');
      shakeElement(btn);
    }
  });
  buttons.forEach((btn) => {
  btn.classList.remove('hover:bg-blue-600');
});

  if (index === correctIndex) {
    score++;
    updateScoreDisplay();
    // correctSound.play();
  } else {
    wrong++;
    // wrongSound.play();
  }

  setTimeout(() => {
    nextQuestion();
  }, 2000);
}

// نمایش جواب درست وقتی تایمر تموم شد و رفتن به سوال بعدی
function revealCorrectAnswerAndNext() {
  const question = lams[currentQuestion];
  const buttons = document.querySelectorAll('#options-container button');

  const correctAnswerText = (question.qAnswer === "") ? question.name : question.qAnswer;

  buttons.forEach((btn) => (btn.disabled = true));

  buttons.forEach((btn) => {
    if (btn.textContent.trim() === correctAnswerText) {
      btn.classList.add('bg-green-500');
    }
  });

  setTimeout(() => {
    nextQuestion();
  }, 2000);
}

// آپدیت امتیاز روی صفحه
function updateScoreDisplay() {
  const scoreContainer = document.getElementById('score');
  scoreContainer.innerText = score;
}

// رفتن به سوال بعدی یا پایان بازی
function nextQuestion() {
  clearInterval(timerInterval);

  if (currentQuestion + 1 < lams.length) {
    currentQuestion++;
    loadQuestion();
    startTimer();
  } else {
    endGame();
  }
}

// نمایش صفحه پایان بازی
function endGame() {
  clearInterval(timerInterval);

  const gameScreen = document.getElementById('game-screen');
  gameScreen.classList.add('fade-out');

  setTimeout(() => {
    gameScreen.classList.add('hidden');
    gameScreen.classList.remove('fade-out');

    const endScreen = document.getElementById('end-screen');
    document.getElementById('final-score').innerText = `${score}`;
    total = score + wrong;
    document.getElementById('final-percent').innerText = `✅ درصد صحیح: ${(total === 0 ? 0 : (score / total) * 100).toFixed(1)}%`;
    document.getElementById('final-wrongs').innerText = `❌ تعداد غلط: ${wrong}`;
    endScreen.classList.remove('hidden');
    endScreen.classList.add('fade-in');
  }, 300);
}

// شروع مجدد بازی
function restartGame() {
  score = 0;
  wrong = 0;
  currentQuestion = 0;
  updateScoreDisplay();

  document.getElementById('end-screen').classList.add('hidden');
  document.getElementById('main-menu').classList.remove('hidden');
}

// افکت لرزش دکمه اشتباه
function shakeElement(element) {
  element.classList.add('shake');
  setTimeout(() => element.classList.remove('shake'), 500);
}

function shuffleArray(array) {
  const shuffled = [...array]; // make a copy to avoid mutating original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap
  }
  return shuffled;
}
