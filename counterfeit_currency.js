// A counterfeit currency printer is operating in country XYZ, and all of the banks must try to identify the bad currency. Every note has a serial number that can be used to determine whether it is ValidityState. The serial number also can be used to determine the denomination of the note. A valid serial number will have the following characteristics:

// 1. There are 10 to 12 characteristics
// 2. The first 3 characters are distinct uppercase English letters
// 3. The next 4 characters represent the year the note was printed and will always be between 1900 and 2019 inclusive.
// 4. The next characters represent the currency denomination and may be any one of { 10, 20, 50, 100, 200, 500, 1000 }
// 5. The last character is uppercase English letter

// Given an array of serial numbers, determine the value of the valid currency. 

// For example, serial numbers for n = 8 are shown below. 