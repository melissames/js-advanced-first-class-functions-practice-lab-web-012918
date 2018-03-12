const logDriverNames = function(drivers){
  return drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, hometown){
  return drivers.forEach(function(driver){
    if (driver.hometown === hometown){
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivers){
  const newDrivers = drivers.slice();

  return newDrivers.sort(function(a, b){
    return a.revenue > b.revenue;
  });
}

const driversByName = function(drivers){
  const newDrivers = drivers.slice();

  return newDrivers.sort(function(a, b){
    return a.name > b.name;
  })
}

const totalRevenue = function(drivers){
  return drivers.reduce(function(total, currentDriver){
    return currentDriver.revenue + total;
  }, 0);
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length;
};
