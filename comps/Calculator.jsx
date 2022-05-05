import styles from '../styles/Calculator.module.css'
import TextQ from './TextQ';
import {useState} from 'react';
import RadioQ from './RadioQ';
import Router from 'next/router';
import ls from 'local-storage';

const Calculator = () => {
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [gender, setGender] = useState(0);
    const [preg, setPreg] = useState(0);
    const [smoke, setSmoke] = useState(0);
    const [sex, setSex] = useState(0);
    // add chronic diseases

    const prefix = (key, value) => {
        ls.set(`screen-${key}`, value)
    }

    const toMeter = (cm) => {
        return (cm / 100)
    }

    const bmiCal = (kg, cm) => {
        return Math.round( (kg*1) / ( toMeter(cm) * toMeter(cm) ) ).toFixed(2)*1;
    }


    const handleStorage = () => {
        prefix('age', age*1);
        prefix('bmi', bmiCal(weight, height));
        prefix('gender', gender*1);
        prefix('preg', preg*1);
        prefix('smoke', smoke*1);
        prefix('sex', sex*1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleStorage();
        Router.push('/prevention');
    }

    return ( 
        <form onSubmit={handleSubmit} className={styles.container}>
            <TextQ
                question="العمر"
                setAnswer={setAge}
            />
            <TextQ
                question="الوزن بالكيلوجرام"
                setAnswer={setWeight}
            />
            <TextQ
                question="الطول بالسانتيميتر"
                setAnswer={setHeight}
            />
            <RadioQ
                question="الجنس:"
                options={['ذكر', 'أنثى']}
                setAnswer={setGender}
                answer={gender}
            />
            {gender === 2 && (
                <div className={styles.preg}>
                    <RadioQ
                        question="هل أنتِ حامل؟"
                        options={['نعم', 'لا']}
                        setAnswer={setPreg}
                        answer={preg}
                    />
                </div>
            )}
            <RadioQ
                question="هل أنت مدخن؟"
                options={['نعم', 'لا']}
                setAnswer={setSmoke}
                answer={smoke}
            />
            <RadioQ
                question="نشاطات جنسية؟"
                options={['نعم', 'لا']}
                setAnswer={setSex}
                answer={sex}
            />
            <div className={styles.submit}>
                <button className={styles.button} type='submit'>
                    تأكيد
                </button>
            </div>
        </form>
    );
}
 
export default Calculator;