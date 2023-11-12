def domain_name(url):
    url = url.replace('http://', '')
    url = url.replace('https://', '')

    lst = url.split('.')

    if lst[0] == 'www':
        return lst[1]
    else:
        return lst[0]


def domain_name_split(url):
    return url.split("//")[-1].split("www.")[-1].split("")


print(domain_name('http://github.com'))
print(domain_name('http://www.cnet.com'))
