geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


def goose_filter(birds):
    result = []
    for bird in birds:
        if bird not in geese:
            result.append(bird)
    return result


def goose_filter_oneline(birds):
    return [bird for bird in birds if bird not in geese]
