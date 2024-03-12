'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	useState;
	return (
		<div className="flex justify-end py-4 relative">
			<Link className="hover:animate-pulse mx-8" href={'/#about'}>
				About
			</Link>
			<Link className="hover:animate-pulse mx-8" href={'/projects'}>
				Projects
			</Link>
			<Link className="hover:animate-pulse mx-8" href={'/contacts'}>
				Contacts
			</Link>
		</div>
	);
}
