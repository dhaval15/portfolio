// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Flutter Prototype',
		category: 'Web Application',
		img: require('@/assets/images/prototype.png'),
		source: 'https://github.com/dhaval15/prototype',
		demo: 'https://dhaval15.github.io/prototype.io/',
		
	},
	{
		id: 2,
		title: 'Customer Review Analysis',
		category: 'Sentiment Analysis',
		img: require('@/assets/images/analysis.png'),
		source: process.env.BASE_URL + 'analysis.html',
		demo: 'demo-link',
	},
	{
		id: 3,
		title: 'Epub Reader',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
		source: 'https://github.com/dhaval15/prowords',
		demo: 'playstore - link',
	},
	{
		id: 4,
		title: 'Todo App with Flutter',
		category: 'Mobile Application',
		img: require('@/assets/images/todo.png'),
		source: 'https://github.com/dhaval15/todo',
		demo: 'https://play.google.com/store/apps/details?id=com.brokenglass.todo',
	},
	
];

export default projects;
