const PARAM = {
	cat: 'category',
	subcat: 'subcategory',
	search: ['name', 'description', 'category', 'subcategory']
};


export const getData = {
	url: 'database/dataBase.json',
	get(process) { //метод, который делает запрос на сервер с помощью fetch, через урл который задан выше
		fetch(this.url)
			.then(response => response.json()) //c помощью then обрабатываем promise, который вернулся, и из json формата переводим его в массив
			.then(process); // и отдаем его в функцию process - (это та функция, которую мы передали в get при вызове)
	},
	wishList(list, callback) {
		this.get((data) => { // вызываем get и передаём функцию data
			const result = data.filter((item) => list.includes(item.id));
			callback(result);
		})
	},
	item(value, callback) {
		this.get((data) => { // вызываем get и передаём функцию data
			const result = data.find(item => item.id === value)
			callback(result);
		})
	},
	cart(list, callback) {
		this.get((data) => { // вызываем get и передаём функцию data
			const result = data.filter(item => list.some(obj => obj.id === item.id))
			callback(result);
		})
	},
	category(prop, value, callback) {
		this.get((data) => { // вызываем get и передаём функцию data
			const result = data.filter(item => item[PARAM[prop]].toLowerCase() === value.toLowerCase())
			callback(result);
		})
	},
	search(value, callback) {
		this.get((data) => { // вызываем get и передаём функцию data
			const result = data.filter(item => {
				for (const prop in item) {
					if (PARAM.search.includes(prop) && item[prop].toLowerCase().includes(value.toLowerCase())) {
						return true
					}
				}
			})
			callback(result);
		})
	},
	catalog(callback) {
		this.get((data) => {

			callback(result)
		})
	},
	subCatalog(value, callback) {
		this.get((data) => {

			callback(result)
		})
	}
};