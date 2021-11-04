const allRoles = {
  user: ['createUser', 'updateCategory', 'updateUser', 'getUser', 'getCategory', 'getCourses', 'searchCourse', 'sortCourse'],
  admin: [
    'getCategory',
    'updateCategory',
    'deleteCategory',
    'updateUser',
    'getCourses',
    'getUsers',
    'getUser',
    'deleteUser',
    'createCourse',
    'updateCourse',
    'deleteCourse',
    'CRUDCategory',
    'deleteUser',
    'searchCourse',
    'sortCourse',
    'getStatistics',
    'createUser',
    'uploadCoursePhoto',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
