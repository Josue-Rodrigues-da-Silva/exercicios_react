import Logo from "../../assets/img/logo/logo.png";
import style from "./header.module.css"

function Header() {
    return (
        <>
            <header>
                <div className={style.logo}>
                    <img className={style.logoimg} src={Logo} alt="" />
                </div>
                <div className="search">
                    <div className={style.input}>
                        <input className={style.inputSearch} 
                        type="text" 
                        name="search" 
                        id="search"
                        placeholder="Pesquisar produto" 
                        />
                    </div>
                </div>
                <div className={style.storeLinks}>
                    <a className="sign-up" href="">
                        Cadastre-se
                    </a>
                    <a className={style.btnlogin} href="">
                        Entrar
                    </a>
                    <a className="cart" href="">
                        Cart
                    </a>
                 </div>
                    
            </header>
        </>
    );
}

export default Header