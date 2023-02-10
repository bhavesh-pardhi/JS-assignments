let attendance
let totalclasses = prompt('enter the total classes hold')
totalclasses = Number.parseInt(totalclasses)
let attendclasses = prompt(' enter attend classes number ')
attendclasses = Number.parseInt(attendclasses)
attendance = attendclasses / totalclasses * 100
if (attendance >= 75 && attendance <= 100) {
  console.log('percentage of class attended=%d', attendance)
  console.log('you are  allowed to exam ')

}
else if (attendance >= 0 && attendance <= 74) {
  console.log('percentage of class attended=%d', attendance)
  console.log('you are  not allowed in exam')

}
else {
  console.log('invalided inpute ')
} 