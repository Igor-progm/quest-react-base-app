import './button.css'

const Button = ({label}) => {
    const clickMessage = () => {
        alert(`A label desse botão é ${label}`)
    }
    return (
        <button className='btn' onClick={() => clickMessage()}>{label}</button>
    )
}

export default Button