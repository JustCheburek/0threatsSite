import {MaxSize} from "@components/maxSize";
import styles from "./index.module.scss"
import {Img, ImgBox} from "@components/img";
import {Form, FormButton, FormGroup, FormInput, FormLabel} from "@components/form";
import Link from "next/link";

export default function Main() {
	return (
			<main>
				<MaxSize className="grid_center">
					<h1>
						Нулевая угроза
					</h1>
					<h3 className="center_text">
						Защищая жизнь, мы защищаем будущее
					</h3>
					<div className={`${styles.box} ${styles.opinion}`}>
						<ImgBox>
							<Img src="/psychologist.png" alt="Психолог" className={styles.img} width={300}/>
						</ImgBox>
						<q>
							Когда в наш мир вторгаются такие события, как теракты, сложно остаться от этого в стороне – хотя бы в мыслях.
						</q>
					</div>
					<h3 className="center_text">
						Получить ближайшие медцентры поблизости на почту
					</h3>
					<Link href="/resources" className={styles.link}>
						<h4 className="center_text semibold-font">
							или получить помощь онлайн
						</h4>
					</Link>
					<div className={`${styles.box} ${styles.form_box}`}>
						<Form>
							<FormLabel>
								<FormInput
										placeholder="Имя"
										name="name"
										autoComplete="name"
										required
								/>
							</FormLabel>
							<FormLabel>
								<FormInput
										placeholder="Возраст"
										name="age"
										autoComplete="age"
										type="number"
										required
										min={14}
										max={200}
								/>
							</FormLabel>
							<FormGroup>
								<FormLabel>
									М
									<FormInput
											type="radio"
											name="gender"
											defaultChecked
											autoComplete="gender"
									/>
								</FormLabel>
								<FormLabel>
									Ж
									<FormInput
											type="radio"
											name="gender"
											autoComplete="gender"
									/>
								</FormLabel>
							</FormGroup>
							<FormLabel>
								<FormInput
										placeholder="Почта"
										name="email"
										autoComplete="email"
										required
								/>
							</FormLabel>
							<FormLabel>
								<FormInput
										placeholder="Адрес"
										name="address"
										autoComplete="address"
								/>
							</FormLabel>
							<FormButton>
								Отправить
							</FormButton>
						</Form>
						<ImgBox>
							<Img src="/map.png" alt="Карта" className={styles.img}/>
						</ImgBox>
					</div>
				</MaxSize>
			</main>
	)
}