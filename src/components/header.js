import '../App.css';

export default function HeaderComponent() {
    return(
        <div className="header">
            <div className='header-main'>
                <img src={require('../assets/trollFace.png')} className="header-img"/>
                <h1 className='header-title'>Meme Generator</h1>
            </div>
            <h2 className='header-text'>React Course - Project 3</h2>
        </div>
    )
}