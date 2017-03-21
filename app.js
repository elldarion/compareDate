function app(){ };

app.prototype.date = function (d, lang) {

	var now = this.dateValue();
	var server = this.dateValue(d);
	if (now > server){
		var day = new Date(d);
		return day.getDate() + ' ' + this.dateM(day.getMonth()+1, lang) + ' ' + day.getFullYear();

	} else {

		return d.split(' ')[1].slice(0, -3);

	}
};

app.prototype.dateValue = function(d) {

	var date = d? new Date(d) : new Date();
	var val = (new Date(date.getFullYear(), date.getMonth(), date.getDate())).valueOf();
	return val;
}

app.prototype.dateM = function (d, lang){
	 this.d = d;
	 this.lang = lang;
	 var mounthObject = {
	 	ru: {
	 1: 'Января',
	 2: 'Февраля',
	 3: 'Марта',
	 4: 'Апреля',
	 5: 'Мая',
	 6: 'Июня',
	 7: 'Июля',
	 8: 'Августа',
	 9: 'Сентября',
	 10: 'Октября',
	 11: 'Ноября',
	 12: 'Декабря'
	 },
	 	uk: {
	 1: "Січня",
	 2: "Лютого",
	 3: "Березня",
	 4: "Квітня",
	 5: "Травня",
	 6: "Червня",
	 7: "Липня",
	 8: "Серпня",
	 9: "Вересня",
	 10: "Жовтня",
	 11: "Листопада",
	 12: "Грудня"
	 }

};

	if (this.lang = "ru") return mounthObject.ru[this.d];
	else return mounthObject.uk[this.d]; }