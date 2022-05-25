const TasksContract = artifacts.require('../contracts/TasksContract.sol')


contract('TasksContract', (accounts) => {
  it('deploy > createTask > task(0) > counter', async () => {
    const TasksContractInstance = await TasksContract.deployed()

    // Set value of 89
    // await TasksContractInstance.createTask("un bello titulo", {from: accounts[0]})
    await TasksContractInstance.createTask("primer título", "primer descripción")
    await TasksContractInstance.createTask("segundo título", "segunda descripción")

    // Get stored value
    const tareas = await TasksContractInstance.tasks(0)

    const counter = await TasksContractInstance.taskcounter()

    console.log('task counter: ', counter.toNumber())

    console.log('id: ', tareas.id.toNumber());
    
    console.log('title: ', tareas.title);
    
    console.log('description: ', tareas.description);
    
    console.log('done: ', tareas.done);

    assert.equal(tareas.title, "primer título")
  })

  it('getTaskById(1)...', async () => {
    const TasksContractInstance = await TasksContract.deployed()

    const counter = await TasksContractInstance.taskcounter()

    console.log('task counter: ', counter.toNumber())

    const tarea1 = await TasksContractInstance.getTaskById(1)

    console.log('id: ', tarea1["id"]);
    
    console.log('title: ', tarea1["title"]);
    
    console.log('description: ', tarea1["description"]);
    
    console.log('done: ', tarea1["done"]);

    assert.equal(tarea1["title"], "segundo título")
  })

  it('toggleDone(1)...', async () => {
    const TasksContractInstance = await TasksContract.deployed()

    const prevTaskDone = await TasksContractInstance.getTaskById(1)

    await TasksContractInstance.toggleDone(1)
    
    const taskDone = await TasksContractInstance.getTaskById(1)

    console.log('id: ', taskDone["id"]);
    
    console.log('title: ', taskDone["title"]);
    
    console.log('description: ', taskDone["description"]);
    
    console.log('done: ', taskDone["done"]);

    assert.equal(taskDone["done"], !prevTaskDone["done"])
  })

  it('modifyTitle(0)...', async () => {
    const TasksContractInstance = await TasksContract.deployed()

    await TasksContractInstance.modifyTitle(0, "first title")
    
    const taskDone = await TasksContractInstance.getTaskById(0)

    console.log('id: ', taskDone["id"]);
    
    console.log('title: ', taskDone["title"]);
    
    console.log('description: ', taskDone["description"]);
    
    console.log('done: ', taskDone["done"]);

    assert.equal(taskDone["title"], "first title")
  })

  it('modifyDescription(1)...', async () => {
    const TasksContractInstance = await TasksContract.deployed()

    await TasksContractInstance.modifyDescription(1, "second description")
    
    const taskDone = await TasksContractInstance.getTaskById(1)

    console.log('id: ', taskDone["id"]);
    
    console.log('title: ', taskDone["title"]);
    
    console.log('description: ', taskDone["description"]);
    
    console.log('done: ', taskDone["done"]);

    assert.equal(taskDone["description"], "second description")
  })

})
