import { getData } from './getData.js';

const wishlist = ['idd005', 'idd100', 'idd042', 'idd032'];

const cardList = [
	{
		id: 'idd014',
		count: 3
	},
	{
		id: 'idd045',
		count: 1
	},
	{
		id: 'idd041',
		count: 2
	},
]

export const loadData = () => {

	if (location.search) {
		const search = decodeURI(location.search);
		const prop = search.split('=')[0].substring(1);
		const value = search.split('=')[1];

		if (prop === 's') {
			getData.search(value, (data) => console.log(data));
		} else if (prop === 'wishlist') {
			getData.wishList(wishlist, (data) => console.dir({ wishlist: data }));
		} else if (prop === 'cat' || prop === 'subcat') {
			getData.category(prop, value, (data) => console.log(data))
		}
	}

	if (location.hash) {
		getData.item(location.hash.substring(1), (data) => console.log(data));

	}

	if (location.pathname.includes('cart')) {
		getData.cart(cardList, console.log(data));
	}

	getData.catalog((data) => console.log(data));
	getData.subCatalog('Декор', (data) => console.log(data));


};