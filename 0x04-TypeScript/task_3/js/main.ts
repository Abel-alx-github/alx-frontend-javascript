/// <reference path="./crud.d.ts" />
import {RowID, RowElement} from "./interface";

import * as CRUD from './crud';

// import { insertRow } from './crud';

const row : RowElement = {firstName: 'Guillaume',
                         lastName: 'Salva',};

// @ts-ignore
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = row;
updatedRow.age = 23;



CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
