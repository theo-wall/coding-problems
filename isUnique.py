"""
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
"""

"""
For example:
For --> True
Example --> False
ABBA --> False
tImE --> True
Tt --> True


ExampligGha

ABBA
^
pastLetters = {
    "A" : "A"
}


"""


def isUnique(word):  # O(N) time complexity and O(N) in space
    # if isinstance(word, str) == False:
    #     return "Bad input!"
    if (len(word) > 0):
        pastLetters = {}  # O(N)
        for letter in word:  # O(N)
            if (letter in pastLetters):  # O(1)
                return False
            pastLetters[letter] = letter
        return True
    return False

    for letter in word:  # O(N^2) in time and O(N) in space
        pastLetters = []
        if letter in pastLetters:
            return False
        pastLetters.append(letter)

    for i, letter in enumerate(word):  # pablo O(N^2) in time, O(1) space
        for letter2 in word[i+1:]:
            if letter == letter2:
                return False
        return True


# Testing
assert isUnique("") == False
assert isUnique("a") == True
assert isUnique("pablo") == True
# assert isUnique(1) == "Bad input!"
assert isUnique("Tt") == True
assert isUnique("TT") == False
assert isUnique([1, 2, 3, 4, 1]) == False
print(ord("a"))
print(chr(ord("a")))
