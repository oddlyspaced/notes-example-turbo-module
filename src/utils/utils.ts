export const getRandomDate = () => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const randomMonth = months[Math.floor(Math.random() * 12)];
	const randomDay = Math.floor(Math.random() * 31) + 1;
	const year = 2025;

	return `${randomMonth} ${randomDay}, ${year}`;
};

export interface INote {
	id: number;
	title: string;
	content: string;
}

export type TNotesMap = {
	[id: string]: INote;
};

export const dummyNotesData: TNotesMap = {
	1: {
		id: 1,
		title: 'Mastering the Art of Productivity',
		content:
			"Productivity is not just about getting more things done; it's about getting the right things done efficiently. By focusing on high-impact tasks and minimizing distractions, you can make better use of your time and energy. Creating a to-do list, using the Pomodoro technique, and eliminating multitasking are some practical strategies to consider.\n\nAdditionally, setting clear goals and breaking them down into manageable steps can prevent overwhelm and increase your motivation. Don't forget to take regular breaks to recharge your mind. Balancing work with relaxation is key to maintaining long-term productivity and avoiding burnout.",
	},
	2: {
		id: 2,
		title: 'Exploring Minimalist Design Trends',
		content:
			'Minimalist design has gained immense popularity in recent years, offering a clean and elegant user experience. By focusing on essential elements, it removes unnecessary clutter and enhances the visual appeal of an interface. Designers often use neutral colors, simple typography, and generous white space to create a sense of calm and sophistication.\n\nThis design philosophy not only improves aesthetics but also helps users navigate through content more efficiently. Embracing minimalism requires careful consideration of each design element to ensure it serves a purpose. Ultimately, the goal is to create a seamless and intuitive user experience that leaves a lasting impression.',
	},
	3: {
		id: 3,
		title: "A Beginner's Guide to Meditation",
		content:
			'Meditation is a powerful practice that promotes mindfulness and emotional well-being. It involves focusing your attention and eliminating the constant stream of thoughts that often crowd your mind. By practicing regularly, even for just a few minutes a day, you can reduce stress, improve concentration, and enhance your overall mental clarity.\n\nBeginners can start with simple breathing exercises or guided meditations. Find a quiet space, sit comfortably, and pay attention to your breath. If your mind wanders, gently bring your focus back. With time and consistency, meditation can become a valuable tool for managing anxiety and achieving a greater sense of inner peace.',
	},
	4: {
		id: 4,
		title: 'Top 10 Travel Destinations for 2025',
		content:
			"Planning your next vacation? 2025 offers a variety of stunning destinations for every type of traveler. Whether you crave the serenity of tropical beaches or the vibrant energy of bustling cities, there's something for everyone. Explore picturesque coastal towns, indulge in local cuisine, or immerse yourself in rich cultural experiences.\n\nSome of the top picks include exploring the fjords of Norway, relaxing on the white sands of the Maldives, or strolling through the historic streets of Kyoto. Don't forget to check local travel guidelines and book your accommodations in advance. With careful planning, your dream adventure can become a reality.",
	},
	5: {
		id: 5,
		title: 'Healthy Eating Made Simple',
		content:
			"Maintaining a healthy diet doesn't have to be complicated. Focus on incorporating a variety of whole foods like fruits, vegetables, lean proteins, and whole grains into your meals. Reducing processed foods and added sugars can also make a significant difference in your overall health. Simple swaps, like using olive oil instead of butter or choosing brown rice over white rice, can enhance the nutritional value of your diet.\n\nMeal prepping is another great way to ensure you have nutritious meals readily available. Prepare balanced meals in advance to avoid last-minute unhealthy choices. Remember, consistency is key. Building sustainable habits and enjoying your food mindfully can lead to long-term health benefits.",
	},
};
