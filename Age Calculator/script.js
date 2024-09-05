const inputDOB = document.getElementById('inputDob');
const currentDate = document.getElementById('cdate');
const ageBox = document.querySelector('#currentAge')
function getDOB() {
    const userDate = new Date(Date.parse(inputDOB.value))
    const curDate = new Date(Date.parse(currentDate.value))
    const bYear = userDate.getFullYear()
    const bMonth = userDate.getMonth()+ 1
    const bDay = userDate.getDate()
    const curYear = curDate.getFullYear()
    const curMonth = curDate.getMonth() + 1
    const curDay = curDate.getDate()
    const y = curYear - bYear
    const m = curMonth - bMonth
    const d = curDay - bDay
    ageBox.innerHTML = `${y} years ${m} months and ${d} days`


  /*   function getAge (year, month, day) {
        const birth = new Date(year, month - 1, day)
        const now = new Date()
        const diff = new Date(now.valueOf() - birth.valueOf())
        return Math.abs(diff.getFullYear() - 1970)
    } */
}