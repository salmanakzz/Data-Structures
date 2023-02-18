let result = [
    {
      title: "pineapple",
      category: "fruits",
      status: "active",
    },
    {
      title: "orange",
      category: "fruits",
      status: "active",
    },
    {
      title: "banana",
      category: "fruits",
      status: "active",
    },
    {
      title: "orange",
      category: "fruits",
      status: "active",
    },
    {
      title: "banana",
      category: "fruits",
      status: "active",
    },
  ];
  
  function split(array) {
    let fruits = [];
    let contain = false;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i].title === fruits[j]?.title) {
          contain = true;
          break;
        }
      }
      if (!contain) {
        fruits.push(array[i]);
      }
      contain = false;
    }
    console.log(fruits);
  }
  
  split(result);
  