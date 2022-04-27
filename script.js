// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (id, arr2) => {
  return {
    specimenNum: id,
    dna: arr2,
    mutate() {
      let r = returnRandBase();
      if (this.dna[0] === r) {
        do {
         r = returnRandBase();
        } while (this.dna[0] === r);
        this.dna[0] = r;
      } else {
        this.dna[0] = r;
      }
      return this.dna;
    },
    compareDNA(other) {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === other.dna[i]) {
          // console.log(`Found one! ${this.dna[i]} and ${other.dna[i]} at index ${i}`);
          counter += 1;
        }
      }
      // console.log(counter);
      // console.log(this.dna.length);
      const percent = Math.floor((counter / this.dna.length) * 100)
      console.log(`specimen #${this.specimenNum} and specimen #${other.specimenNum} have ${percent}% DNA in common`);
    },
    willLikelySurvive() {
      let counter = 0; 
      this.dna.forEach(e => {
        if (e === 'G' || e === 'C') {
          counter += 1;
        }
      })
      return ((counter / this.dna.length) >= 0.6) ? true : false;
    }
  };
} 

let bunchOfpAequor = [];

let i = 1;

while (bunchOfpAequor.length < 30) {
  let x = pAequorFactory(i, mockUpStrand());
  if (x.willLikelySurvive()) {
    bunchOfpAequor.push(x);
  }
  i += 1;
}

console.log(bunchOfpAequor);
console.log(bunchOfpAequor.length);
