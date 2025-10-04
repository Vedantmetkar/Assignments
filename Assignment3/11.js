const students = {
  student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const result = Object.entries(students).map(([student, subjects]) => {
  const marks = Object.values(subjects);
  const average = marks.reduce((a,b) => a + b, 0) / marks.length;
  return { [student]: { average } };
});

console.log(result);
