import {MaxSize} from "@components/maxSize";
import type {Metadata} from "next";
import {PBox, PText, PTitle} from "@components/post";
import {OnThisPage, OnThisPageItem} from "@components/sideNav";

export const metadata: Metadata = {
	title: "После происшествия | Нулевая угроза",
	description: "Как действовать в различных ситуациях?"
};

export default function Resources() {
	return (
			<main>
				<MaxSize sideNav>
					<div/>

					<div className="content">
						<h1>После происшествия</h1>

						<PBox id="self-help">
							<PTitle>
								<h2>
									Как помочь себе
								</h2>
							</PTitle>
							<PText>
								<ul>
									<li>
										<p className="medium-font">
											Дайте себе время на переживание.
										</p>
										<p>
											Не думайте, что вы должны сразу же прийти в себя.
										</p>
									</li>
									<li>
										<p className="medium-font">
											Поговорите о своих чувствах.
										</p>
										<p>
											Вы не одиноки. Есть много людей, которые готовы вам помочь.
										</p>
									</li>
									<li>
										<p className="medium-font">
											Не смотрите новости и не читайте о произошедшем.
										</p>
										<p>
											Это может только ухудшить ваше состояние.
										</p>
									</li>
									<li>
										<p className="medium-font">
											Позаботьтесь о себе.
										</p>
										<p>
											Спите, ешьте здоровую пищу, занимайтесь спортом.
										</p>
									</li>
									<li>
										<p className="medium-font">
											Избегайте алкоголя и наркотиков.
										</p>
										<p>
											Они не помогут вам справиться с болью, а только усугубят проблему.
										</p>
									</li>
									<li>
										Вы можете справиться с этой ситуацией.
									</li>
									<li>
										Не стесняйтесь обращаться за помощью.
									</li>
								</ul>
							</PText>
						</PBox>

						<PBox id="family-help">
							<PTitle>
								<h2>
									Как помочь близким
								</h2>
							</PTitle>
							<PText>
								<ul>
									<li>
										<p className="medium-font">
											Будьте рядом с ними.
										</p>
										<p>
											Дайте им понять, что вы их любите и поддерживаете.
										</p>
									</li>
									<li>
										<p className="medium-font">
											Выслушайте их.
										</p>
										<p>
											Не пытайтесь давать советы, просто выслушайте их.
										</p>
									</li>
									<li>
										<p className="medium-font">
											Помогите им с бытовыми вопросами.
										</p>
										<p>
											Возможно, им нужна помощь с уборкой, приготовлением пищи или покупками.
										</p>
									</li>
									<li>
										<p className="medium-font">
											Будьте терпеливы.
										</p>
										<p>
											Не думайте, что они должны сразу же прийти в себя.
										</p>
									</li>
									<li>
										<p className="medium-font">
											Поощряйте их обратиться за профессиональной помощью.
										</p>
									</li>
								</ul>
							</PText>
						</PBox>

						<PBox id="profi-help">
							<PTitle>
								<h2>
									За помощью профессионалов, если
								</h2>
							</PTitle>
							<PText>
								<ul>
									<li>
										Навязчивые воспоминания о произошедшем
									</li>
									<li>
										Кошмары
									</li>
									<li>
										Чувство тревоги и страха
									</li>
									<li>
										Проблемы со сном
									</li>
									<li>
										Снижение концентрации внимания
									</li>
									<li>
										Чувство вины
									</li>
									<li>
										Желание причинить себе вред
									</li>
								</ul>
							</PText>
						</PBox>

						<PBox id="shock-help">
							<PTitle>
								<h2>
									Как помочь человеку в шоке
								</h2>
							</PTitle>
							<PText>
								<ul>
									<li>
										Рассказать пострадавшему, как вести себя в сложившейся ситуации.
									</li>
									<li>
										Объяснить, что его "неадекватное поведение" - это адекватная реакция на стресс.
									</li>
									<li>
										Действовать поэтапно, в зависимости от состояния пострадавшего.
									</li>
								</ul>
							</PText>
						</PBox>

						<PBox id="help-steps">
							<PTitle>
								<h2>
									Этапы помощи
								</h2>
							</PTitle>
							<PText>
								<ol>
									<li>
										Выведение из шока:
										<ul>
											<li>Скажите что-то, что вызовет у пострадавшего эмоции.</li>
											<li>Будьте готовы к истерике, крикам, агрессии.</li>
											<li>Установите физический контакт.</li>
											<li>Поддержите словами.</li>
										</ul>
									</li>
									<li>
										Истерика:
										<ul>
											<li>Уединитесь с пострадавшим.</li>
											<li>Сделайте что-то неожиданное, шокирующее.</li>
											<li>Обеспечьте покой.</li>
											<li>Позаботьтесь о еде, питье, сне.</li>
										</ul>
									</li>
									<li>
										Агрессия:
										<ul>
											<li>Если агрессия выражается словами, не останавливайте.</li>
											<li>Если агрессия выражается в действиях, направьте ее в безопасное русло.</li>
											<li>Не блокируйте агрессию.</li>
										</ul>
									</li>
									<li>
										Дрожь:
										<ul>
											<li>Усильте дрожь.</li>
											<li>Объясните свои действия.</li>
											<li>Не согревайте и не прижимайте к себе.</li>
											<li>Не пытайтесь силой унять дрожь.</li>
										</ul>
									</li>
								</ol>
							</PText>
						</PBox>

						<PBox id="remember">
							<PTitle>
								<h2>
									Помните
								</h2>
							</PTitle>
							<PText>
								<ul>
									<li>
										Вы не можете ускорить процесс выхода из шока.
									</li>
									<li>
										Ваша задача - быть рядом, поддерживать и помогать.
									</li>
									<li>
										Человек справится с этой ситуацией, но ему нужно время.
									</li>
								</ul>
							</PText>
						</PBox>
					</div>
					<OnThisPage>
						<OnThisPageItem>
							Содержание
						</OnThisPageItem>
						<OnThisPageItem href="#self-help">
							Как помочь себе
						</OnThisPageItem>
						<OnThisPageItem href="#family-help">
							Как помочь близким
						</OnThisPageItem>
						<OnThisPageItem href="#profi-help">
							За помощью профи
						</OnThisPageItem>
						<OnThisPageItem href="#shock-help">
							Как помочь человеку в шоке
						</OnThisPageItem>
						<OnThisPageItem href="#help-steps">
							Этапы помощи
						</OnThisPageItem>
						<OnThisPageItem href="#remember">
							Помните
						</OnThisPageItem>
					</OnThisPage>
				</MaxSize>
			</main>
	)
}