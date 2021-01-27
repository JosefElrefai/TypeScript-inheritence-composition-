export const dateStringToDate = (dateStr: string): Date => {
    const dateParts = dateStr
    .split('/')
    .map((datePart: string): number => parseInt(datePart)) 

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}