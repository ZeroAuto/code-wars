def open_or_senior(data):
    categories = []
    for da in data:
        if da[0] >= 55 and da[1] > 7:
            categories.append('Senior')
        else:
            categories.append('Open')

        return categories
