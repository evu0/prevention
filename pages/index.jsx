import Land from '../comps/Land'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import ls from 'local-storage'
import Intro from '../comps/Intro'
import Image from 'next/image'

export default function Home() {
    const handleClick = () => {
      if (ls.get('screen-consent') === true){
        Router.push('/questions')
      }else{
        Router.push('/consent')
      }
    };

    const handleLoad = () => {
      Router.push('/prevention')
    };

  return (

    <>
    {/* if mobile, this will show */}
    <div className={styles.landMobile}>
      <Intro title="فحوصاتي" image="/landing.png" />
      <Land
          title=""
          description="فحوصاتي هو أول تطبيق عربي غير ربحي يهدف لتعزيز الصحة عبر التثقيف بأهمية الفحوصات الموصى بها لأفراد المجتمع بأسلوب يتميز بتبسيط المعلومات المقدمة مع الحفاظ على دقتها العلمية"
      />
        <button onClick={handleClick} className={styles.start}>
          ابدأ الخدمة
        </button>

        {ls.get('screen-age') && (
          <button onClick={handleLoad} className={styles.load}>
            النتيجة السابقة
          </button>
        )}

    </div>

    <div className={styles.container}>
 
      <div className={styles.right}>
        <Land
          title="أهلًا بك في فحوصاتي"
          description="أول تطبيق عربي غير ربحي يهدف لتعزيز الصحة عبر التثقيف بأهمية الفحوصات الموصى بها لأفراد المجتمع بأسلوب يتميز بتبسيط المعلومات المقدمة مع الحفاظ على دقتها العلمية"
          />
        <button onClick={handleClick} className={styles.start}>
          ابدأ الخدمة
        </button>

        {ls.get('screen-age') && (
          <button onClick={handleLoad} className={styles.load}>
            النتيجة السابقة
          </button>
        )}

      </div>

      <div className={styles.left}>
        <img src="/landing.png" alt='landing' />
      </div>

    </div>
    </>
  )
}
