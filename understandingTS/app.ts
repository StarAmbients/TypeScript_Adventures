const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //defining a tuple type
} = {
    name: "Godofredo",
    age: 41,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

// person.role.push('admin'); // TS can't catch this error
// person.role[1] = 10; // TS can catch this error
person.role = [0, 'admin'];

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1]

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}