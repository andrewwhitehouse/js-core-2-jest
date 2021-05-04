const {weeklyGroceriesToBuy} = require('./3-groceries');

describe('groceries', () => {
  let weeklyMealPlan = {
    monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
    tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
    wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
    thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
    friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
    saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
    sunday: [],
  };
  it('gathers weekly ingredients to buy', () => {
    expect(weeklyGroceriesToBuy(weeklyMealPlan)).toEqual([
      'Cheese', 'Eggs', 'Tomato', 'Paprika', 'Leek', 'Wrap', 'Tuna',
      'Canned beans', 'Carrot', 'Aubergine', 'Orange Juice', 'Apple',
      'Ananas', 'Black tea', 'Lamb', 'Salt', 'Bulgar', 'Potato',
      'Rice milk', 'Blueberries', 'Porridge', 'Banana', 'Cinnamon',
      'Olive oil', 'Salmon', 'Asparagus'
    ]);
  });
});
