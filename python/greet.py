def greet(name, owner):
    return f"Hello {'boss' if owner == name else 'guest'}"


def greet_format(name, owner):
    return "Hello {}".format("boss" if name == owner else "guest")
