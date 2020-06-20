/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
	setPostBodyComponents([
		<script
			key="https://cdn.jsdelivr.net/gh/tengbao/vanta@master/vendor/three.r95.min.js"
			src="https://cdn.jsdelivr.net/gh/tengbao/vanta@master/vendor/three.r95.min.js"
			crossOrigin="anonymous"
		/>,
		<script
			key="https://cdn.jsdelivr.net/gh/tengbao/vanta/dist/vanta.dots.min.js"
			src="https://cdn.jsdelivr.net/gh/tengbao/vanta/dist/vanta.dots.min.js"
			crossOrigin="anonymous"
		/>
	])
}