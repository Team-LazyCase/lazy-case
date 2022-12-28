
prepositions_file = open('prototypes/Jonas/Scripting/prepositions.txt')

lines = prepositions_file.readlines()
prepositions_file.close()

prepositions = []
for line in lines:
  prepositions.append(line[:-1])

JavaScript_array_single_words = '['

JavaScript_array_multiple_words = '['

for preposition in prepositions:
  if ' ' in preposition:
    JavaScript_array_multiple_words += "'" + preposition + "', "
  else:
    JavaScript_array_single_words += "'" + preposition + "', "

JavaScript_array_multiple_words = JavaScript_array_multiple_words[:-2]
JavaScript_array_single_words = JavaScript_array_single_words[:-2]

JavaScript_array_multiple_words += '];'
JavaScript_array_single_words += '];'

print(JavaScript_array_multiple_words)
