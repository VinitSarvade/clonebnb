export function calculateAge(oldDate: string) {
  const ageDifMs = Date.now() - new Date(oldDate).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
