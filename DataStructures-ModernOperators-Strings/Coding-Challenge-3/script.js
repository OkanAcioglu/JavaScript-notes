'use strict'

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
])

const eventArr = [...gameEvents.values()]
console.log(eventArr)
const events = new Set(eventArr)
console.log(events)

gameEvents.delete(64)
console.log(gameEvents)

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
)

for (const [key, value] of gameEvents) {
  key > 45
    ? console.log(`[SECOND HALF] ${key}: ${value}`)
    : console.log(`[FIRST HALF] ${key}: ${value}`)
}
