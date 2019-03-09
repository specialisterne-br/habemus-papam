#
# Make all asserts
#

ASSERT1_01 = ../../data/kx/lev1-t01-hello.txt
ASSERT1_02 = ../../data/kx/lev1-t02-hLst.txt
INPUT      = ../../data/habemus-papam.csv

all: comp run1 check clean

comp: hello.c
	@echo "\n--- compiling... --"
	gcc -o hello.exe hello.c

run1: hello.exe
	@echo "\n--- run1 - Assert level 1 test01 --"
	./hello.exe  > run1.txt 

check: run1.txt $(ASSERT1_01) 
	@echo "\n--- Number of erros per run-file:"
	diff run1.txt $(ASSERT1_01) | wc -l

clean: 
	@echo "\n--- cleaning..."
	rm run*.txt

