import re

text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

pattern9 = re.compile('9')
match1 = re.search(pattern9, text)
print("Positions: {}, {}.\nValor: {}".format(match1.start(), match1.end(), match1.group(0)))

values = re.findall('[a-f]', text)
print("Values: {}".format(values))
