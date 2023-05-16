import Header from "../components/header/Header"

function Home () {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, TypeScript, NextJS, React, Redux</p>
                            <p>Ant Design, Material UI, Bootstrap</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>NestJS, Express, NodeJS, MongoDB, PostgreSQL</p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Home