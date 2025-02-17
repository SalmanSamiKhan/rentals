// Copyright (c) 2025, Salman and contributors
// For license information, please see license.txt

frappe.ui.form.on("Vehicle", {
	refresh(frm) {

	},
    get_summary(frm) {
        console.log('frm---------->', frm)
        frm.get_field("summary").$wrapper.append("<h1>Here is your summary</h1>");
    }
});
