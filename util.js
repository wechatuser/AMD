define(function () {
	var util = {
		getFormatDate: function (date, type) {
			if (type === 1) {
				return '2017-06-20'
			}
			if (type === 2) {
				return 'June 20, 2017'
			}
		}
	}
	return util
})