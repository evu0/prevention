export const PrevDB = [
// risk conditions: 
// 0 = Doesn't matter, 1 = Yes, 2 = No
// Male = 1, Female = 2
// BRCA-Related Cancer?? https://www.uspreventiveservicestaskforce.org/webview/#!/topic/413
    {
        id: 1,
        title: 'قياس ضغط الدم',
        importance: 'يعتبر إرتفاع ضغط الدم حالة شائعة تكون فيها قوة اندفاع الدم طويلة الأمد مقابل جدران الشرايين مرتفعة بما يكفي للتسبب بمشكلات صحية؛ ومن الشائع إيضًا عدم ظهور أعراض لإرتفاع ضغط الدم ولذلك يسمى بـ" القاتل الصامت ". ',
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
        title: 'فحص تمدد الشريان الأبهر البطني',
        importance: 'يعتبر الشريان الأبهر أكبر وعاء دموي في الجسم، فعند تمدده يصبح عرضة للنزيف، والذي بدوره يهدد حياة الفرد.',
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
        importance: 'قد يؤدي تجرثم البول عند الحوامل إلى إلتهاب الكلى، والذي بدوره قد يتسبب في تدهور صحة الأم والجنين.',
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
        importance: 'يعتبر سرطان الثدي الأكثر شيوعًا بين النساء في المملكة العربية السعودية، ونسبة الوفاة منه تصل إلى ۸.٤%',
        // Source: Globocan
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
        importance: 'أغلب حالات سرطان عنق الرحم كانت ضمن النساء الّلاتي لم يتم فحصهن بشكل كافٍ.',

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
        importance: 'المتدثرة الحثرية والسيلان من أكثر العدوات المنقولة جنسيًا، قد يساعد الفحص المبكر تجنب المضاعفات وزيادة فعالية العلاج.',
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
        importance: 'يعتبر سرطان القولون ثالث أكثر سبب للوفاة من السرطانات؛ الفحص المبكر والمنتظم يقلل نسبة الوفيات من سرطان القولون.',
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
        importance: 'يعد الإكتئاب من أكثر الأسباب المرتبطة بإنخفاض جودة الحياة',
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
        importance: 'العلاج المبكر لسكر الحمل يحسن من صحة الأم والجنين ويقي من مضاعفاته في الحمل بالخصوص.',
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
        importance: '٦۸% من المصابين بفايروس التهاب الكبد الوبائي ب لا يعلمون أنهم مصابون به أصلًا، وذلك يزيد من نسبة انتقال الفايروس والمضاعفات الناتجة عنه. وهنا تكمن أهمية الفحص المبكر، حيث أن العلم بإصابة الفايروس سيقلل من نسبة انتشاره، والعلاجات ستقلل من نسبة حدوث المضاعفات الناتجة عنه.',
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
        importance: 'يعتبر فايروس التهاب الكبد الوبائي ج أكثر الأسباب شيوعًا للأمراض المزمنة المنتقلة عبر الدم، والعلاج المبكر يقلل من نسبة الوفيات. ',
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
        importance: 'السمنة غالبًا تكون مرتبطة مع الأمراض الجسدية والنفسية، باللإضافة إلى كون صاحبها عرضة للتنمر والمضايقة.',
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
        importance: 'يعتبر سرطان الرئة أكثر سبب للوفاة من السرطانات، والفحص المبكر يقلل نسبة الوفيات. ',
        // 7th cancer according to Globocan in saudi arabia, also better prognosis after detected early.
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
        importance: 'لتجنب الكسور الناتجة عن هشاشة العظام والتي قد تؤدي إلى الحد من ممارسة النشاطات اليومية، والألم المزمن، والإعاقة، وغيرها.',
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
        importance: 'يعتبر داء السكري من الأمراض المزمنة الشائعة، وهو السبب الأول والرئيسي للفشل الكلوي وفقدان البصر؛ ويرتبط داء السكري أيضًا مع زيادة نسبة حدوث أمراض القلب والشرايين. الفحص المبكر لسكر الدم يساعدنا على التشخيص والعلاج قبل حدوث أي مضاعفات نحن في غنى عنها.',
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
        importance: 'تسمم الحمل هو ارتفاع في ضغط الدم مع تواجد علامات التلف في جهاز عضوي آخر، وتركه قد يؤدي إلى مضاعفات خطيرة وربما قاتلة لكل من الأم والجنين؛ ولذلك، الفحص المبكر يعتبر خطوة جوهرية لبدأ العلاج للوقاية من المضاعفات المحتملة.',
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
        importance: 'يؤثر تسوس الأسنان في الطفولة سلبًا على جدوة الحياة، وينطوي ذلك على عدة أمور، كتدني الأداء الدراسي، وضعف النمي، وزيادة إحتمالية تسوس الأسنان مستقبلًأ.',
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
        importance: 'للوقاية من انحلال الدم الوليدي، والاستسقاء الجنيني، والإجهاض.',
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
        title: 'فحص داء الزهري',
        importance: 'العلاج المبكر لداء الزهري يقي من المضاعفات، وتطور المرض، ونقله إلى الآخرين.',
        conditions: [
            {
                condition: 1,
                frequency: 'لا توجد معلومات',
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
        importance: 'التشخيص المبكر للعين الكسولة (الغمش) أو عوامل الخطر المتعلقة به وعلاجها يؤدي إلى تحسن حدة النظر.',
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