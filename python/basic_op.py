def basic_op(operator, value1, value2):
    match operator:
        case "+":
            return value1 + value2
        case "*":
            return value1 * value2
        case "-":
            return value1 - value2
        case "/":
            return value1 / value2

# apparently there is an eval() function
def basic_op_eval(op, v1, v2):
    return eval(str(v1) + op + str(v2))

print(basic_op_eval("+", 2, 3)) # 5
print(basic_op_eval("*", 2, 3)) # 6
print(basic_op_eval("-", 2, 3)) # -1
