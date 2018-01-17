const actions = {
    create: 'Create',
    update: 'Update',
    remove: 'Remove',
    find: 'Find',
    findAll: 'Find All'
  }
  
  const models = {
    todo: {
      name: 'Todo',
      endpoint: 'todos',
    },
    user:{
      name: 'User',
      endpoint:'users',
      preventDefaultApi: true,
    }
  }
  
  
  module.exports = {
    actions,
    models
  }