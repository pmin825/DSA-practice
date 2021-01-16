/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let graph = buildGraph(tickets);
    let array = ['JFK'];
    let prevIndex = 0;

    if (tickets.length === 1) return tickets[0]
    
    console.log(graph)
    
    let idx = 0;
    let connect = graph['JFK'].sort()[idx]
    
    if (!graph[connect]) {
        connect = graph['JFK'].sort().splice(idx + 1, 1)[0]
    }   else {
        connect = graph['JFK'].sort().splice(idx, 1)[0]
    }
    
    while (array.length !== tickets.length + 1) {
        array.push(connect);
        if (!graph[connect]) {  
            
        }   else {
            let prev = connect;
            connect = graph[connect].shift()
            // console.log(array[prevIndex])
            // console.log(connect)
            
            // if (array[prevIndex] === connect) {
            //     graph[prev].push(connect);
            //     connect = graph[prev].splice(idx, 1)[0]
            // }
            prevIndex += 1

            if (!graph[connect] && graph[prev].length >= 1) {
                graph[prev].push(connect);
                connect = graph[prev].shift()
            }

        }
    }
    return array;
};


var buildGraph = (tickets) => {
    let graph = {};
    
    for (let i = 0; i < tickets.length; i++) {
        let [connect, flight] = tickets[i];
        if (!(connect in graph)) {
            graph[connect] = [flight];
        }   else {
            graph[connect].push(flight);
        }
    }
    return graph;
}