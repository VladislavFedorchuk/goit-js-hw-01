function getElementWidth(content, padding, border) {
    const elementWidth = Number.parseFloat(content) +
        Number.parseFloat(padding) + Number.parseFloat(padding) +
        Number.parseFloat(border) + Number.parseFloat(border)
    
    return elementWidth
 
    
    
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
console.log(getElementWidth("300px", "27px", "32px"));