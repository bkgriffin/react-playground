import './Page.css';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="./logo192.png" alt="logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library.</li>
                <li>React is an in demand skill.</li>
                <li>People love using React.</li>
                <li>I want to become a better developer through using React.</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2023 Griffin development.  All rights reserved</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default Page;