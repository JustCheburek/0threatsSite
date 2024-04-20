// React
import type {PropsWithChildren} from "react";

// Стили
import styles from "./styles/post.module.scss";

type PContainer = {
	className?: string
	id?: string
}

export const PBox = (
		{
			children,
			className = "",
			id = ""
		}: PropsWithChildren<PContainer>
) => (
		<div
				id={id}
				className={`${styles.container} ${className}`}
		>
			{children}
		</div>
)

export const PTitle = (
		{
			children,
			className = "",
			createdAt
		}: PropsWithChildren<{
			className?: string
			createdAt?: Date
		}>) => (
		<div className={`${styles.title} ${className}`}>
			{children}
			<span className="unic_color">
				{createdAt?.toLocaleDateString()}
			</span>
		</div>
)

export const PText = (
		{
			children, className = ""
		}: PropsWithChildren<{
			className?: string
		}>) => (
		<div className={`${styles.text} ${className}`}>
			{children}
		</div>
)