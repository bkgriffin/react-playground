function Header() {
    return (
        <header>
            <nav>
                <img src="./logo192.png" width="40px" alt="logo" />
            </nav>
        </header>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library.</li>
                <li>React is an in demand skill.</li>
                <li>People love using React.</li>
                <li>I want to become a better developer through using React.</li>
            </ol>
            <footer>
                <small>© 2023 Griffin development.  All rights reserved</small>
            </footer>
        </div>
    )
}

export default Page;