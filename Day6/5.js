var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var maxfreq = 1;
var freq = 0;
var res;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 freq++;
                if (maxfreq<freq)
                {
                    maxfreq=freq; 
                    res = arr[i];
                }
        }
        freq=0;
}
console.log(res+" ( " + maxfreq +" times ) ") ;