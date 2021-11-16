export function formatDateForInput(date) {
   return new Date(date).toISOString().split('T')[0]
}