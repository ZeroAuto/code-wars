def get_status(is_busy):
    status = "busy" if is_busy else "available"
    return {"status": status}

def get_status_2(is_busy):
    return {"status": ("busy" if is_busy else "available")}
