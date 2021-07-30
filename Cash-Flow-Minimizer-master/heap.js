
export { data_management }

class data_management {

    constructor() { this.heap = []; }   // constructor to initialize to zero

    insert(value) {
        console.log(value);
        this.heap.push(value);
        this.updation_of_maxHeap();
    }

    size() { return this.heap.length; }

    empty() { return ( this.size()===0 ); }

    //function to update maxheap
    updation_of_maxHeap() {
        let index = this.size() - 1;

        while (index > 0)
        {
            let element = this.heap[index],
                parentIndex = Math.floor((index - 1) / 2),
                parent = this.heap[parentIndex];

            if (parent[0] >= element[0])
            break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex
        }
    }

    extractMax() 
    {
        const max = this.heap[0];
        this.heap.shift();
     
        return max;
    }
}
