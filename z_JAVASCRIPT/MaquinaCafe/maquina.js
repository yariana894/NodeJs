
        document.querySelector('#taza').addEventListener('click', (e) => {
            document.querySelector('#taza').className = 'hidden'
        })

        document.querySelector('#zona-devolucion').addEventListener('click', (e) => {

            // emitimos sonido de cambio
            var audio = document.getElementById("cambioAudio");
            audio.play();

            // Movemos las monedas
            var elementosMoneda = document.querySelectorAll('.moneda')
            elementosMoneda.forEach((e) => {
                e.classList.remove('moneda')
                e.offsetWidth;
                e.classList.add("moneda");
            });


            monedas10CentCartera += monedas10CentInsertadas
            monedas20CentCartera += monedas20CentInsertadas
            monedas50CentCartera += monedas50CentInsertadas
            monedas1EuroCartera += monedas1EuroInsertadas
            monedas2EuroCartera += monedas2EuroInsertadas
            monedas10CentInsertadas = monedas20CentInsertadas = monedas50CentInsertadas =
                monedas1EuroInsertadas = monedas2EuroInsertadas = 0
            document.querySelector('#msg').innerHTML = '0'
            rellenaMonedasCartera()
            document.querySelector('#taza').className = 'hidden'
        })



        document.querySelector('#zona-productos').addEventListener('click', (e) => {

            let saldo = Number.parseFloat(document.querySelector('#msg').innerHTML)
            let coste = precioArticulo
            if (saldo < coste) {
                alert('no has insertado suficiente dinero, el café cuesta ' + precioArticulo)
            } else {
                var v = saldo - coste
               // document.querySelector("#msg").innerHTML="Devol:"
                document.querySelector('#msg').innerHTML = 'Devol:'+v.toFixed(2)
                v = Math.round(v * 100);
                v = v / 100;
                saldoparacambio = Number.parseInt(v * 10);
                console.log("saldoparacambiar"+(saldo - coste) * 100 / 10)
                let c = new Cambio(saldoparacambio, [20, 10, 5, 2, 1]);
                let r = `
                    ${c.getVectorSeleccion()[0]} moneda de 2€\n
                    ${c.getVectorSeleccion()[1]} moneda de 1€\n
                    ${c.getVectorSeleccion()[2]} moneda de 50 cent\n
                    ${c.getVectorSeleccion()[3]} moneda de 20 cent\n
                    ${c.getVectorSeleccion()[4]} moneda de 10 cent\n
                    `
                alert(r)
                monedas2EuroCartera += c.getVectorSeleccion()[0]
                monedas1EuroCartera += c.getVectorSeleccion()[1]
                monedas50CentCartera += c.getVectorSeleccion()[2]
                monedas20CentCartera += c.getVectorSeleccion()[3]
                monedas10CentCartera += c.getVectorSeleccion()[4]

              //  document.querySelector('#msg').innerHTML = '0'

                //document.querySelector('#taza').className = 'show'

                var elementoTaza = document.querySelector('#taza')
                elementoTaza.classList.remove('taza')
                elementoTaza.offsetWidth;
                elementoTaza.classList.add("taza");


                rellenaMonedasCartera();
                monedas10CentInsertadas = monedas20CentInsertadas = monedas50CentInsertadas =
                    monedas1EuroInsertadas = monedas2EuroInsertadas = 0

                // emitimos sonido de cambio
                var audio = document.getElementById("cambioAudio");
                audio.play();

                // Movemos las monedas
                var elementosMoneda = document.querySelectorAll('.moneda')
                elementosMoneda.forEach((e) => {
                    e.classList.remove('moneda')
                    e.offsetWidth;
                    e.classList.add("moneda");
                });
            }

        })
        var monedas10CentCartera = 4;
        var monedas20CentCartera = 4;
        var monedas50CentCartera = 4;
        var monedas1EuroCartera = 4;
        var monedas2EuroCartera = 3;

        var monedas10CentInsertadas = 0;
        var monedas20CentInsertadas = 0;
        var monedas50CentInsertadas = 0;
        var monedas1EuroInsertadas = 0;
        var monedas2EuroInsertadas = 0;

        var precioArticulo = 0.60;

        rellenaMonedasCartera()

        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function drop(ev) {
            ev.preventDefault();

            document.querySelector('#taza').className = 'hidden'



            var audio = document.getElementById("monedaAudio");
            audio.play();

            var data = ev.dataTransfer.getData("text");
            if (data === '10cent' && monedas10CentCartera>0) {
                monedas10CentInsertadas++;
                monedas10CentCartera--;
            }
            if (data === '20cent' && monedas20CentCartera>0) {
                monedas20CentInsertadas++;
                monedas20CentCartera--;
            }
            if (data === '50cent' && monedas50CentCartera>0) {
                monedas50CentInsertadas++;
                monedas50CentCartera--;
            }
            if (data === '1euro' && monedas1EuroCartera>0) {
                monedas1EuroInsertadas++;
                monedas1EuroCartera--;
            }
            if (data === '2euro' && monedas2EuroCartera>0) {
                monedas2EuroInsertadas++;
                monedas2EuroCartera--;
            }
            rellenaMonedasCartera();
            //ev.target.appendChild(document.getElementById(data));
            document.querySelector('#msg').innerHTML =  Number.parseFloat(calculaTotalInsertadas()).toFixed(2);
        }

        function calculaTotalInsertadas() {
            return monedas10CentInsertadas * 0.1 +
                monedas20CentInsertadas * 0.2 +
                monedas50CentInsertadas * 0.5 +
                monedas1EuroInsertadas +
                monedas2EuroInsertadas * 2;
        }

        function rellenaMonedasCartera() {
            document.querySelector('#_10centCartera').innerHTML = Number.parseInt(monedas10CentCartera)
            document.querySelector('#_20centCartera').innerHTML = Number.parseInt(monedas20CentCartera)
            document.querySelector('#_50centCartera').innerHTML = Number.parseInt(monedas50CentCartera)
            document.querySelector('#_1euroCartera').innerHTML = Number.parseInt(monedas1EuroCartera)
            document.querySelector('#_2euroCartera').innerHTML = Number.parseInt(monedas2EuroCartera)
        }