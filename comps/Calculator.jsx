import styles from '../styles/Calculator.module.css'
import TextQ from './TextQ';
import {useState} from 'react';
import RadioQ from './RadioQ';
import Router from 'next/router';
import ls from 'local-storage';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Calculator = () => {
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [gender, setGender] = useState(0);
    const [preg, setPreg] = useState(0);
    const [smoke, setSmoke] = useState(0);
    const [sex, setSex] = useState(0);

    // Risk Factors
    const [smokeb4, setSmokeb4] = useState(0);
    const [sameSex, setSameSex] = useState(0);
    const [multipleSex, setMultipleSex] = useState(0);
    const [protection, setProtection] = useState(0);
    const [chronic, setChronic] = useState(0); 
    const [DM, setDM] = useState(0); 
    const [HTN, setHTN] = useState(0); 
    const [HIV, setHIV] = useState(0);
    const [bloodType, setBloodType] = useState(0);
    const [IVDrug, setIVDrug] = useState(0);

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
        if((gender === 0) || (smoke === 0)|| (sex === 0)){
        MySwal.fire({
                title: 'تأكد من الإجابة على جميع الأسئلة',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'الرجوع للأسئلة'
            })
        }else{
            // if preg and male, preg = 0 (same for smoking...)
            handleStorage();
            Router.push('/prevention');
        }
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

            {preg === 1 && (
                <>
                <RadioQ
                    question="هل فصيلة دمك سالبة ( -B- , A- , AB- , O )؟"
                    options={['نعم', 'لا']}
                    setAnswer={setBloodType}
                    answer={bloodType}
                />
                <RadioQ
                question="هل فصيلة دم شريكك موجبة ( +B+ , A+ , AB+ , O )؟"
                options={['نعم', 'لا']}
                setAnswer={setBloodType}
                answer={bloodType}
                />
                </>
            )}

            <RadioQ
                question="هل سبق لك التدخين؟"
                options={['نعم', 'لا']}
                setAnswer={setSmokeb4}
                answer={smokeb4}
            />

            {smokeb4 === 1 && (
            <RadioQ
                question="هل أنت مدخن حاليًا؟"
                options={['نعم', 'لا']}
                setAnswer={setSmoke}
                answer={smoke}
            />
            )}

            <RadioQ
                question="هل تمارس أي نشاطات جنسية؟"
                options={['نعم', 'لا']}
                setAnswer={setSex}
                answer={sex}
            />

            {sex === 1 && (
                <>
                <RadioQ
                    question="هل تتضمن نشاطاتك الجنسية أي علاقات من نفس جنسك؟"
                    options={['نعم', 'لا']}
                    setAnswer={setSameSex}
                    answer={sameSex}
                />
                <RadioQ
                    question="هل لديك أكثر من شريك جنسي؟"
                    options={['نعم', 'لا']}
                    setAnswer={setMultipleSex}
                    answer={multipleSex}
                />
                <RadioQ
                    question="هل تستخدم الواقي الذكري عند ممارسة النشاطات الجنسية؟"
                    options={['نعم', 'لا']}
                    setAnswer={setProtection}
                    answer={protection}
                />
                </>
            )}

                <RadioQ
                    question="هل لديك أي أمراض مزمنة؟"
                    options={['نعم', 'لا']}
                    setAnswer={setChronic}
                    answer={chronic}
                />

                {chronic === 1 && (
                    <>
                        <RadioQ
                            question="هل أنت مصاب بداء السكري؟"
                            options={['نعم', 'لا']}
                            setAnswer={setDM}
                            answer={DM}
                        />
                        <RadioQ
                            question="هل أنت مصاب بإرتفاع ضغط الدم؟"
                            options={['نعم', 'لا']}
                            setAnswer={setHTN}
                            answer={HTN}
                        />
                        <RadioQ
                            question="هل أنت مصاب بفيروس نقص المناعة البشرية؟"
                            options={['نعم', 'لا']}
                            setAnswer={setHIV}
                            answer={HIV}
                        />
                    </>
                )}

                <RadioQ
                    question="هل سبق لك استخدام عقاقير غير قانونية عبر الوريد؟"
                    options={['نعم', 'لا']}
                    setAnswer={setIVDrug}
                    answer={IVDrug}
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