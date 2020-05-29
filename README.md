# FUTURE IS NOW

---
> Zdecydowałem się nie hostować jeszcze nigdzie tej strony (toteż w celu jej sprawdzenia należy pobrać ją i uruchomić lokalnie) jednakże prawdopodobnie wrzucę ją na jakiś hosting tzn nie jest to jeszcze ostateczna wersja tego projektu.
---

### Instrukcja jak uruchomić:

1. Należy pobrać [Node.js](https://nodejs.org/en/)
2. Otworzyć katalog główny tego projektu np.: w programie [Visual Studio Code](https://code.visualstudio.com/)
3. W konsoli wpisać: `cd backend` (aby wejść do katalogu backend) 
4. W konsoli wpisać: `npm install`
5. W konsoli wpisać: `node server` (uruchomi server. Można też uruchomić przez nodemon, wtedy: `nodemon server`)*
6. Otworzyć nowy terminal
7. W konsoli wpisać: `cd frontend` (aby wejść do katalogu frontend)
8. W konsoli wpisac: `serve -s build` (powinien pojawić się komunikat na którym porcie działa strona)**


---

9. *Jeśli polecenie `nodemon server` nie działa z powodu braku zainstalowanego nodemon należy poprzedzić je `npm i nodemon`

10. **Jeśli nie ma zainstalowanego servera do wersji produkcyjnej to należy wpisać w konsoli:
* `npm install -g serve`
* `serve -s build`

11. W przypadku wystapienia problemu z pozwoleniem można udzielić jednorazowego pozwolenia przez:
* `Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned`
* `serve -s build`

---

W przypadku problemów lub pytań proszę o kontakt na BB

> wszystkie zdjęcia użyte w projekcie pochodzą ze stron udostępniających stockowe zdjęcia do dowolnego użytku bez żadnych ograniczeń oraz z mojej prywatnej kolekcji grafik