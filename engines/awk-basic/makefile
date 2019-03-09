#
# Make all asserts
#

ASSERT1_01 = ../../data/results/lev1-t01-hello.txt
ASSERT1_02 = ../../data/results/lev1-t02-hLst.txt
INPUT      = ../../data/habemus-papam.csv

all: run1 run2 check clean

run1: hello.awk
	@echo "\n--- run1 - Assert level 1 test01 --"
	awk -f  hello.awk  > run1.txt 

run2: hello-list.awk 
	@echo "\n--- run2 - Assert level 1 test02 --"
	awk -f  hello-list.awk < $(INPUT) > run2.txt

check: run1.txt $(ASSERT1_01) run2.txt $(ASSERT1_02)
	@echo "\n--- Number of erros per file:"
	diff run1.txt $(ASSERT1_01) | wc -l
	diff run2.txt $(ASSERT1_02) | wc -l

clean:
	@echo "\n--- cleaning..."
	rm run*.txt

