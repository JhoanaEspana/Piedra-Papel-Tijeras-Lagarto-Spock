function option (jugador){
  const result_txt = ["empate","gana","pierde"];
  const name = ["piedra","papel","tijera","lagarto","spock"];

  const cpu = Math.floor((Math.random() * 5)); // aqui obtengo un numero aleatorio del 0 al 4

  const play = [
    [0,1,2,2,1],
    [2,0,1,1,2],
    [1,2,0,2,1],
    [1,2,1,0,2],
    [2,1,2,1,0]
  ];

  desc_jugada = [
    ['Iguales', 'Papel tapa piedra', 'Piedra rompe tijeras', 'Piedra aplasta lagarto', 'Spock vaporiza piedra'],
    ['Papel tapa piedra', 'Iguales', 'Tijeras corta papel', 'Lagarto devora papel', 'Papel desautoriza a Spock'],
    ['Piedra rompe tijeras', 'Tijeras corta papel', 'Iguales', 'Tijeras decapita lagarto', 'Spock rompe tijeras'],
    ['Piedra aplasta lagarto', 'Lagarto devora papel', 'Tijeras decapitan lagarto', 'Iguales', 'Lagarto envenena Spock'],
    ['Spock vaporiza piedra', 'Papel desautoriza a Spock', 'Spock rompe tijeras', 'Lagarto envenena a Spock', 'Iguales']
  ];

  const result = play[cpu][jugador];

  const msj1 = new SpeechSynthesisUtterance("CPU saca " + name[cpu]);
  const msj2 = new SpeechSynthesisUtterance(desc_jugada[cpu][jugador]);
  const msj3 = new SpeechSynthesisUtterance(result_txt[result]);

  window.speechSynthesis.speak(msj1);
  window.speechSynthesis.speak(msj2);
  window.speechSynthesis.speak(msj3);

  console.log("JUGADOR: " + name[jugador]);
  console.log("CPU: " + name[cpu]);
  console.log(result_txt[result]);
}