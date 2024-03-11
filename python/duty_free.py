# import math

# def duty_free(price, discount, holiday):
#     return math.floor(holiday / (price * (discount/100.0)))

# can use int() without import math
def duty_free(price, discount, holiday):
    return int(holiday / (price * (discount/100.0)))
