import tgLogo from './imgs/tg.png'
export default function Header() {
return (
<header>

        {/* <img src='logo' alt='logo' className='logo'></img> */}
        <h1 className='helenMain'>Елена <b>Вашкевич</b></h1>
<div className="contacts">
        <a href='tel:+79875817720' className='phoneHead'>
            +7 987 581 7720
        </a>

        {/* <a className='tg' href='https://web.telegram.org/k/#@helen_vash'>
            <img className='tgLogo' src={tgLogo} alt="" />
            <p>телеграм</p>
        </a> */}
        <a href='https://t.me/vnuchkapuskina' className='tgc'>
        <img className='tgLogo' src={tgLogo} alt="" />
        </a>
</div>
</header>
)

}