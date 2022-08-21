export const PrevDB = [
// risk conditions: 
// 0 = Doesn't matter, 1 = Yes, 2 = No
// Male = 1, Female = 2
// BRCA-Related Cancer?? https://www.uspreventiveservicestaskforce.org/webview/#!/topic/413
    {
        id: 1,
        title: 'قياس ضغط الدم',
        importance: "ارتفاع ضغط الدم هو مرض شائع يحدث عند ارتفاع ضغط الدم بشكل مستمر على جدران الأوعية الدموية وعلى مدى طويل، والذي بدوره قد يسبب مشاكل صحية خطيرة؛ قد يسبب ارتفاع ضغط الدم بعض الأعراض مثل ألم في الرأس (صداع)، دوخة أو غشاوة في النظر، ولكن في الغالب لا يكون هناك أي أعراض لارتفاع ضغط الدم.",
        link: 'https://www.moh.gov.sa/awarenessplateform/ChronicDisease/Pages/Hypertension.aspx',
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
        title: 'فحص الشريان الأبهر البطني',
        importance: "يعتبر الشريان الأبهر أكبر وعاء دموي في الجسم، وقد يتمدد بسبب عوامل وراثية أو التدخين خصوصا لدى كبار السن، مما يجعله أكثر عرضة للنزيف.",
        link: 'https://www.mayoclinic.org/ar/diseases-conditions/abdominal-aortic-aneurysm/symptoms-causes/syc-20350688',
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
        title: 'فحص البول',
        importance: "قد يؤدي وجود الجراثيم (خصوصًا البكتيريا) في البول لدى الحوامل إلى التهاب في المثانة البولية أو الكلى، والذي بدوره قد يتسبب في تدهور صحة الأم والجنين، ومن الشائع عدم وجود أعراض له.",
        link: 'https://ar.wikipedia.org/wiki/%D8%A8%D9%8A%D9%84%D8%A9_%D8%AC%D8%B1%D8%AB%D9%88%D9%85%D9%8A%D8%A9',
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
        title: 'فحص أورام الثدي',
        importance: "يعتبر سرطان الثدي الأكثر شيوعًا لدى النساء على مستوى المملكة، والفحص المبكر بالأشعة (الماموغرام أو الأشعة الصوتية) يزيد من نسبة الشفاء إلى أكثر من ۹٥%.",
        link: 'https://www.moh.gov.sa/awarenessplateform/ChronicDisease/Pages/BreastCancer.aspx',
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
        importance: "سرطان عنق الرحم هو أحد أنواع السرطان الشائعة الذي يصيب الإناث في منطقة عنق الرحم نتيجة وجود نمو غير طبيعي للخلايا المكونة لهذا الجزء، وأغلب حالات سرطان عنق الرحم كانت ضمن النساء الّلاتي لم يتم فحصهن بشكل كافٍ؛ ومن عوامل الخطورة الإصابة بالفيروس الحليمي والتدخين.",
        link: 'https://www.moh.gov.sa/awarenessplateform/ChronicDisease/Pages/CervicalCancer.aspx',
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
        importance: "المتدثرة الحثرية والسيلان من أكثر العدوات البكتيرية التي تنتقل جنسيًا أو عبر التعرض لدم شخص مصاب، وقد يساعد الفحص المبكر في زيادة فعالية العلاج وتجنب المضاعفات.",
        link: 'https://www.moh.gov.bh/healthinfo/DiseaseDetail/60',
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
        title: 'فحص أورام القولون',
        importance: "يعتبر سرطان القولون والمستقيم أحد أكثر السرطانات انتشارًا بالعالم لدى الرجال والنساء؛ والفحص المبكر والمنتظم حسب التوصيات العلمية يقلل من نسبة الوفيات ويزيد من نسبة نجاح العلاج والشفاء.",
        link: 'https://www.moh.gov.sa/awarenessplateform/ChronicDisease/Pages/ColorectalCancer.aspx',
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
        title: 'فحص الاكتئاب',
        importance: "الاكتئاب مرض شائع يجعل نظرة الإنسان للحياة سوداوية، لا يستمتع بشيء ودائما حزين، افحص واجعل حياتك أجمل. ٥۰% من الناس اللذين يعانون من الاكتئاب لم يتم تشخيصهم بعد، وهو أكثر مرض نفسي منتشر في العيادات الأولية.",
        link: 'https://www.moh.gov.sa/awarenessplateform/VariousTopics/Pages/Depression.aspx',
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
        importance: "يتم تشخيص المرأة الحامل بسكري الحمل عندما يتم تشخيصها بداء السكري لأول مرة أثناء الحمل وذلك من خلال فحص خاص لمستويات السكر في الدم. الكشف والعلاج المبكر لسكري الحمل يحسن من صحة الأم والجنين ويقي من مضاعفاته مثل زيادة حجم الجنين وعسر الولادة.",
        link: 'https://www.moh.gov.sa/HealthAwareness/EducationalContent/Diseases/diabetic/Pages/005.aspx',
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
        title: 'فحص التهاب الكبد الفيروسي ب',
        importance: "٦۸% من المصابين بفيروس التهاب الكبد الوبائي ب لا يعلمون أنهم مصابون به أصًلا، وذلك يزيد من نسبة انتقال الفايروس والمضاعفات الناتجة عنه مثل تليف الكبد. يتوفر لقاح للوقاية من هذا الفيروس لفئة معينة من الناس بعد استشارة الطبيب.",
        link: 'https://www.moh.gov.sa/awarenessplateform/VariousTopics/Pages/HepatitisB.aspx',
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
        title: 'فحص التهاب الكبد الفيروسي ج',
        importance: "ينتقل الفايروس عن طريق الدم وهو أكثر الأسباب شيوًعا للأمراض المزمنة المنتقلة عبر الدم، فالفحص والعلاج المبكر يقللان من نسبة الوفيات. يتوفر علاج لالتهاب الكبد الفيروسي ج.",
        link: 'https://www.moh.gov.sa/HealthAwareness/EducationalContent/Diseases/Infectious/CommonandViralHepatitisDiseases/Typesofdisease/Pages/02.aspx',
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
        title: 'قياس مؤشر كتلة الجسم (BMI)',
        importance: "زيادة الوزن والسمنة قد تكون نتيجة لنمط حياة غير صحي، أو نتيجةً لمرض وراثي أو مزمن، فالفحص سيساعد طبيبك على اكتشاف المشكلة وحلها، إضافة إلى تفادي مضاعفات السمنة الجسدية والنفسية. ",
        link: 'https://www.moh.gov.sa/awarenessplateform/ChronicDisease/Pages/Obesity.aspx',
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
        title: 'فحص أورام الرئة',
        importance: "يعتبر سرطان الرئة أكثر سبب للوفاة مقارنة ببقية السرطانات الشائعة، خاصةً لدى المدخنين، والفحص المبكر يزيد من فرصة العلاج والشفاء، ويقلل من خطر الوفاة المبكرة.",
        link: 'https://www.moh.gov.sa/awarenessplateform/ChronicDisease/Pages/LungCancer.aspx',
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
                risk: ['packs'],
            },// we should put the smoking years (screening for 20 pack-year smoking history, current smokeb4r, quit within the past 15 years. Screening stops if not smokeb4d for 15 years or develops health problem that limits life expectancy
        ]
    },
    {
        id: 16,
        title: 'فحص هشاشة العظام',
        importance: "لا يوجد لهشاشة العظام أعراض تمكننا من معرفة وجودها إلا الكسور المفاجئة خصوصا الناتجة من حوادث السقوط. تشخيص هشاشة العظام مبكراً يمنح فرصة لتفادي المسببات وعلاجها بشكل أفضل لتفادي الكسور ومضاعفاتها خصوصا لدى كبار السن.",
        link: 'https://www.moh.gov.sa/HealthAwareness/EducationalContent/Diseases/OrthopedicDiseases/Pages/001.aspx',
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
        importance: "يعتبر داء السكري (النوع الثاني) من أكثر الأمراض المزمنة انتشارا على مستوى العالم، ويهدف الفحص المبكر إلى التعرف على المصابين بداء السكري أو ما قبل السكري لكي يتمكن الطبيب من بدء العلاج المناسب للوقاية من مضاعفات السكري مثل أمراض القلب والشرايين، اعتلال الكلى والعيون والأعصاب.",
        link: 'https://www.moh.gov.sa/awarenessplateform/ChronicDisease/Pages/Diabetes.aspx',
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
        importance: "يحصل تسمم الحمل لدى المرأة الحامل عند ارتفاع ضغط الدم، مع وجود زلال البول وقد يصاحبه تورم شديد في القدمين. يتم تشخيص هذا المرض بعد الأسبوع العشرون من الحمل، وقد يؤدي إلى مضاعفات مثل التشنجات والفشل الكلوي والولادة المبكرة. الكشف المبكر والمتابعات الدورية لضغط الدم أثناء الحمل مهم للوقاية والعلاج.",
        link: 'https://www.moh.gov.sa/HealthAwareness/EducationalContent/wh/Pages/007.aspx',
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
        importance: "يعتبر تسوس الأسنان من أكثر أمراض الفم والأسنان انتشارا في المملكة العربية السعودية. زيارة طبيب الأسنان بشكل دوري (مرة كل ٦ شهور) تساهم في الحفاظ على صحة الأسنان وتجنب مضاعات التسوس في المستقبل مثل التهابات اللثة وتجمع الصديد والخرّاج.",
        link: 'https://www.moh.gov.sa/awarenessplateform/OralHealth/Pages/DentalCaries.aspx',
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
        title: 'فحص عدم توافق فصيلة الدم (العامل الريزيسي)',
        importance: "يحدث عدم توافق العامل الريزيسي عندما يكون سلبيًا في دم الأم وإيجابيًا في دم الجنين، مما قد يضر بكريات الدم الحمراء للجنين وحدوث فقر الدم واليرقان (الصفار).",
        link: 'https://www.mayoclinic.org/ar/tests-procedures/rh-factor/about/pac-20394960',
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
        importance: "يعتبر داء الزهري من الأمراض التي تنتقل بالممارسات الجنسية أو التعرض لدم شخص مصاب، ينتج عنه طفح جلدي وحمى وقد يسبب مضاعفات مزمنة في الأوعية الدموية والدماغ. الفحص والكشف المبكر للمرض يعتبر خطوة مهمة في الوقاية والعلاج.",
        link: 'https://www.mayoclinic.org/ar/diseases-conditions/syphilis/symptoms-causes/syc-20351756#:~:text=%D8%AF%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D9%8A%20%D9%87%D9%88%20%D8%B9%D8%AF%D9%88%D9%89%20%D8%A8%D9%83%D8%AA%D9%8A%D8%B1%D9%8A%D8%A9,%D9%85%D9%84%D8%A7%D9%85%D8%B3%D8%A9%20%D8%A7%D9%84%D8%BA%D8%B4%D8%A7%D8%A1%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D8%B7%D9%8A%20%D9%84%D9%87%D8%B0%D9%87%20%D8%A7%D9%84%D9%82%D8%B1%D9%88%D8%AD.',
        conditions: [
            {
                condition: 1,
                frequency: 'لا توجد معلومات',
                minAge: 0,
                maxAge: 999,
                bmi: 0,
                gender: 0,
                preg: 2,
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
        importance: "يهدف الفحص لاكتشاف مشاكل النظر مبكراً لعلاجها وتجنب مضاعفاتها مثل اعتلال الشبكية وارتفاع ضغط العين والماء الأبيض.",
        link: 'https://www.moh.gov.sa/awarenessplateform/VariousTopics/Documents/EyesHealth.pdf',
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