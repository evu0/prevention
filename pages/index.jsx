import Land from '../comps/Land'
import styles from '../styles/Home.module.css'
import Router from 'next/router'

export default function Home() {
    const handleClick = () => {
        Router.push('/consent')
    }
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <Land
          title="أهلا بك في كشوفاتي"
          description='لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة عقلانية.'
        />
        <button onClick={handleClick} className={styles.start}>
          أبدا الخدمة
        </button>
      </div>
      <div className={styles.left}>
      </div>
    </div>
  )
}
