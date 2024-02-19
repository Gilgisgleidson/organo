import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <a href="facebook.com/organo" target="_blank">
                    <img src='/images/fb.png' alt='face' />
                </a>
                <a href="twitter.com/organo" target="_blank">
                    <img src='/images/tw.png' alt='X'/>
                </a>
                <a href="instagram.com/organo" target="_blank">
                    <img src='/images/ig.png' alt='insta'/>
                </a>
            </div>
            <img className='logo' src='/images/logo.png' alt='logo'/>
            <p>Desenvolvido por Marcelo Ferreira.</p>
        </footer>
    )
}

export default Footer