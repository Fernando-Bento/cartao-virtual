const slider = document.querySelectorAll('.slide')

        const prev = document.getElementById('setaEsquerda')

        const next = document.getElementById('setaDireita')

        let est = 0;

        function esconder() {

        slider.forEach(item => item.classList.remove('on'))

        }

        function mostrar() {

        slider[est].classList.add('on')

        }

        function proximo() {

        esconder()

            if(est === slider.length -1) {

                est = 0

            } else {

                est++

            }
        mostrar()

        }

        function anterior() {

        esconder()

            if(est === 0) {

                est = slider.length -1

            } else {

                est--
                
            }

        mostrar()

        }

        next.addEventListener('click', proximo)

        prev.addEventListener('click', anterior)