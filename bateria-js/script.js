// através do evento keyup ativa a função plauSound e deixa os caracteres minúsculos
document.body.addEventListener('keyup', (event)=>{
   playSound(event.code.toLowerCase()) ;
});

// adiciona um evento de click ao botão para ser tocado a sequencia digitada no campo de input
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    

    // criação de um array com cada letra digitada no campo
    if(song !== ""){
        let songArray = song.split('');
        // ativa a função (playComposition) para executar os sons das letras adicionadas ao array
        playComposition(songArray);
    }
})

// função que executa o som das teclas
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        // da play no audio e retira o delay do tempo de espera
        audioElement.currentTime = 0;
        audioElement.play();
    }
    // adiciona e remove a classe active para ativar a estilização dos botões ao serem selecionados.
    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}



function playComposition(songArray){

    let wait = 0;

    // loop criado para percorrer cada item do array e chamar a função playSound adicionando como parametro o valor de sua tecla. 
    for( let songItem of songArray){
        // para executar a função a partir do tempo estabelecido pela variavel wait.
        setTimeout(() => {
            playSound(`key${songItem}`); 
        }, wait);

        wait += 250;

       
    }

}