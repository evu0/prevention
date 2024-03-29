import styles from '../styles/About.module.css'
import Image from 'next/image'
import Intro from '../comps/Intro';
import PersonCard from '../comps/PersonCard';
import moha from '../public/moha.jpg'
import aasm from '../public/aasm.jpg'
import khalil from '../public/khalil.jpeg'
import hawaj from '../public/hawaj.jpeg'

const About = () => {
    return (  
        <>
        <div className={styles.container}>

            <Intro title={'من نحن'} image={'/team.svg'}/>


            <div className={styles.section}>

                <PersonCard name={'د. محمد الحمود'} role={'المؤسس'} pic={moha} link={'iimyha'} />
                <PersonCard name={'د. عاصم العبدالقادر'} role={'المشرف'} pic={aasm} link={'AssimAbdulKader'} />
                <PersonCard name={'د. خليل الوطيان'} role={'كاتب محتوى'} pic={khalil} link={'xkhalilz'} />
                <PersonCard name={'د. حسين الحواج'} role={'كاتب محتوى'} pic={hawaj} link={'HussainHWJ'} />

            </div>

            
        </div>
        </>
    );
}
 
export default About;