def bouncing_ball(h, bounce, height):
    if h <= 0 or bounce <= 0 or bounce >= 1 or height >= h:
        return -1

    count = 1
    bounce_height = h * bounce

    while bounce_height > height:
        count += 2
        bounce_height = bounce_height * bounce

    return count


print(bouncing_ball(3.0, 0.66, 1.5))
print(bouncing_ball(30.0, 0.66, 1.5))
print(bouncing_ball(3.0, 1.0, 1.5))
print(bouncing_ball(2, 0.5, 1))
