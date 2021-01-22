/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (n === 0) return tasks.length
    const tasksMap = {};
    let maxCount = 0;
    
    for (const task of tasks) {
        tasksMap[task] = tasksMap[task] + 1 || 1; 
        maxCount = Math.max(tasksMap[task], maxCount);
    }
    
    let count = 0;
    const vals = Object.values(tasksMap) 
    
    for (const val of vals) {
        if (val === maxCount) count++
    }
    
    return Math.max(maxCount*(n + 1) - n + count - 1, tasks.length)
};