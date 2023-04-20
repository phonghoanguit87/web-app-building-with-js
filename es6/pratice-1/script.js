const team = [
    {member: 'John',km: 3},
    {member: 'Jane',km: 4},
    {member: 'David',km: 5},
    {member: 'Peter',km: 2},
];
let sum = 0;

for (const {km} of team) {
    sum += km;
}

console.log(`Tổng số km: ${sum}`);