import styles from '../styles/About.module.css'
import Image from 'next/image'
import Intro from '../comps/Intro';
import PersonCard from '../comps/PersonCard';
import moha from '../public/moha.png'
import aasm from '../public/aasm.jpg'
import khalil from '../public/khalil.jpeg'
import hawaj from '../public/hawaj.jpeg'

const About = () => {
    return (  
        <>
        <div className={styles.container}>

            <Intro title={'من نحن'} image={'/team.svg'}/>


            <div className={styles.section}>

                <PersonCard name={'محمد الحمود'} role={'المؤسس'} pic={moha} link={'iimyha'} />
                <PersonCard name={'د. عاصم العبدالقادر'} role={'المشرف'} pic={aasm} link={'AssimAbdulKader'} />
                <PersonCard name={'خليل الوطيان'} role={'كاتب محتوى'} pic={khalil} link={'xkhalilz'} />
                <PersonCard name={'حسين الحواج'} role={'كاتب محتوى'} pic={hawaj} link={'HussainHWJ'} />

                {/* <span className={styles.title}>
                    قصتنا
                </span>

                <p className={styles.content}>
                بدأت قصة تطبيق كشوفاتي في عيادات مستشفى طب الأسرة والمجتمع في جامعة الإمام عبدالرحمن بن فيصل،
                حيث ألهمتني زيارات المراجعين بأهمية وجود ثقافة عن الفحوصات المتطلبة على أفراد المجتمع،
                لاحظت بأن العديد من المراجعين يتم تشخيصهم بأمراض مزمنة بعد مكوثها في إجسادهم لفترة تسمح لها بإلحاق أضرار هم في غنى عنها،
                فكم هي أخبار مؤسفة خصوصًا عند معرفة أن كل ذلك كان بالإمكان تجنبه لو أنهم قد تم تشخيصهم مسبقًا.
                وعند الحديث عن التثقيف، يستوحي في بالي الأركان التوعوية البدائية المليئة بالملل، فهل يمكننا أيصال المعلومة بشكل أسهل وأمتع؟
                وهنا بدأت بتكوين هذا التطبيق، ليكون وسيلة مساعدة لنشر الوعي وبناء مجتمع صحي.
                </p> */}

            </div>

            
        </div>
        </>
    );
}
 
export default About;