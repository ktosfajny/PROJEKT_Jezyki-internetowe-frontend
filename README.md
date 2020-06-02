# FUTURE IS NOW

> W tym repozytorium znajduje się frontend do strony internetowej.  

---

### Struktura projektu i repozytorium:

Od początku tworzenia repozytorium aż to commita 'update README - possible hosting in the near future' (włącznie z nim) backend oraz frontend przechowywane były w jednym głównym katalogu. Utworzone były w nim specjalne podkatalogi: 'backend' dla backendu oraz 'frontend' dla frontendu.
Na tamten stan aby uruchomić projekt należało pobrać całe repozytorium i lokalnie uruchomić server oraz stronę. 

Nastepnie rozdzieliłem backend i frontend na osobne repozytoria, toteż commit 'update README - possible hosting in the near future' jest ich ostatnim współnym punktem w historii tych repo. 

---

### Linki do pozostałych części projektu:

1. [wersja Lokalna](https://github.com/ktosfajny/PROJEKT_Jezyki-internetowe)
2. [backend](https://github.com/ktosfajny/PROJEKT_Jezyki-internetowe-backend)

---

### Instrukcja jak uruchomić wersję developerską lub produkcyjną lokalnie:

Stronę można też uruchomić lokalnie. Nie jest to koniecznie, ponieważ korzysta ona z GitHub Pages, lecz jeśli jest taka potrzeba, poniżej zamieściłem instrukcję:

1. Należy pobrać [Node.js](https://nodejs.org/en/)
2. Otworzyć katalog główny tego projektu np.: w programie [Visual Studio Code](https://code.visualstudio.com/)

Dla wersji DEVELOPERSKIEJ:

3. W konsoli wpisać: `npm install` aby zainstalować moduły (dla wersji developerskiej)
4. W konsoli wpisać: `npm start` (aby uruchomić wersję developerską)

Dla wersji PRODUKCYJNEJ:

3. W konsoli wpisac: `serve -s build` (aby uruchomić wersję produkcyjną. Powinien pojawić się komunikat na którym porcie działa strona)**
    - **Jeśli nie ma zainstalowanego servera do wersji produkcyjnej - należy wpisać w konsoli:
        * `npm install -g serve`
        * `serve -s build`

    - W przypadku wystapienia problemu z pozwoleniem można udzielić jednorazowego pozwolenia przez:
        * `Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned`
        * `serve -s build`


---


W przypadku problemów lub pytań proszę o kontakt na BB

> wszystkie zdjęcia użyte w projekcie pochodzą ze stron udostępniających stockowe zdjęcia do dowolnego użytku bez żadnych ograniczeń oraz z mojej prywatnej kolekcji grafik