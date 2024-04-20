import {MaxSize} from "@components/maxSize";
import {PBox, PText, PTitle} from "@components/post";
import {OnThisPage, OnThisPageItem} from "@components/sideNav";

export default function SOS() {
	return (
			<main>
				<MaxSize sideNav>
					<div/>
					<div className="content">
						<h1>Правила поведения</h1>
						<p className="red_line">
							К террористическому акту невозможно подготовиться заранее, поэтому следует всегда быть настороже.
						</p>
						<p className="red_line medium-font">
							Избегайте без необходимости посещения регионов, городов, мест и мероприятий, которые
							могут привлечь внимание террористов.
						</p>
						<br/>
						<PBox id="recommendations">
							<PTitle>
								<h2>
									Общие рекомендации
								</h2>
							</PTitle>
							<PText>
								<ul>
									<li>
										обращайте внимание на подозрительных людей, предметы, на любые подозрительные мелочи. Сообщайте обо
										всем подозрительном сотрудникам правоохранительных органов;
									</li>
									<li>
										никогда не принимайте от незнакомцев пакеты и сумки, не оставляйте свой багаж без присмотра;
									</li>
									<li>
										у семьи должен план действий в чрезвычайных обстоятельствах, у всех членов семьи должны быть номера
										телефонов, адреса электронной почты.
									</li>
									<li>
										необходимо назначить место встречи, где вы сможете встретиться с членами вашей семьи в экстренной
										ситуации;
									</li>
									<li>
										в случае эвакуации, возьмите с собой набор предметов первой необходимости и документы;
									</li>
									<li>
										всегда узнавайте, где находятся резервные выходы из помещения;
									</li>
									<li>
										в доме надо укрепить и опечатать входы в подвалы и на чердаки, установить домофон, освободить
										лестничные
										клетки и коридоры от загромождающих предметов;
									</li>
									<li>
										организовать дежурство жильцов вашего дома, которые будут регулярно обходить здание, наблюдая, все
										ли
										в
										порядке, обращая особое внимание на появление незнакомых лиц и автомобилей, разгрузку мешков и
										ящиков;
									</li>
									<li>
										если произошел взрыв, пожар, землетрясение, никогда не пользуйтесь лифтом;
									</li>
									<li>
										старайтесь не поддаваться панике, что бы ни произошло.
									</li>
								</ul>
							</PText>
						</PBox>
						<PBox id="crowd">
							<PTitle>
								<h2>
									Поведения в толпе
								</h2>
							</PTitle>
							<PText>
								<p className="red_line">
									Террористы часто выбирают для атак места массового скопления народа. Помимо собственно поражающего
									фактора
									террористического акта, люди гибнут и получают травмы еще и в результате давки, возникшей вследствие
									паники
								</p>
								<p className="red_line">
									Необходимо помнить следующие правила поведения в толпе
								</p>
								<ul>
									<li>
										Избегайте больших скоплений людей
									</li>
									<li>
										Не присоединяйтесь к толпе, как бы ни хотелось посмотреть на происходящие события.
									</li>
									<li>
										Если оказались в толпе, позвольте ей нести Вас, но попытайтесь выбраться из неё.
									</li>
									<li>
										Глубоко вдохните и разведите согнутые в локтях руки чуть в стороны, чтобы грудная клетка не была
										сдавлена.
									</li>
									<li>
										Стремитесь оказаться подальше от высоких и крупных людей, людей с громоздкими предметами и большими
										сумками.
									</li>
									<li>
										Любыми способами старайтесь удержаться на ногах.
									</li>
									<li>
										Не держите руки в карманах.
									</li>
									<li>
										Двигаясь, поднимайте ноги как можно выше, ставьте ногу на полную стопу, не семените, не поднимайтесь
										на
										цыпочки.
									</li>
									<li>
										Если давка приняла угрожающий характер, немедленно, не раздумывая, освободитесь от любой ноши,
										прежде
										всего от сумки на длинном ремне и шарфа.
									</li>
									<li>
										Если что-то уронили, ни в коем случае не наклоняйтесь, чтобы поднять.
									</li>
									<li>
										Если Вы упали, постарайтесь как можно быстрее подняться на ноги. При этом не опирайтесь на руки (их
										отдавят либо сломают). Старайтесь хоть на мгновение встать на подошвы или на носки. Обретя опору,
										"выныривайте", резко оттолкнувшись от земли ногами
									</li>
									<li>
										Если встать не удается, свернитесь клубком, защитите голову предплечьями, а ладонями прикройте
										затылок.
									</li>
								</ul>
								<br/>
								<p className="red_line">
									Попав в переполненное людьми помещение, заранее определите, какие места при возникновении
									экстремальной
									ситуации наиболее опасны (проходы между секторами на стадионе, стеклянные двери и перегородки в
									концертных
									залах и т.п.), обратите внимание на запасные и аварийные выходы, мысленно проделайте путь к ним.
								</p>
								<p className="red_line">
									Легче всего укрыться от толпы в углах зала или вблизи стен, но сложнее оттуда добираться до выхода.
								</p>
								<p className="red_line">
									При возникновении паники старайтесь сохранить спокойствие и способность трезво оценивать ситуацию.
								</p>
								<p className="red_line">
									Не присоединяйтесь к митингующим "ради интереса". Сначала узнайте, санкционирован ли митинг, за что
									агитируют выступающие люди.
								</p>
								<p className="red_line">
									Не вступайте в незарегистрированные организации. Участие в мероприятиях таких организаций может
									повлечь
									уголовное наказание.
								</p>
								<p className="red_line">
									Во время массовых беспорядков постарайтесь не попасть в толпу, как участников, так и зрителей. Вы
									можете
									попасть под действия бойцов спецподразделений.
								</p>
							</PText>
						</PBox>
						<PBox id="hostage">
							<PTitle>
								<h2>
									При захвате в заложники
								</h2>
							</PTitle>
							<PText>
								<p className="red_line">
									Любой человек по стечению обстоятельств может оказаться в качестве заложника у преступников. При этом
									они
									могут добиваться достижения политических целей, получения выкупа и т.п. Во всех случаях, Ваша жизнь
									становиться предметом торга для террористов. Захват может произойти в транспорте, в учреждении, на
									улице,
									в квартире.
								</p>
								<p className="red_line">
									Если Вы оказались в заложниках, рекомендуем придерживаться следующих правил поведения:
								</p>
								<ul>
									<li>
										Основное правило – не допускайте действия, которые могут спровоцировать нападающих к применению
										оружия
										и привести к человеческим жертвам;
									</li>
									<li>
										переносите лишения, оскорбления и унижения. Не смотрите в глаза преступникам, не ведите себя
										вызывающе;
									</li>
									<li>
										при необходимости выполняйте требования преступников, не противоречьте им, не рискуйте жизнью
										окружающих и своей собственной. Старайтесь не допускать истерик и паники;
									</li>
									<li>
										на совершение любых действий (сесть, встать, попить, сходить в туалет) спрашивайте разрешение;
									</li>
									<li>
										если Вы ранены, постарайтесь не двигаться, этим Вы сократите потерю крови.
									</li>
								</ul>
								<p className="red_line">
									Помните – Ваша цель остаться в живых. Будьте внимательны, постарайтесь запомнить приметы преступников,
									отличительные черты их лиц, одежду, имена, клички, возможные шрамы и татуировки, особенности речи и
									манеры поведения, тематику разговоров и т.д.
								</p>
								<p className="red_line">
									Помните, что получив сообщение о Вашем захвате,
									спецслужбы уже начали действовать и предпримут все необходимые действия по Вашему освобождению.
								</p>
								<p className="red_line">
									Во время проведения спецслужбами операции по Вашему освобождению неукоснительно соблюдайте следующие
									требования:
								</p>
								<ul>
									<li>
										лежите по полу лицом вниз, голову закройте руками и не двигайтесь;
									</li>
									<li>
										ни в коем случае не бегите навстречу сотрудникам спецслужб или от них, так как они могут принять Вас
										за преступника;
									</li>
									<li>
										если есть возможность, держитесь подальше от проемов дверей и окон.
									</li>
								</ul>
								<p>
									Вы можете оказаться в ситуации, когда Вам станет известно о готовящемся или совершенном преступлении,
									возможно, кто-то знает о готовящемся преступлении против Вас. Как поведете Вы, так, возможно, поведут
									себя и другие.
								</p>
							</PText>
						</PBox>
						<PBox id="threats">
							<PTitle>
								<h2>
									При угрозе теракта
								</h2>
							</PTitle>
							<PText>
								<p className="red_line">
									Всегда контролируйте ситуацию вокруг себя, особенно когда находитесь на объектах транспорта,
									культурно - развлекательных, спортивных и торговых центрах.
								</p>
								<p className="red_line">
									При обнаружении забытых вещей, не трогая их, сообщите об этом водителю, сотрудникам объекта, службы
									безопасности, органов милиции. Не пытайтесь заглянуть внутрь подозрительного пакета, коробки, иного
									предмета.
								</p>
								<p className="red_line">
									Не подбирайте бесхозных вещей, как бы привлекательно они не выглядели.
								</p>
								<p>
									В них могут быть закамуфлированы взрывные устройства {" "}
									<small>(в банках из-под пива, сотовых телефонах и т.п.)</small>.
									Не пинайте на улице предметы, лежащие на земле.
								</p>
								<p className="red_line">
									Если вдруг началась активизация сил безопасности и правоохранительных органов, не проявляйте
									любопытства, идите в другую сторону, но не бегом, чтобы Вас не приняли за противника.
								</p>
								<p className="red_line">
									При взрыве или начале стрельбы немедленно падайте на землю, лучше под прикрытие {" "}
									<small>(бордюр, торговую палатку, машину и т.п.)</small>.
									Для большей безопасности накройте голову руками.
								</p>
								<p className="red_line">
									Узнав о готовящемся теракте, немедленно сообщите об этом в правоохранительные органы.
								</p>
							</PText>
						</PBox>
						<PBox id="after">
							<PTitle>
								<h2>
									После происшествия
								</h2>
							</PTitle>
							<PText>
								<h3>
									Как помочь себе:
								</h3>
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
											Это может быть разговор с другом, членом семьи, психологом или другим человеком, которому вы
											доверяете.
										</p>
									</li>
									<li>
										<p className="medium-font">
											Не смотрите новости и не читайте о теракте.
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
								</ul>
								<br/>
								<h3>
									Как помочь близким:
								</h3>
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
								<br/>
								<h3>
									Помните:
								</h3>
								<ul>
									<li>
										Вы не одиноки. Есть много людей, которые готовы вам помочь.
									</li>
									<li>
										Вы можете справиться с этой ситуацией.
									</li>
									<li>
										Не стесняйтесь обращаться за помощью.
									</li>
								</ul>
								<br/>
								<h3>
									Обращаться за профессиональной помощью, если:
								</h3>
								<ul>
									<li>
										Навязчивые воспоминания о теракте
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
								<br/>
								<h3>
									Как помочь человеку, переживающему шок:
								</h3>
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
					</div>
					<OnThisPage>
						<OnThisPageItem>
							Содержание
						</OnThisPageItem>
						<OnThisPageItem href="#recommendations">
							Общие рекомендации
						</OnThisPageItem>
						<OnThisPageItem href="#crowd">
							Поведения в толпе
						</OnThisPageItem>
						<OnThisPageItem href="#hostage">
							При захвате в заложники
						</OnThisPageItem>
						<OnThisPageItem href="#threats">
							При угрозе теракта
						</OnThisPageItem>
						<OnThisPageItem href="#after">
							После происшествия
						</OnThisPageItem>
					</OnThisPage>
				</MaxSize>
			</main>
	)
}