// Copyright (c) 2025, Salman and contributors
// For license information, please see license.txt

frappe.query_reports["Revenue by make"] = {
	filters: [
		{
			"fieldname": "my_filter",
			"label": "My Filter",
			"fieldtype": "Link",
			"options": "Vehicle",
		},
	],
};
