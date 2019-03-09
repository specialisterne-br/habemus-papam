#
# Make all asserts
#

ASSERT1_01 = ../../data/kx/lev1-t01-hello.txt
ASSERT1_02 = ../../data/kx/lev1-t02-hLst.txt
INPUT      = ../../data/kx/givenName.csv

all: run1 run2 check clean

run1: hello.js
	@echo "\n--- run1 - Assert level 1 test01 --"
	node hello.js  > run1.txt 

run2: hello-list.js 
	@echo "\n--- run2 - Assert level 1 test02 --"
	node hello-list.js < $(INPUT) > run2.txt

check: run1.txt $(ASSERT1_01) run2.txt $(ASSERT1_02)
	@echo "\n--- check - Number of erros per file:"
	diff run1.txt $(ASSERT1_01) | wc -l
	diff run2.txt $(ASSERT1_02) | wc -l

clean:
	@echo "\n--- cleaning..."
	rm run*.txt

