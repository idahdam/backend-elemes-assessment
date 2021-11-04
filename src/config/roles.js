const allRoles = {
  user: ['createUser', 'updateUser', 'getUser', 'getCategory', 'getCourses', 'searchCourse', 'sortCourse'],
  admin: [
    'getCategory',
    'updateUser',
    'getCourses',
    'getUsers',
    'getUser',
    'deleteUser',
    'CRUDCourse',
    'CRUDCategory',
    'deleteUser',
    'searchCourse',
    'sortCourse',
    'getStatistics',
    'createUser',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
