/**
 * Minimal "print 'Hello $x'" program, to test env and compiler.
 * At termial run make or,
 *  compile:    gcc -o hello.exe hello.c
 *  run:        ./hello.exe
 */

#include <stdio.h>
int main() {
  char x[]="Papa Fulano";
  printf("\n Olá %s! \n",x);
}
