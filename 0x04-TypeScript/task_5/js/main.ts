export interface MajorCredits {
    credits: number & {__brand: 'MajorCredits'};
    
}

export interface MinorCredits {
    credits: number & {__brand: 'MinorCredits'};
    
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// test
// console.log(sumMajorCredits({credits: 10} as MajorCredits, {credits: 20} as MajorCredits));
// console.log(sumMinorCredits({credits: 5} as MinorCredits, {credits: 10} as MinorCredits));