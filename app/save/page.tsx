import {MaxSize} from "@components/maxSize";
import type {Metadata} from "next";
import {GBox, GContainer, GText} from "@components/grid";
import {Img, ImgBox} from "@components/img";

export const metadata: Metadata = {
	title: "Спасение | Нулевая угроза",
	description: "Как действовать в различных ситуациях?"
};

export default function Resources() {
	return (
			<main>
				<MaxSize>
					<h1>Спасение</h1>
					<GContainer border>
						<GBox href="/save/terrorist" imgs="one">
							<ImgBox type="grid">
								<Img src="/stopTerror.png" alt="Стоп террор"/>
							</ImgBox>

							<GText>При терактах</GText>
						</GBox>
						<GBox href="/save/rocket" imgs="one">
							<ImgBox type="grid">
								<Img src="/rocket.png" alt="Ракетная опасность"/>
							</ImgBox>

							<GText>При ракетной опасности</GText>
						</GBox>
						<GBox href="https://16-mchs-gov-ru.turbopages.org/16.mchs.gov.ru/s/deyatelnost/poleznaya-informaciya/rekomendacii-naseleniyu/prirodnye-chs/pravila-povedeniya-pri-chs-prirodnogo-haraktera" imgs="one" anotherSite>
							<ImgBox type="grid">
								<Img src="/planet.png" alt="Природные катаклизмы"/>
							</ImgBox>

							<GText>При природных катаклизмах</GText>
						</GBox>
					</GContainer>
				</MaxSize>
			</main>
	)
}