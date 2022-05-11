import styles from '../styles/Calculator.module.css'
import TextQ from './TextQ';
import {useState, useEffect} from 'react';
import RadioQ from './RadioQ';
import Router from 'next/router';
import ls, { set } from 'local-storage';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { motion, AnimatePresence } from 'framer-motion';

const MySwal = withReactContent(Swal)

const Calculator = () => {
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [gender, setGender] = useState(0);
    const [preg, setPreg] = useState(0);
    const [smokeb4, setSmokeb4] = useState(0);   
    const [sex, setSex] = useState(0);
    let risk = [];

    // Risk Factors
    const [smoke, setSmoke] = useState(0);
    const [sameSex, setSameSex] = useState(0);
    const [multipleSex, setMultipleSex] = useState(0);
    const [protection, setProtection] = useState(0);
    const [chronic, setChronic] = useState(0); 
    const [DM, setDM] = useState(0); 
    const [HTN, setHTN] = useState(0); 
    const [HIV, setHIV] = useState(0);
    const [bloodType, setBloodType] = useState(0);
    const [IVDrug, setIVDrug] = useState(0);
    const [partnerBloodType, setPartnerBloodType] = useState(0);
    const [vaccination, setVaccination] = useState(0);
    const [steroid, setSteroid] = useState(0);
    const [fracture, setFracture] = useState(0);
    const [menopause, setMenoPause] = useState(0);

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
        prefix('smokeb4', smokeb4*1);
        prefix('sex', sex*1);
        if(bmiCal(weight, height) < 18.5){
            risk.push('lowBmi')
        }
        if(multipleSex === 1 || protection === 2){
            risk.push('riskySex')
        }
        if(DM === 2){
            risk.push('noDM')
        }
        if(HIV === 1){
            risk.push('HIV')
        }
        if(IVDrug === 1){
            risk.push('IV')
        }
        if(vaccination === 2){
            risk.push('unvaccinated')
        }
        if(smoke === 1){
            risk.push('smoker')
        }
        if(steroid === 1){
            risk.push('steroid')
        }
        if(fracture === 1){
            risk.push('fracture')
        }
        if(menopause === 1){
            risk.push('menopause')
        }
        if(bloodType === 1 && partnerBloodType === 1){
            risk.push('bloodType')
        }
        if(sameSex === 1){
            risk.push('homo')
        }
        prefix('risk', risk)

    }

    const popup = ()=>{
        MySwal.fire({
            title: 'تأكد من الإجابة على جميع الأسئلة',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'الرجوع للأسئلة'
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(
            (gender === 0) || (smokeb4 === 0)|| (sex === 0) || (chronic === 0) || (IVDrug === 0) || (vaccination === 0)
            || (gender === 2 && ((age >= 45 && age < 55 && menopause === 0) || preg === 0 || steroid === 0 || fracture === 0))
            || (preg === 1 && (bloodType === 0 || partnerBloodType === 0))
            || (smokeb4 === 1 && (smoke === 0))
            || (sex === 1 && (sameSex === 0 || multipleSex === 0 || protection === 0))
            || (chronic === 1 && (DM === 0 || HIV === 0))
            ){
            popup();
        }else{
            handleStorage();
            Router.push('/prevention');
        }
    }

    const variants = {
        hide: { y: -50, opacity: 0, height: 0, transition: {
            type: 'tween',
        }},
        show: { y: 0, opacity: 1, height: 'auto', transition: {
            type: 'tween',
        }},
    }
    // useEffect when male then --> preg = 0
    useEffect(()=>{
        if(gender === 1){
            setMenoPause(0)
            setPreg(2)
            setSteroid(0)
            setFracture(0)
        }
        if(smokeb4 === 2){
            setSmoke(0)
        }
        if(sex === 2){
            setSameSex(0)
            setMultipleSex(0)
            setProtection(0)
        }
        if(chronic === 2){
            setDM(0)
            setHIV(0)
        }
        if(preg === 2){
            setBloodType(0)
            setPartnerBloodType(0)
        }
    },[gender, smokeb4, sex, chronic, preg])
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

            <AnimatePresence>
            {gender === 2 && age >= 45 && age < 55 && (
                <motion.div
                variants={variants}
                initial={'hide'}
                animate={'show'}
                exit={'hide'}>
                    <RadioQ
                        question="هل أنتِ في سن اليأس؟"
                        options={['نعم', 'لا']}
                        setAnswer={setMenoPause}
                        answer={menopause}
                    />
                </motion.div>
            )}
            </AnimatePresence>

            <AnimatePresence>
            {gender === 2 && (
                <motion.div
                variants={variants}
                initial={'hide'}
                animate={'show'}
                exit={'hide'}
                >
                    <RadioQ
                        question="هل أنتِ حامل؟"
                        options={['نعم', 'لا']}
                        setAnswer={setPreg}
                        answer={preg}
                    />
                </motion.div>
            )}
            </AnimatePresence>

            <AnimatePresence>
            {preg === 1 && (
                <motion.div
                variants={variants}
                initial={'hide'}
                animate={'show'}
                exit={'hide'}
                >
                <RadioQ
                    question="هل فصيلة دمك سالبة ( -B- , A- , AB- , O )؟"
                    options={['نعم', 'لا']}
                    setAnswer={setBloodType}
                    answer={bloodType}
                />
                <RadioQ
                question="هل فصيلة دم شريكك موجبة ( +B+ , A+ , AB+ , O )؟"
                options={['نعم', 'لا']}
                setAnswer={setPartnerBloodType}
                answer={partnerBloodType}
                />
                </motion.div>
            )}
            </AnimatePresence>

            {/* THESE ARE RISK FACTORS FOR OSTEOPOROSIS */}

            <AnimatePresence>
            {gender === 2 && (
            <motion.div
            variants={variants}
            initial={'hide'}
            animate={'show'}
            exit={'hide'}
            >
                <RadioQ
                    question="هل تستخدم عقار الكورتيزون (Corticosteroid)؟"
                    options={['نعم', 'لا']}
                    setAnswer={setSteroid}
                    answer={steroid}
                />

                <RadioQ
                    question="هل حدثت لك كسور أو سقوطات مسبقًا؟"
                    options={['نعم', 'لا']}
                    setAnswer={setFracture}
                    answer={fracture}
                />
            </motion.div>
            )}
            </AnimatePresence>

            <RadioQ
                question="هل سبق لك التدخين؟"
                options={['نعم', 'لا']}
                setAnswer={setSmokeb4}
                answer={smokeb4}
            />

            <AnimatePresence>
            {smokeb4 === 1 && (
            <motion.div
            variants={variants}
            initial={'hide'}
            animate={'show'}
            exit={'hide'}
            >
                <RadioQ
                    question="هل أنت مدخن حاليًا؟"
                    options={['نعم', 'لا']}
                    setAnswer={setSmoke}
                    answer={smoke}
                />
            </motion.div>
            )}
            </AnimatePresence>

            <RadioQ
                question="هل تمارس أي نشاطات جنسية؟"
                options={['نعم', 'لا']}
                setAnswer={setSex}
                answer={sex}
            />

            <AnimatePresence>
            {sex === 1 && (
                <motion.div
                variants={variants}
                initial={'hide'}
                animate={'show'}
                exit={'hide'}
                >
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
                </motion.div>
            )}
            </AnimatePresence>

                <RadioQ
                    question="هل لديك أي أمراض مزمنة؟"
                    options={['نعم', 'لا']}
                    setAnswer={setChronic}
                    answer={chronic}
                />

                <AnimatePresence>
                {chronic === 1 && (
                    <motion.div
                    variants={variants}
                    initial={'hide'}
                    animate={'show'}
                    exit={'hide'}
                    >
                        <RadioQ
                            question="هل أنت مصاب بداء السكري؟"
                            options={['نعم', 'لا']}
                            setAnswer={setDM}
                            answer={DM}
                        />
                        {/* <RadioQ
                            question="هل أنت مصاب بإرتفاع ضغط الدم؟"
                            options={['نعم', 'لا']}
                            setAnswer={setHTN}
                            answer={HTN}
                        /> */}
                        <RadioQ
                            question="هل أنت مصاب بفيروس نقص المناعة البشرية؟"
                            options={['نعم', 'لا']}
                            setAnswer={setHIV}
                            answer={HIV}
                        />
                    </motion.div>
                )}
                </AnimatePresence>

                <RadioQ
                    question="هل سبق لك استخدام عقاقير غير قانونية عبر الوريد؟"
                    options={['نعم', 'لا']}
                    setAnswer={setIVDrug}
                    answer={IVDrug}
                />

                <RadioQ
                    question="هل سبق وأن أخذت لقاح فيروس الكبد الوبائي ب؟"
                    options={['نعم', 'لا']}
                    setAnswer={setVaccination}
                    answer={vaccination}
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