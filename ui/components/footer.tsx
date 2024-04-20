import Link from "next/link";
// Стили
import styles from "./styles/footer.module.scss";

export function Footer() {
	return (
			<footer className={styles.container}>
				<div className={styles.box}>
					<div>
						<div className={styles.help}>
							<h4>
								<Link href="tel:01">
									01 или 101
								</Link>
							</h4>
							<small>
								Единый телефон пожарных и спасателей
							</small>
						</div>
						<div className={styles.help}>
							<h4 className="all_select">
								<Link href="tel:88127182505">
									8 (812) 718-25-05
								</Link>
							</h4>
							<small>
								Приемная
							</small>
						</div>
						<div className={styles.help}>
							<h4 className="all_select">
								<Link href="tel:88122999999">
									8 (812) 299-99-99
								</Link>
							</h4>
							<small>
								Единый «телефон доверия»
							</small>
						</div>
						<div className={styles.help}>
							<h4 className="all_select">
								<Link href="mailto:gu@78.mchs.gov.ru">
									gu@78.mchs.gov.ru
								</Link>
							</h4>
							<small>
								Почта МЧС
							</small>
						</div>
					</div>
					{/*Копирайт*/}
					<p className="center_text">
						&#169; Нулевая угроза 2024
					</p>
				</div>
			</footer>
	)
}