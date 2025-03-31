const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el inicio y final (ej. 10 50): ', (answer) => {
  const [inicio, final] = answer.split(' ').map(Number);
  
  if (isNaN(inicio) || isNaN(final)) {
    console.log('Debes ingresar dos números válidos!');
  } else {
    let pares = 0;
    for (let i = inicio; i <= final; i++) {
      if (i % 2 === 0) pares++;
    }
    console.log(`\nResultado:`);
    console.log(`Pares: ${pares}`);
    console.log(`Impares: ${final - inicio + 1 - pares}`);
  }
  
  rl.close();
});
 