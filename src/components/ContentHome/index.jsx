import logo from '../../assets/images/logo.svg'
import './style.css'
function ContentHome() {
    return (
        <div id="content">
            <main>
                <section>
                    <h1>Welcome to the Infinity Works homepage!</h1>
                    <hr />
                    <img src={logo} alt="logo" />
                </section>
            </main>
        </div>
    )
}

export default ContentHome