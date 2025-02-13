// Data Types: Object, String, number boolean,null, undefined,
//Objects:
//1 . JSON Object {Key:Value Pairs},
//2. Array Object [ele1,ele2,ele3...]
// 3. function object
const s1={
    Name:'nanda',
    Age:24,
    fees_paid: 3400.78,
    work_experience: {
        ABC: '3 months',
        XYZ: '2 months',
    },
    Marks :{
        Maths:45,
        science:56,
    },
    Percentage: ['Sem-I: 84','Sem-II: 86','Sem-III: 88'],
    Performance: ()=>console.log('Good')
}
//console.log(s1,typeof(s1))
console.log(s1.Name)
console.log("Marks of Maths:",s1.Marks.Maths)
// console.log("Percentage of sem 3:",s1.work_experience.ABC)



