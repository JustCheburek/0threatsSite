import {MaxSize} from "@components/maxSize";
import {OnThisPage, OnThisPageItem} from "@components/sideNav";
import type {Metadata} from "next";
import {RelativeNav} from "@components/relativeNav";

export const metadata: Metadata = {
	title: "Ракетная опасность | Нулевая угроза",
	description: "Как действовать при нападении и выжить?"
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
									{name: "rocket", displayname: "При ракетной опасности"}
								]}
						/>
						<h1>Ракетная опасность</h1>
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