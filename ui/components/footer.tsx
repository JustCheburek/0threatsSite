// Стили
import "./styles/footer.scss";

export function Footer() {
    const YEAR = new Date().getFullYear()

    return (
        <footer>
            <div className="footer">
                {/*Копирайт*/}
                <p className="center_text">
                    &#169; Нулевая угроза 2024-{YEAR}
                </p>
            </div>
        </footer>
    )
}