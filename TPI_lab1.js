
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <p>Introduceti primul numar:</p>
    <input type="text" id="primulNumar" value="" />
    <p>Introduceti al doilea numar:</p>
    <input type="text" id="aldoileaNumar" value="" />
    <p>
        Click pt a aduna doua numere.
        <button onclick="adunareNumere()">Adunare</button>
    </p>
    <p>Rezultatul adunarii a doua numere este: <span id="rezultatAdunare"></span> </p>
    <p>
        Click pt a scadea doua numere.
        <button onclick="scadereNumere()">Scadere</button>
    </p>
    <p>Rezultatul adunarii a doua numere este: <span id="rezultatScadere"></span> </p>
    <p>
        Click pt a inmulti doua numere.
        <button onclick="inmultireNumere()">Inmultire</button>
    </p>
    <p>Rezultatul inmultirii a doua numere este: <span id="rezultatInmultire"></span> </p>
    <p>
        Click pt a impartirii doua numere.
        <button onclick="impartireNumere()">Inmultire</button>
    </p>
    <p>Rezultatul impartirii a doua numere este: <span id="rezultatImpartire"></span> </p>
    <p>
        Click pt a afisa vector.
        <button onclick="populareSiAfisareNumerePare()">Afisare vector </button>
    </p>
    <p id="rezultatVector">Rezultatul Vectorului</p>
    <p> Ora si data curenta: <span id="timpul"></span></p>
    <script>
        function adunareNumere() {
             // Tema 1 punctul 1
            var y = document.getElementById("primulNumar").value;
            var z = document.getElementById("aldoileaNumar").value;
            var x = +y + +z;
            document.getElementById("rezultatAdunare").innerHTML = x;
        }
        function scadereNumere() {
             // Tema 1 punctul 1
            var y = document.getElementById("primulNumar").value;
            var z = document.getElementById("aldoileaNumar").value;
            var x = +y - +z;
            document.getElementById("rezultatScadere").innerHTML = x;
        }
        function inmultireNumere() {
             // Tema 1 punctul 1
            var y = document.getElementById("primulNumar").value;
            var z = document.getElementById("aldoileaNumar").value;
            var x = +y * +z;
            document.getElementById("rezultatInmultire").innerHTML = x;
        }
        function impartireNumere() {
            var y = document.getElementById("primulNumar").value;
            var z = document.getElementById("aldoileaNumar").value;
            var x = +y / +z;
            document.getElementById("rezultatImpartire").innerHTML = x;
        }
        function populareSiAfisareNumerePare() {
            // Tema 1 punctul 2 
            let vector = [];

            for (let i = 0; i <= 100; i++) {
                if (i%2 == 0) {
                    vector.push(i);
                }
            }
            var x = vector;
            document.getElementById("rezultatVector").innerHTML = x;
        }

        // Tema 1 punctul 3
        var date = new Date();
        var n = date.toDateString();
        var time = date.toLocaleTimeString();

        document.getElementById('timpul').innerHTML = n + ' ' + time;
        console.log(n + " " + time);
    </script>
</body>
</html>