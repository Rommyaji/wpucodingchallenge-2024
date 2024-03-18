const DNAtoRNA = (dna) => {
    return dna.replaceAll('T', 'U')
}


console.log(DNAtoRNA('TT'));