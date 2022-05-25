const TasksContract = artifacts.require('../contracts/TasksContract.sol')

contract('TasksContract', (accounts) => {
  it('....', async () => {
    const TasksContractInstance = await TasksContract.deployed()

    // Set value of 89
    // await TasksContractInstance.createTask("un bello titulo", {from: accounts[0]})
    await TasksContractInstance.createTask("un bello titulo", "una descripcion")

    // Get stored value
    const tareas = await TasksContractInstance.tasks(0)

    // console.log(tareas)

    assert.equal(tareas.title, "un bello titulo")
  })
})
