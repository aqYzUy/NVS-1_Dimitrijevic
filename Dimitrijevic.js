// Wiederholen Sie die im Unterricht gelernte Aufgabe:

// 1) leeres Array erzeugen mit 100 Plätzen
let x = new Array(100).fill();
console.log(x);

// 2) 100 Zufallszahlen von 2 bis 1000 einfüllen
const y = x.map(() => Math.round(Math.random() * (1000 - 2)) + 2);
console.log(y);
console.log("Größte Zahl: " + Math.max(...y));    // größte Zahl ausgeben
console.log("Kleinste Zahl: " + Math.min(...y));    // kleinste Zahl ausgeben

// 3) die Primzahlen herausfiltern und
function isPrim(n){
    for (i=2; i <= n-1; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
} 
primes = y.filter(isPrim);
console.log("Primzahlen: "+ primes);

// 4) aufsteigend sortieren
const primes_sorted = primes.sort((a, b) => a - b);
console.log("Aufsteigend sortiert: "+ primes_sorted);