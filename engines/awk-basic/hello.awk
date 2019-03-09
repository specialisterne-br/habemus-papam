##
# Minimal "print 'Hello $x'" program, to test env and compiler.
# At termial:    awk -f hello.awk
#

BEGIN {x="Papa Fulano"; printf("\n Olá %s! \n",x) }
