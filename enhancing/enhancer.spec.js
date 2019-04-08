const { succeed, fail, repair } = require('./enhancer.js');
// test away!
describe('Item Enhancements', () => {
    
    describe('Repair', () => {
        
        test('should repair an items durability to 100', () => {
            expect(repair({
                name: "Yoda",
                type: "weapon",
                durability: 50,
                enhancement: 20
            })).toEqual({
                name: "Yoda",
                type: "weapon",
                durability: 100,
                enhancement: 20
            });
            expect(repair({
                name: "Obi-Wan",
                type: "weapon",
                durability: 100,
                enhancement: 20
            })).toEqual({
                name: "Obi-Wan",
                type: "weapon",
                durability: 100,
                enhancement: 20
            });
        })
        
    })
    
    describe('Succeed', () => {
        
        test('should enhance an item when successful', () => {
            expect(succeed({
                name: "Yoda",
                type: "weapon",
                durability: 100,
                enhancement: 20
            })).toEqual({
                name: "Yoda",
                type: "weapon",
                durability: 100,
                enhancement: 20
            });
            expect(succeed({
                name: "Obi-Wan",
                type: "weapon",
                durability: 100,
                enhancement: 16
            })).toEqual({
                name: "Obi-Wan",
                type: "weapon",
                durability: 100,
                enhancement: 17
            });
        })
        
    })
    
    describe('Fail', () => {
        
        test('should enhancement fail, duability drops', () => {
            
        })
        
    })

})