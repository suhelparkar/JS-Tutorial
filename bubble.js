

function bubbleSort(a){
    var input = a;

    for (var i=0; i<=input.length-1; i++)
    {
        if (input[i]>input[i+1])
        {
            var temp = input[i+1];
            input[i+1]=input[i];
            input[i]=temp;
            i=i-2;
        }
    }
    return input;
}

var sorted = bubbleSort([7,2,4,1,8,3]);

console.log(sorted);






