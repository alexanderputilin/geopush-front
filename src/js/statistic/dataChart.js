export function getDataChart(data) {

  //Демка, вместо этого написать запросы

  if (data.type === 'device') {

    if (data.time === 'week') {
      return [{
        'device': 'Apple',
        'Numbers': 262460
      }, {
        'device': 'Samsung',
        'Numbers': 35077
      }, {
        'device': 'Huawei',
        'Numbers': 19890
      }, {
        'device': 'Xiaomi',
        'Numbers': 9705
      }, {
        'device': 'Lenovo',
        'Numbers': 2423
      }, {
        'device': 'Другие',
        'Numbers': 12434
      }];
    }

    if (data.time === 'month') {
      return [{
        'device': 'Apple',
        'Numbers': 404971
      }, {
        'device': 'Samsung',
        'Numbers': 59604
      }, {
        'device': 'Huawei',
        'Numbers': 35903
      }, {
        'device': 'Xiaomi',
        'Numbers': 17104
      }, {
        'device': 'Lenovo',
        'Numbers': 4546
      }, {
        'device': 'Другие',
        'Numbers': 29234
      }];
    }

    if (data.time === 'all') {
      return [{
        'device': 'Apple',
        'Numbers': 1071051
      }, {
        'device': 'Samsung',
        'Numbers': 998616
      }, {
        'device': 'Huawei',
        'Numbers': 848449
      }, {
        'device': 'Xiaomi',
        'Numbers': 404998
      }, {
        'device': 'Lenovo',
        'Numbers': 113258
      }, {
        'device': 'Другие',
        'Numbers': 439300
      }];
    }
  }


  if (data.type === 'local') {

    if (data.time === 'week') {
      return [{
        'city': 'Москва',
        'Numbers': 66422
      }, {
        'city': 'Санкт-Петергбург',
        'Numbers': 24725
      }, {
        'city': 'Краснодар',
        'Numbers': 20610
      }, {
        'city': 'Новосибирск',
        'Numbers': 13227
      }, {
        'city': 'Самара',
        'Numbers': 11423
      }, {
        'city': 'Казань',
        'Numbers': 8863
      }, {
        'city': 'Другие',
        'Numbers': 211676
      }];
    }

    if (data.time === 'month') {
      return [{
        'city': 'Москва',
        'Numbers': 122551
      }, {
        'city': 'Санкт-Петергбург',
        'Numbers': 43948
      }, {
        'city': 'Краснодар',
        'Numbers': 41677
      }, {
        'city': 'Самара',
        'Numbers': 32876
      }, {
        'city': 'Новосибирск',
        'Numbers': 22177
      }, {
        'city': 'Казань',
        'Numbers': 19882
      }, {
        'city': 'Другие',
        'Numbers': 326552
      }];
    }

    if (data.time === 'all') {
      return [{
        'city': 'Москва',
        'Numbers': 934272
      }, {
        'city': 'Самара',
        'Numbers': 367470
      }, {
        'city': 'Санкт-Петергбург',
        'Numbers': 366067
      }, {
        'city': 'Краснодар',
        'Numbers': 346590
      }, {
        'city': 'Новосибирск',
        'Numbers': 240533
      }, {
        'city': 'Екатеринбург',
        'Numbers': 188876
      }, {
        'city': 'Другие',
        'Numbers': 3133390
      }]
    }
  }



  if (data.type === 'gender') {

    if (data.time === 'week') {
      return [{
        'gender': 'Мужчины',
        'Numbers': 113126
      }, {
        'gender': 'Женщины',
        'Numbers': 197818
      }];
    }

    if (data.time === 'month') {
      return [{
        'gender': 'Мужчины',
        'Numbers': 195916
      }, {
        'gender': 'Женщины',
        'Numbers': 341969
      }];
    }

    if (data.time === 'all') {
      return [{
        'gender': 'Мужчины',
        'Numbers': 3048815
      }, {
        'gender': 'Женщины',
        'Numbers': 3420014
      }];
    }
  }


  if (data.type === 'years') {

    if (data.time === 'week') {
      return [{
        'years': '18-24',
        'Numbers': 17166
      }, {
        'years': '25-34',
        'Numbers': 168581
      }, {
        'years': '35-44',
        'Numbers': 104133
      }, {
        'years': '45-55',
        'Numbers': 21248
      }, {
        'years': '> 55',
        'Numbers': 23108
      }];
    }

    if (data.time === 'month') {
      return [{
        'years': '18-24',
        'Numbers': 32673
      }, {
        'years': '25-34',
        'Numbers': 296481
      }, {
        'years': '35-44',
        'Numbers': 213632
      }, {
        'years': '45-55',
        'Numbers': 45852
      }, {
        'years': '> 55',
        'Numbers': 48963
      }];
    }

    if (data.time === 'all') {
      return [{
        'years': '18-24',
        'Numbers': 401945
      }, {
        'years': '25-34',
        'Numbers': 2535584
      }, {
        'years': '35-44',
        'Numbers': 2202637
      }, {
        'years': '45-55',
        'Numbers': 590699
      }, {
        'years': '> 55',
        'Numbers': 263313
      }];
    }
  }


}