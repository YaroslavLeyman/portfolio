function Contacts () {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Moscow, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <a href="https://t.me/Yaroslav_lmn" target="_blank" rel="noreferrer">@Yaroslav_lmn</a>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <a href="mailto:yaroslavleiman@yandex.ru" target="_blank" rel="noreferrer">yaroslavleiman@yandex.ru</a>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Contacts