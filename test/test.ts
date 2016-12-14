import * as mathmate_templates from '../dist';

// test all
/*
Object.keys(mathmate_templates).forEach((tplname) => {
    let q = new mathmate_templates[tplname];
    console.log(q.qtxt);
    console.log(q.cans);
});
*/

let q1 = new mathmate_templates.work_and_time_00005();
console.log(q1.qtxt);
console.log(q1.cans);

let q2 = new mathmate_templates.work_and_time_00005();
console.log(q2.qtxt);
console.log(q2.cans);

//if (q["cans_fmt"]) {
//    console.log(q.cans_fmt);
//}


