import Link from "next/link";
// Стили
import "./styles/footer.scss";

export function Footer() {
	return (
			<footer>
				<div className="footer">
					{/*Копирайт*/}
					<p className="center_text">
						&#169; Нулевая угроза 2024
					</p>
					<h4>
						<Link href="tel:01">
							01 или 101
						</Link>
					</h4>
					<p>
						Единый телефон пожарных и спасателей
					</p>
					<h4 className="all_select">
						<Link href="tel:88127182505">
							8 (812) 718-25-05
						</Link>
					</h4>
					<p>
						Приемная
					</p>
					<h4 className="all_select">
						<Link href="tel:88122999999">
							8 (812) 299-99-99
						</Link>
					</h4>
					<p>
						Единый «телефон доверия»
					</p>
					<h4 className="all_select">
						<Link href="mailto:gu@78.mchs.gov.ru">
							gu@78.mchs.gov.ru
						</Link>
					</h4>
				</div>
			</footer>
	)
}