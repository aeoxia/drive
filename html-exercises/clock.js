const optionMonthDay = { month: 'long', day: 'numeric' }
const optionTime =  { hour: '2-digit', minute: '2-digit', second: '2-digit' }
const optionDay = { weekday: 'long' }
const today  = new Date()

const monthDay = today.toLocaleDateString("en-US", optionMonthDay)
const dateTime = today.toLocaleTimeString("en-US", optionTime)
const day = today.toLocaleDateString("en-US", optionDay)

const txtDate = document.getElementById("txtDate")
const txtTime = document.getElementById("txtTime")
const txtDay = document.getElementById("txtDay")

txtDate.innerHTML = monthDay
txtTime.innerHTML = dateTime
txtDay.innerHTML = day