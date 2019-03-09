##
# UTIL TOOL, CONVERTS CSV INTO TXT LIST OF FIELD3.
# At termial:
#   awk -f convert02.awk < ../../data/habemus-papam.csv > ../../data/kx/givenName.csv
#

BEGIN      { FS="," }
NR>1       { print $3 }

