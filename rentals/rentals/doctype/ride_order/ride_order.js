// Copyright (c) 2025, Salman and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload(frm) {
        console.log('running onload...')
    },
    setup(frm) {
        console.log('running setup...')
    },
    refresh(frm) {
        console.log('running refresh...')
        if (frm.doc.status === "New") {
            frm.add_custom_button("Accept", () => {
                // Status = Accepted
                frm.set_value("status", "Accepted");
                // Save the form
                frm.save();
            }, "Actions")
            frm.add_custom_button("Reject", () => {
                // Status = Accepted
                frm.set_value("status", "Rejected");
                // Save the form
                frm.save();
            }, "Actions")
        }
    },
    status(frm) {
        console.log('status changed');
    },
    pickup_address(frm) {
        console.log('pickup address changed')
    }
});
