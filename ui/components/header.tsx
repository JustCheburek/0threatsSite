"use client";
import {NavLink} from "@components/navlink";
import {useState} from "react";
import Link from "next/link";
import "./styles/header.scss"
import {Burger} from "@components/burger";

type Burger = {
	burger: boolean,
	setBurger: any
}

const MainNav = ({burger, setBurger}: Burger) => (
		<nav
				className={`nav_container ${burger ? "burger_active" : ""}`}
				onClick={() => setBurger(false)}
		>
			<ul className="text_nav nav_box remove_marker not_indent">
				{/* Основная навигация */}
				<li>
					<NavLink href="/" className="mini_button">
						Главная
					</NavLink>
				</li>
				<li>
					<NavLink href="/sos" className="mini_button">
						При теракте
					</NavLink>
				</li>
				<li>
					<NavLink href="/resources" className="mini_button">
						Ресурсы помощи
					</NavLink>
				</li>
				<li>
					<NavLink href="/news" className="mini_button">
						Новости
					</NavLink>
				</li>
			</ul>
		</nav>
)

export function Header() {
	const [burger, setBurger] = useState<boolean>(false)

	return (
			<header className={burger ? "burger_active" : ""}>
				<div className="header">
					{/* Лого */}
					<Link href="/" className="logo" rel="shortcut icon" aria-label="Переход на главную страницу">
						НулУгроза
					</Link>

					{/* Бургер иконка */}
					<Burger burger={burger} setBurger={setBurger}/>

					{/* Навигация */}
					<MainNav burger={burger} setBurger={setBurger}/>
				</div>
			</header>
	)
}
