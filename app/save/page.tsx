import {MaxSize} from "@components/maxSize";
import type {Metadata} from "next";
import {GBox, GContainer, GText} from "@components/grid";

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
						<GBox href="/save/terrorist">
							<GText>При терактах</GText>
						</GBox>
						<GBox href="/save/rocket">
							<GText>При ракетной опасности</GText>
						</GBox>
						<GBox href="/save/nature">
							<GText>При природных катаклизмах</GText>
						</GBox>
					</GContainer>
				</MaxSize>
			</main>
	)
}