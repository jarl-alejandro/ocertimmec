export class DateUtils {
    public static formatDate (date: string | Date): string {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
}