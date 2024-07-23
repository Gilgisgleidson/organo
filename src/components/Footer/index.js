import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <img src='/images/fb.png' alt='face' />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <img src='/images/tw.png' alt='X'/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <img src='/images/ig.png' alt='insta'/>
                </a>
            </div>
            <img className='logo' src='/images/logo.png' alt='logo'/>
            <a href="https://github.com/gilgisgleidson" target="_blank" rel="noreferrer">
                <p>Desenvolvido por Marcelo Ferreira.</p>
            </a>
        </footer>
    )
}

export default Footer