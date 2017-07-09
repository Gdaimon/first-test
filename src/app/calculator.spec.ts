import { Calculator } from "./calculator";

describe ( "Test for Calculator", () => {
  
  describe ( "Test for multiply", () => {
    
    it ( "multiply for 3", () => {
      // Arrange - Preparar
      let calculator = new Calculator ();
      // Act - Actuar
      let number = calculator.multiply ( 3, 3 );
      // Assert - Verificar
      expect ( number ).toEqual ( 9 );
    } );
    
  } );
  
  describe ( "Test for divide", () => {
    
    it ( "divide for a number", () => {
      // Arrange - Preparar
      let calculator = new Calculator ();
      // Act && Assert - Actuar y Verificar
      expect ( calculator.divide ( 6, 3 ) ).toEqual ( 2 );
      expect ( calculator.divide ( 5, 2 ) ).toEqual ( 2.5 );
    } );
    
  } );
  
  describe ( "Test for zero", () => {
    
    it ( "divide for a number", () => {
      // Arrange - Preparar
      let calculator = new Calculator ();
      // Act && Assert - Actuar y Verificar
      expect ( calculator.divide ( 6, 0 ) ).toBeNull ();
      expect ( calculator.divide ( 5, 0 ) ).toBeNull ();
      expect ( calculator.divide ( 123456, 0 ) ).toBeNull ();
      expect ( calculator.divide ( 10, 0 ) ).toBeNull ();
    } );
    
  } );
  
  it ( "test of matchers", () => {
    let name = "nicolas";
    let name2;
    expect ( name ).toBeDefined ();
    expect ( name2 ).toBeUndefined ();
    
    expect ( 1 + 2 == 3 ).toBeTruthy ();
    expect ( 1 + 1 == 3 ).toBeFalsy ();
    
    expect ( 5 ).toBeLessThan ( 10 );
    expect ( 20 ).toBeGreaterThan ( 10 );
    
    expect ( "1234567" ).toMatch ( /123/ );
    
    expect ( [ "apples", "oranges", "pears" ] ).toContain ( "oranges" );
  } );
  
} );
