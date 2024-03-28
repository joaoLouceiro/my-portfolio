'use client';

import Link from 'next/link';
import { useState } from 'react';

const INITIAL_TABS = [
	{ text: 'About', href: '/about', active: true },
	{ text: 'Projects', href: '/#projects', active: false },
	{ text: 'Contacts', href: '/#contacts', active: false },
];

const INITIAL_LINE = { left: '0px', width: '0px', display: 'none' };

export default function Navbar() {
	const [tabs, setTabs] = useState(INITIAL_TABS);

	const [line, setLine] = useState(INITIAL_LINE);
	function handleClick(tabKey: string, e: any) {
		const newTabs = tabs.map((t) => {
			return { ...t, active: t.href === tabKey };
		});
		setTabs(newTabs);

		const newLine = {
			left: e.target.offsetLeft,
			width: e.target.clientWidth,
			display: 'flex',
		};
		setLine(newLine);
	}

	return (
		<div className="border border-red-400 min-w-full absolute">
			<div className="flex justify-end h-12 ">
				<Link href="/">Home</Link>
				<div className="align-middle my-auto mx-8">
					{tabs.map((tab) => (
						<Link
							className={`hover:animate-pulse mx-8 ${
								tab.active ? 'border-b-2' : null
							}`}
							onClick={(e) => handleClick(tab.href, e)}
							key={tab.href}
							href={tab.href}
						>
							{tab.text}
						</Link>
					))}
				</div>
			</div>
			{/* <div
				style={line}
				className="h-px bg-slate-300 border border-slate-300 absolute"
			></div> */}
		</div>
	);
}
