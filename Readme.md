Twoja flaga to: UW{B5K_c4n_1Nt0_x55}


Scenariusz rozwiazania jest w miare krotki i moge opisac w mejlu:

zmieniam nazwe pliku atak.js na atak.jpg i uploaduje jako avatar na profilowym. Wysylam wiadomosc do bskmaster:
<script src="<adres_avatara_na_serwerze>"></script>

i czekam ~ 2 sekundy az na moim koncie przyjdzie flaga w wiadomosci od bskmaster. Jezeli w wiadomosci bedzie 'Adresat nie odpisal...' ponawiam wysylanie wiadomosci.


Opis atak.js:
0. Przed kazdym POSTem robie GET na send_message i wyciagam csrfmiddlewaretoken z odpowiedzi i do kazdego POSTa go dodaje
1. POST na send_message: 'admin', 'dej flage'
2. wyciagam adres na ktory admin ma odpisac
3. Czekam 2 sekundy
4. GET na adresie na ktory admin ma odpisac: zapisuje odpowiedz
5. POST na send_message: 'moje_konto (kkragoth)', 'odpowiedz z 4'.

Piotr Szulc 347277