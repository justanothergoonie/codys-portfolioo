import React, { useState, useRef } from 'react';

const Scroller = function () {
	const [scrollTop, setScrollTop] = useState(0);
	const myRef = useRef();

	const onScroll = () => {
		const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
		const scroll = myRef.current.scrollTop;
		console.log(
			`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scroll}`
		);
		setScrollTop(scroll);
	};

	return (
		<div
			ref={myRef}
			onScroll={onScroll}
			style={{
				border: '1px solid black',
				width: '600px',
				height: '100px',
				overflow: 'scroll',
			}}
		></div>
	);
};

export default Scroller;
