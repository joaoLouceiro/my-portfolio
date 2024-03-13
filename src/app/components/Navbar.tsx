'use client';

import Link from 'next/link';
import { useState } from 'react';

const INITIAL_TABS = [
	{ text: 'About', href: '/#about', active: true },
	{ text: 'Projects', href: '/#projects', active: false },
	{ text: 'Contacts', href: '/#contacts', active: false },
];

export default function Navbar() {
	const [tabs, setTabs] = useState(INITIAL_TABS);
	function handleClick(tabKey: string) {
		const newTabs = tabs.map((t) => {
			return { ...t, active: t.href === tabKey };
		});
		setTabs(newTabs);
	}

	return (
				{tabs.map((tab) => (
				<Link
					className={`hover:animate-pulse mx-8 relative ${
						tab.active ? 'border-b-2' : null
					}`}
					onClick={() => handleClick(tab.href)}
					key={tab.href}
					href={tab.href}
				>
					{tab.text}
				</Link>
			))}
		</div>
	);
}
