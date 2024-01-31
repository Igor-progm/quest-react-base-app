import './text.css'

const Text = ({title}) => {
    return (
        <div className='text'>
            <p style={{color: 'green'}}>{title}</p>
        </div>
    )
}

export default Text