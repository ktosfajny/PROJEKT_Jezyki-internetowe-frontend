Jak uruchomić:
1 - należy pobrać Node.js
2 - otworzyć katalog główny np w programie Visual Studio Code
3 - w konsoli wpisać: cd backend    (aby wejść do katalogu backend) 
4 - w konsoli wpisać: npm install
5 - w konsoli wpisać: node server   (uruchomi server i wypisze w konsoli, na którym porcie działa, można też uruchomić przez nodemon jeśli jest)
6 - w konsoli wpisać: cd ..
7 - w konsoli wpisać: cd frontend   (aby wejść do katalogu frontend)
8 - w konsoli wpisac: serve -s build    (powinien pojawić się komunikat na którym porcie działa strona)

jeśli nie ma zainstalowanego servera do wersji produkcyjnej to wpisać w konsoli:
9 - npm install -g serve
10 - serve -s build

jeśli ciągle wystepuje błąd to możliwe że jest to problem z pozwoleniem, można udzielić jednorazowego pozwolenia przez:
11 - Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
12 - serve -s build

W razie problemów proszę o kontakt na BB