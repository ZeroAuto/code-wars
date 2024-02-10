# https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/python
def longest_consec(strarr, k):
    result = ""
    if k > 0 and len(strarr) >= k:
        for i in range(len(strarr) - k + 1):
            temp_result = "".join(strarr[i:k+i])
            if len(temp_result) > len(result):
                result = temp_result
    return result


print(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
print(longest_consec([], 3))
print(longest_consec(['uuujjp', 'uuuddmmnyyee', 'udyyoaadd', 'zzrrrppiiiwz', 'jjuuaazzb', 'jjjllleeeaa', 'oovvvmmllaa', 'vvksatttpppvv', 'aaezzntzzp', 'tttmmmjo', 'tmmmhhhrrmmmq', 'iiajjjccjj', 'qqqhhhmmmttiiix', 'ffnnzzzzccc', 'mmmnnnzooz', 'qqqjkkklc', 'ffhhvv', 'deuu', 'hdddwwwwb', 'iiielwwsssad', 'fhgjjjjj', 'ffhhhwnncccrrokkk', 'ellgguuu', 'cccooottjjj', 'jvll', 'ffiaarccci', 'dccttth', 'gggytvvppsssbb', 'cctttyyuueewwuuu', 'mmmwwggjjj', 'rrrsssmm', 'ttgggyytttxddd', 'wwoopppiii', 'zgggaall', 'llqaaamsssxe', 'nnnsffddttt', 'dycnnii', 'uuulllyybfyyyrrd', 'qqiii', 'mmmiizzzg', 'ppxxvvvddd', 'zzvvppi', 'dwwhhhfozzz', 'iiifro', 'fdddvviind', 'eegujjjs', 'btqq', 'sssaattaaay', 'vvvwwttwwydd', 'cjjuuumm', 'deevqqqqqqooqq', 'aaaiiiicdddciiioo', 'ddvffyyyu', 'rrhtfhhhcc', 'oymtttrr', 'vvvucccqqiyy', 'vvmmmpgg', 'uuugggqqqbooo', 'uaaayybppp', 'kkddneeppxx', 'loookkkvv', 'zzzbbbsf', 'iiijggjeekk', 'wwwmmssskkk', 'fco', 'nnwiiuu', 'rrrrxlllddd', 'iiwwwmmiibbnnn', 'nuunniii', 'mpppooolkkkrrhhhvv', 'nummd', 'bbwwlly', 'avvamo', 'zzwwwddfff', 'bbiinnnssiiioott', 'ullddkrrrkkkff', 'jjfflliiil', 'fnvoo', 'wwalllllcck', 'uuunni', 'ujjjbbbbb', 'qqqeeseeel', 'uggiiimggg', 'eeeaaaffw', 'aaacccsaaaddc',
      'dezzsss', 'vcckuh', 'bbiizzzeeebgg', 'rrqqqjeee', 'ccxxmyeerkpwxxx', 'dddeeooz', 'fgr', 'bbsskkkr', 'ppqxxx', 'tttkkcc', 'mmmkkkllltt', 'ckknnxxaapss', 'vvxxyyqqgg', 'sinuuuuuoa', 'lujjjw', 'bbboueee', 'pppdcccaaabj', 'uuuooon', 'eeeysiiwc', 'rrraaappxxxm', 'ibbbffyyyppp', 'lkkkoowwwuu', 'pppkkllftllll', 'uuuqqqlllhhhuukddcc', 'yyyiiooorrryyzzzkkk', 'ddgggqyyy', 'cccpvoxxx', 'eexxxrrpppbbb', 'kkxxii', 'bbbiicccoolddjjj', 'ttdvvvccc', 'hhhlllw', 'fffeeessim', 'buuzdddqqquu', 'cccqqqoobaaav', 'mmmkkkssuuiii', 'xxddoooggmm', 'aaauww', 'sqqqy', 'dddyyyxnn', 'vllmrrrlllii', 'nbbbyyyf', 'yyyyyg', 'ffiaapkk', 'nnncclllllgg', 'nnneehhhkkkrrf', 'cooollll', 'kkvvvaaffyxuuud', 'wwwqqo', 'ddvvvfxsswddds', 'sssmmixxooo', 'lbbvvzzxxx', 'wwccctuuuhh', 'bnnrelll', 'pdttpu', 'aannzzvvvc', 'yyoyun', 'bbtnnb', 'bbbbkkb', 'iiiywwih', 'oooeeehhhmmmgg', 'bbbttlllq', 'ggwweepppwwmmu', 'ttxppmm', 'kxyyybzzzeeegg', 'oltv', 'mmjssspll', 'bbuugrrunn', 'rrjdbcca', 'dddbbbf', 'mmmffboooh', 'keebbaxxx', 'cccx', 'gzzrrreeemmfn', 'cccoeeeaaauuhhhbb', 'gueegggeeeggg', 'lllmmpp', 'nnwwc', 'zzzmmmrrrhhhxmm', 'kaappkkk', 'ooolllppyy', 'hhhggvvvwwwdddm', 'bmjee', 'pppaddddxxxooo', 'zzzppkkkqqq', 'oojjppd'], 171))


def longest_consec_oneline(strarr, k):
    return max([''.join(tuple) for tuple in zip(*[strarr[i:] for i in range(k)])] + [''], key=len)
