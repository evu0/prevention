export const PrevDB = [
// risk conditions: 
// 0 = Doesn't matter, 1 = Yes, 2 = No
// Male = 1, Female = 2
// BRCA-Related Cancer?? https://www.uspreventiveservicestaskforce.org/webview/#!/topic/413
    {
        id: 1,
        title: 'قياس ضغط الدم',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'مرة واحدة سنويًا',
                minAge: 40,
                maxAge: 999,
                bmi: 25,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
            {
                condition: 2,
                frequency: 'مرة واحدة كل ٣ - ٥ سنوات',
                minAge: 18,
                maxAge: 39,
                bmi: 0,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
        ]
    },
    {
        id: 2,
        title: 'فحص تمدد الأوعية الدموية بالأبهر البطني',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'مرة واحدة',
                minAge: 65,
                maxAge: 75,
                bmi: 0,
                gender: 1,
                preg: 0,
                menopause: 0,
                smokeb4: 1,
                sex: 0,
                risk: [0],
            },
        ]
    },
    {
        id: 3,
        title: 'فحص تجرثم البول',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'مرة واحدة في الأسبوع ۱۲ - ۱٦، أو في أول زيارة بعد الأسبوع ۱٦',
                minAge: 0,
                maxAge: 999,
                bmi: 0,
                gender: 2,
                preg: 1,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
        ]
    },
    {
        id: 4,
        title: 'فحص سرطان الثدي',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'مرة واحدة كل سنتين',
                minAge: 50,
                maxAge: 74,
                bmi: 0,
                gender: 2,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
        ]
    },
    {
        id: 5,
        title: 'فحص سرطان عنق الرحم',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'كل ۳ سنوات',
                minAge: 21,
                maxAge: 29,
                bmi: 0,
                gender: 2,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 1,
                risk: [0],
            },
            {
                condition: 2,
                frequency: 'كل ۳ - ٥ سنوات',
                minAge: 30,
                maxAge: 65,
                bmi: 0,
                gender: 2,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
        ]
    },
    {
        id: 6,
        title: 'فحص المتدثرة الحثرية والسيلان',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'لا توجد معلومات دقيقة',
                minAge: 0,
                maxAge: 24,
                bmi: 0,
                gender: 2,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 1,
                risk: [0],
            },
            {
                condition: 2,
                frequency: 'إذا تواجدت عوامل خطر',
                minAge: 25,
                maxAge: 999,
                bmi: 0,
                gender: 2,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 1,
                risk: ['riskySex'],
            },
        ]
    },
    {
        id: 7,
        title: 'فحص سرطان القولون',
        importance: 'الكشف المبكر لأورام القولون ومعالجتها',
        conditions: [
            {
                condition: 1,
                frequency: 'كل ۱ - ۱۰ سنوات',
                minAge: 45,
                maxAge: 75,
                bmi: 0,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
        ]
    },
    {
        id: 8,
        title: 'فحص الإكتئاب',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'لا توجد معلومات دقيقة',
                minAge: 18,
                maxAge: 999,
                bmi: 0,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
        ]
    },
    {
        id: 9,
        title: 'فحص سكر الحمل',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'مرة واحدة في الأسبوع ۲٤ أو بعده',
                minAge: 0,
                maxAge: 999,
                bmi: 0,
                gender: 2,
                preg: 1,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: ['noDM'],
            },
            
        ]
    },
    {
        id: 10,
        title: 'فحص فايروس التهاب الكبد الوبائي ب',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'سنويًا',
                // periodic screening
                minAge: 0,
                maxAge: 999,
                // USPSTF: adolescents and adults, didn't specify age
                // Amboss: all ages
                bmi: 0,
                gender: 0,
                preg: 2,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: ['HIV', 'IV', 'unvaccinated'],
                // individuals from endemic regions with prevalence ≥ 8%
            },
            {
                condition: 2,
                frequency: 'مرة واحدة عند أول زيارة للحمل',
                minAge: 0,
                maxAge: 999,
                bmi: 0,
                gender: 2,
                preg: 1,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: ['HIV', 'IV', 'unvaccinated'],
                // individuals from endemic regions with prevalence ≥ 8%
            },
        ]
    },
    {
        id: 11,
        title: 'فحص فايروس التهاب الكبد الوبائي ج',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'مرة واحدة',
                minAge: 18,
                maxAge: 79,
                bmi: 0,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: ['unvaccinated', 'IV', 'riskySex'],
            },
        ]
    },
    // {
    //     id: 13,
    //     title: 'عدوى السل',
    //     importance: '',
    //     conditions: [
    //         {
    //             condition: 1,
    //             frequency: 'لا يوجد معلومات',
    //             minAge: 0,
    //             maxAge: 999,
    //             bmi: 0,
    //             gender: 0,
    //             preg: 0,
    //             menopause: 0,
    //             smokeb4: 0,
    //             sex: 0,
    //             risk: [0], // ????
    //         },// for population with increased prevalence, at increased risk (person who born in or a former resident of countries with increased TB prevalence, or lived in high-risk congregate settings like homeless shelters and correctional facilities.
    //     ]
    // },
    {
        id: 14,
        title: 'قياس مؤشر كتلة الجسم',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'لا يوجد معلومات',
                minAge: 6,
                maxAge: 18,
                bmi: 0,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
        ]
    },
    {
        id: 15,
        title: 'فحص سرطان الرئة',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'مرة واحدة سنويًا',
                minAge: 50,
                maxAge: 80,
                bmi: 0,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 1,
                sex: 0,
                risk: [0],
            },// we should put the smoking years (screening for 20 pack-year smoking history, current smokeb4r, quit within the past 15 years. Screening stops if not smokeb4d for 15 years or develops health problem that limits life expectancy
        ]
    },
    {
        id: 16,
        title: 'فحص هشاشة العظام',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'لا يوجد معلومات',
                minAge: 45,
                maxAge: 65,
                bmi: 0,
                gender: 2,
                preg: 0,
                menopause: 1,
                smokeb4: 0,
                sex: 0,
                risk: ['lowBmi', 'smoker', 'steroid', 'fracture'],
            },// with increased risk (low BMI, excessive alcohol consumption, current smoking, long-term corticosteroid use, previous fractures, history of falls within the past year)
            {
                condition: 2,
                frequency: 'لا يوجد معلومات',
                minAge: 65,
                maxAge: 999,
                bmi: 0,
                gender: 2,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },// for all who are above 65 with or without risk factors
        ]
    },
    {
        id: 17,
        title: 'فحص سكر الدم',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'مرة واحدة كل ٣ سنوات',
                minAge: 35,
                maxAge: 70,
                bmi: 25,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
        ]
    },
    {
        id: 18,
        title: 'فحص تسمم الحمل',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'في كل زيارة خلال فترة الحمل',
                minAge: 0,
                maxAge: 999,
                bmi: 0,
                gender: 0,
                preg: 1,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
        ]
    },
    {
        id: 19,
        title: 'فحص تسوس الأسنان',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'لا يوجد معلومات',
                minAge: 0,
                maxAge: 5,
                bmi: 25,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },// oral fluoride supplements at age 6 months who water supply is deficient in fluoride, fluoride varnish to the primary teeth of all infants and children starting at the age of primary tooth eruption
        ]
    },
    {
        id: 20,
        title: 'فحص عدم توافق العامل الريزيسي',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'في أول زيارة خلال الحمل',
                minAge: 0,
                maxAge: 999,
                bmi: 0,
                gender: 2,
                preg: 1,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
            {
                condition: 2,
                frequency: 'إعادة الفحص في الأسبوع ٢٤ - ٢٨ من الحمل',
                minAge: 0,
                maxAge: 999,
                bmi: 0,
                gender: 2,
                preg: 1,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: ['bloodType'],
            },//for unsensitized Rh(D) negative pregnant women, unless biological father is known to be Rh negative
        ]
    },
    {
        id: 21,
        title: 'فحص مرض الزهري',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'لا يوجد معلومات',
                minAge: 0,
                maxAge: 999,
                bmi: 0,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: ['homo','HIV'],
            },//for at increased risk for infection (homosexuals, person living with HIV partner, history of incarceration, history of commercial sex work, male younger than 29 years)
            {
                condition: 2,
                frequency: 'في أقرب فرصة',
                minAge: 0,
                maxAge: 999,
                bmi: 0,
                gender: 2,
                preg: 1,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },//to prevent transmission to the fetus
        ]
    },
    {
        id: 24,
        title: 'فحص النظر',
        importance: '',
        conditions: [
            {
                condition: 1,
                frequency: 'مرة واحدة على الأقل',
                minAge: 3,
                maxAge: 5,
                bmi: 0,
                gender: 0,
                preg: 0,
                menopause: 0,
                smokeb4: 0,
                sex: 0,
                risk: [0],
            },
        ]
    },

    // EXCLUDED.
    // {
        //     id: 22,
        //     title: 'الكحول',
        //     importance: '',
        //     conditions: [
            //         {
                //             condition: 1,
                //             frequency: 'لا يوجد معلومات',
                //             minAge: 18,
                //             maxAge: 999,
                //             bmi: 0,
        
                //             gender: 0,
                //             preg: 0,
                // menopause: 0,
                //             smokeb4: 0,
                //             sex: 0,
                //             risk: 0,
                //         },// engage in risky or hazardous drinking
                //     ]
                // },
                // {
    //     id: 23,
    //     title: 'تعاطي المخدرات',
    //     importance: '',
    //     conditions: [
        //         {
            //             condition: 1,
            //             frequency: '',
            //             minAge: 18,
            //             maxAge: 999,
            //             bmi: 0,
    
            //             gender: 0,
            //             preg: 0,
            // menopause: 0,
            //             smokeb4: 0,
            //             sex: 0,
            //             risk: 0,
            //         },//Should be asked when there are services for accurate diagnosis, effective treatment, and appropriate care can be offered or referred (this is the frequency)
            //     ]
            // },
            // {
            //     id: 12,
            //     title: 'العنف الأسري',
            //     importance: '',
            //     conditions: [
            //         {
            //             condition: 1,
            //             frequency: 'لا يوجد معلومات',
            //             minAge: 15,
            //             maxAge: 49,
            //             bmi: 0,
    
            //             gender: 2,
            //             preg: 0,
            // menopause: 0,
            //             smokeb4: 0,
            //             sex: 0,
            //             risk: 0,
            //         },
            //     ]
            // },
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
    // IN AMBOSS ONLY.
    // {
    //     id: 2,
    //     title: 'تحليل الدهون في الدم',
    //     conditions: [
    //         {
    //             condition: 1,
    //             frequency: 'سنويًا',
    //             minAge: 0,
    //             maxAge: 999,
    //             bmi: 0,
    //             gender: 0,
    //             preg: 0,
    // menopause: 0,
    //             smokeb4: 0,
    //             sex: 0,
    //             risk: 'DM'
    //         },
    //         {
    //             condition: 2,
    //             frequency: 'كل 5 سنوات',
    //             minAge: 20,
    //             maxAge: 45,
    //             gender: 1,
    //             preg: 0,
    // menopause: 0,
    //             smokeb4: 0,
    //             sex: 0,
    //             risk: 0
    //         },
    //         {
    //             condition: 3,
    //             frequency: 'كل 5 سنوات',
    //             minAge: 20,
    //             maxAge: 55,
    //             bmi: 0,
    //             gender: 2,
    //             preg: 0,
    // menopause: 0,
    //             smokeb4: 0,
    //             sex: 0,
    //             risk: 0
    //         },
    //         {
    //             condition: 4,
    //             frequency: 'كل سنة أو سنتين',
    //             minAge: 46,
    //             maxAge: 65,
    //             gender: 1,
    //             preg: 0,
    // menopause: 0,
    //             smokeb4: 0,
    //             sex: 0,
    //             risk: 0
    //         },
    //         {
    //             condition: 5,
    //             frequency: 'كل سنة أو سنتين',
    //             minAge: 56,
    //             maxAge: 65,
    //             bmi: 0,
    //             gender: 2,
    //             preg: 0,
    // menopause: 0,
    //             smokeb4: 0,
    //             sex: 0,
    //             risk: 0
    //         },
    //         {
    //             condition: 6,
    //             frequency: 'سنويًا',
    //             minAge: 67,
    //             maxAge: 999,
    //             bmi: 0,
    //             gender: 2,
    //             preg: 0,
    // menopause: 0,
    //             smokeb4: 0,
    //             sex: 0,
    //             risk: 0
    //         },
    //         {
    //             condition: 7,
    //             frequency: 'سنويًا',
    //             minAge: 67,
    //             maxAge: 65,
    //             bmi: 0,
    //             gender: 2,
    //             preg: 0,
    // menopause: 0,
    //             smokeb4: 0,
    //             sex: 0,
    //             risk: 0
    //         },
    //         // stopped at pedia
    //     ]

    // },

]