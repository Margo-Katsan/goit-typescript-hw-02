/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDays {
  monday = "MONDAY",
  tuesday = "TUESDAY",
  wednesday = "WEDNESDAY",
  thursday = "THURSDAY",
  friday = "FRIDAY",
  saturday = "SATURDAY",
  sunday = "SUNDAY"
}

function isWeekend(dayOfWeek: weekDays): boolean {
  if (dayOfWeek === weekDays.saturday || dayOfWeek === weekDays.sunday) {
    return true;
  }
  return false;
}

