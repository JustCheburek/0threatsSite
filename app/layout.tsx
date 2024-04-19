import type {Metadata} from "next";
import {ReactNode} from "react";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({subsets: ["cyrillic"]});

// Стили
import "@styles/normalize.scss"
import "@styles/vars.scss"
import "@styles/text.scss"
import "@styles/appear.scss"
import "@styles/button.scss"
import "@styles/global.scss"

// Компоненты
import {Header} from "@components/header";
import {Footer} from "@components/footer";

export const metadata: Metadata = {
	title: "Нулевая угроза",
	description: "Психологическая помощь пострадавшим и их родственникам от влияния терроризма"
};

export default function RootLayout(
		{
			children,
		}: Readonly<{
			children: ReactNode;
		}>) {
	return (
			<html lang="en">
			<body className={montserrat.className}>
			<Header/>
			{children}
			<Footer/>
			</body>
			</html>
	);
}
