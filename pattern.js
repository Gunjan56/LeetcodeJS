//Pattern-1: Rectangular Star Pattern
let pattern1 = "";
let n1 = 6;
for(let i = 0; i< n1; i++){
    for(let j = 0; j < n1; j++){
        pattern1 += "* ";
    }
    pattern1 += "\n";
}
console.log(pattern1);

//Pattern-2: Right-Angled Triangle Pattern
let pattern2 = "";
let n2 = 6;
for(let i = 0; i<=n2; i++){
    for(let j = 0; j <i; j++){
        pattern2 += "* ";
    }
    pattern2 += "\n";
}
console.log(pattern2);

//Pattern – 3: Right-Angled Number Pyramid
let pattern3 = "";
let n3 = 5;
for(let i = 1; i <= n3; i++){
    for(let j = 1; j <= i; j++){
        pattern3 += j + " ";
    }
    pattern3 += "\n";
}
console.log(pattern3);

//Pattern – 4: Right-Angled Number Pyramid – II
let pattern4 = "";
let n4 = 5;
for(let i = 1; i <= n1; i++){
    for(let j = 1; j <= i; j++){
        pattern4 += i + " ";
    }
    pattern4 += "\n";
}
console.log(pattern4);

//Pattern-5: Inverted Right Pyramid
let pattern5 = "";
let n5 = 5;
for(let i = 1; i<=n5; i++){
    for(let j = n5; j>=i; j--){
        pattern5 += "* ";
    }
    pattern5 += "\n";
}
console.log(pattern5);

//Pattern – 6: Inverted Numbered Right Pyramid
let pattern6 = "";
let n6 = 6;
for(let i = 1; i <= n6; i++){
    for(let j = n6; j>=i; j--){
       pattern6 += n6-j+1 + " ";
    }
    pattern6 += "\n";
}
console.log(pattern6);

// Pattern – 7: Star Pyramid
let n7 = 7;
let pattern7 = "";
for(let i = 0; i< n7; i++){
    for(let j = 0; j <n7-i-1; j++){
        pattern7 += " ";
    }
    for(let j = 0; j <(2*i+1); j++){
        pattern7 += "*";
    }
    for(let j = 0; j<n7-i-1; j++){
        pattern7 += " ";
    }
    pattern7 += "\n";
}
console.log(pattern7);

// Pattern – 8: Inverted Star Pyramid

