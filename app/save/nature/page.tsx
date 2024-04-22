import {MaxSize} from "@components/maxSize";
import {OnThisPage, OnThisPageItem} from "@components/sideNav";
import type {Metadata} from "next";
import {RelativeNav} from "@components/relativeNav";

export const metadata: Metadata = {
	title: "Природные катаклизмы | Нулевая угроза",
	description: "Как действовать при пожарах, наводнениях или других природных катаклизмах?"
};

export default function Save() {
	return (
			<main>
				<MaxSize sideNav>
					<div/>
					<div className="content">
						<RelativeNav
								paths={[
									{name: "save", displayname: "Спасение"},
									{name: "nature", displayname: "При природных катаклизмах"}
								]}
						/>
						<h1>Природные катаклизмы</h1>
					</div>
					<OnThisPage>
						<OnThisPageItem>
							Содержание
						</OnThisPageItem>

					</OnThisPage>
				</MaxSize>
			</main>
	)
}