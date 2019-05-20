var _ = require(lodash)

var employees = [
  { name: "John", salary: 5000},
  { name: "Susan", salary: 6000},
  { name: "Greg", salary: 10000},
  { name: "Mary", salary: 12000}
]

var dueForARaise = _.filter(employees, function(employees) {
  return employees.salary < 70000
})