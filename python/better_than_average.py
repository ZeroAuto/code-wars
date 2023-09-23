# def better_than_average(class_grades, grade):
#     avg = sum(class_grades) / len(class_grades)
#     return grade > avg

# more concise
def better_than_average(class, grade):
    return grade > sum(class) / len(class)
