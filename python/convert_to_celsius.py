def weather_info(temp):
    c = convert_to_celsius(temp)
    if (c > 0):
        return f"{c} is above freezing temperature"
    else:
        return f"{c} is freezing temperature"

def convert_to_celsius(temp):
    return (temp - 32) * (5/9)

print(weather_info(50)) # "10.0 is above freezing temperature"
print(weather_info(23)) # "-5.0 is freezing temperature"
