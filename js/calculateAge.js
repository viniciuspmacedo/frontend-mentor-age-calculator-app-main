
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

export default function calculateAge(date) {
    let birthDay = date.getDate();
    let birthMonth = date.getMonth() + 1;
    let birthYear = date.getFullYear()

    let years = currentYear - birthYear;

    if (birthMonth > currentMonth) {
        years--;
    }

    let months = currentMonth - birthMonth;

    if (months < 0) {
        months += 12;
    }

    let days = currentDay - birthDay;
    if (days < 0) {
        let lastDayofPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        days = lastDayofPreviousMonth - (birthDay - currentDay);
        if (months !== 0) months--
    }

    return [years, months, days]
}

