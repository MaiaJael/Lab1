
#2.
Vacio = frozenset({})
E = frozenset({"E"})
A = set(["a", 3, 5, "d", Vacio, "E", 7])

print ("A = ", end="")
for i in A:
    print (i, end=", ")
print ("")

print ("")

#3.
c = frozenset([3, 7])
B = set(["a", 3, c, 8, 9, E, 7])

AuB = A | B
AnB = A & B

print ("AuB = ", AuB)
print ("")
print ("AnB = ", AnB)
print ("")

#4.
U = set(["a", 3, 5, "d", Vacio, "E", 7, c, 8, 9, E, "m", 6])
noA = set()

for i in U:
    if i not in A:
        noA = noA.union(set([i]))

print ("¬A = ", noA)
print ("")

#5.
BmenosA = B & noA
print ("B-A = ", BmenosA)
print ("")

#6.
seCumple = True

for i in ((B - A) | (A & A)):
    if i in AnB:
        seCumple = False
if seCumple == True:
    print ("AnB es subconjunto de (B-A)u(AnA)")
print ("")

#7.
A = set(["1", "5", "8", "0"])
B = set(["a", "b", "c"])
AxB = set()

for i in A:
    for n in B:
        ab = i, n 
        AxB = AxB.union(set([ab]))
print ("AxB = ", AxB)