// Copyright (c) 2025, Salman and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	update_total_amount(frm) {

		let total_distance = 0;
		for (item of frm.doc.items) {
			console.log('distance: ', item.distance);
			total_distance += item.distance
		}
		let rate = frm.doc.rate;
		let total_amt = total_distance * rate;
		frm.set_value('total_amount', total_amt);
	},
	refresh(frm) {

	},
	rate(frm) {
		// Calculate rate
		frm.trigger("update_total_amount");
	},

});

// Child Table
frappe.ui.form.on('Ride Booking Item', {
	refresh(frm) {
		// your code here
	},
	distance(frm, cdt, cdn) {
		console.log('frm', 'cdt, cdn', frm, cdt, cdn);
		frm.trigger("update_total_amount");
	},
	items_remove(frm){
		frm.trigger("update_total_amount");
	}
})