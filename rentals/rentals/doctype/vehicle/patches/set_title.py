import frappe

def execute():
    vehicles = frappe.db.get_all('Vehicle', pluck="name")
    for v in vehicles:
        vehicle = frappe.get_doc('Vehicle', v)
        vehicle.set_title()
        vehicle.save()
    
    try:
        frappe.db.commit()
    
    except Exception:
        frappe.log_error(f"Error updating Vehicle titles: {e}")
        frappe.db.rollback()