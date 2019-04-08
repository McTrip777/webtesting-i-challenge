const { succeed, fail, repair } = require('./enhancer.js');
// test away!
describe('Item Enhancements', () => {
    
    describe('Repair', () => {
        
        test('should repair an items durability to 100', () => {
            let durability = 65
            expect(repair(durability)).toBe(100);
            //expect(repair('65')).toBe(100);
            //expect(repair(null)).toBe(100);
            //expect(repair()).toBe(100);
            //expect(repair(0)).toBe(100);
        })
        
    })
    
    describe('Succeed', () => {
        
        test('should enhance an item when successful', () => {
            let enhancement = 10
            if(enhancement === 20){
                expect(succeed(enhancement)).toBe(enhancement);
            console.log(enhancement)
            }else if(enhancement < 20){
                expect(succeed(enhancement)).toBe(++enhancement);
            console.log(enhancement)
            }
        })
        
    })
    
    describe('Fail', () => {
        
        test('should enhancement fail, duability drops', () => {
            
        })
        
    })

})