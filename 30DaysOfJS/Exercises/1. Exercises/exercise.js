
const arr = []
const numbers = [1, 2, 3, 4, 5]
const mixedDataTypes = [
    "Balazs",
    420,
    false,
    {
        isInstock: false, isDicounted: true
    },
    {
        name: 'Balazs', identity: 'male'
    },
    19
]

console.log(`List length: ${numbers.length}`)
console.log(`Middle item: ${numbers[0]}`)
console.log(`Middle item: ${Math.round(numbers.length / 2)}`)
console.log(`Last item: ${numbers.length - 1}`)
console.log(`Mixed Array length: ${mixedDataTypes.length}`)