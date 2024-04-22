import {MaxSize} from "@components/maxSize";
import type {Metadata} from "next";
import {GBox, GContainer, GText} from "@components/grid";
import {ImgBox, Img} from "@components/img";

export const metadata: Metadata = {
	title: "Ресурсы помощи | Нулевая угроза",
	description: "Сборы денег на поддержку пострадавшим от террора и их родственникам"
};

export default function Resources() {
	return (
			<main>
				<MaxSize>
					<GContainer border>
						<GBox href="https://psi.mchs.gov.ru/" imgs="one" anotherSite>
							<ImgBox type="grid">
								<Img src="/мчс.png" alt="Психологи"/>
							</ImgBox>

							<GText>МЧС</GText>
						</GBox>

						<GBox imgs="one" href="https://vk.me/psy_myvmeste" anotherSite>
							<ImgBox type="grid">
								<Img src="/волонтёры.png" alt="Волонтёры"/>
							</ImgBox>

							<GText>Волонтёры</GText>
						</GBox>

						<GBox imgs="one" href="https://ПомощьРядом.рф" anotherSite>
							<ImgBox type="grid">
								<Img src="/helpnear.png" alt="Помощь рядом"/>
							</ImgBox>

							<GText>Помощь рядом</GText>
						</GBox>

						<GBox imgs="one" href="https://msph.ru/uslugi/distantsionnaya-psikhologicheskaya-pomoshch" anotherSite>
							<ImgBox type="grid">
								<Img src="/цппм.png" alt="Помощь по мск"/>
							</ImgBox>

							<GText>Консультирование</GText>
						</GBox>

						<GBox imgs="one" href="https://verimtebe.ru/contact_us/" anotherSite>
							<ImgBox type="grid">
								<Img src="/тебеПоверят.png" alt="тебе поверят"/>
							</ImgBox>

							<GText>Помощь по почте</GText>
						</GBox>

						<GBox imgs="one" href="https://t.me/Doverie_online" anotherSite>
							<ImgBox type="grid">
								<Img src="/helpchildren.png" alt="Психологи"/>
							</ImgBox>

							<GText>Доверие онлайн</GText>
						</GBox>
					</GContainer>
				</MaxSize>
			</main>
	)
}