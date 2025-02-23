import React, { useContext } from 'react'
import { CalContext } from '../context/CalContext'

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'X': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
        '^': 'opt'
    }
    return className[btn]
}

const Button = ({value}) => {
        const {calc, setCalc} = useContext(CalContext)


        //user click comma
    const commaClick = () =>{
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }

    const resetClick = () => {
        setCalc({ sign: '', num: 0, res: 0})
    }

    // button clicks
    const handleClickButton = () => {
        const numberString = value.toString()

        let numberValue;
        if(numberString === '0' && calc.num === 0){
            numberValue = "0"
        }else{
            numberValue = Number(calc.num + numberString)
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }

    // opt click
    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num :calc.res,
            num: 0
        })
    }

    // user percentage click
    const percentClick = () => {
        setCalc({
            num: (calc.num / 100),
            res: (calc.res / 100),
            sign: ''
        })
    }

    // user invert click
    const invertclick = () => {
        setCalc({
            num: (calc.num ? calc.num * -1 : 0),
            res: (calc.res ? calc.res * -1 : 0),
            sign: ''
        })
    }

    //square of a number
    const squareclick = () => {

        setCalc({
            num: (calc.num ? calc.num * calc.num : 0),
            res: (calc.res ? calc.res * calc.res : 0),
            sign: ''
        })
    }

    // equals click
    const equalsClick = () => {
        if(calc.res &&  calc.num){
            const math = (a, b, sign) => {
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    'X': (a, b) => a * b,
                    '/': (a, b) => a / b,
                }
                return  result[sign](a, b)
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0, 
            })
        }
    }

    const handleClick = () => {
        const results = {
            ',': commaClick,
            'C': resetClick,
            '+': signClick,
            '-': signClick,
            'X': signClick,
            '/': signClick,
            '=': equalsClick,
            '%': percentClick,
            '+-': invertclick,
            '^': squareclick
        }
        if(results[value]) {
            return results[value]()
        }else{
            return handleClickButton()
        }
    }

  return (
    <button onClick={handleClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  )
}

export default Button
