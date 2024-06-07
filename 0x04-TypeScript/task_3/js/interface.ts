
// Create a type RowID and set it equal to number
// Create an interface RowElement that contains these 3 fields:
// firstName: string
// lastName: string
// age?: number

type RowID = number;

interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}

export {RowID, RowElement};