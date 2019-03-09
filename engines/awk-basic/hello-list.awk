##
# Minimal "print 'Hello $x!'" for templating.
# At termial:
#   awk -f hello-list.awk < ../../data/habemus-papam.csv
#

BEGIN      { FS="," }
NR>1       { printf("\n Olá %s!",$3) }
END        { print "\n" }
