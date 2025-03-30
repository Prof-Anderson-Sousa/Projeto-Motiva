const imagens = [];
        for (let i = 1; i <= 15; i++) {
            const num = i.toString().padStart(2, '0');
            imagens.push(`../img/IMG${num}.jpg`);
        }

        let indexAtual = 0;
        const quantidadePorPagina = 6;
        let indexZoom = -1;

        function mostrarMais() {
            const galeria = document.getElementById('galeria');
            for (let i = 0; i < quantidadePorPagina && indexAtual < imagens.length; i++) {
                const divImagem = document.createElement('div');
                divImagem.classList.add('imagem');
                divImagem.dataset.index = indexAtual;
                divImagem.onclick = function() { abrirZoom(this); };

                const img = document.createElement('img');
                img.src = imagens[indexAtual];
                img.alt = `Imagem ${indexAtual + 1}`;

                divImagem.appendChild(img);
                galeria.appendChild(divImagem);

                indexAtual++;
            }

            if (indexAtual >= imagens.length) {
                document.getElementById('botaoMais').style.display = 'none';
            }
        }

        function abrirZoom(elemento) {
            indexZoom = parseInt(elemento.dataset.index);
            document.getElementById('zoomImage').src = imagens[indexZoom];
            document.getElementById('zoomContainer').style.display = 'flex';
        }

        function fecharZoom(event) {
            if (event.target === event.currentTarget) {
                document.getElementById('zoomContainer').style.display = 'none';
            }
        }

        function navegar(direcao) {
            indexZoom += direcao;
            if (indexZoom < 0) {
                indexZoom = 0;
            } else if (indexZoom >= imagens.length) {
                indexZoom = imagens.length - 1;
            }
            document.getElementById('zoomImage').src = imagens[indexZoom];
        }

        // Carregar as primeiras imagens ao iniciar
        mostrarMais();