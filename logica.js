        var naoButton = document.getElementById("naoButton");
        var inexistente = document.getElementById("inesistente");
        var simButton = document.getElementById("simButton");
        var mensagem = document.getElementById("mensagem");
        var imagem = document.getElementById("imagem");
        var contadorCliques = 0;

        naoButton.addEventListener("click", moveButton);
        simButton.addEventListener("click", openImage);

        function moveButton() {
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;

            var buttonWidth = naoButton.offsetWidth;
            var buttonHeight = naoButton.offsetHeight;

            var randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
            var randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));

            naoButton.style.left = randomX + "px";
            naoButton.style.top = randomY + "px";

            contadorCliques++;

            if (contadorCliques === 1) {
                mensagem.textContent = "TA ILUDIDA MESMO?";
            } else if (contadorCliques === 2) {
                mensagem.textContent = "COMPUTADOR SE AUTO DESTRUINDO EM 3 SEGUNDOS A MENOS QUE DIGA A VERDADE!!";
            } else if (contadorCliques >= 3) {
                mensagem.textContent = "VOCE PERDEU TODOS SEUS DADOS, NÃO ESCOLHEU SABIAMENTE! AGORA CLICA NO MAIS BONITO, VAI TEIMOSA...";
                naoButton.disabled = true;
                
            }

            mensagem.style.display = "block";
        }

        function openImage() {
            imagem.src = "./img/irmao-lindo.jpg";
            mensagem.textContent = "VOCÊ ACABA DE ASSUMIR A VERDADE! PARABÉNS, MEU AMOR <3 ";
            mensagem.style.display = "block";
            imagem.style.display = "block";
            }

