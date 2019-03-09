
## Arquivos de dados

*Datasets* do projeto, [originais](https://en.wikipedia.org/wiki/Data_lineage#Data_Provenance) and [caches](https://en.wikipedia.org/wiki/Database_caching). Todos os *datasets originais* são arquivos expressos em formatos abertos, podendo ser lidos ou editados por qualquer editor de TXT UTF-8. Os formatos de referência são CSV e JSON.

Edição livre do arquivo original [em planilha amigável](https://docs.google.com/spreadsheets/d/1JgtNQh6Ttk-OF3b81PX4zqgZZ-pIJ3TvUHCOrmfIgRs/), ou edição final (com [*pull-request*](https://help.github.com/en/articles/about-pull-requests) para melhor [controle das versões](https://github.com/specialisterne-br/habemus-papam/releases)) do *dataset* original [`habemus-papam.csv`](habemus-papam.csv), por um dos administradores do projeto.

Geração dos caches, com *backup* na pasta [kx](kx):

* [`givenName.csv`](kx/givenName.csv), lista de nomes em TXT, foi gerado por [convert01.awk](../engines/awk-basic/convert01.awk).

* [`habemus-papam.json`](kx/habemus-papam.json), array de arrays em JSON, foi gerado por [convert02.php](../engines/php-basic/convert02.php).

* [`habemus-papam.aoo.json`](kx/habemus-papam.aoo.json), array de objetos (AoO) em JSON, foi gerado por [convert03.js](../engines/js-basic/convert03.js).

