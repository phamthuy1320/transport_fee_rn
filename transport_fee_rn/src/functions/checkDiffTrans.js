export function checkDiffTrans (diffTrans,total, vat){
    return diffTrans?(total*(1+vat)):total;
}