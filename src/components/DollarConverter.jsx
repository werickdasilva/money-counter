import { useState } from 'react'
import './DollarConverter.css'

export default function DollarConverter() {

    const [counterDollar, setCounterDollar] = useState(0)
    const [resultDollar, setResultDollar] = useState(0)

    const changeCounterDollar = e => {
        setCounterDollar(e.target.value)
        countakingDollarAmountterDollar()
    }
    const countakingDollarAmountterDollar = () => {
        fetch('https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=574d92ed389b9431e8fc')
            .then(response => response.json())
            .then(data => data.USD_BRL)
            .then(result => setResultDollar(result * counterDollar))
    }

    const formatReal = value => Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)

    return (
        <div className='DollarConverter'>
            <h1>Conversor de Dolar para Real</h1>
            <div>
                <label htmlFor="count-number">Digite a quantidade de dolares:</label>
                <input type="number" name="count-number" min={0} onChange={changeCounterDollar} />
                <input type="submit" value="Converter" onClick={countakingDollarAmountterDollar} />
                <p>A quantidade de dolares é {counterDollar < 1 ? 0 : counterDollar} e o valor total a pagar é {formatReal(resultDollar)}.</p>
            </div>
        </div>
    )
}