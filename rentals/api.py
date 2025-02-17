import frappe


@frappe.whitelist(allow_guest=True)
def test_api():
    return "test passed"


def throw_test_hook(doc, event):
    frappe.throw("this is test hook response")


def send_payment_reminders():
    pass

def process_100_invoices():
    print('Processing 100 invoices...')

# def get_permission_query_conditions_for_vehicle(user):
#     frappe.throw(user)
#     return "name=1"
