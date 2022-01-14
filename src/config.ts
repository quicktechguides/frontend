export const SITE = {
	title: 'Quick Tech Guides',
	description: 'Short, basic and extendable programming guides for those just getting started.',
	defaultLanguage: 'en_US',
};

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'About', header: true },
		{ text: 'Introduction', link: 'en/introduction' },

		{ text: 'Basics', header: true },
		{ text: 'The terminal', link: 'en/basics/terminal' },
		{ text: 'Getting started with Github', link: 'en/basics/setup-github' },

		{ text: 'How to...', header: true },
		{ text: 'Get a website on the web', link: 'en/how-to/basic-website' }
	],
};

export const COPYRIGHT = "Copyright © " + new Date().getFullYear() + " srg.id.au";

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/quicktechguides/frontend/blob/main/assets/social/banner.jpg?raw=true',
		alt: 'a black background with the words "Actually useful programming guides for beginners" in white',
	},
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/quicktechguides/frontend/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }