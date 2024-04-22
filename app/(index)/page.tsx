import {MaxSize} from "@components/maxSize";
import styles from "./index.module.scss"
import {Img, ImgBox} from "@components/img";
import {Form, FormButton, FormGroup, FormInput, FormLabel} from "@components/form";

export default function Main() {
	return (
			<main>
				<MaxSize>
					<h1>
						Нулевая угроза
					</h1>
					<h3 className="center_text">
						Ваш голос – наша сила: вместе против терроризма
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
						Получить профессиональную помощь
					</h3>
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
										placeholder="Возраст"
										name="age"
										autoComplete="age"
										type="number"
										required
										min={14}
										max={200}
								/>
							</FormLabel>
							<FormLabel>
								<FormInput
										placeholder="Почта"
										name="email"
										autoComplete="email"
										required
								/>
							</FormLabel>
							<FormGroup>
								<FormLabel>
									Онлайн
									<FormInput
											type="radio"
											name="where"
											defaultChecked
											autoComplete="where"
									/>
								</FormLabel>
								<FormLabel>
									Оффлайн
									<FormInput
											type="radio"
											name="where"
											autoComplete="where"
									/>
								</FormLabel>
							</FormGroup>
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